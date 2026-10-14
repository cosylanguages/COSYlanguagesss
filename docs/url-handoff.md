# COSY Inter-App URL Handoff Specification

This specification defines the standard URL query parameters for seamless cross-application handoffs across all products in the COSYlanguages ecosystem (`COSYlanguages`, `COSYtools`, `COSYworld`, `COSYgames`, `COSYevents`).

Every `COSY*` application SHOULD recognize these standard query parameters when present on page load and MUST ignore them gracefully when absent or unrecognized.

---

## 1. Standard Query Parameters

| Parameter | Type | Valid Values | Description |
| :--- | :--- | :--- | :--- |
| `lang` | `string` | ISO language code matching [`LANGUAGES.md`](../project/docs/LANGUAGES.md) | Target learning language (e.g. `en`, `fr`, `it`, `ru`, `el`, `es`, `de`, `pt`, `hy`, `ka`, `tt`, `ba`, `br`). |
| `level` | `string` | CEFR level code or ID | Learner level (`A1`, `A2`, `B1`, `B2`, `C1`, `C2` or `starter`, `elementary`, `intermediate`, `upper_intermediate`, `advanced`, `proficiency`). |
| `topic` | `string` | Freeform slug string | Theme, deck, scene, or vocabulary topic slug matching [`SCHEMA.md`](../project/docs/SCHEMA.md) (e.g. `food`, `greetings`, `numbers`, `to_be`, `prepositions_place`). |

---

## 2. Parameter Recognition & Fallback Policy

### Recognition Strategy
Applications parse `window.location.search` during initialization using standard `URLSearchParams`:

```javascript
const params = new URLSearchParams(window.location.search);
const lang = params.get('lang');
const level = params.get('level');
const topic = params.get('topic');
```

### Fallback Policy
1. **Graceful Degradation:** If any parameter is missing, malformed, or invalid for the target application, the app MUST ignore the invalid parameter and fall back to its default landing state or saved user preference.
2. **No Failure:** Parameter parsing MUST NOT throw uncaught exceptions or break page initialization.

---

## 3. Standard Live Base URLs

Outbound links between ecosystem apps must point to the canonical GitHub Pages locations:

- **COSYtools:** `https://cosylanguages.github.io/COSYtools/`
- **COSYgames:** `https://cosylanguages.github.io/COSYgames/`
- **COSYworld:** `https://cosylanguages.github.io/COSYworld/`
- **COSYevents:** `https://cosylanguages.github.io/COSYevents/`

### Example Handoff URLs

- `https://cosylanguages.github.io/COSYtools/fr-conjugeur/?lang=fr&level=A2&topic=verbs_regular`
- `https://cosylanguages.github.io/COSYgames/?lang=en&level=B1&topic=food`
- `https://cosylanguages.github.io/COSYworld/?lang=it&level=A1&topic=market`
