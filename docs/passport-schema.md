# COSY Passport Data Schema Specification

The **COSY Passport** is a unified, offline-first JSON progress and badge exchange format shared across all applications in the COSYlanguages ecosystem. It allows learners to export, backup, and sync their learning achievements seamlessly across decoupled products without requiring centralized user accounts or server backends.

---

## 1. JSON Data Structure

Every COSY Passport JSON file MUST conform to the following schema:

```json
{
  "cosy_passport_version": 1,
  "language": "en",
  "updated": "2025-01-15T12:30:00.000Z",
  "progress": [
    {
      "source": "COSYlanguages",
      "item": "grammar.a1.to_be",
      "value": 100
    },
    {
      "source": "COSYtools",
      "item": "fr-conjugeur.avoir.mastery",
      "value": "proficient"
    }
  ],
  "badges": [
    "en_starter_master",
    "fr_verb_hero",
    "market_explorer"
  ]
}
```

---

## 2. Field Definitions

| Field Name | Type | Description / Rules |
| :--- | :--- | :--- |
| `cosy_passport_version` | `integer` | Schema version identifier. Current version is `1`. |
| `language` | `string` | Active ISO language code. MUST match one of the codes listed in [`project/docs/LANGUAGES.md`](../project/docs/LANGUAGES.md). |
| `updated` | `string` | ISO 8601 formatted timestamp (e.g. `2025-01-15T12:30:00.000Z`) indicating the last time the passport was modified or exported. |
| `progress` | `array[object]` | Array of progress entries. Each entry object contains `source`, `item`, and `value`. |
| `badges` | `array[string]` | Array of unique string IDs representing unlocked achievements and badges across the ecosystem. |

### Progress Entry Object

| Sub-field | Type | Description |
| :--- | :--- | :--- |
| `source` | `string` | The product repository name that created the entry. MUST be one of the allowed source names listed below. |
| `item` | `string` | Dot-path identifier representing the topic, exercise, or achievement (e.g., `grammar.a1.to_be`, `conjugator.etre`). |
| `value` | `number \| string` | Progress metric, score, mastery level, or completion state. |

---

## 3. Allowed Source Names & App Isolation Policy

### Allowed Source Names
The `source` field MUST strictly be one of the official ecosystem application repositories:

1. `COSYlanguages` — Primary textbook portal, CEFR courses, and grammar manuals.
2. `COSYtools` — Standalone linguistic reference engines (conjugators, gender trainers, prepositional regimes).
3. `COSYgames` — Minigames, card decks, and vocabulary practice engines.
4. `COSYevents` — Thematic speaking clubs and multimedia event night session records.

### Isolation & Non-Destructive Import Policy

> **CRITICAL RULE:**
> Each application MUST only read and modify progress entries matching its own `source` name.
>
> When importing an existing COSY Passport JSON file, an application **MUST NEVER** overwrite, delete, or drop entries belonging to other sources (`unknown-source entries`).
>
> On export, the application merges its local new progress and badges into the existing passport data, retaining all entries from other source applications intact.

---

## 4. Supported Language Codes

The `language` field MUST match a valid ISO language code registered in [`project/docs/LANGUAGES.md`](../project/docs/LANGUAGES.md):

`en` · `fr` · `it` · `ru` · `el` · `es` · `de` · `pt` · `hy` · `ka` · `tt` · `ba` · `br`

---

## 5. JavaScript Implementation Reference

An official zero-dependency ES module implementation is provided at [`shared/js/passport.js`](../shared/js/passport.js), exporting `exportPassport()`, `importPassport()`, `downloadPassport()`, and `loadPassportFromFile()`.
