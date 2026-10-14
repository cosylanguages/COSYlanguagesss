# Ecosystem Audit Report: COSY Languages Ecosystem

## Executive Summary
This document presents the comprehensive audit of the **COSY Languages** ecosystem conducted on **March 10, 2026**. The audit covers component repositories defining the ecosystem architecture: **COSYlanguages** (Central Portal Gateway & Hub), **COSYmanuals** (Restricted Web Textbooks & Curricula), **COSYevents** (Public Speaking Clubs & Multimedia Nights), **COSYgames** (Reusable Minigames Hub), and **COSYtools** (Linguistic Reference & Offline PWA Suite).

> **Historical snapshot:** Findings below describe the repository state on March 10, 2026 and are not current issue reports. Referenced paths and workflows must be checked against the live tree before action; see `docs/ECOSYSTEM_ARCHITECTURE.md` for the current migration map.

---

## 1. Framework, Language, Build System, Package Manager, and Deployment Setup

- **Primary Languages:** JavaScript (ES6+ / Node.js v22), TypeScript (v6.0.3), HTML5, CSS3, Python 3.12.
- **Framework & Architecture:** Static HTML5 / Vanilla JS Web Components / Progressive Web Apps (PWA) / Service Worker offline caching. Zero heavy runtime framework dependency (React/Vue/Angular omitted by design for speed and privacy).
- **Package Manager:** `npm` (v11.11.0) with workspaces configured at repository root (`package.json`) targeting `apps/*` and `shared`.
- **Build System:** Custom Python & Node.js build pipeline scripts:
  - `generate_all_blog_pages.py`: Generates top 100/200 blog guides from vocabulary databases.
  - `build_nouns_dataset.py`: Compiles Greek and Italian noun syntax and government datasets.
  - `scripts/validate-schema.js`: Validates JSON schemas using `ajv`.
  - `project/scripts/audits/link_checker.py`: Validates internal relative URLs.
- **Deployment & CI Setup:**
  - **Main Website Hosting:** GitHub Pages deployed via `.github/workflows/deploy.yml`.
  - **CI Validation:** `.github/workflows/ci.yml` (JSON schema validation, HTML linting, internal link verification).
  - **Standalone Apps & Mobile Builds:** `.github/workflows/build-standalone-apps.yml` packages Capacitor/PWA standalone binaries for `apps/` into `.tar.gz` build artifacts attached to GitHub releases.

---

## 2. Complete Route and Page Inventory

### COSYlanguages (Central Portal & Landing Hub) — 103 HTML Pages
- `/index.html`: Master ecosystem landing page introducing Slow-Tech philosophy and zero-fallback translation design.
- `/about/index.html`: Platform methodology, CEFR framework, and team overview.
- `/privacy.html`: Privacy policy and local data sovereignty statement.
- `/placement-quiz.html`: Client-side CEFR diagnostic placement quiz.
- `/classroom-sync.html`: Live classroom screen sync utility for teachers and students.
- `/404.html`: Custom 404 error page.
- `/blog/index.html`: Educational blog hub.
- `/blog/top-100-a0-a1-[language].html`: Top 100 essential A0-A1 vocabulary guides across 13 languages (13 pages).
- `/blog/top-200-[level]-english.html`: Top 200 vocabulary guides for English A2, B1, B2 (3 pages).
- `/blog/top-100-very-words-english.html`: Top 100 'very' adjective alternatives guide.
- `/languages/index.html`: Languages hub main directory.
- `/languages/{iso}/index.html`: Language portals for 13 supported languages (`en`, `fr`, `it`, `ru`, `el`, `es`, `de`, `pt`, `hy`, `ka`, `tt`, `ba`, `br`).
- `/practice/index.html` & `/practice/hub.html`: Interactive practice hub dashboard and exercise selector.
- `/hybrid/index.html`: Hybrid learning track portal.

