# Vocabulary Architecture & Data Audit Report (`reports/vocabulary-audit.md`)

**Date:** October 2026
**Repository:** `cosylanguages/COSYlanguages`
**Auditor:** Jules (COSYlanguages Engineering)
**Status:** Report-Only Audit (Zero Data/Code Modifications Executed)

---

## Executive Summary

This report delivers a thorough architectural and data audit of vocabulary holdings, data fetching mechanisms, dropdown construction, external references, and language count claims across the **COSYlanguages** repository.

Key audit conclusions:
1. **Vocabulary Distribution:** Local vocabulary data exists primarily in legacy `vocabulary/` JavaScript/JSON files (686 dataset files across 14 languages) and `practice/data/` (274 English and French confusion/cloze dataset files). The `curriculum/` directory does not exist in this repo. Home-related vocabulary (housing, rooms, furniture, appliances) exists across English, French, Italian, Russian, Greek, Armenian, Georgian, Tatar, Bashkir, and Breton datasets, while Spanish, German, Portuguese, and Chuvash lack standalone home topic files.
2. **Duplication against COSYdata:** COSYlanguages maintains legacy copies of vocabulary that single-source-of-truth **COSYdata** owns. Structurally, COSYlanguages uses legacy JS window assignments (`window.vocabularyData`) with schema fields like `word`, `phonetic_ipa`, `pos`, `theme`, `sub_theme`, `definition`, `examples` (array of objects with `text`, `translation`), whereas COSYdata uses clean JSON schemas (`word`, `ipa`, `pos`, `theme`, `subtheme`, `definition`, `examples` as simple string arrays, `cefr_level`).
3. **Practice Page Data Fetching:** The Practice page (`practice/index.html` and `practice/types/vocabulary/vocabulary.js`) employs a **hybrid fetch model**. When initiating a session, `COSY.loadLanguageData(lang, level)` attempts a remote fetch from `https://cosylanguages.github.io/COSYdata/vocabulary/{lang}/index.json` with a 1.5s timeout. If successful, it populates `window.vocabularyData[lang]`. If remote fetching fails or offline mode is active, it falls back to dynamically injecting local `vocabulary/{lang}/{level}/*.js` scripts. Additionally, Cloze/Find-Mistake practice mode loads static standalone local JS datasets (`practice/data/vocabulary/{level}/{topic}.js` or `practice/data/vocabulary/fr/{level}/{topic}.js`).
4. **Dropdown Value Construction:** Level, Theme, and Sub-theme dropdowns on Practice and Vocabulary pages are built dynamically from loaded entries (`window.vocabularyData[lang]`) or static configuration objects in `js/core/ui.js` (`COMMON_VOCAB_THEMES`) and `js/utils/shared.js`. Theme values are extracted from `item.theme` (or `item.category`), while Sub-theme values are extracted from `item.sub_theme` or `item.subtheme`.
5. **COSYworld & Teacher Resource References:** Residual references to `COSYworld` exist solely in documentation files (`docs/ECOSYSTEM_ARCHITECTURE.md`, `docs/ecosystem-inventory.json`, `docs/cosy-languages-boundary-audit.md`, `docs/url-handoff.md`). Teacher resources ("Teacher Notes", "Teacher Guidance", "Teacher Manual", "Teacher Utility") exist in `project/planning/notebook/science_parsed_inventory.json`, `project/tests/science_club_mode.spec.ts`, `project/tests/wonder_private_lesson.spec.ts`, and public marketing copy in `index.html` and `courses/*.html`.
6. **Language Count Inconsistencies:** The repository states language counts of **14 target languages**, **13 languages**, and **100% / 10 languages** across different UI files, tests, scripts, and documentation files.

---

## 1. Vocabulary Data Locations & Counts Across Languages

Below is the directory-by-directory file count and Home-related vocabulary audit for all 14 language codes listed in `project/docs/LANGUAGES.md` (`en`, `fr`, `it`, `ru`, `el`, `es`, `de`, `pt`, `hy`, `ka`, `tt`, `ba`, `br`, `cv`).

### Language Inventory Summary Table

