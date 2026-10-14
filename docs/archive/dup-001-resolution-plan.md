# DUP-001 Consolidation Plan: Reference Grammar vs. Manual Grammar Systems

## Executive Summary
This document establishes the resolution plan for issue **DUP-001** identified in `docs/ecosystem-audit.md` and `docs/ecosystem-duplicate-candidates.json`. The audit identified two parallel grammar structures across the codebase:
1. **Communicative Manuals (`manuals/{lang}/grammar/`):** Step-by-step, CELTA-aligned communicative lesson pages featuring context, CCQs, form rules, pronunciation, and practice links.
2. **Exhaustive Reference Grammar (`reference-grammar/{lang}/`):** Structural linguistic data, morphological paradigms, phonology, and syntactic breakdown files (JSON and HTML).

Because DUP-001 is designated **"not safe to automate"**, this plan outlines the language-by-language audit and provides a non-destructive consolidation strategy without deleting files prior to maintainer-approved migration.

---

## Strategic Principles for Consolidation

1. **Dual-Tab Architecture in Manuals:**
   - Uncovered reference topics will be exposed as an **"Advanced Reference"** tab within existing `manuals/{lang}/grammar/` pages.
   - Learners get communicative lessons by default, while teachers and advanced students can toggle to structural reference data.

2. **Offloading Paradigm Data to COSYtools:**
   - Structural lookup datasets (e.g., verb paradigms, case declension tables, gender rules) will be integrated into dedicated **COSYtools** engines (e.g., `fr-conjugeur`, `it-coniugatore`, `ru-spryazhenie`, `el-klisi-rimaton`, `el-genos-ptoseis`, `ru-rod-padezhi`).

3. **No Direct Deletion:**
   - Both `manuals/` and `reference-grammar/` remain intact during staging until cross-repository references are fully updated.

---

## 13-Language Detailed Audit & Consolidation Matrix

### 1. Bashkir (`ba`)
- **Reference Grammar Inventory (14 files):** `morphology/` (adjectives, cases, determiners, nouns, numerals, pronouns, verbs), `particles/prepositions.json`, `phonology/` (intonation, sounds, stress), `syntax/` (clauses, sentence_types, word_order).
- **Manual Grammar Inventory (6 files):** `a2/topics/fagyl-formalary-hem-qushymchalar.html`, `a2/topics/utken-zamandar.html`, etc.
- **Uncovered Reference Topics:** Phonology (intonation, sounds, stress), Clause syntax, Verb suffix paradigms.
- **Proposed Action:**
  - Add "Advanced Reference" tab to `manuals/ba/grammar/a2/index.html` hosting Phonology and Clause syntax.
  - Offload morphological paradigm arrays (cases, suffix chains) to COSYtools Bashkir reference candidate.

### 2. Breton (`br`)
- **Reference Grammar Inventory (14 files):** `morphology/` (adjectives, determiners, mutations, nouns, numerals, pronouns, verbs), `particles/prepositions.json`, `phonology/` (intonation, sounds, stress), `syntax/` (clauses, sentence_types, word_order).
- **Manual Grammar Inventory (6 files):** `a2/topics/amzer-dremen-gevrennek.html`, `a2/topics/kemmaduriou-kemmesket.html`, etc.
- **Uncovered Reference Topics:** Initial consonant mutations reference table (`mutations.json`), Breton phonology, word order rules.
- **Proposed Action:**
  - Consolidate `mutations.json` and phonology into an "Advanced Reference / Kemmadurioù" tab in `manuals/br/grammar/a2/`.
  - Store syntactic rules in COSYmanuals appendix.

### 3. German (`de`)
- **Reference Grammar Inventory (19 files):** `de.html`, `morphology/` (de-artikel, de-haben, de-sein, de-verben, adjectives, cases, determiners, nouns, numerals, pronouns, verbs), `particles/prepositions.json`, `phonology/` (intonation, sounds, stress), `syntax/` (clauses, sentence_types, word_order).
- **Manual Grammar Inventory (0 files in `manuals/de/grammar/`; managed via `manuals/deutsche-grammatik/`):**
- **Uncovered Reference Topics:** Articles (de-artikel.html), Haben/Sein paradigms (de-haben.html, de-sein.html), Word order & clause structure.
- **Proposed Action:**
  - Create `manuals/de/grammar/` standard structure and link Haben/Sein & Word Order pages as "Advanced Reference" tabs into `manuals/deutsche-grammatik/`.
  - Merge case tables into COSYtools German reference module.

