# COSYlanguages Blog Plan (`BLOG_PLAN.md`)

This document outlines the master strategy and operational plan for the COSYlanguages blog publishing system based on the decision to maintain the **magazine direction** (Vogue/Gazette spreads, flipbook, Stage Mode, and procedural covers) and drop the Blogger-style restyle. The blog is strictly fully public.

---

## 1. Target Blog Architecture on `main`

### 1.1 Architecture & Core Principles
- **Public Newsstand**: The blog index at `blog/index.html` functions as a Vogue Gazette magazine newsstand showcasing monthly issues (August, September, October 2026), editorial desks, and topic filters.
- **Single Source of Truth**: All blog posts are authored exclusively as schema-validated JSON files stored in `blog/posts/*.json` adhering to `blog/SCHEMA.md`.
- **Zero-Code Publishing**: Adding a new blog post requires **zero manual code changes** to index files, HTML templates, or JavaScript engines. Adding a valid JSON file to `blog/posts/` and running the build command automatically integrates the article into the newsstand, builds the standalone HTML page, generates procedural SVG cover art, and updates the podcast RSS feed.
- **Build Pipeline**: Driven by `scripts/build-blog.js` (`npm run build:blog`):
  1. Validates post schema via `scripts/validate-blog-schema.js`.
  2. Renders standalone HTML pages to `blog/{slug}.html`.
  3. Compiles `blog/posts.json` and `blog/index.json`.
  4. Generates SVG covers in `blog/og/{slug}.svg` via `scripts/generate-blog-art.js`.
  5. Updates `blog/podcast.xml` via `scripts/generate-podcast-rss.js`.
- **Documentation**: Authoring specifications, field references, and a worked JSON example are documented in `docs/BLOG_AUTHORING.md`.

---

## 2. "Top 10 / Top 100" Category / Label Specification

To highlight high-volume foundational vocabulary and verb list resources, the blog index (`blog/index.html` & `blog/index.json`) incorporates a dedicated **"Top 10 / Top 100"** topic category filter tag (`Top10Top100`).

### 2.1 Filter Integration
- **Tag Identifier**: `"Top10Top100"`
- **Display Label**: `"Top 10 / Top 100"` (localized natively via `tag.top10top100` across all 13 supported languages).
- **Placement**: Positioned as the **FIRST** topic tag filter in the newsstand category bar.
- **Index Data**: Mapped in `blog/index.json` and `blog/posts.json` under `tags: ["Top10Top100", ...]`.

### 2.2 Inventory of Top 10 / Top 100 Posts
The following existing canonical JSON post resources carry the `Top10Top100` tag:

1. **Top 10 Verbs Master Guide**:
   - `blog/posts/top-10-verbs.json` (`top-10-verbs.html`): *Top 10 Essential English Verbs Master Guide*.
2. **Top 100 A0–A1 Vocabulary Series** (14 Language Variant Files):
   - `blog/posts/top-100-a0-a1.json` (`top-100-a0-a1.html`) – Base 14-Language Master
   - `blog/posts/top-100-a0-a1-english.json` (`top-100-a0-a1-english.html`)
   - `blog/posts/top-100-a0-a1-french.json` (`top-100-a0-a1-french.html`)
   - `blog/posts/top-100-a0-a1-italian.json` (`top-100-a0-a1-italian.html`)
   - `blog/posts/top-100-a0-a1-russian.json` (`top-100-a0-a1-russian.html`)
   - `blog/posts/top-100-a0-a1-greek.json` (`top-100-a0-a1-greek.html`)
   - `blog/posts/top-100-a0-a1-spanish.json` (`top-100-a0-a1-spanish.html`)
   - `blog/posts/top-100-a0-a1-german.json` (`top-100-a0-a1-german.html`)
   - `blog/posts/top-100-a0-a1-portuguese.json` (`top-100-a0-a1-portuguese.html`)
   - `blog/posts/top-100-a0-a1-armenian.json` (`top-100-a0-a1-armenian.html`)
   - `blog/posts/top-100-a0-a1-georgian.json` (`top-100-a0-a1-georgian.html`)
   - `blog/posts/top-100-a0-a1-tatar.json` (`top-100-a0-a1-tatar.html`)
   - `blog/posts/top-100-a0-a1-bashkir.json` (`top-100-a0-a1-bashkir.html`)
   - `blog/posts/top-100-a0-a1-breton.json` (`top-100-a0-a1-breton.html`)
