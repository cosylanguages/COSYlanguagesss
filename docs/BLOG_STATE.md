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

The following remote feature branches modify `blog/` assets:

1. **Integrated / Main-Aligned Branches**:
   - `origin/feat/blog-magazine-flipbook-newsstand-2961654914032171879`
   - `origin/feature/blog-cosymagazine-redesign-15012565829454879171`
   - `origin/feature/blog-cover-hero-redesign-15046963742816532331`
   - `origin/feature/blog-newspaper-vogue-styling-7977824811727220811`
   - `origin/blog-procedural-covers-13928725445509813372`
   - `origin/blog-json-source-of-truth-7546565836593026302`
   - `origin/stage-mode-visual-canvas-10980692283050967232`
2. **Superseded Blogger Restyle Branches**:
   - `origin/feat/blog-index-redesign-broadsheet-blogger-3356564148501542403`
   - `origin/feat/classic-blogger-restyle-13473923240625020648`
   - `origin/feat/blog-blogger-vogue-redesign-4927632515806823024`
3. **Pending Content Branch**:
   - `origin/feat/top-100-english-blog-page-15674311753884324214` (Contains English Top 100 article updates needing rebase into JSON schema format).

---

## 3. Vocabulary Duplication Audit: `vocabulary/` vs `COSYdata`

Local directory `vocabulary/` contains legacy `.js` vocabulary definition files across 14 language folders (`ba`, `br`, `de`, `el`, `en`, `es`, `fr`, `hy`, `it`, `ka`, `pt`, `ru`, `tt`, `cv`).

### Duplication & Centralization Analysis:
- **Central Source of Truth**: Central dictionary records reside in `COSYdata` (`schemas/themes.json` and language `themes-index.json`).
- **Engine Fetching**: `js/core/engine.js` and `practice/hub.js` fetch central theme data directly via `window.COSY.loadLanguageData`.
- **Remaining Legacy Local Files**: 1,198 `.js` files remain inside local `vocabulary/`.
- **Action**: These legacy files are scheduled for complete removal upon merging PR #1430 (`origin/migrate-vocab-loading-cosydata-3301091516354408821`), eliminating dual-source drift.

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