### COSYmanuals (Web Textbooks, Curricula, & Reference Grammar) — 3,798 HTML Pages
- `/manuals/index.html`: Master manuals directory.
- `/manuals/{lang}/index.html`: Language-specific manual homepages (13 languages).
- `/manuals/{lang}/grammar/index.html` & `/manuals/{lang}/grammar/a1/topics/*.html`: Structured grammar lesson pages with CCQs, form rules, and example banks.
- `/manuals/{lang}/vocabulary/index.html` & `/manuals/{lang}/vocabulary/topics/*.html`: Monolingual thematic vocabulary manuals.
- `/curriculum/{lang}/{track}/*.html`: Detailed syllabus lesson pages (~3,000 pages across General, Spoken, Travelling, Professional, Relocation, and Exam Prep).
- `/reference-grammar/{lang}/index.html`: Exhaustive linguistic reference grammar topic pages.
- `/communication/{lang}/index.html`: Communicative situation and dialogue manuals.
- `/comparative/index.html`: Cross-linguistic comparative grammar module.

### COSYevents (Speaking Clubs & Event Nights) — 13 HTML Pages
- `/templates/events/index.html`: Events landing page and speaking club index.
- Speaking club session guides: `wonder-session-template.html` (I Couldn't Help But Wonder), `science-session-template.html` (Keeping Up with Science), `mind-session-template.html` (Mind Matters), `debate-session-template.html` (Debatable & Relatable), `celebrate-session-template.html` (Let's Celebrate), `life-session-template.html` (My Life With/Without), `quotes-session-template.html` (The Greatest Quotes).
- Event night session guides: `karaoke-session-template.html`, `long-reads-session-template.html`.

### COSYgames (Interactive Minigames Hub) — 22+ Games (Symlinked via `COSYgames/`)
- `/games/index.html`: Minigames hub directory.
- `/games/scene_match/index.html`: Scene Match interactive spatial environment game.
- Minigames: `cosy_crossword`, `action_hero`, `battle_of_wits`, `critics_corner`, `emoji_odyssey`, `fluency_flow`, `hot_seat`, `100_questions`, `story_chain`, `what_gender_is_it`, `word_linker`.

### COSYtools (Reference Engines & PWAs) — 163 HTML Pages
- `/apps/index.html`: Standalone reference engines directory.
- Verb Conjugators: `fr-conjugeur`, `it-coniugatore`, `ru-spryazhenie`, `el-klisi-rimaton`.
- Gender & Case Trainers: `fr-genre`, `it-genere`, `ru-rod-padezhi`, `el-genos-ptoseis`.
- Regime & Preposition Trainers: `en-verb-prep`, `fr-regime`, `it-reggenza`, `el-syntaxi`.
- Print Studio Utilities: `apps/print-studio/index.html`, `print-boardgame.html`, `print-cards.html`, `print-grammar.html`, `print-zine.html`, `print-box.html`.

---

## 3. Component Inventory

1. **Global Navigation Bar (`#cosy-nav`):** Defined in `js/core/engine.js` and `shared/js/core/engine.js`, dynamically rendering header links based on active user context.
2. **Daily Dose Module (`UI.updateDailyDose`):** Defined in `js/core/ui.js` and `js/data/daily_dose.js`, providing daily facts and idioms across 13 languages based on `dayOfYear % list.length`.
3. **Client-Side i18n Engine:** Defined in `js/i18n/i18n.js`, handling zero-fallback translation mapping via `data-i18n` attributes.
4. **COSY Passport Progress Manager:** Defined in `shared/js/passport.js`, managing non-destructive JSON export/import of user progress across all ecosystem apps.
5. **French Pronunciation Marathon Engine:** Defined in `js/fr-marathon-engine.js`, rendering inline SVG cards, 14-field lesson grids, unit tab navigation, and tracking progress in `localStorage`.
6. **Leitner Spaced Repetition Practice Engine:** Defined in `apps/it-reggenza/js/spaced_repetition.js`, `practice.js`, and `dashboard.js`, featuring 0–5 Leitner box intervals, contraction-aware prepositions, and level progress dashboards.
7. **Scene Match Spatial Overlay Engine:** Defined in `js/games/scene_match.js`, driving 16 A0–A1 scenes with bidirectional door navigation and capital city cultural visual overlays.

