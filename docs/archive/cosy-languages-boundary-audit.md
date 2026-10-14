# COSYlanguages Repository Boundary Audit Report

## 1. Executive Summary & Mandate

### Executive Summary
This document presents the comprehensive boundary audit for the **COSYlanguages** repository (`https://github.com/cosylanguages/COSYlanguages`). As the ecosystem has grown, `COSYlanguages` has accumulated legacy web textbooks, detailed multi-level syllabi, standalone minigame drivers, event templates, and contract-specific assets.

This audit evaluates all **6,982 files and artifacts** currently residing in the codebase against the intended responsibility of `COSYlanguages` as the **public entry point, central landing hub, and open textbook gateway**.

### Intended Scope of COSYlanguages
As defined by the ecosystem architecture, `COSYlanguages` must contain:
1. **Homepage and public brand experience:** Landing page (`index.html`), about page (`about/`), methodology overview, and Slow-Tech privacy declaration (`privacy.html`).
2. **Free practice entry points:** Practice hub dashboard (`practice/`), CEFR diagnostic placement quiz (`placement-quiz.html`), and free portal routes (`apps/free-portal/`).
3. **Interactive Price Calculator:** Client-side lesson & pack price calculator on `index.html` and supporting data (`data/pricing/`).
4. **General learning roadmaps:** Language portals for 13 supported languages (`languages/{iso}/index.html`), level roadmaps, and daily dose idioms/facts (`js/data/daily_dose.js`).
5. **Public courses:** Public course catalog and open syllabus pathways (`apps/free-portal/`, `apps/premium-courses/general/`).
6. **Educational Blog:** Pedagogical articles, top 100/200 level vocabulary guides (`blog/`), and generation scripts (`generate_all_blog_pages.py`).
7. **Ecosystem Navigation Header:** Global multi-product switcher (`#cosy-nav`) routing learners to companion repositories: `COSYmanuals`, `COSYevents`, `COSYgames`, and `COSYtools`.

All items outside this scope are evaluated and categorized into exactly one of nine classification buckets.

---

## 2. Classification Categories & Summary Metrics

Every file, route, dataset, component, and asset in the repository is assigned to **exactly one** of the following nine categories:

| Category ID | Category Name | Description | File Count | % of Repo |
|---|---|---|---|---|
| **1** | **Keep in COSYlanguages** | Core landing pages, blog, practice hub, placement quiz, price calculator, language hubs, public entry points, and hub scripts. | **169** | 2.42% |
| **2** | **Move to COSYmanuals** | Restricted web textbooks (`manuals/`), detailed syllabus curricula (`curriculum/`), reference grammar (`reference-grammar/`, `grammar/`), monolingual vocabulary databases (`vocabulary/`), communicative situation manuals (`communication/`), comparative grammar (`comparative/`), and wordlists (`docs/archive/wordlists/`). | **5,604** | 80.26% |
| **3** | **Move to COSYevents** | Public speaking club session decks, multimedia event night guides, cinema club, karaoke, and event templates (`templates/events/`). | **13** | 0.19% |
| **4** | **Move to Spatial Engine** | Open-world RPG adventure game content, WebGL spatial assets, and interactive room/city scenes. | **0** *(external)* | 0.00% |
| **5** | **Move to COSYgames** | Interactive minigame engines, game templates (`templates/games/`), and game loader drivers (`js/games/`). | **6** | 0.09% |
| **6** | **Move to COSYtools** | Standalone offline reference tools (12 micro-apps for verb conjugators, gender trainers, case systems, prepositional regimes). | **0** *(extracted)* | 0.00% |
| **7** | **Shared dependency** | Master design tokens (`css/cosy-tokens.css`), global stylesheets (`css/`), core UI scripts (`js/core/`, `shared/`), UI images (`images/ui/`, `images/flags/`), reaction/music audio (`sounds/`), and JSON schemas (`schema/`). | **621** | 8.90% |
| **8** | **Delete only if confirmed obsolete** | Plain-text hardcoded access credentials (`data/access/codes.json`), temporary build scripts/artifacts (`analyze_prompt2.py`, `process_prompt2.py`, `batch3_files.txt`, `target_files.txt`, `test.tar.gz`, `missing-from-inventory.json`, `reference-grammar-audit.json`), and broken symlink (`games`). | **9** | 0.13% |
| **9** | **Needs human decision** | Candidates for separate sub-product repos (`apps/print-studio/` and `print-*.html` for `COSYstudio`, `apps/premium-courses/` paid tracks for `COSYcourses`, `classroom-sync.html` for `COSYclassroom`), experimental hybrid pages (`hybrid/`), and internal project/audit suites (`project/`). | **560** | 8.02% |
| **TOTAL** | | | **6,982** | **100.00%** |

