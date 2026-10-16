# Ecosystem Migration Guide & Repositories Blueprint

This document outlines the full repository split plan for migrating **COSYlanguages** into clean, single-responsibility repositories across the ecosystem.

---

## 1. Explanation of `hybrid/` and `comparative/` Sections

### `hybrid/` ("Beyond the Screen 🌿")
* **Purpose**: Houses offline-online community and tactile learning initiatives. Connects digital practice with paper zines, QR tools, and podcasts.
* **Components**:
  - `hybrid/index.html`: Hub landing page explaining the online ↔ offline habit loop.
  - `hybrid/bridge.html`: Pure client-side QR Code Generator widget (`QRCode.js`) for generating printable QR stickers for practice decks, speaking clubs, and pocket zines.
  - `hybrid/zine.html`: A2–B1 mini-newspaper booklet landing page linking to `/print-zine.html` compiler.
  - `hybrid/radio.html`: COSY Radio & Podcast roadmap (slow-speech podcasts and speaking club material).
* **Migration Strategy**: Keep under the **Hub** or move to **COSYstudio** (print/offline tools repo) if dedicated print/offline repo is established.

### `comparative/` ("Comparative Grammar Atlas 🌐")
* **Purpose**: Cross-linguistic comparative grammar matrix mapping A0–A1 grammar features across all 14 languages in the COSYlanguages ecosystem.
* **Components**:
  - `comparative/index.html`: Interactive matrix page with family filters, category dropdowns, and transfer insight tips when switching "I already know [language]".
  - `comparative/data/`: Static JSON datasets (`grammar-inventory.json`, `language-meta.json`, `transfer-notes.json`).
* **Migration Strategy**: Keep in the **Hub Core** as a flagship free discovery tool, or consume grammar data dynamically from **COSYmanuals**.

---

## 2. Target Repository Migration Blueprint

| Directory / Feature | Destination Repository | Migration Strategy & Notes |
| :--- | :--- | :--- |
| **Hub Core** (`index.html`, `about/`, `languages/`, `courses/`, `placement-quiz.html`, `privacy.html`, `404.html`, `login.html`, `sitemap.xml`, `components/`, `css/`, `js/core/`, `js/data/`) | `COSYlanguagess` / `COSYlanguages` | Pure client-side static landing portal. Decoupled from CRM, CMS, and heavy databases. |
| `vocabulary/` (690 files, 14 languages) | `COSYdata` | COSYdata is the canonical source of truth for vocabulary. Local files in `vocabulary/` will be removed once runtime fetching via `vocab-resolver.js` from `https://cosylanguages.github.io/COSYdata/` is 100% active. |
| `practice/` (382 files) | Dedicated Practice Repo (`COSYpractice`) | Target for React + Vite SPA. Practice engine is already modular. Convert ~364 global script `.js` topic files into lazily-loaded JSON schemas. |
| `blog/` | Dedicated Blog Repo (`COSYblog`) | Static SSG build pipeline (`scripts/build-blog.js`). Fix: stop committing generated post HTML artifacts; generate Top 100 from COSYdata; paginate index; merge language post variants. |
| `project/` & Python scripts (161 scripts) | Internal Tooling Repo (`COSYinternal` / `COSYtools`) | Internal dev scripts, audits, and brainstorming docs. None of it belongs in website client code. |
| `print-studio/` | Dedicated Studio Repo (`COSYstudio`) | PDF compilation tools (`print-cards`, `print-zine`, `print-box`, `print-boardgame`, `print-grammar`). Heavy PDF generation logic & dedicated package dependencies. |
| Platform Code (`crm.js`, `cms-editor.js`, `analytics.js`, `crm-schema.sql`, keepalive workflow) | `COSYplatform` | Moved to COSYplatform backend/admin services. `login.html` remains in the Hub as a lightweight auth entry point. |

---

## 3. Batch 1 Scope (Hub Core Extraction)

**Batch 1** includes everything strictly required for the public Hub portal:
* **Pages**: `index.html`, `about/`, `languages/`, `courses/` (landing pages only), `placement-quiz.html`, `privacy.html`, `404.html`, `login.html` (thin entry point), `sitemap.xml`, `robots.txt`, `manifest.json`, `sw.js`, `google43a10f426eb2253d.html`.
* **Shared UI & Styling**: `components/`, `css/`, `shared/`, `js/data/`, `data/` (language config & Scope).
* **Core Scripts**: `js/core/` (`engine.js`, `ui.js`, `i18n.js`, `auth-sso.js`, `languages.js`) — **EXCLUDING** `crm.js`, `cms-editor.js`, `analytics.js`.
* **Assets**: Essential logo images (`images/logos/`), UI icons, and home scene graphics.