| Code | Language | `vocabulary/` Files | `data/` Files | `languages/` Files | `curriculum/` Files | `practice/` Files | `apps/` Files | Home-Related Vocabulary Status |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **`en`** | English | 232 | 2 | 7 | 0 (dir N/A) | 274 | 0 | **YES**: 31 files (A2/B2/C1 housing, living furniture, appliances, rooms) |
| **`fr`** | French | 57 | 2 | 14 | 0 (dir N/A) | 1 | 0 | **YES**: 12 files (A2/B1/B2 house/logement vocabulary & idioms) |
| **`it`** | Italian | 56 | 2 | 7 | 0 (dir N/A) | 0 | 0 | **YES**: 7 files (A2/B1/B2 casa/arredamento vocabulary & idioms) |
| **`ru`** | Russian | 56 | 3 | 7 | 0 (dir N/A) | 0 | 0 | **YES**: 4 files (A2/B1/B2 дом/квартира/жилье vocabulary) |
| **`el`** | Greek | 50 | 2 | 7 | 0 (dir N/A) | 0 | 0 | **YES**: 5 files (A2/B1/B2/C1 home/housing vocabulary) |
| **`es`** | Spanish | 18 | 2 | 2 | 0 (dir N/A) | 0 | 0 | **NO**: Generic fluency/opinions files; no specific Home dataset |
| **`de`** | German | 18 | 2 | 2 | 0 (dir N/A) | 0 | 0 | **NO**: Generic fluency/opinions files; no specific Home dataset |
| **`pt`** | Portuguese | 18 | 2 | 2 | 0 (dir N/A) | 0 | 0 | **NO**: Generic fluency/opinions files; no specific Home dataset |
| **`hy`** | Armenian | 32 | 2 | 2 | 0 (dir N/A) | 0 | 0 | **YES**: 1 file (`vocabulary/hy/B2/verbs.js` contains household verbs) |
| **`ka`** | Georgian | 32 | 2 | 2 | 0 (dir N/A) | 0 | 0 | **YES**: 1 file (`vocabulary/ka/B2/verbs.js` contains household verbs) |
| **`tt`** | Tatar | 32 | 2 | 2 | 0 (dir N/A) | 0 | 0 | **YES**: 1 file (`vocabulary/tt/B2/verbs.js` contains household verbs) |
| **`ba`** | Bashkir | 32 | 2 | 2 | 0 (dir N/A) | 0 | 0 | **YES**: 1 file (`vocabulary/ba/B2/verbs.js` contains household verbs) |
| **`br`** | Breton | 32 | 2 | 2 | 0 (dir N/A) | 0 | 0 | **YES**: 1 file (`vocabulary/br/B2/verbs.js` contains household verbs) |
| **`cv`** | Chuvash | 18 | 1 | 2 | 0 (dir N/A) | 0 | 0 | **NO**: Generic fluency/opinions files; no specific Home dataset |

### Directory Breakdown Details

1. **`vocabulary/`**:
   - Contains 686 legacy JavaScript dataset files (`window.vocabularyData[...] = [...]`) and level `index.json` manifests.
   - Subdirectories exist for all 14 languages: `en` (232 files), `fr` (57 files), `it` (56 files), `ru` (56 files), `el` (50 files), `es` (18 files), `de` (18 files), `pt` (18 files), `hy` (32 files), `ka` (32 files), `tt` (32 files), `ba` (32 files), `br` (32 files), `cv` (18 files).
   - Detailed Home-related sub-folders exist in English under `vocabulary/en/A2/Adjectives/HOME/` (`Buildings/Housing_Types.js`, `Furniture/Living_Furniture.js`, `Furniture/Household_Goods.js`) and Nouns/Verbs equivalents.
2. **`data/`**:
   - Contains language UI translation files (`data/ui/{lang}.json`) for 13 languages (all except `cv`), index manifests (`data/index/{lang}_index.json`) for all 14 languages, and `data/ru_grammar_topics_map.json`.
3. **`languages/`**:
   - Language portal pages and curriculum stubs. English has 7 files, French has 14 files (including 6 marathon pages), Italian/Russian/Greek have 7 files each, and Spanish/German/Portuguese/Armenian/Georgian/Tatar/Bashkir/Breton/Chuvash have 2 files each (`{lang}.html` and `{lang}/index.html`).
4. **`curriculum/`**:
   - **Does not exist** in this repository. (Note: Curricula and manuals reside in `COSYmanuals`).
5. **`practice/`**:
   - Practice datasets reside in `practice/data/`:
     - English: 274 files under `practice/data/vocabulary/{a1,a2,b1,b2,c1,c2}/*.js` + `practice/data/vocab_confusion_pairs.js`.
     - French: 27 files under `practice/data/grammar/fr/` and 1 file `practice/data/french_vocab_confusion_pairs.js`.