---

## 3. Deep-Dive Analysis of Focus Areas

### 1. Detailed Curricula
* **Location:** `curriculum/` (122 files across 13 languages)
* **Current State:** Contains structured lesson plans, unit cards, learning objectives, and CCQ stages for General, Spoken, Travelling, Professional, Relocation, and Exam tracks across CEFR A1–C2.
* **Finding:** Deep syllabus lesson plans exceed the public gateway mandate and belong in restricted web textbooks and structured course apps.
* **Recommendation:** **Move to COSYmanuals** (and mirror in `COSYcourses` for structured course delivery).

### 2. Contract-Only Material
* **Location:** `manuals/` (3,925 files), `data/access/codes.json` (1 file)
* **Current State:** `manuals/` contains restricted HTML textbooks for contracted teachers and students. `data/access/codes.json` contains hardcoded access codes (`ADMIN001`, `TEACH001`, `STUD001`) used to gate access client-side.
* **Finding:** Storing restricted course textbooks in the public root bloats the repository. Furthermore, `data/access/codes.json` poses a critical security vulnerability.
* **Recommendation:** **Move `manuals/` to COSYmanuals**. **Delete `data/access/codes.json`** immediately upon migrating authentication to client Passport / token verification.

### 3. Event Pages
* **Location:** `templates/events/` (13 files)
* **Current State:** Contains speaking club session templates (I Couldn't Help But Wonder, Keeping Up with Science, Mind Matters, Debatable & Relatable, Let's Celebrate, My Life With/Without, The Greatest Quotes) and event night guides (Cinema Club, Karaoke Club, Long Reads).
* **Finding:** Event session guides and templates belong in the dedicated public events repository.
* **Recommendation:** **Move to COSYevents**.

### 4. Standalone Games
* **Location:** `templates/games/` (3 files), `js/games/` (3 files), `games` (root symlink)
* **Current State:** Minigame templates, loader scripts, and a broken root symlink `games -> COSYgames` pointing to a missing directory.
* **Finding:** Minigame engines and drivers belong in the dedicated minigames hub.
* **Recommendation:** **Move `templates/games/` and `js/games/` to COSYgames**. **Delete broken symlink `games`**.

### 5. Adventure Content
* **Location:** Spatial Scene Assets
* **Current State:** Spatial scene backgrounds exist in `images/scenes/`.
* **Finding:** `images/scenes/` serves `COSYgames` (Scene Match minigame).
* **Recommendation:** Classify `images/scenes/` as **Shared dependency** for visual assets.

### 6. Grammar Reference
* **Location:** `reference-grammar/` (297 files), `grammar/` (55 files), `comparative/` (4 files)
* **Current State:** Exhaustive linguistic reference grammar topics across 13 languages, parallel to the communicative grammar manual lessons in `manuals/{lang}/grammar/`.
* **Finding:** Dual grammar systems create content fragmentation and maintainability overhead.
* **Recommendation:** **Move to COSYmanuals** and consolidate reference tabs into standard manual layouts.

### 7. Dictionary Functionality & Vocabulary Databases
* **Location:** `vocabulary/` (1,198 files), `communication/` (2 files), `docs/archive/wordlists/` (1 file)
* **Current State:** Monolingual IIFE vocabulary databases (A1–C2 across 13 languages), canonical A0–A1 master JSON, communicative dialogue manuals, and general course wordlists.
* **Finding:** Bulk vocabulary datasets and dictionaries are textbook reference data.
* **Recommendation:** **Move to COSYmanuals** (while leaving public blog guides in `blog/` as static generated assets on `COSYlanguages`).

### 8. Duplicated Practice Systems
* **Location:** `practice/` (25 files), `apps/free-portal/` (3 files)
* **Current State:** `practice/` provides the public Practice Hub dashboard, cognitive immersion selector, and exercise runner. `apps/free-portal/` provides a secondary lightweight portal wrapper.
* **Finding:** Practice entry points are core to the public experience, but exercise execution engines overlap with standalone tools and minigames.
* **Recommendation:** **Keep `practice/` and `apps/free-portal/` in COSYlanguages** as public entry points, routing exercise sessions out to `COSYtools` and `COSYgames` via standard URL query parameter handoffs (`docs/url-handoff.md`).

