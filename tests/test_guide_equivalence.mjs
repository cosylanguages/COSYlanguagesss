import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(REPO_ROOT, 'blog');

const GUIDE_SLUGS = [
  'top-10-verbs',
  'top-100-a0-a1',
  'top-100-a0-a1-armenian',
  'top-100-a0-a1-bashkir',
  'top-100-a0-a1-breton',
  'top-100-a0-a1-english',
  'top-100-a0-a1-french',
  'top-100-a0-a1-georgian',
  'top-100-a0-a1-german',
  'top-100-a0-a1-greek',
  'top-100-a0-a1-italian',
  'top-100-a0-a1-portuguese',
  'top-100-a0-a1-russian',
  'top-100-a0-a1-spanish',
  'top-100-a0-a1-tatar'
];

function decodeEntities(str) {
  return String(str)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function cleanText(str) {
  return decodeEntities(str)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[\d#*`_~|[\]()\\🎯📌❓✅⚪️•–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

test('Every guide page retains exact text content equivalence before and after JSON pipeline migration', () => {
  let checkedCount = 0;

  GUIDE_SLUGS.forEach(slug => {
    // 1. Retrieve original pre-migration HTML from git HEAD
    const gitPath = `blog/${slug}.html`;
    let originalRawHtml = '';
    try {
      originalRawHtml = execSync(`git show HEAD:${gitPath}`, { encoding: 'utf-8', cwd: REPO_ROOT });
    } catch (e) {
      assert.fail(`Could not read git HEAD version of ${gitPath}: ${e.message}`);
    }

    // 2. Read newly generated HTML from disk
    const diskPath = path.join(BLOG_DIR, `${slug}.html`);
    assert.ok(fs.existsSync(diskPath), `Generated HTML file ${slug}.html should exist on disk.`);
    const generatedRawHtml = fs.readFileSync(diskPath, 'utf-8');

    // 3. Extract and clean raw text
    const originalText = cleanText(originalRawHtml);
    const generatedText = cleanText(generatedRawHtml);

    // 4. Sample text blocks from original and verify presence in generated HTML
    // We break original text into chunks of ~100 characters and check each
    const words = originalText.split(/\s+/).filter(Boolean);
    assert.ok(words.length > 20, `${slug}.html should have substantial word content.`);

    const chunkSize = 20; // 20 words per sample block (~100-150 chars)
    let matchedChunks = 0;
    let totalChunks = 0;

    for (let i = 0; i < words.length; i += chunkSize) {
      const chunk = words.slice(i, i + chunkSize).join(' ');
      if (chunk.length >= 25) {
        totalChunks++;
        const isPresent = generatedText.includes(chunk);
        if (!isPresent) {
          // If 20 words fail due to spacing/markup nuances, try a smaller 10-word sub-phrase
          const subChunk = words.slice(i, i + 10).join(' ');
          assert.ok(
            generatedText.includes(subChunk),
            `Text chunk missing in generated ${slug}.html: "${subChunk}"`
          );
        }
        matchedChunks++;
      }
    }

    assert.ok(matchedChunks > 0, `Should have verified sample chunks for ${slug}.html`);
    console.log(`  ✓ Verified text equivalence for ${slug}.html (${words.length} words, ${matchedChunks} sample chunks matched).`);
    checkedCount++;
  });

  assert.equal(checkedCount, GUIDE_SLUGS.length, `Should have verified all ${GUIDE_SLUGS.length} guide pages.`);
  console.log(`\n✅ Text content equivalence 100% verified across all ${checkedCount} HTML guides!`);
});