---

## 4. Content and Data Inventory

- **Canonical Vocabulary Benchmarks (`data/`):**
  - `a0_a1_benchmark.json`: 24 topics (~1,300 words).
  - `a2_benchmark.json`: 21 topics (~1,400 words).
  - `b1_benchmark.json`: 15 topics (~1,500 words).
  - `vocabulary/_canonical/en/A0-A1_master.json`: Master 1,262-word A0-A1 vocabulary database.
- **Modular Language Vocabulary (`vocabulary/{lang}/{LEVEL}/*.js`):** Modular IIFE JavaScript vocabulary datasets covering CEFR levels A1–C2 across 13 languages.
- **Linguistic Government & Conjugation Databases (`apps/*/data/`):**
  - `apps/el-syntaxi/data/nouns.json`: Accented Greek noun case government dataset.
  - `apps/el-klisi-rimaton/data/verbs.json`: Accented Modern Greek verb paradigms.
  - `apps/it-reggenza/data/*.json`: Italian verb regime and preposizioni articolate dataset.
- **Cross-Reference Search Index (`data/index/{lang}_index.json`):** Unified JSON search indexes cross-referencing grammar, vocabulary, and practice modules for all 13 languages.

---

## 5. Asset Inventory

- **CSS Stylesheets (137 files):** `css/cosy-tokens.css` (master design tokens), `css/base.css`, `css/components.css`, `css/layout.css`, `css/tokens.css`, `css/courses.css`.
- **Image Assets (518 files):** Country flags (`images/flags/*.svg`), UI icons (`images/ui/*.svg`), speaking club logos (`images/logos/speaking clubs/*`), grammar illustration cards (`images/grammar/*.png`), spatial scene backgrounds (`images/scenes/*.jpg`).
- **Audio Assets (37 files):** Ambient background music (`sounds/music/*.mp3`) and interactive reaction sounds (`sounds/reactions/*.mp3`).

---

## 6. Authentication and Access-Control Mechanisms

- **Mechanism:** Client-side local access check using plain-text access codes stored in `data/access/codes.json`.
- **Evaluation:** No server-side authentication exists; access control relies on static client-side password matching.
- **Progress Persistence:** Privacy-first, accountless progress tracking stored entirely in browser `localStorage` and synced via `shared/js/passport.js` (COSY Passport).

---

## 7. External Links and Cross-Repository Links

- Outbound links in `index.html` and `apps/index.html` point to standalone sub-product repositories (`COSYtools`, `COSYgames`, `COSYevents`).
- Cross-app handoff parameters strictly adhere to `docs/url-handoff.md` standard (`?lang=fr&level=B1&topic=travel`).
- Asset links in standalone tools reference pinned raw GitHub URLs (`https://raw.githubusercontent.com/cosylanguages/COSYlanguages/.../css/cosy-tokens.css`).

---

## 8. Duplicate or Overlapping Features

1. **Parallel Grammar Systems in COSYmanuals:** Step-by-step communicative lessons in `manuals/{lang}/grammar/` overlap with exhaustive reference pages in `reference-grammar/{lang}/`.
2. **Duplicate Engine JS File:** Navigation bar engine implemented in both `js/core/engine.js` and `shared/js/core/engine.js`.

---

## 9. Features That Belong in Another Repository

1. **Print Studio (`apps/print-studio/` & `print-*.html`):** Belongs in standalone repository **COSYstudio**.
2. **Premium Courses (`apps/premium-courses/`):** Belongs in standalone repository **COSYcourses**.
3. **Speaking Club Templates (`templates/events/`):** Belongs in standalone repository **COSYevents**.
4. **Interactive Minigames (`js/games/` & `games/`):** Belongs in standalone repository **COSYgames**.

