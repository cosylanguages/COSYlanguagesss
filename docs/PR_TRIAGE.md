# Open Pull Request Triage Matrix (`docs/PR_TRIAGE.md`)

This document provides a complete, authoritative triage report for **all 34 open pull requests** in the `COSYlanguages` repository, derived directly from GitHub API data and git branch status on `main`.

> **Rule Directives**:
> - **No branch/PR modifications**: Do not merge, rebase, or close any PRs or branches in this task.
> - **Vocabulary Deletion Guard**: Do NOT recommend merging any PR that deletes `vocabulary/` files unless `COSYdata` already holds the exact entries (audited for B1–C2 across `ba`, `br`, `cv`, `de`, `es`, `hy`, `ka`, `pt`, `tt`).
> - **Blog Architecture**: Blog direction is Vogue Gazette magazine; Blogger-style restyles are dropped.

---

## 1. Summary Triage Grouped by Theme

### 📰 Blog Theme (12 PRs)

| PR # | Title | Head Branch | Author | Updated | Mergeable | Files Changed | Ancestor in `main` | Recommendation | One-Line Reason |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1568** | Add BLOG_PLAN.md and docs/BLOG_AUTHORING.md for magazine blog strategy | `docs/blog-plan-and-authoring-guide-3369901012941800048` | `damirmoskov` | 2026-10-15 | clean | 4 | False | **merge** | Adds core strategy and authoring docs for magazine blog architecture. |
| **#1559** | Verify Newsstand & Flipbook Reader Interaction & Fix Layout/Overflow Bugs | `jules/newsstand-flipbook-reader-verification-3631324704500175417` | `damirmoskov` | 2026-10-12 | unknown | 34 | False | **close-superseded** | Newsstand and flipbook bug fixes are already consolidated on main. |
| **#1554** | build(blog): update workflow triggers, document dependencies, and add stale CI guard | `fix/blog-build-workflow-triggers-and-stale-ci-guard-15788587198201346850` | `damirmoskov` | 2026-10-10 | unknown | 50 | False | **rebase** | Workflow trigger and CI guard improvements need clean rebase on main. |
| **#1540** | Blog json source of truth 7546565836593026302 | `blog-json-source-of-truth-7546565836593026302` | `cosylanguages` | 2026-10-08 | unknown | 98 | False | **close-superseded** | JSON source-of-truth pipeline is already integrated on main. |
| **#1528** | Verify blog magazine issues 13247521282894244804 | `verify-blog-magazine-issues-13247521282894244804` | `cosylanguages` | 2026-10-07 | unknown | 54 | False | **close-superseded** | Magazine issue verification logic is already integrated on main. |
| **#1526** | Feature/blog cosymagazine redesign 15012565829454879171 | `feature/blog-cosymagazine-redesign-15012565829454879171` | `cosylanguages` | 2026-10-07 | unknown | 44 | False | **close-superseded** | COSYmagazine tokens and templates are integrated into main. |
| **#1510** | Feature/blog newspaper vogue styling 7977824811727220811 | `feature/blog-newspaper-vogue-styling-7977824811727220811` | `cosylanguages` | 2026-10-03 | unknown | 25 | False | **close-superseded** | Broadsheet font hierarchy and Vogue styling are integrated into main. |
| **#1508** | Feature/flipbook blog magazine 798519488841142537 | `feature/flipbook-blog-magazine-798519488841142537` | `cosylanguages` | 2026-10-03 | unknown | 29 | False | **close-superseded** | Flipbook magazine reader component is fully integrated on main. |
| **#1492** | Add intermediate plateau blog posts 4438663174452280948 | `add-intermediate-plateau-blog-posts-4438663174452280948` | `cosylanguages` | 2026-09-30 | unknown | 53 | False | **rebase** | Adds B1-B2 plateau posts; needs rebase into `blog/posts/*.json` pipeline. |
| **#1477** | Feat/blog blogger vogue redesign 4927632515806823024 | `feat/blog-blogger-vogue-redesign-4927632515806823024` | `cosylanguages` | 2026-09-29 | unknown | 8 | False | **close-superseded** | Attempted Blogger-style redesign; dropped per magazine decision. |
| **#1450** | feat(blog): consolidate Top 100 A0-A1 master knowledge chains into single source | `feat/unified-top-100-a0-a1-blog-master-guide-10189015015062468556` | `damirmoskov` | 2026-09-25 | unknown | 18 | False | **rebase** | Master Top 100 guide updates need rebase against JSON post schema. |
| **#1439** | Update To Be phrase table in blog/top-10-verbs.html | `feat/top-10-verbs-be-phrase-table-update-15757672762705553573` | `damirmoskov` | 2026-09-23 | unknown | 1 | False | **rebase** | Phrase table fix should be applied to `blog/posts/top-10-verbs.json`. |
| **#1388** | Feat/top 100 english blog page 15674311753884324214 | `feat/top-100-english-blog-page-15674311753884324214` | `cosylanguages` | 2026-09-09 | unknown | 14 | False | **close-superseded** | Superceded by canonical JSON post `blog/posts/top-100-a0-a1-english.json`. |

