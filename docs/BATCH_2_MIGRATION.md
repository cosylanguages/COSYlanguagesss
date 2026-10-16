# Batch 2 Ecosystem Migration Strategy & Execution Plan

This document details the extraction and migration plan for **Batch 2**, moving non-hub features into standalone repositories.

---

## 1. Batch 2 Scope Overview

While **Batch 1** prepared and isolated the core landing portal (**Hub Core**), **Batch 2** handles the modular extraction of the remaining sub-systems:

1. **`practice/` (Practice Engine & Drills)** -> `COSYpractice`
2. **`blog/` (Vogue Gazette & Podcast Desk)** -> `COSYblog`
3. **`vocabulary/` (Lexical Data Canon)** -> `COSYdata`
4. **`print-studio/` (Tactile Offline Printable Tools)** -> `COSYstudio`
5. **`project/` & Python Scripts (Internal Tooling)** -> `COSYinternal` / `COSYtools`

---

## 2. Detailed Sub-System Extraction Rules

### A. Practice Engine (`practice/`)
* **Target Repo**: `COSYpractice` (or SPA under React + Vite).
* **Current State**: Modular engine (`practice/_engine/`), ~364 standalone `.js` grammar confusion topic files, cognitive immersion engine (`cognitive-immersion.html`).
* **Migration Actions**:
  - Convert global script topic `.js` files into lazily loaded JSON schemas.
  - Decouple relative links to the main hub (`/index.html`) using standard environment base URLs (`COSY_ECOSYSTEM_URLS.home`).
  - Maintain service worker offline practice capabilities.

### B. Blog Gazette & Podcast Desk (`blog/`)
* **Target Repo**: `COSYblog`.
* **Current State**: SSG build pipeline using `scripts/build-blog.js`, source JSONs in `blog/posts/*.json`, flipbook page-turn engine (`js/pages/flipbook.js`), and COSY Stage Mode (`blog/js/stage/`).
* **Migration Actions**:
  - Keep JSON source files as canonical SSG input.
  - Implement CI static build action (`blog-build.yml`) to emit prerendered static HTML pages for SEO without committing generated artifacts to source control.
  - Paginate `blog/index.html` and generate Top 100 lists directly from `COSYdata`.

### C. Vocabulary Dataset (`vocabulary/`)
* **Target Repo**: `COSYdata`.
* **Current State**: 690 vocabulary JSON/JS dataset files spanning 14 target languages.
* **Migration Actions**:
  - COSYdata is the single source of truth (`https://github.com/cosylanguages/COSYdata`).
  - All web components (`js/core/engine.js`, `vocabulary/index.html`, print tools) now consume data remotely via `COSY.loadLanguageData` from `COSYdata`.
  - Local `vocabulary/` datasets are safe to remove from the Hub repo once remote endpoint verification is 100% complete.

### D. Print Studio (`print-studio/`)
* **Target Repo**: `COSYstudio`.
* **Current State**: Offline printable compilers (`print-cards.html`, `print-zine.html`, `print-box.html`, `print-boardgame.html`, `print-grammar.html`, `monthly-zine-issue-1.html`).
* **Migration Actions**:
  - Isolate heavy PDF rendering dependencies (`jspdf`, `html2canvas`) into `COSYstudio`.
  - Ensure print stylesheets (`css/print.css`) are standalone.

### E. Internal Tooling (`project/` & Python Scripts)
* **Target Repo**: `COSYinternal` / `COSYtools`.
* **Current State**: 161 Python audit scripts, curriculum builders, and documentation files under `project/` and `scripts/`.
* **Migration Actions**:
  - Move developer-only scripts (`project/scripts/`, `scripts/audits/`, `scripts/build_*.py`) into an internal developer repo.
  - Retain only build/check scripts required for CI (`scripts/check-footer.js`, `scripts/check-js-syntax.js`, `scripts/check-names.js`, `scripts/smoke-pages.js`).
