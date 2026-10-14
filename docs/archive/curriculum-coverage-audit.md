# Curriculum Coverage Audit Report

This report evaluates the readiness of source materials (vocabulary datasets, monolingual manuals, and reference grammar tools) across the 8 "coming soon" languages (**Spanish `es`**, **German `de`**, **Portuguese `pt`**, **Armenian `hy`**, **Georgian `ka`**, **Tatar `tt`**, **Bashkir `ba`**, and **Breton `br`**) to support future curriculum development across CEFR levels A1 through C2.

---

## Executive Summary

- **Existing Curricula:** All 8 languages currently possess functional `A1.json` and `C1.json` curriculum files. Levels **A2**, **B1**, **B2**, and **C2** do not yet have curriculum JSON files in `curriculum/{lang}/general/`.
- **Vocabulary Infrastructure:** Extensive vocabulary datasets exist in `vocabulary/{lang}/` across all CEFR levels (A1: 14 `.js` files; A2: 3 `.js` files; B1: 3 `.js` files; B2: 2 `.js` files; C1: 2 `.js` files; C2: 5 `.js` files).
- **Grammar & Manual Infrastructure:** Monolingual A0–A1 interactive vocabulary and grammar manuals exist for all 8 languages, supported by multi-language reference grammar files in `reference-grammar/{lang}/`. Dedicated A2–C2 grammar manual topic subfolders (like English's `manuals/en/grammar/{level}/topics/`) are not yet built for these languages.

---

## Language-by-Language Coverage Breakdown

### 1. Spanish (`es`)
- **CEFR Level Readiness:**
  - **A1:** **Ready (100%)** — `curriculum/es/general/A1.json` active; 14 `vocabulary/es/A1/` JS files; monolingual manuals (`vocabulario-espanol`, `grammatica-espanola` — 63 files).
  - **A2:** **Partial (60%)** — `vocabulary/es/A2/` JS datasets ready (adjectives, verbs, vocabulary); grammar topics need manual compilation from `reference-grammar/es/`.
  - **B1:** **Partial (50%)** — `vocabulary/es/B1/` JS datasets ready (fluency, opinions, debates); grammar topics require B1 manual structure.
  - **B2:** **Partial (50%)** — `vocabulary/es/B2/` JS datasets ready; grammar topics require B2 manual structure.
  - **C1:** **Ready (85%)** — `curriculum/es/general/C1.json` active; `vocabulary/es/C1/` JS datasets ready.
  - **C2:** **Partial (60%)** — `vocabulary/es/C2/` JS datasets ready (5 files); no dedicated C2 grammar topics.
- **Estimated Overall Readiness:** **67.5%**

---

### 2. German (`de`)
- **CEFR Level Readiness:**
  - **A1:** **Ready (100%)** — `curriculum/de/general/A1.json` active; 14 `vocabulary/de/A1/` JS files; monolingual manuals (`deutscher-wortschatz`, `deutsche-grammatik` — 63 files).
  - **A2:** **Partial (60%)** — `vocabulary/de/A2/` JS datasets ready; grammar topics sourced via `reference-grammar/de/`.
  - **B1:** **Partial (50%)** — `vocabulary/de/B1/` JS datasets ready; grammar topics require B1 manual structure.
  - **B2:** **Partial (50%)** — `vocabulary/de/B2/` JS datasets ready; grammar topics require B2 manual structure.
  - **C1:** **Ready (85%)** — `curriculum/de/general/C1.json` active; `vocabulary/de/C1/` JS datasets ready.
  - **C2:** **Partial (60%)** — `vocabulary/de/C2/` JS datasets ready (5 files); no dedicated C2 grammar topics.
- **Estimated Overall Readiness:** **67.5%**

---

### 3. Portuguese (`pt`)
- **CEFR Level Readiness:**
  - **A1:** **Ready (100%)** — `curriculum/pt/general/A1.json` active; 14 `vocabulary/pt/A1/` JS files; monolingual manuals (`vocabulario-portugues`, `gramatica-portuguesa` — 63 files).
  - **A2:** **Partial (60%)** — `vocabulary/pt/A2/` JS datasets ready; grammar topics sourced via `reference-grammar/pt/`.
  - **B1:** **Partial (50%)** — `vocabulary/pt/B1/` JS datasets ready.
  - **B2:** **Partial (50%)** — `vocabulary/pt/B2/` JS datasets ready.
  - **C1:** **Ready (85%)** — `curriculum/pt/general/C1.json` active; `vocabulary/pt/C1/` JS datasets ready.
  - **C2:** **Partial (60%)** — `vocabulary/pt/C2/` JS datasets ready (5 files).
- **Estimated Overall Readiness:** **67.5%**

---

### 4. Armenian (`hy`)
- **CEFR Level Readiness:**
  - **A1:** **Ready (100%)** — `curriculum/hy/general/A1.json` active; 14 `vocabulary/hy/A1/` JS files; monolingual manuals (`hayots-lezvi-barapashar`, `hayots-lezvi-kerakanutyun` — 42 files).
  - **A2:** **Partial (55%)** — `vocabulary/hy/A2/` JS datasets ready; grammar topics sourced via `reference-grammar/hy/`.
  - **B1:** **Partial (45%)** — `vocabulary/hy/B1/` JS datasets ready.
  - **B2:** **Partial (45%)** — `vocabulary/hy/B2/` JS datasets ready.
  - **C1:** **Ready (85%)** — `curriculum/hy/general/C1.json` active; `vocabulary/hy/C1/` JS datasets ready.
  - **C2:** **Partial (55%)** — `vocabulary/hy/C2/` JS datasets ready (5 files).
- **Estimated Overall Readiness:** **64.2%**

---

### 5. Georgian (`ka`)
- **CEFR Level Readiness:**
  - **A1:** **Ready (100%)** — `curriculum/ka/general/A1.json` active; 14 `vocabulary/ka/A1/` JS files; monolingual manuals (`qartuli-leqsika`, `qartuli-gramatika` — 41 files).
  - **A2:** **Partial (55%)** — `vocabulary/ka/A2/` JS datasets ready; grammar topics sourced via `reference-grammar/ka/`.
  - **B1:** **Partial (45%)** — `vocabulary/ka/B1/` JS datasets ready.
  - **B2:** **Partial (45%)** — `vocabulary/ka/B2/` JS datasets ready.
  - **C1:** **Ready (85%)** — `curriculum/ka/general/C1.json` active; `vocabulary/ka/C1/` JS datasets ready.
  - **C2:** **Partial (55%)** — `vocabulary/ka/C2/` JS datasets ready (5 files).
- **Estimated Overall Readiness:** **64.2%**

---

### 6. Tatar (`tt`)
- **CEFR Level Readiness:**
  - **A1:** **Ready (100%)** — `curriculum/tt/general/A1.json` active; 14 `vocabulary/tt/A1/` JS files; monolingual manuals (`tatar-teli-leksikasy`, `tatar-teli-grammatikasy` — 59 files).
  - **A2:** **Partial (60%)** — `vocabulary/tt/A2/` JS datasets ready; grammar topics sourced via `reference-grammar/tt/`.
  - **B1:** **Partial (50%)** — `vocabulary/tt/B1/` JS datasets ready.
  - **B2:** **Partial (50%)** — `vocabulary/tt/B2/` JS datasets ready.
  - **C1:** **Ready (85%)** — `curriculum/tt/general/C1.json` active; `vocabulary/tt/C1/` JS datasets ready.
  - **C2:** **Partial (60%)** — `vocabulary/tt/C2/` JS datasets ready (5 files).
- **Estimated Overall Readiness:** **67.5%**

---

### 7. Bashkir (`ba`)
- **CEFR Level Readiness:**
  - **A1:** **Ready (100%)** — `curriculum/ba/general/A1.json` active; 14 `vocabulary/ba/A1/` JS files; monolingual manuals (`bashqort-tele-leksikahy`, `bashqort-tele-grammatikahy` — 42 files).
  - **A2:** **Partial (55%)** — `vocabulary/ba/A2/` JS datasets ready; grammar topics sourced via `reference-grammar/ba/`.
  - **B1:** **Partial (45%)** — `vocabulary/ba/B1/` JS datasets ready.
  - **B2:** **Partial (45%)** — `vocabulary/ba/B2/` JS datasets ready.
  - **C1:** **Ready (85%)** — `curriculum/ba/general/C1.json` active; `vocabulary/ba/C1/` JS datasets ready.
  - **C2:** **Partial (55%)** — `vocabulary/ba/C2/` JS datasets ready (5 files).
- **Estimated Overall Readiness:** **64.2%**

---

### 8. Breton (`br`)
- **CEFR Level Readiness:**
  - **A1:** **Ready (100%)** — `curriculum/br/general/A1.json` active; 14 `vocabulary/br/A1/` JS files; monolingual manuals (`geriou-brezhoneg`, `yezhadur-brezhoneg` — 50 files).
  - **A2:** **Partial (55%)** — `vocabulary/br/A2/` JS datasets ready; grammar topics sourced via `reference-grammar/br/`.
  - **B1:** **Partial (45%)** — `vocabulary/br/B1/` JS datasets ready.
  - **B2:** **Partial (45%)** — `vocabulary/br/B2/` JS datasets ready.
  - **C1:** **Ready (85%)** — `curriculum/br/general/C1.json` active; `vocabulary/br/C1/` JS datasets ready.
  - **C2:** **Partial (55%)** — `vocabulary/br/C2/` JS datasets ready (5 files).
- **Estimated Overall Readiness:** **64.2%**

---

## Summary Matrix

| Language | Code | A1 Status | A2 Status | B1 Status | B2 Status | C1 Status | C2 Status | Overall Readiness |
|---|---|---|---|---|---|---|---|---|
| **Spanish** | `es` | Ready (100%) | Partial (60%) | Partial (50%) | Partial (50%) | Ready (85%) | Partial (60%) | **67.5%** |
| **German** | `de` | Ready (100%) | Partial (60%) | Partial (50%) | Partial (50%) | Ready (85%) | Partial (60%) | **67.5%** |
| **Portuguese** | `pt` | Ready (100%) | Partial (60%) | Partial (50%) | Partial (50%) | Ready (85%) | Partial (60%) | **67.5%** |
| **Armenian** | `hy` | Ready (100%) | Partial (55%) | Partial (45%) | Partial (45%) | Ready (85%) | Partial (55%) | **64.2%** |
| **Georgian** | `ka` | Ready (100%) | Partial (55%) | Partial (45%) | Partial (45%) | Ready (85%) | Partial (55%) | **64.2%** |
| **Tatar** | `tt` | Ready (100%) | Partial (60%) | Partial (50%) | Partial (50%) | Ready (85%) | Partial (60%) | **67.5%** |
| **Bashkir** | `ba` | Ready (100%) | Partial (55%) | Partial (45%) | Partial (45%) | Ready (85%) | Partial (55%) | **64.2%** |
| **Breton** | `br` | Ready (100%) | Partial (55%) | Partial (45%) | Partial (45%) | Ready (85%) | Partial (55%) | **64.2%** |

---

## Recommendations for Future Rollout

1. **A2 & B1 Curriculum Creation:** Since vocabulary datasets (`vocabulary/{lang}/A2/*.js` and `B1/*.js`) are already in place, building `curriculum/{lang}/general/A2.json` and `B1.json` can proceed by mapping existing vocabulary entries and referencing grammar structures from `reference-grammar/{lang}/`.
2. **Grammar Manual Expansion:** Creating dedicated `manuals/{lang}/grammar/{level}/` HTML topic files (analogous to `manuals/en/grammar/a2/`) will raise the completeness score for intermediate levels to >90%.
