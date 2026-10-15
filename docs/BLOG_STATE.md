# Current Blog Architecture & Dataset Audit (`docs/BLOG_STATE.md`)

This document details the exact state of `blog/` on `main` today, lists branches that modify the blog, documents remaining dataset duplications between `vocabulary/` and `COSYdata`, and audits `practice/data` for content that belongs in `COSYtools` or `COSYdata`.

---

## 1. Current State of `blog/` on `main`

The blog on `main` is **100% public** and built on a **Vogue Gazette magazine architecture**:

1. **Magazine Newsstand Index (`blog/index.html`)**:
   - Displays monthly magazine issues (August 2026 "Get ready for school", September 2026 "Me vs Intermediate Plateau", October 2026 "JY DM's birthday & His favs").
   - Filterable by Issue, Editorial Desk, Topic Tag (including "Top 10 / Top 100"), and Search Query via `applyBlogFilters()` in `blog/index.html`.
2. **3D Magazine Flipbook Spreads**:
   - Implemented via `js/pages/flipbook.js`, `css/blog.css`, and `blog/css/magazine-templates.css`.
   - Features 3D page turns (`perspective: 1400px`, `rotateY`), focal-eye lens section zoom (`.zoomable-section.focal-zoomed`), and expandable Founder presentation cards (`.founder-presentation-card`).
3. **Stage Mode & Teleprompter**:
   - **Stage Mode (`?stage=1`)**: Vanilla JS presentation engine (`blog/js/stage/` camera, timeline, stage) enabling 16:9 animated pan/zoom slides and lower-third captions.
   - **Teleprompter Script Mode (`?script=1`)**: Driven by `ScriptController` in `blog/js/stage/script.js` for spoken narration (`say` fields), mirror mode, and text export.
4. **Single-Source JSON Post Pipeline**:
   - Single canonical source of truth in `blog/posts/*.json` (43 post files).
   - Compiled by `scripts/build-blog.js` (`npm run build:blog`):
     - Renders static HTML post pages in `blog/{slug}.html`.
     - Compiles `blog/posts.json` and `blog/index.json`.
     - Generates procedural SVG covers in `blog/og/{slug}.svg` via `scripts/generate-blog-art.js`.
     - Updates the open podcast RSS feed in `blog/podcast.xml`.

---

## 2. Remote Branches Modifying `blog/`

The following 12 open PR branches modify `blog/` assets:

1. **`origin/docs/blog-plan-and-authoring-guide-3369901012941800048` (PR #1568)**:
   - Adds master `BLOG_PLAN.md` and `docs/BLOG_AUTHORING.md` strategy documentation.
2. **`origin/jules/newsstand-flipbook-reader-verification-3631324704500175417` (PR #1559)**:
   - Contains Newsstand and Flipbook reader verification fixes (integrated on `main`).
3. **`origin/fix/blog-build-workflow-triggers-and-stale-ci-guard-15788587198201346850` (PR #1554)**:
   - Updates workflow triggers and stale CI guards for blog builds.
4. **`origin/blog-json-source-of-truth-7546565836593026302` (PR #1540)**:
   - Initial JSON source-of-truth migration (integrated on `main`).
5. **`origin/verify-blog-magazine-issues-13247521282894244804` (PR #1528)**:
   - Issue volume verification script (integrated on `main`).
6. **`origin/feature/blog-cosymagazine-redesign-15012565829454879171` (PR #1526)**:
   - Vogue design tokens and template integration (integrated on `main`).
7. **`origin/feature/blog-newspaper-vogue-styling-7977824811727220811` (PR #1510)**:
   - Broadsheet Gazette styling (integrated on `main`).
8. **`origin/feature/flipbook-blog-magazine-798519488841142537` (PR #1508)**:
   - 3D flipbook magazine reader implementation (integrated on `main`).
9. **`origin/add-intermediate-plateau-blog-posts-4438663174452280948` (PR #1492)**:
   - Intermediate Plateau post additions (requires rebase to `blog/posts/*.json`).
10. **`origin/feat/blog-blogger-vogue-redesign-4927632515806823024` (PR #1477)**:
    - Attempted Blogger-style redesign (superseded / dropped).
11. **`origin/feat/unified-top-100-a0-a1-blog-master-guide-10189015015062468556` (PR #1450)**:
    - Consolidated Top 100 A0-A1 master guides (requires rebase).
12. **`origin/feat/top-10-verbs-be-phrase-table-update-15757672762705553573` (PR #1439)**:
    - Top 10 Verbs 'to be' phrase table update (requires rebase to `top-10-verbs.json`).

---

## 3. Vocabulary Duplication Audit: `vocabulary/` vs `COSYdata`

Local directory `vocabulary/` contains legacy `.js` vocabulary definition files across 14 language folders (`ba`, `br`, `de`, `el`, `en`, `es`, `fr`, `hy`, `it`, `ka`, `pt`, `ru`, `tt`, `cv`).

### Duplication & Centralization Analysis:
- **Central Source of Truth**: Central dictionary records reside in `COSYdata` (`schemas/themes.json` and language `themes-index.json`).
- **Engine Fetching**: `js/core/engine.js` and `practice/hub.js` fetch central theme data directly via `window.COSY.loadLanguageData`.
- **Remaining Legacy Local Files**: 1,198 `.js` files remain inside local `vocabulary/`.
- **Deletion Safety Guard**: PR #1430 (`jules-vocab-cosydata-comparison-5656072142944109703`) proposes deleting 488 local `vocabulary/` files. **Merge Recommendation**: Keep PR #1430 open until central `COSYdata` is verified to contain complete B1–C2 entries for secondary languages (`ba`, `br`, `cv`, `de`, `es`, `hy`, `ka`, `pt`, `tt`), preventing vocabulary loss.

---

## 4. `practice/data` Domain Assignment Audit

Files currently residing under `practice/data/` were audited to determine proper domain placement across ecosystem repositories:

### 4.1 Datasets Belonging in `COSYtools` (Grammar & Confusion Rules)
The following grammar dataset files in `practice/data/grammar/` belong in **`COSYtools`** (the central verb/grammar reference and practice engine repository):
- `practice/data/grammar/en/{level}/{topic}.js` (61 English grammar practice files).
- `practice/data/grammar/fr/{level}/{topic}.js` (27 French grammar practice files).
- `practice/data/grammar/fr/c1/avant-que-vs-apres-que.js` and related C1 contrast sets.
- `practice/data/grammar/a2/past-simple-vs-present-perfect.js` and related verb tense contrast pairs.

### 4.2 Datasets Belonging in `COSYdata` (Vocabulary Confusion Pairs & Word Pools)
The following vocabulary datasets in `practice/data/` belong in **`COSYdata`** (the central canonical dictionary and vocabulary pool repository):
- `practice/data/vocab_confusion_pairs.js` (`window.COSY_VOCAB_CONFUSION_PAIRS` covering CEFR A0–C2 vocabulary confusion topics).
- `practice/data/vocabulary/{level}/{topic}.js` (275 English vocabulary confusion datasets).
- `practice/data/vocabulary/fr/{level}/{topic}.js` (108 French vocabulary confusion datasets).
- Individual semantic contrast datasets:
  - `practice/data/vocabulary/c1/say-vs-state.js`
  - `practice/data/vocabulary/c1/possible-vs-probable-vs-likely.js`
  - `practice/data/vocabulary/c1/surprised-vs-shocked-vs-amazed.js`
  - `practice/data/vocabulary/c2/nation-vs-state.js`
  - `practice/data/vocabulary/c2/understand-vs-comprehend.js`