6. **`apps/`**:
   - Premium app wrappers (`apps/premium-courses/`, `apps/premium-events/`, `apps/free-portal/`). Contains zero vocabulary dataset files.

---

## 2. Local Vocabulary Ownership vs. COSYdata Comparison

### Overlapping Files & Datasets

`COSYdata` ([https://github.com/cosylanguages/COSYdata](https://github.com/cosylanguages/COSYdata)) is the designated single source of truth for raw vocabulary items. COSYlanguages holds legacy copies of vocabulary across 686 files in `vocabulary/`.

All 14 language directories in `vocabulary/` overlap with COSYdata topics:
- **English (`en`):** 232 files overlapping on CEFR A2–C2 themes (Nouns, Verbs, Adjectives, Idioms, Travel, Work).
- **French (`fr`), Italian (`it`), Russian (`ru`), Greek (`el`):** Overlap on A2–C2 `vocabulary.js`, `verbs.js`, `idioms.js`, `speaking.js`, `debates.js`, `opinions.js`.
- **Spanish (`es`), German (`de`), Portuguese (`pt`), Chuvash (`cv`):** Overlap on A2–C2 `fluency.js`, `opinions.js`, `locations.js`.
- **Armenian (`hy`), Georgian (`ka`), Tatar (`tt`), Bashkir (`ba`), Breton (`br`):** Overlap on A2–C2 `vocabulary.js`, `verbs.js`, `debates.js`, `people.js`, `quotes.js`.

### Structural Comparison Matrix

| Property / Field | COSYlanguages Local Vocabulary (`vocabulary/`) | COSYdata Single Source of Truth (`COSYdata`) |
| :--- | :--- | :--- |
| **File Format** | Executable `.js` scripts assigning global arrays (`window.vocabularyData['en'].push(...)`) or `.json` files. | Pure, static, schema-validated `.json` files. |
| **Unique Item ID Format** | Missing or non-standard legacy strings (e.g. `en_starter_language_013`, `ka-word-c2-language-ბინარული-fa131f`). | Standardized deterministic hash IDs (e.g., `en-verb-a2-run-001`). |
| **CEFR Level Field** | Uses `level` or `level_code` with full names (`starter`, `elementary`, `intermediate`, `upper-intermediate`, `advanced`, `proficiency`). | Standardized uppercase short codes (`A1`, `A2`, `B1`, `B2`, `C1`, `C2`). |
| **Phonetic IPA Field** | Named `phonetic_ipa` or `ipa_transcription`. | Standardized as `ipa`. |
| **Theme / Sub-theme Fields** | Uses `theme` and `sub_theme` (with underscores or space-separated). | Standardized as `theme` and `subtheme` (lowercase, no underscores). |
| **Examples Structure** | Array of objects: `[{"text": "Sentence", "translation": "Translation"}]`. | Array of strings: `["Sentence 1", "Sentence 2"]`. |
| **PartOfSpeech Field** | Named `pos` or `form` (`"verb"`, `"adjective"`, `"noun"`). | Standardized as `pos` (`"noun"`, `"verb"`, `"adj"`, `"adv"`). |

---

## 3. Practice Page Data Fetching Mechanism

### How `practice/index.html` Loads Vocabulary Data

The Practice Hub (`practice/index.html`) loads its vocabulary runtime dependencies through script imports and dynamic function calls.

#### 1. HTML Script Injections in `practice/index.html`
```html
<script src="../js/data/languages.js"></script>
<script src="../js/data/phonology_data.js"></script>
<script src="../js/core/engine.js"></script>
<script src="../js/core/i18n.js"></script>
<script src="../js/core/ui.js"></script>
<script src="_engine/core.js"></script>
<script src="_engine/renderers.js"></script>
<script src="data/vocab_confusion_pairs.js"></script>
<script src="data/grammar_confusion_pairs.js"></script>
<script src="data/french_grammar_confusion_pairs.js"></script>
<script src="hub.js"></script>
<script src="types/vocabulary/vocabulary.js"></script>
```

#### 2. Hybrid Data Loader: `COSY.loadLanguageData(lang, level)`
When a user launches a practice session in `practice/types/vocabulary/vocabulary.js`, it calls:
```javascript
await window.COSY.loadLanguageData(targetLang, level);
```

`COSY.loadLanguageData` in `js/core/engine.js` executes the following sequence:

1. **Remote COSYdata Fetch Attempt (Primary):**
   - Fetches the remote index file:
     `https://cosylanguages.github.io/COSYdata/vocabulary/${lang}/index.json`
   - If HTTP response is OK (within a 1500ms timeout), it extracts all theme file paths and fetches them in parallel:
     `https://cosylanguages.github.io/COSYdata/vocabulary/${lang}/${themeFile}`
   - Normalizes and pushes loaded entries into `window.vocabularyData[lang]`.
   - If all required levels are loaded from COSYdata, execution returns early with `remoteEntries`.

2. **Local Fallback Execution (Secondary / Offline):**
   - If the remote fetch fails, times out, or returns a 404, it falls back to loading local script files.
   - Invokes `getVocabFileList(lang, folderCode)` to fetch `vocabulary/${lang}/${folderCode}/index.json` or fallback list.
   - Inject local JavaScript files dynamically via `<script>` elements:
     `vocabulary/${lang}/${folderCode}/${file}` (e.g., `vocabulary/en/A2/Adjectives/HOME/Furniture/Living_Furniture.js`).

3. **Standalone Topic Cloze Practice Datasets:**
   For contextual Cloze and Find-Mistake practice, `practice/types/vocabulary/vocabulary.js` loads local standalone JavaScript dataset files:
   - English: `practice/data/vocabulary/${level}/${topic}.js` (e.g., `practice/data/vocabulary/a1/house-vs-home.js`).
   - French: `practice/data/vocabulary/fr/${level}/${topic}.js`.

---

## 4. Dropdown Value Construction & Population Fields

The Level, Theme, and Sub-theme dropdown selectors on Practice (`practice/index.html`) and Vocabulary (`vocabulary/index.html`) pages are constructed dynamically at runtime.

### 1. Level Dropdown
- **Source Config:** `window.COSY_LEVELS` defined in `js/core/engine.js` or `js/data/languages.js`.
- **Fields Used:** `id` (e.g., `'starter'`, `'elementary'`, `'intermediate'`), `code` (e.g., `'a1'`, `'a2'`, `'b1'`), and `label` (e.g., `'A1 Starter'`).
- **Population:** Mapped directly into `<option value="${level.id}">${level.label}</option>`.

### 2. Theme Dropdown
- **Static Configuration Source:** `COMMON_VOCAB_THEMES` array in `js/core/ui.js` (26 standard themes, e.g. `home_living`, `food_drink`, `work_employment`, `technology_media`).
- **Dynamic Extraction Source:** Generated from active `window.vocabularyData[lang]` entries using `js/utils/shared.js`:
  ```javascript
  const themes = [...new Set(vocabList.map(item => item.theme || item.category).filter(Boolean))];
  ```
- **Fields Inspected:**
  - `item.theme` (e.g., `"HOME"`, `"society_politics"`, `"work_employment"`)
  - `item.category` (fallback if `theme` is undefined)
- **Grouping Rule:** Group themes starting with `group:` indicate parent category groupings.

### 3. Sub-theme Dropdown
- **Dynamic Extraction Source:** Extracted conditionally after a primary Theme is selected.
- **Fields Inspected:**
  - `item.sub_theme` or `item.subtheme` (e.g., `"Living_Furniture"`, `"Housing_Types"`, `"Household_Goods"`)
- **Population Logic:**
  ```javascript
  const subthemes = [...new Set(
    vocabList
      .filter(item => (item.theme || item.category) === selectedTheme)
      .map(item => item.sub_theme || item.subtheme)
      .filter(Boolean)
  )];
  ```

---

## 5. References to `COSYworld` and Teacher Resources

To prepare for future decoupling tasks, all references to `COSYworld` and teacher/instructor resources across the repository have been cataloged.

### References to `COSYworld`
Zero source code files in `js/`, `practice/`, `languages/`, or `apps/` invoke `COSYworld`. All references reside strictly in documentation files:
1. `docs/ECOSYSTEM_ARCHITECTURE.md`: Lines 19, 81, 102 (describes external RPG repo).
2. `docs/ecosystem-inventory.json`: Lines 11, 419, 428, 430, 434, 435.
3. `docs/cosy-languages-boundary-audit.md`: Lines 18, 33, 70, 71, 72, 73, 124, 125.
4. `docs/url-handoff.md`: Lines 3, 43, 50.
5. `docs/passport-schema.md`: Lines 28, 70.
6. `docs/competitive-analysis/skyeng/skyeng-vs-cosy.md`: Line 86.
7. `docs/proposed-migration-map.json`: Lines 4172, 4181, 4190, 4199, 4208.

### References to Teacher Resources
Teacher guidance panels, notes, and marketing copy exist in the following locations:
1. **Test Suites:**
   - `project/tests/science_club_mode.spec.ts`: Lines 140, 157, 158, 159, 160 (`#p-step1 .teacher-manual-chip`, `Teacher Guidance:`).
   - `project/tests/wonder_private_lesson.spec.ts`: Lines 28, 29, 30, 31, 43 (`.teacher-note-panel`, `TEACHER GUIDE`, `Teacher Utility`).
2. **Parsed Inventory Data:**
   - `project/planning/notebook/science_parsed_inventory.json`: Contains `"teacher_notes"` and `"teacher_guidance"` attributes across step definitions.
   - `project/scripts/build_fr_c1.py`: Lines 106, 127, 155, 169, 190, 218, 232, 253, 281, 295, 316, 344, 358, 379, 407, 421, 439 (generates `"teacher_notes"` JSON blocks).
   - `project/scripts/fix_all_html.py`: Line 98 (`# Reconstruct Teacher's Notes cleanly`).
3. **Public Marketing & Course Pages:**
   - `index.html`: Lines 8, 14, 78, 80, 82, 114, 117, 400, 442, 470 ("Learn a language with teachers who love what they teach", "Our teachers aren't just teachers...", "Teacher James").
   - `courses/spoken.html`: Lines 176, 193 ("Experience real conversation with your teacher...").
   - `courses/index.html`: Line 205.

---

## 6. Language Count Audit Across Codebase & Documentation

The codebase contains conflicting statements regarding the number of supported target languages. Below is the complete listing of every file stating language counts:

### 1. Stated as "14 target languages" / "14 languages"
- `hybrid/index.html` (line 158): `"...across all 14 target languages"`
- `comparative/index.html` (lines 56, 110): `"Compare Grammar Across 14 Languages"`, `"↔ Scroll horizontally to compare all 14 languages"`
- `project/docs/LANGUAGES.md`: Lists **14 language codes** (`en`, `fr`, `it`, `ru`, `el`, `es`, `de`, `pt`, `hy`, `ka`, `tt`, `ba`, `br`, `cv`).
- `project/docs/EDITORIAL_HANDBOOK.md` (lines 39, 263): `"The Core Logic Matrix (14 Target Languages)"`
- `project/docs/UNIFIED_VOCABULARY_TAXONOMY_AND_SCENE_MATCH_MATRIX.md` (lines 10, 621): `"Multi-Lingual Parity (14 Target Languages)"`
- `project/docs/MANUAL_GENERATION_MAP.md` (line 3): `"build commands for all 14 grammar manual directories"`
- `project/docs/audits/active/MIGRATION_NOTES.md` (lines 16, 38): `"14 target languages"`
- `project/docs/audits/active/dictionary-ui-audit.md` (lines 4, 26, 34, 136, 169): `"across all 14 language directories under vocabulary/"`
- `docs/archive/reports/vocabulary-duplication-audit.md` (lines 10, 40): `"across all 14 supported languages"`

### 2. Stated as "13 target languages" / "13 languages"
- `README.md`: Lists **13 target languages** in the main feature matrix (excludes `cv` Chuvash).
- `project/docs/B1_PLUS_CURRICULUM_POLICY_AND_READINESS.md` (lines 39, 61): `"Curriculum Readiness Matrix (13 Languages)"`
- `project/docs/audits/archive/navigation_structure_audit.md` (line 12): `"scaled to support 13 languages"`
- `project/docs/audits/archive/games_gamification_brainstorming.md` (lines 9, 12): `"across all 13 target languages"`
- `project/docs/audits/archive/PLAN.md` (line 39): `"stubs for all 13 supported languages"`
- `project/docs/audits/active/dictionary-ui-audit.md` (line 121): `"All 13 Non-English Languages"`
- `project/planning/VOCABULARY_ARCHITECTURE_BRAINSTORM.md` (line 4): `"spread across 13 language folders"`
- `project/scripts/update_language_portals.py` (line 4): `"Updates and enriches all 13 language portals"`
- `project/tests/practice_hub.spec.js` (line 3): `"Practice Hub - All 13 Language Pills"`

### 3. Stated as "10 languages" / "100% / 10"
- `tests/test_passport.mjs` (line 56): `"assert.strictEqual(languagesEntry.value, 100);"` (corresponds to 10 active languages in passport score matrix).

---

## Conclusion & Next Steps

This report provides the full diagnostic baseline required for upcoming vocabulary migration, component decoupling, and language alignment tasks. No functional changes, file deletions, or data modifications were made during this audit pass.