### 9. Duplicated Navigation and Design Components
* **Location:** `js/core/engine.js` vs `shared/js/core/engine.js`, `css/`
* **Current State:** Both `js/core/engine.js` and `shared/js/core/engine.js` contain logic for generating `#cosy-nav`.
* **Finding:** Having duplicate navigation engine scripts creates synchronization risk across sub-apps.
* **Recommendation:** Classify both as **Shared dependency**, but standardize all ecosystem sub-apps onto `shared/js/core/engine.js`.

---

## 4. Comprehensive Inventory Breakdown by Category

### Category 1: Keep in COSYlanguages (169 Files)
* **Root Portal & Landing Pages:** `index.html`, `about/index.html`, `privacy.html`, `placement-quiz.html`, `404.html`
* **Public Practice & Free Portal:** `practice/index.html`, `practice/cognitive-immersion.html`, `practice/progress-dashboard.html`, `practice/hub.js`, `apps/free-portal/*`
* **Public Tools & Reference Directory:** `apps/index.html`, `apps/README.md`
* **Language Portals (13 Languages):** `languages/index.html`, `languages/coming-soon.html`, `languages/{iso}/index.html` (13 portal hub pages), `languages/*.html` (13 standalone landing pages)
* **Educational Blog Hub & Top 100/200 Guides:** `blog/index.html`, `blog/top-100-a0-a1-*.html` (13 languages), `blog/top-200-*.html` (English A2, B1, B2, Very Words)
* **Digital Notebook Entry Point:** `notebook/index.html`
* **Public Hub Build Scripts & Audits:** `generate_all_blog_pages.py`, `build_nouns_dataset.py`, `update_topics_content.py`, `verify_main_pages.py`, `scripts/*` (22 audit & index scripts), `tests/*` (3 test specs), `verification/*` (2 scripts)
* **Root Configuration & Documentation:** `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `SECURITY.md`, `CONTENT_ARCHITECTURE.md`, `GRAMMAR_SYSTEMS_INVESTIGATION.md`, `MIGRATION_MAP.md`, `MISSING_CURRICULUM_DATA.md`, `manifest.json`, `package.json`, `package-lock.json`, `sw.js`, `.nojekyll`, `.htmlvalidate.json`, `.gitignore`, `.gitattributes`, `docs/*` (10 architecture docs)

### Category 2: Move to COSYmanuals (5,604 Files)
* **Web Textbooks:** `manuals/` (3,925 HTML textbook pages across 13 languages, grammar, vocabulary, marathons)
* **Syllabus Curricula:** `curriculum/` (122 JSON/HTML curriculum pages across 13 languages and 6 tracks)
* **Exhaustive Reference Grammar:** `reference-grammar/` (297 HTML topic pages across 13 languages)
* **Core Grammar Manuals:** `grammar/` (55 HTML topic pages, standards, schemas)
* **Monolingual Vocabulary Databases:** `vocabulary/` (1,198 JS vocabulary files, canonical datasets, schemas)
* **Communicative Situations & Wordlists:** `communication/` (2 files), `comparative/` (4 files), `docs/archive/wordlists/` (1 file)

### Category 3: Move to COSYevents (13 Files)
* **Speaking Club & Event Night Templates:** `templates/events/` (13 files including `wonder-session-template.html`, `science-session-template.html`, `mind-session-template.html`, `debate-session-template.html`, `celebrate-session-template.html`, `life-session-template.html`, `quotes-session-template.html`, `karaoke-session-template.html`, `long-reads-session-template.html`)

### Category 4: Move to Spatial Engine (0 Files in Repo)
* Open-world RPG adventure content is maintained in external spatial repos.

### Category 5: Move to COSYgames (6 Files)
* **Minigame Loader & Templates:** `js/games/*` (3 game driver scripts), `templates/games/*` (3 minigame template files)

### Category 6: Move to COSYtools (0 Files in Repo)
* All 12 standalone reference tools (`fr-conjugeur`, `it-coniugatore`, `ru-spryazhenie`, `el-klisi-rimaton`, `fr-genre`, `it-genere`, `ru-rod-padezhi`, `el-genos-ptoseis`, `en-verb-prep`, `fr-regime`, `it-reggenza`, `el-syntaxi`) have already been pre-packaged and extracted to `COSYtools`.

### Category 7: Shared Dependency (621 Files)
* **Master Design Tokens & Styles:** `css/cosy-tokens.css`, `css/base.css`, `css/components.css`, `css/layout.css`, `css/tokens.css`, `css/courses.css` (24 CSS stylesheets)
* **Core Shared JS Utilities & i18n:** `shared/js/passport.js`, `shared/js/core/engine.js`, `js/core/*` (7 engine scripts), `js/i18n/*` (6 i18n scripts), `js/data/*` (29 daily dose & pricing data scripts), `js/fr-marathon-engine.js`
* **Ecosystem Images & Assets:** `images/flags/*`, `images/ui/*`, `images/logos/*`, `images/grammar/*`, `images/scenes/*` (459 image assets)
* **Audio Sound Effects & Music:** `sounds/music/*`, `sounds/reactions/*` (37 audio assets)
* **JSON Schemas & Shared Templates:** `schema/*` (4 JSON schema files), `components/navigation.html`, `templates/*` (shared lesson and grammar templates), `data/levels/`, `data/languages/`, `data/ui/` (13 language UI translation files), `data/pricing/`, `data/index/` (15 search index files)

### Category 8: Delete Only If Confirmed Obsolete (9 Files)
1. `data/access/codes.json` — Hardcoded plain-text user/teacher access codes (Security vulnerability).
2. `games` — Broken root symlink pointing to non-existent target.
3. `test.tar.gz` — Temporary test tarball artifact in root directory.
4. `analyze_prompt2.py` — Ad-hoc prompt analysis script.
5. `process_prompt2.py` — Ad-hoc prompt processing script.
6. `batch3_files.txt` — Legacy file list batch artifact.
7. `target_files.txt` — Legacy target file list artifact.
8. `missing-from-inventory.json` — Temporary inventory comparison artifact.
9. `reference-grammar-audit.json` — One-time reference grammar audit artifact.

### Category 9: Needs Human Decision (560 Files)
1. **Candidate `COSYstudio` Repository (6 Files):** `apps/print-studio/` (1 file), `print-boardgame.html`, `print-box.html`, `print-cards.html`, `print-grammar.html`, `print-zine.html` — Pedagogical print studio utilities for generating zines, flashcard boxes, boardgames, and print cheatsheets.
2. **Candidate `COSYcourses` Repository (167 Files):** `apps/premium-courses/` — Structured syllabus pathway app covering Spoken, Travelling, Professional, Relocation, and Exam tracks across CEFR levels A1–C2.
3. **Candidate `COSYclassroom` Repository (1 File):** `classroom-sync.html` — Live screen sync presentation utility for teachers.
4. **Hybrid Learning Experiments (5 Files):** `hybrid/` (`index.html`, `radio.html`, `bridge.html`, `zine.html`, `README.md`).
5. **Internal Maintainer Test & Script Suites (381 Files):** `project/` (`project/docs/`, `project/scripts/`, `project/planning/`, `project/tests/`) — Internal maintainer development and audit suites.

---

## 5. Strategic Migration & Refactoring Recommendations

1. **Extract Web Textbooks to `COSYmanuals`:**
   - Transfer `manuals/`, `curriculum/`, `reference-grammar/`, `grammar/`, `vocabulary/`, `communication/`, and `comparative/` to `COSYmanuals`.
   - Re-anchor `COSYlanguages` as a lightweight static entry portal (~169 pages + shared dependencies).

2. **Execute Clean Sub-Product Extractions:**
   - Formalize creation of candidate repositories: `COSYstudio` (Print utilities), `COSYcourses` (Syllabus courses), and `COSYclassroom` (Live classroom sync).
   - Move `templates/events/` into `COSYevents` and `templates/games/`, `js/games/` into `COSYgames`.

3. **Remediate Security & Obsolete Artifacts:**
   - Remove `data/access/codes.json` from git tracking and migrate access checks to client-side COSY Passport / token verification.
   - Delete obsolete build artifacts (`test.tar.gz`, `analyze_prompt2.py`, `process_prompt2.py`, etc.) and the broken `games` symlink.

4. **Standardize Shared Components via Pinned Raw URLs:**
   - Reference `css/cosy-tokens.css` and `shared/js/core/engine.js` across all sub-product repositories using pinned raw GitHub URLs to maintain design system consistency across the ecosystem.