### 4. Greek (`el`)
- **Reference Grammar Inventory (18 files):** `el.html`, `morphology/` (el-articles, el-be, el-pronouns, adjectives, cases, determiners, nouns, numerals, pronouns, verbs), `particles/prepositions.json`, `phonology/`, `syntax/`.
- **Manual Grammar Inventory (6 files in `manuals/el/grammar/` + legacy `manuals/elliniki-grammatiki/`):**
- **Uncovered Reference Topics:** Noun declension case tables, Verb conjugation paradigms, Phonological stress rules (`stress.json`).
- **Proposed Action:**
  - Integrate stress rules and clause syntax as an "Advanced Reference" tab in `manuals/el/grammar/`.
  - Noun/Verb paradigm data already populates COSYtools engines (`el-klisi-rimaton`, `el-genos-ptoseis`, `el-syntaxi`).

### 5. English (`en`)
- **Reference Grammar Inventory (94 files):** 50+ lesson files, `ccq/*.json`, `verb-patterns/*.json`, `morphology/`, `syntax/`, `phonology/`.
- **Manual Grammar Inventory (300 files):** Comprehensive A1–C2 manual topic pages.
- **Uncovered Reference Topics:** Exhaustive irregular verb patterns (`verb-patterns/*.json`), explicit Concept Check Question datasets (`ccq/*.json`), phonological stress/intonation.
- **Proposed Action:**
  - Embed `ccq/*.json` and `verb-patterns/*.json` into corresponding manual topic pages under an expandable "Teacher Reference & CCQs" accordion.
  - Link verb prepositions directly to COSYtools `en-verb-prep`.

### 6. Spanish (`es`)
- **Reference Grammar Inventory (19 files):** `es.html`, `morphology/` (es-articulos, es-estar, es-presente-reg, es-pronombres, es-ser, etc.), `phonology/`, `syntax/`.
- **Manual Grammar Inventory (16 files):** `a2/topics/el-condicional-simple.html`, `el-futuro-simple.html`, `el-preterito-imperfecto.html`, `el-subjuntivo-introduccion.html`, etc.
- **Uncovered Reference Topics:** Ser vs. Estar morphological contrast matrix, Present regular conjugation paradigms, Phonology & word order.
- **Proposed Action:**
  - Embed Ser vs. Estar matrix and Word Order rules into an "Advanced Reference" tab inside `manuals/es/grammar/a2/`.
  - Shift verb tables into COSYtools Spanish conjugator module.

### 7. French (`fr`)
- **Reference Grammar Inventory (21 files):** `fr.html`, `morphology/` (fr-articles-partitifs, fr-articles, fr-avoir, fr-etre, fr-pronoms, fr-verbes-er, etc.), `phonology/`, `syntax/`.
- **Manual Grammar Inventory (1,057 files):** Extensive A1–C2 manual pages across all domains.
- **Uncovered Reference Topics:** Phonological liaison/intonation rules, formal syntax trees, partitive article edge-cases.
- **Proposed Action:**
  - Embed liaison and partitive edge-cases into "Advanced Reference" tabs inside `manuals/fr/grammar/`.
  - Conjugation paradigm arrays (Avoir, Être, -ER verbs) continue to feed COSYtools `fr-conjugeur` & `fr-genre`.

### 8. Armenian (`hy`)
- **Reference Grammar Inventory (14 files):** `morphology/` (adjectives, cases, determiners, nouns, numerals, pronouns, verbs), `particles/`, `phonology/`, `syntax/`.
- **Manual Grammar Inventory (6 files):** `a2/topics/ancyal-katarhyal-yev-ancyal-anhatar.html`, `holovman-hamakarg.html`, etc.
- **Uncovered Reference Topics:** Armenian 7-case noun declension matrix, Phonology, Clause syntax.
- **Proposed Action:**
  - Integrate 7-case declension matrix and Phonology into an "Advanced Reference" tab in `manuals/hy/grammar/a2/index.html`.

