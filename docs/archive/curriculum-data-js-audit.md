# Audit Report: `CURRICULUM` Object in `js/data/curriculum_data.js`

## Executive Summary

This report documents a read-only investigation into the usage of the `CURRICULUM` identifier exported/defined in `js/data/curriculum_data.js`.

**Recommendation**: **(c) It's dead code and should just be deleted with no migration needed.**

---

## 1. Call Sites of `CURRICULUM` Identifier

A complete search across all JavaScript files, HTML files (including inline scripts), CSS files, templates, and documentation in the codebase was performed for occurrences of the `CURRICULUM` identifier defined in `js/data/curriculum_data.js`.

### Findings
* **Definition site**:
  * `js/data/curriculum_data.js` (line 365): `var CURRICULUM = { ... };`

* **Active Call Sites**: **NONE**.
  * There are **0 JavaScript references** or call sites accessing `CURRICULUM` anywhere in `js/`, `apps/`, `practice/`, `templates/`, or HTML inline scripts.
  * *Note on unrelated occurrences*: The exact word "CURRICULUM" appears in HTML comment banners in `templates/events/long-reads-session-template.html` (`<!-- SESSION CURRICULUM BANNER -->`) and `apps/premium-events/nights/long-reads/sessions/long-reads/*.html`, as well as CSS class names (`.curriculum-list`, `.curriculum-container`). None of these reference or access the JavaScript global variable `CURRICULUM`.

* **`js/data/curriculum_data.js` script tags**:
  * `js/data/curriculum_data.js` is included via `<script>` tags in `reference-grammar/{lang}/` pages, `vocabulary/index.html`, and `print-grammar.html`.
  * In those files, the script is included solely for the `COURSES` map (to check course restriction codes such as `restrictedLevel = COURSES[code].level`) or `REFS` data. `CURRICULUM` itself is never read or referenced.

---

## 2. Live Site Course Rendering Architecture

### General Course Lessons Path
`js/core/engine.js` contains the `loadCurriculum(lang, level)` function:
```javascript
async loadCurriculum(lang, level) {
    ...
    const standardPath = `${prefix}curriculum/${lang}/general/${levelUp}.json`;
    ...
}
```
* **Production Path**: The live site dynamically fetches `curriculum/{lang}/general/{LEVEL}.json` at runtime (with fallbacks to `_v2.json` or legacy standalone curriculum scripts like `js/data/curriculum/en_a1.js` / `fr_b1.js`).
* **Practice Engines**: Interactive practice engines (e.g. `practice/types/vocabulary/vocabulary.js`) invoke `window.COSY.loadCurriculum(...)` which reads from JSON files under `curriculum/`.
* **Premium Course Pages**: Pages under `apps/premium-courses/general/{lang}/{LEVEL}.html` (and `apps/premium-courses/exam/{lang}/{LEVEL}.html`) also execute dynamic `fetch()` calls directly pointing to `curriculum/{lang}/{type}/{LEVEL}.json`.

### Is `CURRICULUM` from `curriculum_data.js` used anywhere?
**No.** `CURRICULUM` in `curriculum_data.js` is not used for premium course previews, course pickers, marketing pages, or `apps/premium-courses/`. All active pages and hubs draw directly from JSON files in `curriculum/`.

---

## 3. Reachability of Hardcoded French Content

Search results for the exact strings in the codebase:
* `"Opinions & Arguments"`: Found **only once** in `js/data/curriculum_data.js` (line 377).
* `"Podcast Style"`: Found **only once** in `js/data/curriculum_data.js` (line 416).

### Reachability Analysis
* Neither string appears in any HTML, JS template, course picker, marketing page, or `curriculum/fr/general/B1.json` / `curriculum/fr/spoken/` JSON files.
* Because `CURRICULUM` is never evaluated or referenced by any rendering script, this hardcoded content is **100% unreachable dead code** that is never seen or rendered by any user-facing page.
* Furthermore, the existing active `curriculum/fr/general/B1.json` file already defines valid B1 units ("Unité 1 : Nuancer sa pensée et exprimer des opinions" with subjonctif & cause/conséquence lessons) adhering strictly to the production `curriculum.schema.json` schema.

---

## Conclusion & Recommendation

### Recommendation: **(c) Dead code — delete with no migration needed**

1. The hardcoded `CURRICULUM` object in `js/data/curriculum_data.js` is an unreferenced legacy prototype object.
2. The French B1 unit in `curriculum_data.js` uses a non-standard legacy format (with embedded HTML/Markdown tips and custom schema keys) that does not match `curriculum.schema.json`, whereas `curriculum/fr/general/B1.json` already contains the authoritative, schema-compliant B1 units.
3. Deleting `CURRICULUM` from `js/data/curriculum_data.js` (or removing the file entirely if no other exports were needed) would have zero impact on any user-facing feature or practice engine.