---

### 📚 Vocabulary Theme (5 PRs)

| PR # | Title | Head Branch | Author | Updated | Mergeable | Files Changed | Ancestor in `main` | Recommendation | One-Line Reason |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1518** | Add French CEFR A1-C2 Vocabulary Confusion Practices | `feat/french-vocab-confusion-practice-1642308601452143546` | `damirmoskov` | 2026-10-05 | unknown | 0 | False | **close-stale** | Empty diff branch containing no file changes. |
| **#1430** | Audit and compare COSYlanguages vocabulary vs COSYdata | `jules-vocab-cosydata-comparison-5656072142944109703` | `damirmoskov` | 2026-09-18 | unknown | 488 | False | **keep-open** | Deletes local `vocabulary/` files; blocked until COSYdata coverage for secondary languages (`ba`, `br`, `cv`, `de`, `es`, `hy`, `ka`, `pt`, `tt` B1–C2) is verified. |
| **#1395** | Align A0-A1 Curriculum Vocabulary and Master Specification Scope | `fix-a1-curriculum-vocabulary-scope-2092646678447954248` | `damirmoskov` | 2026-09-10 | unknown | 5 | False | **rebase** | Scope alignment for A0-A1 vocab needs rebase on main. |
| **#1390** | Add English A0-A1 vocabulary benchmark dataset | `feat/add-a0-a1-english-benchmark-dataset-2133200679787163975` | `damirmoskov` | 2026-09-09 | unknown | 2 | False | **rebase** | Benchmark dataset additions align with COSYdata single source policy. |
| **#1387** | Enhance french pronunciation marathon 14542064798141557236 | `enhance-french-pronunciation-marathon-14542064798141557236` | `cosylanguages` | 2026-09-09 | unknown | 6 | False | **rebase** | Enhances French marathon pronunciation dataset. |

---

### 🧩 Practice Theme (3 PRs)

| PR # | Title | Head Branch | Author | Updated | Mergeable | Files Changed | Ancestor in `main` | Recommendation | One-Line Reason |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1522** | Jules 8117694110397553214 bb873f0f | `jules-8117694110397553214-bb873f0f` | `cosylanguages` | 2026-10-06 | unknown | 6 | False | **close-stale** | Unnamed automated test artifact branch without descriptive title. |
| **#1448** | docs: audit practice data sources in PRACTICE_DATA_SOURCES.md | `docs/audit-practice-data-sources-3116347280921701825` | `damirmoskov` | 2026-09-24 | unknown | 5 | False | **rebase** | Practice data sources documentation audit needs clean rebase. |
| **#1403** | Implement lightweight audience preferences & accessibility settings | `feature/audience-preferences-14668457887778088221` | `damirmoskov` | 2026-09-10 | unknown | 6 | False | **rebase** | Adds accessibility and theme controls to Practice Hub UI. |

---

### 📖 Manuals Theme (4 PRs)