### 9. Italian (`it`)
- **Reference Grammar Inventory (21 files):** `it.html`, `morphology/` (it-articoli, it-avere, it-essere-1, it-essere-2, it-plurali, it-pronomi, it-verbi, etc.), `phonology/`, `syntax/`.
- **Manual Grammar Inventory (22 files):** `a1/`, `a2/topics/`, etc.
- **Uncovered Reference Topics:** Irregular plural formation rules (`it-plurali.html`), Essere vs. Avere auxiliary decision matrix, Phonology & word order.
- **Proposed Action:**
  - Embed irregular plurals and Essere/Avere decision matrix into an "Advanced Reference" tab inside `manuals/it/grammar/a2/`.
  - Paradigm datasets feed COSYtools `it-coniugatore`, `it-genere`, and `it-reggenza`.

### 10. Georgian (`ka`)
- **Reference Grammar Inventory (14 files):** `morphology/` (cases, verbs, screeves, nouns), `phonology/`, `syntax/`.
- **Manual Grammar Inventory (6 files):** `a2/topics/brunvebi-da-tandebulebi.html`, `zmnebi-mravalricxovani-mcvrivze.html`, etc.
- **Uncovered Reference Topics:** Georgian verb screeve system paradigms, Case marker tables, Phonology.
- **Proposed Action:**
  - Embed verb screeve system and case marker tables into an "Advanced Reference" tab in `manuals/ka/grammar/a2/`.

### 11. Portuguese (`pt`)
- **Reference Grammar Inventory (17 files):** `pt.html`, `morphology/` (pt-artigos, pt-ser-estar, pt-verbos, etc.), `phonology/`, `syntax/`.
- **Manual Grammar Inventory (16 files):** `a2/topics/comparacao-e-superlativo.html`, `condicional-simples-cortesia.html`, `futuro-do-presente-e-ir.html`, `introducao-ao-subjuntivo.html`, etc.
- **Uncovered Reference Topics:** Ser vs. Estar distinction tables, Regular verb conjugation models, Phonology & Clause syntax.
- **Proposed Action:**
  - Embed Ser vs. Estar distinction and Clause syntax into an "Advanced Reference" tab in `manuals/pt/grammar/a2/`.

### 12. Russian (`ru`)
- **Reference Grammar Inventory (18 files):** `ru.html`, `morphology/` (ru-be, ru-nouns-gender, ru-pronouns, etc.), `phonology/`, `syntax/`.
- **Manual Grammar Inventory (247 files):** Extensive A1–C2 manual topic pages.
- **Uncovered Reference Topics:** Noun gender exception rules (`ru-nouns-gender.html`), Vowel reduction and stress rules (`stress.json`), Aspectual pair matrix.
- **Proposed Action:**
  - Integrate gender exceptions and stress reduction rules into an "Advanced Reference" tab inside `manuals/ru/grammar/`.
  - Conjugation and case paradigm datasets feed COSYtools `ru-spryazhenie` and `ru-rod-padezhi`.

### 13. Tatar (`tt`)
- **Reference Grammar Inventory (14 files):** `morphology/` (adjectives, cases, determiners, nouns, numerals, pronouns, verbs), `particles/`, `phonology/`, `syntax/`.
- **Manual Grammar Inventory (37 files):** `a2/topics/tartym-kushymchalary-chylbyry.html`, `xal-figyllar-xem-kileshler.html`, etc.
- **Uncovered Reference Topics:** Vowel harmony rules, Possessive suffix chains, Verb tense paradigm tables.
- **Proposed Action:**
  - Add Vowel harmony and Possessive suffix chains as an "Advanced Reference" tab in `manuals/tt/grammar/a2/`.

---

## Conclusion & Implementation Schedule

1. **Phase 1 (Documentation & Plan):** Complete with `docs/dup-001-resolution-plan.md`.
2. **Phase 2 (COSYtools Data Migration):** Migrate structural paradigm JSON datasets into corresponding COSYtools tools.
3. **Phase 3 (Dual-Tab Manual Integration):** Add "Advanced Reference" tabs to manual index and topic pages.
4. **Phase 4 (Deprecation):** Archive legacy `reference-grammar/` directory once COSYmanuals and COSYtools integrations are verified.