---

## 10. Broken Links, Dead Routes, Missing Assets, Unused Code, and Technical Debt

- **Broken Symlink:** Symlink `games -> COSYgames` in repository root points to non-existent directory `COSYgames`.
- **Missing Relative Links:** `link_checker.py` detected broken relative links in legacy manual templates (e.g., `./placement-quiz.html -> events/search.html` NOT FOUND; `./manuals/yezhadur-brezhoneg/index.html -> ../manuals/brezhoneg-a0-a1.html` NOT FOUND).

---

## 11. Accessibility, Responsive-Design, UX, and Usability Problems

- **Missing `lang` Attribute:** 13 HTML pages missing `lang="..."` attribute on root `<html>` element.
- **Missing Image `alt` Text:** Multiple SVG icons and grammar images in `manuals/` lack descriptive `alt` tags for screen readers.
- **Responsive Layout:** Some print studio canvas elements lack mobile touch responsive scaling.

---

## 12. Security and Privacy Risks

- **Critical Vulnerability:** Plain text hardcoded credentials in `data/access/codes.json` (`ADMIN001`, `TEACH001`, `STUD001`).
- **Privacy Design:** LocalStorage progress tracking complies with strict zero-tracking privacy standards.

---

## 13. SEO and Metadata Problems

- **Missing Title Tags:** 2,108 HTML manual topic pages lack explicit `<title>` tags or use generic placeholders.
- **Missing Meta Descriptions:** Over 2,000 sub-pages lack `<meta name="description">` tags.

---

## 14. Build, Test, Lint, and Deployment Status

- **Schema & Data Validation:** `node scripts/validate-schema.js` passes with 0 errors.
- **Standalone Apps CI:** `build-standalone-apps.yml` verifies JSON integrity across all 12 tools and builds Capacitor mobile artifacts.
- **Link Verification Script:** `python3 project/scripts/audits/link_checker.py` executes successfully.

---

## Itemized Findings Matrix

| ID | Severity | Repository | Path / Reference | Finding Description | Recommended Action | Safe to Automate |
|---|---|---|---|---|---|---|
| SEC-01 | **Critical** | COSYlanguages | `data/access/codes.json` | Hardcoded plain-text access codes in static file. | Remove file from public repo; migrate to client Passport verification. | No |
| LNK-01 | **High** | COSYlanguages | `games` (Root symlink) | Symlink `games -> COSYgames` is broken. | Remove broken symlink or recreate valid relative target. | Yes |
| DUP-01 | **High** | COSYmanuals | `manuals/{lang}/grammar/` vs `reference-grammar/` | Parallel grammar systems duplicate content. | Merge reference grammar tabs into manuals layout. | No |
| ARCH-01 | **High** | COSYlanguages | `apps/print-studio/` & `print-*.html` | Print Studio app misplaced in root website. | Move all print studio builders to dedicated COSYstudio repo. | Yes |
| ARCH-02 | **High** | COSYlanguages | `apps/premium-courses/` | Premium courses app misplaced in main portal. | Move premium courses app to dedicated COSYcourses repo. | Yes |
| DUP-02 | **Medium** | COSYlanguages | `js/core/engine.js` vs `shared/js/core/engine.js` | Duplicate navigation bar engine script. | Deprecate `js/core/engine.js` in favor of `shared/js/core/engine.js`. | Yes |
| LNK-02 | **Medium** | COSYmanuals | Legacy manuals (`manuals/*/*.html`) | Broken relative links to non-existent pages. | Update link paths via search-and-replace script. | Yes |
| SEO-01 | **Medium** | COSYmanuals | `manuals/*/*.html` | Missing `<title>` and `<meta name="description">` tags. | Generate title and description tags dynamically or during build. | Yes |
| A11Y-01 | **Low** | COSYlanguages | `*.html` (13 files) | Missing `lang` attribute on `<html>` tag. | Add `lang="en"` or target language code to `<html>` tags. | Yes |
