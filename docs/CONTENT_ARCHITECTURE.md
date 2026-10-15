# Content Architecture: Dual Grammar Systems & Linkage Protocol

> **Repository Note:** `COSYlanguages` is the 100% FREE, public entry point to the COSY ecosystem. All grammar systems, manuals, practice engines, and reference data in this repository are strictly free and open-access. Paid courses and gated portals belong exclusively in sibling repositories (`COSYplatform`, `COSYmanuals`).

This document defines the dual-system architecture for free grammar content across **COSYlanguages**. Both systems serve active, complementary roles and are designed to stay synchronized.

---

## 1. The Two Grammar Systems Explained

### System 1: Machine-Readable JSON Reference Layer (`reference-grammar/`)
- **Directory Structure:** `reference-grammar/{lang}/{morphology,syntax,phonology,particles}/*.json`
- **Purpose:** Pure, structured data files designed for algorithmic processing and client-side web application consumption.
- **Used By:**
  - `js/core/engine.js` (`COSY.loadMorphologyData`): Dynamic data loader for grammar practice engines.
  - `practice/types/vocabulary/vocabulary.js`: Generates interactive practice card drills on demand.
  - `js/data/phonology_data.js`: Loads reference phonology datasets at runtime.
  - `scripts/build_unified_index.py`: Parses all reference JSON entries into canonical globally unique search indexes (`data/index/{lang}_index.json`).

### System 2: Human-Facing CEFR HTML Manuals Layer (COSYmanuals)
- **Directory Structure:** All manuals live in COSYmanuals (`https://cosylanguages.github.io/COSYmanuals/manuals/{lang}/{grammar,vocabulary,communication}/{level}/...`)
- **Purpose:** Rich, level-calibrated interactive web textbook pages designed for student reading, self-study, and classroom instruction.
- **Features:**
  - Follows strict pedagogical standards (such as the 14-step rhythm in `GRAMMAR_STANDARD.md`).
  - Interactive UI widgets (`.mflip` mistake flip cards, `.checklist` persistent skill checks, `.quiz-panel` diagnostic quizzes).
  - High-contrast visual color coding for linguistic roles (Subject = Blue, Verb = Green, Object = Orange).

---

## 2. Canonical Linkage Protocol

To ensure seamless navigation between studying theory and doing interactive drills, both systems must be linked bidirectionally using standardized fields:

### Direction A: From JSON to HTML Manuals (`practice_links`)
Inside any item in `reference-grammar/{lang}/**/*.json`, include the `practice_links` array containing absolute COSYmanuals URLs pointing to the corresponding CEFR topic HTML page(s) in COSYmanuals:

```json
{
  "id": "be_present_simple",
  "label": "Verb 'To Be' (Present)",
  "practice_links": [
    "https://cosylanguages.github.io/COSYmanuals/manuals/en/grammar/a1/topics/to-be.html"
  ]
}
```

### Direction B: From HTML Manuals to Practice Engines (`.btn-practice-link`)
Inside every grammar topic page under `manuals/{lang}/grammar/{level}/topics/*.html`, place a practice CTA banner near the top with an anchor using the `.btn-practice-link` class pointing to the practice engine route:

```html
<div class="box practice-cta-banner">
  <div style="font-size:0.95rem; color:#132321;">
    <strong>🎯 Ready to test your skills?</strong> Reinforce this topic with interactive practice drills.
  </div>
  <a href="../../../../../practice/index.html?lang=en&cat=Grammar&level=starter&theme=to-be" class="btn-practice-link">🎯 Practice this →</a>
</div>

> **Engine Routing Note:** All grammar practice drills are handled unifiedly through `practice/hub.js` and `practice/types/vocabulary/vocabulary.js` via the `cat=Grammar` parameter and category selector. Separate `practice/types/grammar/` redirect stubs have been removed in favor of this single unified practice engine route.
```

---

## 3. Decision Guide for Contributors

When adding or updating grammar content, follow this guide:

| Task / Scenario | What to update? | Action Required |
| :--- | :--- | :--- |
| **Adding a new grammar topic** | **BOTH Systems** | 1. Add a machine-readable JSON item under `reference-grammar/{lang}/...`.<br>2. Create the CEFR HTML topic page under `manuals/{lang}/grammar/{level}/topics/`.<br>3. Add `practice_links` in JSON pointing to the HTML topic.<br>4. Add the practice CTA banner in HTML pointing to `practice/index.html`. |
| **Editing explanatory text, visual diagrams, or CCQs** | **HTML Manuals Only** | Edit the relevant topic file in `manuals/{lang}/grammar/{level}/topics/*.html`. |
| **Editing vocabulary examples or practice drill items** | **JSON Layer Only** | Update the corresponding dataset file under `reference-grammar/{lang}/...`. |
| **Creating new practice engine features or indexes** | **JSON Layer & Core JS** | Ensure new JSON fields conform to schema and update `js/core/engine.js` or `scripts/build_unified_index.py`. |

---

## 4. Header Language Panel Event & Persistence (`cosy:langchange`)

The application header (`js/core/engine.js`) manages global language selection via the pinned language panel.

### Persistence & Storage Key
- Pinned language selection is saved to `localStorage` under key `"cosy.pinnedLang"` (with compatibility mirrors in `"cosy_ui_lang"` and `"cosy_last_language"`).
- To retrieve the active pinned language at any time:
  ```javascript
  const lang = localStorage.getItem('cosy.pinnedLang') || 'en';
  ```

### Event Payload & Listening Guide
Whenever a user pins a language in the header language panel, or when the core engine initializes on page load, a custom event `"cosy:langchange"` is dispatched on `window` (and `document`).

- **Event Name:** `"cosy:langchange"`
- **Detail Structure:** `{ lang: string, pinned: boolean, initial?: boolean }`
- **Listening Code Snippet for UI Components:**
  ```javascript
  window.addEventListener('cosy:langchange', (event) => {
      const { lang } = event.detail;
      console.log(`Pinned language changed to: ${lang}`);
      // Re-render language-dependent components, update labels, or refresh UI state
  });
  ```
