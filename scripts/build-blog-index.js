/**
 * scripts/build-blog-index.js
 * Compiles blog/index.json from JSON source files and guides.json.
 */

const fs = require('fs');
const path = require('path');
const { generatePodcastRss } = require('./generate-podcast-rss.js');

const BLOG_DIR = path.join(__dirname, '..', 'blog');
const POSTS_DIR = path.join(BLOG_DIR, 'posts');
const GUIDES_FILE = path.join(BLOG_DIR, 'guides.json');
const INDEX_JSON = path.join(BLOG_DIR, 'index.json');

const DESKS_CATALOG = [
  { key: 'Front Page', i18n_key: 'desk_front_page', icon: '📰', order: 1 },
  { key: 'Words', i18n_key: 'desk_words', icon: '🔤', order: 2 },
  { key: 'Grammar Made Cosy', i18n_key: 'desk_grammar_made_cosy', icon: '📐', order: 3 },
  { key: 'Say It', i18n_key: 'desk_say_it', icon: '🗣️', order: 4 },
  { key: 'Culture & Quotes', i18n_key: 'desk_culture_quotes', icon: '🎭', order: 5 },
  { key: 'Long Reads', i18n_key: 'desk_long_reads', icon: '📖', order: 6 },
  { key: 'Cosy Events', i18n_key: 'desk_cosy_events', icon: '🎉', order: 7 },
  { key: 'The Podcast', i18n_key: 'desk_the_podcast', icon: '🎙️', order: 8 },
  { key: 'Back Issues', i18n_key: 'desk_back_issues', icon: '🗄️', order: 9 },
  { key: 'Reflections', i18n_key: 'desk_reflections', icon: '💭', order: 10 }
];

function buildBlogIndex() {
  const jsonFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.json'));
  const posts = jsonFiles.map(f => JSON.parse(fs.readFileSync(path.join(POSTS_DIR, f), 'utf-8')));

  let guides = [];
  if (fs.existsSync(GUIDES_FILE)) {
    guides = JSON.parse(fs.readFileSync(GUIDES_FILE, 'utf-8'));
  }

  const issuesSet = new Map();
  posts.forEach(p => {
    if (p.issue?.number) {
      issuesSet.set(p.issue.number, { number: p.issue.number, title: p.issue.title });
    }
  });

  const guidesForIndex = guides.map(g => ({
    id: `guide-${g.slug}`,
    slug: g.slug,
    language: 'en',
    desk: 'Long Reads',
    format: 'essay',
    level: g.cefr_level || 'A0–A1 / A2',
    issue: {
      number: g.issue_volume || 'Vol. 2026 — August Issue',
      title: g.issue_title || 'Get ready for school'
    },
    date: g.date || '2026-08-01',
    title: g.title,
    kicker: 'GUIDE',
    dek: g.summary || '',
    tags: g.tags || [],
    readingTime: g.reading_time || 10,
    podcast: { episode: 1, audioUrl: null }
  }));

  const allIndexPosts = [...posts, ...guidesForIndex].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const existingGeneratedAt = fs.existsSync(INDEX_JSON)
    ? JSON.parse(fs.readFileSync(INDEX_JSON, 'utf-8')).generatedAt
    : new Date().toISOString();

  const indexOutput = {
    version: '2.0.0',
    generatedAt: existingGeneratedAt || new Date().toISOString(),
    stats: {
      totalPosts: allIndexPosts.length,
      totalDesks: DESKS_CATALOG.length,
      totalIssues: issuesSet.size
    },
    desks: DESKS_CATALOG,
    issues: Array.from(issuesSet.values()),
    posts: allIndexPosts
  };

  fs.writeFileSync(INDEX_JSON, JSON.stringify(indexOutput, null, 2), 'utf-8');
  console.log(`✅ Successfully generated blog/index.json (${allIndexPosts.length} total posts/guides).`);

  generatePodcastRss();
}

if (require.main === module) {
  buildBlogIndex();
}

module.exports = { buildBlogIndex };
