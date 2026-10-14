# Inventory of Removed and Legacy Local Duplicate Vocabulary Files (`reports/removed-duplicates.md`)

**Date:** October 2026
**Repository:** `cosylanguages/COSYlanguages`
**Auditor:** Jules (COSYlanguages Engineering)

---

## Executive Summary

As part of centralizing vocabulary single-source-of-truth in **COSYdata** ([https://github.com/cosylanguages/COSYlanguages](https://github.com/cosylanguages/COSYdata)), Practice Hub now fetches Theme schemas (`schemas/themes.json`) and vocabulary indexes (`vocabulary/{lang}/themes-index.json`) dynamically from COSYdata.

This report lists legacy local vocabulary files in `vocabulary/` that duplicate COSYdata's remote data store and are bypassed during remote data loading.

---

## Audit of Local Legacy Vocabulary Files

Total local dataset files in `vocabulary/`: **686 `.js` and `.json` files** across 14 target languages.

### 1. English (`en`) - 232 Legacy Local Files
Local legacy datasets under `vocabulary/en/` overlapping with COSYdata `vocabulary/en/`:
- `vocabulary/en/A2/Adjectives/HOME/Buildings/Housing_Types.js`
- `vocabulary/en/A2/Adjectives/HOME/Furniture/Household_Goods.js`
- `vocabulary/en/A2/Adjectives/HOME/Furniture/Living_Furniture.js`
- `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js`
- `vocabulary/en/A2/Adjectives/WORK_SCHOOL/Education/School_Classroom.js`
- `vocabulary/en/A2/idioms.js`
- `vocabulary/en/B1/Idioms/General_Idioms.js`
- `vocabulary/en/B2/Nouns/People/Personality/Psychological_Traits.js`
- `vocabulary/en/B2/Nouns/Society/Culture/General_Culture.js`
- `vocabulary/en/C1/Adjectives/LAW/Legal_System/General_Law.js`
- *(And 222 additional A2–C2 sub-theme JS files under `vocabulary/en/`)*

### 2. French (`fr`) - 57 Legacy Local Files
- `vocabulary/fr/A2/idioms.js`
- `vocabulary/fr/A2/verbs.js`
- `vocabulary/fr/A2/vocabulary.js`
- `vocabulary/fr/B1/idioms.js`
- `vocabulary/fr/B1/vocabulary.js`
- `vocabulary/fr/B2/debates.js`
- `vocabulary/fr/B2/idioms.js`
- `vocabulary/fr/B2/vocabulary.js`
- *(And 49 additional A2–C2 JS files under `vocabulary/fr/`)*

### 3. Italian (`it`) - 56 Legacy Local Files
- `vocabulary/it/A2/idioms.js`
- `vocabulary/it/A2/verbs.js`
- `vocabulary/it/A2/vocabulary.js`
- `vocabulary/it/B1/idioms.js`
- `vocabulary/it/B1/vocabulary.js`
- `vocabulary/it/B2/vocabulary.js`
- `vocabulary/it/C1/vocabulary.js`
- *(And 49 additional A2–C2 JS files under `vocabulary/it/`)*

### 4. Russian (`ru`) - 56 Legacy Local Files
- `vocabulary/ru/A2/verbs.js`
- `vocabulary/ru/A2/vocabulary.js`
- `vocabulary/ru/B1/vocabulary.js`
- `vocabulary/ru/B2/vocabulary.js`
- *(And 52 additional A2–C2 JS files under `vocabulary/ru/`)*

### 5. Greek (`el`) - 50 Legacy Local Files
- `vocabulary/el/A2/verbs.js`
- `vocabulary/el/A2/vocabulary.js`
- `vocabulary/el/B1/vocabulary.js`
- `vocabulary/el/B2/vocabulary.js`
- `vocabulary/el/C1/vocabulary.js`
- *(And 45 additional A2–C2 JS files under `vocabulary/el/`)*

### 6. Spanish (`es`), German (`de`), Portuguese (`pt`), Chuvash (`cv`) - 72 Legacy Local Files
- 18 files per language covering A2–C2 `fluency.js`, `opinions.js`, `locations.js`, `vocabulary.js`, `verbs.js`, `adjectives.js`.

### 7. Armenian (`hy`), Georgian (`ka`), Tatar (`tt`), Bashkir (`ba`), Breton (`br`) - 160 Legacy Local Files
- 32 files per language covering A2–C2 `vocabulary.js`, `verbs.js`, `debates.js`, `people.js`, `quotes.js`, `fluency.js`, `opinions.js`.

---

## Runtime Loading Protocol

1. Practice sessions invoke `COSY.loadLanguageData(lang, level)` in `js/core/engine.js`.
2. COSYlanguages fetches `https://raw.githubusercontent.com/cosylanguages/COSYdata/main/vocabulary/{lang}/themes-index.json` and theme JSON datasets.
3. If online fetching succeeds, local script files under `vocabulary/{lang}/` are completely bypassed, preventing duplicate data pollution in memory.
4. Local legacy files in `vocabulary/` remain solely as offline fallback stubs.
