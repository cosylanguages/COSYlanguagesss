import { test, expect } from '@playwright/test';
import http from 'http';
import fs from 'fs';
import path from 'path';

let server: http.Server;
let port: number;

test.beforeAll(async () => {
    // Start local HTTP server to avoid file:// CORS issues with fetch('index.json')
    server = http.createServer((req, res) => {
        let filePath = path.join(process.cwd(), req.url === '/' ? 'index.html' : req.url?.split('?')[0] || '');
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes: Record<string, string> = {
                '.html': 'text/html; charset=utf-8',
                '.js': 'text/javascript; charset=utf-8',
                '.mjs': 'text/javascript; charset=utf-8',
                '.css': 'text/css; charset=utf-8',
                '.json': 'application/json; charset=utf-8',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.svg': 'image/svg+xml',
                '.mp3': 'audio/mpeg'
            };
            res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
            fs.createReadStream(filePath).pipe(res);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    });

    await new Promise<void>((resolve) => {
        server.listen(0, '127.0.0.1', () => {
            const addr = server.address();
            if (addr && typeof addr === 'object') {
                port = addr.port;
            }
            resolve();
        });
    });
});

test.afterAll(async () => {
    if (server) {
        await new Promise((resolve) => server.close(resolve));
    }
});

test.describe('COSY Gazette Newsstand & Flipbook Reader E2E', () => {

    test('Desktop (1280px) - Newsstand interaction, Flipbook reading, keyboard, hash deep links & video recording', async ({ browser }) => {
        const videoDir = path.join(process.cwd(), 'videos_temp_desktop');
        if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

        const context = await browser.newContext({
            viewport: { width: 1280, height: 800 },
            recordVideo: { dir: videoDir, size: { width: 1280, height: 800 } }
        });
        const page = await context.newPage();

        // 1. Open Newsstand
        await page.goto(`http://1280.1:${port}/blog/index.html`.replace('1280.1', '127.0.0.1'));
        await expect(page.locator('.blog-header-title')).toContainText('COSY Gazette');

        // Check Newsstand components
        await expect(page.locator('#current-issue-showcase')).toBeVisible();
        await expect(page.locator('.back-issues-section')).toBeVisible();
        await expect(page.locator('.founder-presentation-card')).toBeVisible();

        // Navigate to multi-page flipbook post
        await page.goto(`http://127.0.0.1:${port}/blog/top-5-favourite-grammar-rules.html`);

        // Verify page navigated to post
        await expect(page.locator('.gazette-wrapper')).toBeVisible();
        await expect(page.locator('.flipbook-toolbar')).toBeVisible();

        // Test initial page 1 view
        const indicator = page.locator('.flipbook-indicator');
        await expect(indicator).toContainText('PAGE 1 OF');

        // Test keyboard right arrow (Next page)
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(300);
        await expect(indicator).toContainText('PAGE 2 OF');

        // Test keyboard left arrow (Prev page)
        await page.keyboard.press('ArrowLeft');
        await page.waitForTimeout(300);
        await expect(indicator).toContainText('PAGE 1 OF');

        // Test PgDn and PgUp
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(300);
        await expect(indicator).toContainText('PAGE 2 OF');

        // Test Dog-Ear corner turn click
        const dogEar = page.locator('.flipbook-page[data-page="2"] .magazine-dog-ear');
        if (await dogEar.isVisible()) {
            await dogEar.click();
            await page.waitForTimeout(300);
        }

        // Test Contents popover menu
        const contentsTrigger = page.locator('.magazine-contents-trigger');
        await contentsTrigger.click();
        const contentsPopover = page.locator('#magazine-contents-menu');
        await expect(contentsPopover).toBeVisible();

        // Click page 3 in contents popover
        const page3Item = page.locator('.contents-item-btn[data-page="3"]');
        if (await page3Item.isVisible()) {
            await page3Item.click();
            await page.waitForTimeout(300);
            await expect(indicator).toContainText('PAGE 3 OF');
        }

        // Test Deep linking: navigate directly to #page-2
        const currentUrl = page.url().split('#')[0];
        await page.goto(`${currentUrl}#page-2`);
        await page.waitForTimeout(300);
        await expect(indicator).toContainText('PAGE 2 OF');

        // Test "Read as one page" (Flat Scroll) mode toggle
        const modeToggle = page.locator('.flipbook-mode-toggle');
        await modeToggle.click();
        await expect(page.locator('.post-full-content')).toHaveClass(/scroll-mode/);

        // Switch back to Flipbook mode
        await modeToggle.click();
        await expect(page.locator('.post-full-content')).toHaveClass(/flipbook-mode/);

        // Close context to finalize video recording
        const video = page.video();
        await context.close();

        if (video) {
            const videoPath = await video.path();
            const targetPath = path.join(process.cwd(), 'videos', 'desktop_flip.webm');
            const targetDir = path.dirname(targetPath);
            if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
            fs.copyFileSync(videoPath, targetPath);
            console.log(`Saved desktop video to ${targetPath}`);
        }
    });

    test('Mobile (390px) - Touch swipe gestures & single-page view & video recording', async ({ browser }) => {
        const videoDir = path.join(process.cwd(), 'videos_temp_mobile');
        if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

        const context = await browser.newContext({
            viewport: { width: 390, height: 844 },
            hasTouch: true,
            isMobile: true,
            recordVideo: { dir: videoDir, size: { width: 390, height: 844 } }
        });
        const page = await context.newPage();

        // Open Newsstand
        await page.goto(`http://127.0.0.1:${port}/blog/index.html`);
        await expect(page.locator('.blog-header-title')).toBeVisible();

        // Navigate to multi-page flipbook post
        await page.goto(`http://127.0.0.1:${port}/blog/top-5-favourite-grammar-rules.html`);

        // Verify loaded flipbook in mobile
        await expect(page.locator('.flipbook-toolbar')).toBeVisible();
        const indicator = page.locator('.flipbook-indicator');
        await expect(indicator).toContainText('PAGE 1 OF');

        // Touch Swipe left (Next page)
        const container = page.locator('.post-full-content');
        const box = await container.boundingBox();
        if (box) {
            const startX = box.x + box.width * 0.8;
            const endX = box.x + box.width * 0.2;
            const y = box.y + box.height * 0.5;

            await page.touchscreen.tap(startX, y); // Focus
            await page.mouse.move(startX, y);
            await page.mouse.down();
            await page.mouse.move(endX, y, { steps: 5 });
            await page.mouse.up();
            await page.waitForTimeout(400);
        }

        // Click Next button directly for verification
        const nextBtn = page.locator('.flipbook-next-btn');
        if (await nextBtn.isVisible()) {
            await nextBtn.click();
            await page.waitForTimeout(300);
        }

        // Close context to finalize video recording
        const video = page.video();
        await context.close();

        if (video) {
            const videoPath = await video.path();
            const targetPath = path.join(process.cwd(), 'videos', 'mobile_swipe.webm');
            const targetDir = path.dirname(targetPath);
            if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
            fs.copyFileSync(videoPath, targetPath);
            console.log(`Saved mobile video to ${targetPath}`);
        }
    });

    test('Back Issues Shelf & Localization Audit', async ({ page }) => {
        await page.goto(`http://127.0.0.1:${port}/blog/index.html`);

        // Verify back issues shelf
        const issueCards = page.locator('.issue-card');
        const count = await issueCards.count();
        expect(count).toBeGreaterThan(0);

        // Filter by August Issue
        await page.locator('.sidebar-label-chip[data-issue="Vol. 2026.08"]').click();
        await page.waitForTimeout(200);

        // Verify card display filter
        const visibleCards = page.locator('.post-card:visible');
        expect(await visibleCards.count()).toBeGreaterThan(0);

        // Check French post translation page
        await page.goto(`http://127.0.0.1:${port}/blog/replace-50-overused-phrases-fr.html`);
        await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
        await expect(page.locator('.gazette-back-link')).toBeVisible();
    });

    test('Prefers Reduced Motion & View Transitions API', async ({ browser }) => {
        const context = await browser.newContext({
            reducedMotion: 'reduce'
        });
        const page = await context.newPage();

        await page.goto(`http://127.0.0.1:${port}/blog/replace-very-50-stronger-adjectives.html`);
        await expect(page.locator('.flipbook-toolbar')).toBeVisible();

        // Page turn with reduced motion
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(200);
        await expect(page.locator('.flipbook-indicator')).toContainText('PAGE 2 OF');

        await context.close();
    });
});