| PR # | Title | Head Branch | Author | Updated | Mergeable | Files Changed | Ancestor in `main` | Recommendation | One-Line Reason |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1436** | Safety Gate STOP: COSYmanuals migration check 1d failed | `jules-15005667298304769991-b45a3cd5` | `damirmoskov` | 2026-09-21 | unknown | 0 | False | **close-stale** | Failed safety gate test runner artifact branch with 0 changed files. |
| **#1372** | Standardize English Grammar Manual pages to mandatory 14-step CELTA rhythm | `feature/standardize-english-grammar-manuals-13203440932706059881` | `damirmoskov` | 2026-09-08 | unknown | 196 | False | **keep-open** | English grammar manual standardization; requires review before upstream migration. |
| **#1369** | Retrofit English Grammar Manuals to Full 14-Step CELTA Standard | `feat/english-grammar-manuals-celta-retrofit-17300343118724441165` | `damirmoskov` | 2026-09-08 | unknown | 205 | False | **close-superseded** | Superseded by consolidated PR #1372 CELTA standardization. |
| **#1367** | Migrate manuals/ directory to standardized ISO language-coded structure | `migrate-manuals-structure-3243155735279105560` | `damirmoskov` | 2026-09-07 | unknown | 545 | False | **rebase** | ISO taxonomy restructuring for manuals directory. |

---

### 🧭 Navigation & SSO Theme (3 PRs)

| PR # | Title | Head Branch | Author | Updated | Mergeable | Files Changed | Ancestor in `main` | Recommendation | One-Line Reason |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1495** | Fix header nav responsive overflow 5356912394046111181 | `fix-header-nav-responsive-overflow-5356912394046111181` | `cosylanguages` | 2026-09-30 | unknown | 6 | False | **rebase** | Header navigation overflow fix for mobile devices. |
| **#1472** | Cleanup apps/premium-courses references and retain public courses routes | `jules-pr1-premium-courses-cleanup-3981575547683402273-9795636165491137636` | `damirmoskov` | 2026-09-29 | unknown | 0 | False | **close-stale** | Empty diff branch containing no file changes. |
| **#1464** | Improve consolidated navigation 12046062314604364391 | `improve-consolidated-navigation-12046062314604364391` | `cosylanguages` | 2026-09-28 | unknown | 5 | False | **rebase** | Consolidated cross-repo navigation links update. |

---

### 🔍 Audits Theme (4 PRs)

| PR # | Title | Head Branch | Author | Updated | Mergeable | Files Changed | Ancestor in `main` | Recommendation | One-Line Reason |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1566** | docs: add AUDIT.md repository audit report | `jules-13277118395585798653-50acd497` | `damirmoskov` | 2026-10-14 | unknown | 1 | False | **rebase** | Repository status audit report file. |
| **#1458** | Repository Inventory Audit | `jules-7880906351158507327-04552740` | `damirmoskov` | 2026-09-26 | unknown | 0 | False | **close-stale** | Empty audit branch with 0 changed files. |
| **#1405** | PR Triage & Resolution Report (pr-triage-report.md) | `pr-triage-hygiene-report-14858541703229402386` | `damirmoskov` | 2026-09-11 | unknown | 2 | False | **close-superseded** | Legacy PR triage report; superseded by current `docs/PR_TRIAGE.md`. |
| **#1366** | Add design audit checklist and shared design tokens | `design/foundations` | `damirmoskov` | 2026-09-07 | unknown | 2 | False | **rebase** | Shared design tokens checklist and guidelines. |

---

### 🛠️ Other Theme (3 PRs)

| PR # | Title | Head Branch | Author | Updated | Mergeable | Files Changed | Ancestor in `main` | Recommendation | One-Line Reason |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1565** | CSS Token Harmonization and Public Styles Cleanup | `jules-17087916354155451257-127d04d1` | `damirmoskov` | 2026-10-14 | unknown | 14 | False | **rebase** | Public CSS token cleanup across core stylesheets. |
| **#1545** | feat: update SEO basics, sitemap, JSON-LD, LICENSE, and purge COSYworld | `jules/seo-and-ecosystem-jan2026-5256108727434985616` | `damirmoskov` | 2026-10-09 | unknown | 165 | False | **rebase** | SEO metadata, sitemap updates, and COSYworld purging across site. |
