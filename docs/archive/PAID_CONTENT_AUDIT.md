RESOLVED [2026-09-12]: apps/premium-courses/ and entitlements.js were removed once COSYplatform's dual-view app went live. Kept here for history.

# Paid Content & Repo Boundary Audit

## Executive Summary
This document provides a comprehensive inventory and audit of paid/course content, entitlements/passcode infrastructure, undocumented top-level directories, and root temporary files in `COSYlanguages`.

Per the architecture direction, `COSYlanguages` is the **100% FREE, public entry point** to the COSY ecosystem. Paid courses, conversational events, and gated portals belong in sibling repositories (`COSYplatform` / `COSYmanuals` / `COSYevents`). None of the paid course or passcode code is deleted in this task; this audit records their location and state for future migration.

---

## 1. Inventory of Paid/Course Content & Entitlements Infrastructure

### A. Paid Course Files (`apps/premium-courses/`) - 149 files
All files under `apps/premium-courses/` represent structured CEFR course tracks (General, Spoken, Professional, Travelling, Relocation, Exam Prep):

- `apps/premium-courses/_coming_soon/README.md`
- `apps/premium-courses/css/courses.css`
- `apps/premium-courses/index.html`
- `apps/premium-courses/manifest.json`
- `apps/premium-courses/package.json`
- `apps/premium-courses/sw.js`
- `apps/premium-courses/exam/index.html`
  - `apps/premium-courses/exam/en/` (`B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/exam/fr/` (`B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/exam/it/` (`B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/exam/ru/` (`B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
- `apps/premium-courses/general/index.html`
  - `apps/premium-courses/general/el/` (`A1.html`, `A2.html`, `B1.html`, `index.html`)
  - `apps/premium-courses/general/en/` (`A1.html`, `A2.html`, `B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/general/fr/` (`A1.html`, `A2.html`, `B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/general/it/` (`A1.html`, `A2.html`, `B1.html`, `B2.html`, `index.html`)
  - `apps/premium-courses/general/ru/` (`A1.html`, `A2.html`, `B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
- `apps/premium-courses/professional/index.html`
  - `apps/premium-courses/professional/el/` (`B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/professional/en/` (`B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/professional/fr/` (`B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/professional/it/` (`B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/professional/ru/` (`B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
- `apps/premium-courses/relocation/index.html`
  - `apps/premium-courses/relocation/el/` (`A2.html`, `B1.html`, `B2.html`, `C1.html`, `index.html`)
  - `apps/premium-courses/relocation/en/` (`A2.html`, `B1.html`, `B2.html`, `C1.html`, `index.html`)
  - `apps/premium-courses/relocation/fr/` (`A2.html`, `B1.html`, `B2.html`, `C1.html`, `index.html`)
  - `apps/premium-courses/relocation/it/` (`A2.html`, `B1.html`, `B2.html`, `C1.html`, `index.html`)
  - `apps/premium-courses/relocation/ru/` (`A2.html`, `B1.html`, `B2.html`, `C1.html`, `index.html`)
- `apps/premium-courses/spoken/index.html`
  - `apps/premium-courses/spoken/el/` (`A1.html`, `A2.html`, `B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/spoken/en/` (`A1.html`, `A2.html`, `B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/spoken/fr/` (`A1.html`, `A2.html`, `B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/spoken/it/` (`A1.html`, `A2.html`, `B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
  - `apps/premium-courses/spoken/ru/` (`A1.html`, `A2.html`, `B1.html`, `B2.html`, `C1.html`, `C2.html`, `index.html`)
- `apps/premium-courses/travelling/index.html`
  - `apps/premium-courses/travelling/el/` (`A1.html`, `A2.html`, `B1.html`, `index.html`)
  - `apps/premium-courses/travelling/en/` (`A1.html`, `A2.html`, `B1.html`, `index.html`)
  - `apps/premium-courses/travelling/fr/` (`A1.html`, `A2.html`, `B1.html`, `index.html`)
  - `apps/premium-courses/travelling/it/` (`A1.html`, `A2.html`, `B1.html`, `index.html`)
  - `apps/premium-courses/travelling/ru/` (`A1.html`, `A2.html`, `B1.html`, `index.html`)

### B. Entitlements & Passcode Infrastructure
- `shared/js/core/entitlements.js`: Centralized client-side SHA-256 cryptographic passcode verification engine and access check API.
- `js/core/passcodes.js`: Legacy backward-compatibility wrapper delegating to `shared/js/core/entitlements.js`.
- `project/tests/entitlements.spec.ts`: Test suite verifying entitlement key hashing and unlock mechanisms.

---

## 2. Top-Level Directory Audit & Recommendations

1. **`reference-grammar/`**: Machine-readable JSON grammar reference datasets (morphology, syntax, phonology, particles) across 13 languages.
   - *Recommendation:* Move to `COSYmanuals` (restricted curriculum/textbook repo) or retain as shared engine data.
2. **`wordlists/`**: Unstructured text wordlist files under `docs/archive/wordlists/genera course/`.
   - *Recommendation:* Move to `COSYmanuals` or delete as superseded by structured `vocabulary/` datasets.
3. **`comparative/`**: 14-language comparative grammar atlas matrix HTML page (`comparative/index.html`) and datasets (`comparative/data/`).
   - *Recommendation:* Keep here in `COSYlanguages` as a free public reference tool.
4. **`hybrid/`**: "Beyond the Screen" hybrid section (`index.html`, `bridge.html`, `zine.html`, `radio.html`) with client-side QR generator and offline study materials.
   - *Recommendation:* Keep here in `COSYlanguages` as free hybrid learning resources.
5. **`communication/`**: Functional communication authoring standards and JSON schemas (`COMMUNICATION_STANDARD.md`, `_schema/`).
   - *Recommendation:* Move to `COSYmanuals` alongside curriculum datasets.
6. **`blog/`**: Free public SEO articles and Top 100 A0-A1 vocabulary pages across 13 target languages.
   - *Recommendation:* Keep here in `COSYlanguages` as free public content.
7. **`about/`**: Public platform overview and methodology landing page (`about/index.html`).
   - *Recommendation:* Keep here in `COSYlanguages`.

---

## 3. Root Junk Files & Cleanup Status

- `test.tar.gz`: Temporary test archive (109 bytes). **Deleted**.
- `missing-from-inventory.json`: Temporary inventory comparison output. **Deleted**.
- `batch3_files.txt`: Temporary batch list text file. **Deleted**.
- `target_files.txt`: Temporary target list text file. **Deleted**.
- `axe_violations_temp.json`: Verified absent on disk (ignored via `.gitignore`).
- Stray backtick file (`manuals/``` `): Verified absent on disk in `manuals/`.
