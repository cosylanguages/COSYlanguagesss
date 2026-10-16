import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    filePath = f"file://{os.path.abspath('languages/en/index.html')}"
    page.goto(filePath)
    page.wait_for_timeout(1000)

    # Scroll through the sections using jump links inside sticky header
    jump_links = page.locator(".sd-jump-link")
    if jump_links.count() > 0:
        jump_links.nth(0).click() # Learn
        page.wait_for_timeout(1000)
        jump_links.nth(1).click() # Practice free
        page.wait_for_timeout(1000)
        jump_links.nth(2).click() # Explore English
        page.wait_for_timeout(1000)

    # Click Explore English tabs
    culture_btn = page.get_by_role("button", name="💊 Culture & Insights")
    if culture_btn.is_visible():
        culture_btn.click()
        page.wait_for_timeout(1000)

    daily_btn = page.get_by_role("button", name="🛒 Daily Life")
    if daily_btn.is_visible():
        daily_btn.click()
        page.wait_for_timeout(1000)

    page.screenshot(path="verification/verification_final.png", full_page=True)
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("verification/videos", exist_ok=True)
    os.makedirs("verification/screenshots", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
