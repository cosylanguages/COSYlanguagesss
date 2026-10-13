import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('blog/index.json structure and integrity', () => {
  const indexPath = path.join(__dirname, '..', 'blog', 'index.json');
  assert.ok(fs.existsSync(indexPath), 'blog/index.json should exist');

  const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
  assert.equal(indexData.version, '2.0.0');
  assert.ok(Array.isArray(indexData.desks), 'desks should be an array');
  assert.equal(indexData.desks.length, 10, 'should contain exactly 10 desks');
  assert.ok(Array.isArray(indexData.issues), 'issues should be an array');
  assert.ok(Array.isArray(indexData.posts), 'posts should be an array');
  assert.ok(indexData.posts.length > 0, 'posts array should not be empty');

  // Verify migrated reference post is present in index
  const referencePost = indexData.posts.find(p => p.slug === 'welcome-to-cosy-blog');
  assert.ok(referencePost, 'welcome-to-cosy-blog post should be present in index');
  assert.equal(referencePost.desk, 'Front Page');
  assert.equal(referencePost.format, 'essay');

  // Verify guides from guides.json are included in index
  const guidePost = indexData.posts.find(p => p.slug === 'top-100-a0-a1-english');
  assert.ok(guidePost, 'guide post top-100-a0-a1-english should be present in index');
  assert.equal(guidePost.desk, 'Long Reads');
});
