# Open Pull Request Triage & Strategy (`docs/PR_TRIAGE.md`)

This document provides a comprehensive triage analysis and strategic merge/rebase/close roadmap for all open pull requests across the `COSYlanguages` repository.

> **Directive Reminder**: In accordance with core project directives, **do not merge, rebase, or close any open PRs or branches** during this task. This document serves as the official decision matrix for future execution.

---

## 1. Summary Triage Matrix

| PR # | Branch Name / Topic | Proposed Action | Conflict Status | Relation to Strategy & Architecture Plan |
| :--- | :--- | :--- | :--- | :--- |
| **#1430** | `origin/migrate-vocab-loading-cosydata-3301091516354408821`<br>*(Vocabulary Migration)* | **REBASE & MERGE** | Low Conflict | Migrates local vocabulary loading to fetch directly from `COSYdata` single source of truth. Aligns with central data architecture. |
| **#1472** | `origin/cleanup/remove-paid-content-and-entitlements-12839068224288745357`<br>*(Premium Courses Cleanup)* | **REBASE & MERGE** | Clean / No Conflict | Removes legacy gated course stubs and redirects premium course links to `COSYplatform`. Aligns with domain separation. |
| **#1477** | `origin/feat/top-100-english-blog-page-15674311753884324214`<br>*(English Top 100 Post)* | **REBASE FIRST** | Moderate Conflict | Contains English Top 100 article updates. Must be rebased against `main` to convert legacy raw HTML into `blog/posts/top-100-a0-a1-english.json`. |
| **#1508** | `origin/feat/blog-index-redesign-broadsheet-blogger-3356564148501542403`<br>*(Blogger Broadsheet)* | **CLOSE / SUPERSEDED** | Heavy Conflict | Attempted Blogger-style broadsheet restyle. Superseded by the Vogue Gazette magazine newsstand architecture on `main`. |
| **#1510** | `origin/feat/classic-blogger-restyle-13473923240625020648`<br>*(Classic Blogger Restyle)* | **CLOSE / SUPERSEDED** | Heavy Conflict | Attempted classic Blogger restyle. Superseded by the Vogue Gazette magazine architecture on `main`. |
| **#1526** | `origin/feat/blog-blogger-vogue-redesign-4927632515806823024`<br>*(Hybrid Blogger-Vogue)* | **CLOSE / SUPERSEDED** | Heavy Conflict | Attempted hybrid Blogger-Vogue layout. Superseded by single-source JSON magazine layout on `main`. |
| **#1528** | `origin/feat/blog-magazine-flipbook-newsstand-2961654914032171879`<br>*(Magazine Flipbook)* | **INTEGRATED ON MAIN** | Fully Merged / Superseded | Core 3D flipbook newsstand and magazine issue spreads are integrated into `main`. Safe to close/retire branch. |
| **#1540** | `origin/feature/blog-cosymagazine-redesign-15012565829454879171`<br>*(COSYmagazine Styling)* | **INTEGRATED ON MAIN** | Fully Merged / Superseded | COSYmagazine design system tokens and Vogue templates are integrated into `main`. Safe to close/retire branch. |
| **#1554** | `origin/feature/blog-cover-hero-redesign-15046963742816532331`<br>*(Cover Hero Redesign)* | **INTEGRATED ON MAIN** | Fully Merged / Superseded | Cover hero redesign and procedural SVG covers are active on `main`. Safe to close/retire branch. |
| **#1559** | `origin/feature/blog-newspaper-vogue-styling-7977824811727220811`<br>*(Newspaper Vogue)* | **INTEGRATED ON MAIN** | Fully Merged / Superseded | Broadsheet font hierarchy and Gazette grid layout integrated into `main`. Safe to close/retire branch. |

---

## 2. Detailed PR Analysis

### 2.1 Vocabulary Migration PR #1430
- **Branch**: `origin/migrate-vocab-loading-cosydata-3301091516354408821`
- **Scope**: Replaces local `vocabulary/{lang}/*.js` dataset loading in `js/core/engine.js` and `practice/hub.js` with remote fetches from `COSYdata` (`window.COSY.loadLanguageData`).
- **Conflict Status**: Minimal conflict with `main`.
- **Action**: **Rebase & Merge**. This completes the deprecation of local legacy vocabulary files and enforces `COSYdata` as the canonical source of truth for vocabulary.

### 2.2 Premium Courses Cleanup PR #1472
- **Branch**: `origin/cleanup/remove-paid-content-and-entitlements-12839068224288745357`
- **Scope**: Cleans up legacy gated course templates in `apps/premium-courses/` and updates ecosystem navigation to route paid course inquiries directly to `COSYplatform`.
- **Conflict Status**: Clean.
- **Action**: **Rebase & Merge**. Essential for maintaining strict boundary separation between public `COSYlanguages` assets and gated `COSYplatform` content.

### 2.3 Blog PRs Analysis (#1477, #1508, #1510, #1526, #1528, #1540, #1554, #1559)

1. **Content Branch (#1477)**:
   - **PR #1477** (`feat/top-100-english-blog-page-15674311753884324214`): Focuses on expanding the English Top 100 vocabulary article.
   - **Recommendation**: **Rebase First**. Convert any raw HTML/Markdown changes in this branch into the canonical `blog/posts/top-100-a0-a1-english.json` schema file before merging into `main`.

2. **Superseded Blogger Restyle Branches (#1508, #1510, #1526)**:
   - **PR #1508**, **PR #1510**, **PR #1526**: These branches attempted to drop or blend the Vogue/Gazette magazine layout in favor of single-column Blogger restyles.
   - **Decision**: Per project decision, the blog stays in the magazine direction (Vogue/Gazette spreads, 3D flipbook, Stage Mode, procedural covers). The Blogger restyle is dropped.
   - **Recommendation**: **Close without merging**.

3. **Integrated Magazine Feature Branches (#1528, #1540, #1554, #1559)**:
   - **PR #1528**, **PR #1540**, **PR #1554**, **PR #1559**: These PRs introduced the core 3D flipbook spreads, magazine newsstand filters, procedural SVG covers, and Vogue design system tokens (`blog/css/tokens.css`, `blog/css/magazine-templates.css`).
   - **Status**: The functionality from these PRs has already been consolidated and merged into `main`.
   - **Recommendation**: **Mark as superseded / close**.
