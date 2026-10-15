import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('Every post with slug starting with top-10 or top-100 carries Top10Top100 tag', () => {
  const postsDir = path.join(process.cwd(), 'blog', 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.json'));

  const checkedPosts = [];
  for (const file of files) {
    const slug = file.replace('.json', '');
    if (slug.startsWith('top-10') || slug.startsWith('top-100')) {
      const content = JSON.parse(fs.readFileSync(path.join(postsDir, file), 'utf8'));
      const tags = content.tags || [];
      assert.ok(
        tags.includes('Top10Top100'),
        `Post file ${file} (slug: ${slug}) is missing the required 'Top10Top100' tag. Found tags: ${JSON.stringify(tags)}`
      );
      checkedPosts.push(slug);
    }
  }

  assert.ok(checkedPosts.length >= 20, `Expected at least 20 top-10/top-100 post files, found ${checkedPosts.length}`);
  console.log(`Verified ${checkedPosts.length} top-10 and top-100 post files carry 'Top10Top100' tag.`);
});