3. **Top 10 Verb Synonyms (Intermediate Plateau Series)** (5 Language Variant Files):
   - `blog/posts/top-10-verb-synonyms-intermediate-plateau.json` (`top-10-verb-synonyms-intermediate-plateau.html`) – English
   - `blog/posts/top-10-verb-synonyms-intermediate-plateau-fr.json` (`top-10-verb-synonyms-intermediate-plateau-fr.html`) – French
   - `blog/posts/top-10-verb-synonyms-intermediate-plateau-it.json` (`top-10-verb-synonyms-intermediate-plateau-it.html`) – Italian
   - `blog/posts/top-10-verb-synonyms-intermediate-plateau-ru.json` (`top-10-verb-synonyms-intermediate-plateau-ru.html`) – Russian
   - `blog/posts/top-10-verb-synonyms-intermediate-plateau-el.json` (`top-10-verb-synonyms-intermediate-plateau-el.html`) – Greek

---

## 3. Open Pull Request Triage

See docs/PR_TRIAGE.md (current).

---

## 4. Audit of Gated-Looking & Non-Public Assets in `blog/`

An audit was performed across the `blog/` directory to evaluate assets that might appear gated or private:

1. **Audio Recording Scripts** (`blog/audio-scripts/`):
   - `ENGLISH_RECORDING_SCRIPTS.md`
   - `FRENCH_RECORDING_SCRIPTS.md`
   - `RUSSIAN_RECORDING_SCRIPTS.md`
   - *Purpose*: Provides page-by-page voice-over script directions, tone notes, and read-aloud texts for recording podcast episodes.
2. **Teleprompter Script Controller** (`blog/js/stage/script.js` & `?script=1`):
   - *Purpose*: Renders spoken narration scripts (`say` fields) with speed controls, mirror mode, and duration estimates.
3. **Podcast RSS Feed & Catalog** (`blog/podcast.xml` & `blog/podcast.html`):
   - *Purpose*: Delivers open iTunes RSS 2.0 feed and episode catalog for public streaming.

### Decision
**All assets in `blog/` SHOULD STAY STRICTLY PUBLIC.**
- The blog is 100% public.
- Audio scripts and teleprompter modes serve as accessibility features, pronunciation guides, and open learning aids for students.
- No paywalls, gated credentials, or restricted content exist within `blog/`.

---

## 5. Strict i18n & Language Coverage Audit

In accordance with the **Strict No-Translation Fallback Principle**, UI strings and content MUST be authored natively in the target language without falling back to English.

### 5.1 UI Dictionary Key Audit (`js/i18n/*.json`)
An exact key comparison was performed across all 13 supported language dictionaries (`ba`, `br`, `de`, `el`, `en`, `es`, `fr`, `hy`, `it`, `ka`, `pt`, `ru`, `tt`) against `en.json`.

- **Fully Complete Core Blog Dictionaries**: All 42 `blog.*` UI keys (`auto_scroll`, `script_mode`, `stage_mode`, `read_in`, `celta_focus_title`, etc.) are 100% complete across all 13 language files.
- **Editorial Desk Keys (`desk.*`) Audit**:
  - `en`, `fr`, `it`, `ru`, `el`, `es`: 10/10 keys present.
  - `ba`, `br`, `de`, `hy`, `ka`, `pt`, `tt`: Exactly 1 key missing (`desk.reflections`).
  - *Resolution*: The `desk.reflections` key has been added natively across all 7 language dictionaries without English fallbacks.

### 5.2 Content Post Language Coverage (`blog/posts/*.json`)
- **Primary Languages with Full Article Catalog**: English (`en`), French (`fr`), Italian (`it`), Russian (`ru`), Greek (`el`).
- **Languages with Top 100 Benchmark Articles Only**: Spanish (`es`), German (`de`), Portuguese (`pt`), Armenian (`hy`), Georgian (`ka`), Tatar (`tt`), Bashkir (`ba`), Breton (`br`).
- *Requirement*: Under the No-Translation Fallback directive, when a user views the blog in German or Portuguese, the index filters to native articles available in that language (`language: "de"` or `language: "pt"`) rather than showing English text.
