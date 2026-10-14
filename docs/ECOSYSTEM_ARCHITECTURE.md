# COSYlanguages Ecosystem Architecture & Modularization Roadmap

This document tracks the architecture for the **COSYlanguages** ecosystem. It is a living map of current companion repositories and proposed extractions; proposed destinations are not implemented until their repositories and replacement routes exist.

---

## 1. Existing Standalone Repositories

The project has already begun extracting specialized sub-products into standalone GitHub repositories under the `cosylanguages` organization:

1. **[COSYmanuals](https://github.com/cosylanguages/COSYmanuals):**
   - **Role:** Interactive HTML web textbooks, detailed curriculums, marathons, and structured linguistic datasets.
   - **Access:** Restricted access for contracted teachers and students via direct links.

2. **[COSYevents](https://github.com/cosylanguages/COSYevents):**
   - **Role:** Public speaking clubs, multimedia event nights, cinema club, karaoke, and session guides.
   - **Access:** Public free access.

3. **[COSYworld](https://github.com/cosylanguages/COSYworld):**
   - **Role:** Self-study open-world RPG adventure game and spatial scene environments.
   - **Features:** High-performance spatial rendering, interactive room/city scenes, and visual exploration.

4. **[COSYgames](https://github.com/cosylanguages/COSYgames):**
   - **Role:** Interactive practice minigames hub (22+ games) for online/offline classroom teaching and self-study.

5. **[COSYtools](https://github.com/cosylanguages/COSYtools):**
   - **Role:** Offline-first linguistic encyclopedia and reference tools (gender, case systems, verb conjugations, prepositions).
   - **Features:** 12 specialized tools across 5 languages:
     - *Verb Conjugators:* `fr-conjugeur`, `it-coniugatore`, `ru-spryazhenie`, `el-klisi-rimaton`
     - *Gender & Case Trainers:* `fr-genre`, `it-genere`, `ru-rod-padezhi`, `el-genos-ptoseis`
     - *Prepositional Regimes:* `en-verb-prep`, `fr-regime`, `it-reggenza`, `el-syntaxi`

---

## 2. Remaining Extraction Candidates

COSYevents and COSYgames already exist as companion repositories. The remaining proposals below are not repositories yet; paths describe the active local footprint to review before any move.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          COSYlanguages                                  │
│                 (Central Portal, Hub & Textbooks)                       │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
    ┌───────────────┬────────────────┼────────────────┬───────────────┐
    │               │                │                │               │
┌───▼───────────┐ ┌─▼─────────────┐ ┌▼──────────────┐ ┌▼─────────────┐ ┌▼─────────────┐
│   COSYevents  │ │   COSYgames   │ │   COSYstudio   │ │ COSYcourses │ │COSYclassroom│
│ (Clubs/Nights)│ │(Minigames App)│ │(Print Studio) │ │(Course Path)│ │(Teacher Sync)│
└───────────────┘ └───────────────┘ └───────────────┘ └─────────────┘ └─────────────┘
```

### 1. `COSYevents` (`github.com/cosylanguages/COSYevents`)
* **Migration Status:** Companion repository exists. There is no `COSYevents/` staging directory in this checkout; `apps/premium-events/` remains a local entry surface whose ownership and overlap should be reviewed before removal.

### 2. `COSYgames` (`github.com/cosylanguages/COSYgames`)
* **Migration Status:** Companion repository exists and is linked from the public hub. No `COSYgames/` source or `games/` page tree is present in this checkout; retain only intentional shared integrations.

### Candidate 3: Proposed `COSYstudio`
* **What it is:** The pedagogical print studio and physical resource builder (`print-studio/`, including `print-boardgame.html`, `print-cards.html`, `print-grammar.html`, `print-zine.html`, and `print-box.html`). The previously proposed `apps/print-studio/` and root-level `print-*.html` paths do not exist.
* **Why extract to a separate repo:** A standalone web app for teachers and self-learners to generate, customize, and print physical learning zines, flashcard boxes, boardgames, and PDF grammar cheatsheets.

### Candidate 4: Proposed `COSYcourses`
* **What it is:** A possible future home for the course entry pages currently under `courses/`. The proposed `apps/premium-courses/` and root `curriculum/` paths are absent, so this checkout does not currently demonstrate a separate syllabus application to move.
* **Why extract to a separate repo:** Reassess after the course product boundary, curriculum source, and live destinations are agreed; do not bulk-move the current public course pages on this proposal alone.

### Candidate 5: Proposed `COSYclassroom`
* **What it is:** The live classroom presentation and screen sync tool at `apps/classroom-sync/index.html`; the previously proposed root `classroom-sync.html` does not exist.
* **Why extract to a separate repo:** A dedicated presentation utility for teachers projecting interactive lessons onto smartboards or sharing screens during live classes.

---

## 3. How to Improve the Main Hub (`COSYlanguages`)

Once standalone sub-products are extracted into their own repositories, **`COSYlanguages`** (`cosylanguages.github.io/COSYlanguages`) evolves into a cleaner, focused **Master Gateway, Textbook Library & Ecosystem Hub**:

### 1. Unified Multi-Product Ecosystem Gateway
* **Central Directory & Hub:** Serves as the landing portal introducing the COSY philosophy ("Slow-Tech", privacy-first, zero translation fallback).
* **Ecosystem Navigator Bar:** A header component providing quick access across all COSY web apps:
  - 🌐 **COSYlanguages:** Core Hub & CEFR Textbooks
  - 🗺️ **COSYworld:** Interactive 3D Visual Environments
  - 🛠️ **COSYtools:** Conjugators, Gender & Regime Reference
  - 🗣️ **COSYevents:** Speaking Clubs & Multimedia Nights
  - 🎮 **COSYgames:** Practice Minigames Hub
  - 🖨️ **COSYstudio:** Printable Zines & Flashcard Studio
  - 📚 **COSYcourses:** Structured Syllabus Pathways

### 2. Companion Textbooks Entry
* Interactive textbooks are hosted by the separate COSYmanuals repository, not in a local `manuals/` directory here. COSYlanguages should maintain clear links to the manuals available for the ecosystem's 14 registered languages.

### 3. Universal Diagnostic Placement & Language Portals
* **Placement Quiz (`placement-quiz.html`):** Fast, account-free CEFR level assessment.
* **Language Portal Hubs (`languages/{iso}/index.html`):** Dedicated entry points for each language featuring daily dose idioms/facts and topic roadmaps.

### 4. Open Language Data Standard & Cross-Reference Index
* Retains `data/index/{lang}_index.json` search indexes that cross-reference grammar topics, vocabulary items, and exercises across the entire ecosystem.

---

## 4. Implementation Roadmap

1. **Phase 1 (Done):** Extracted `COSYworld` and `COSYtools` into standalone repositories.
2. **Phase 2 (Done):** Formulated the ecosystem modularization roadmap in `docs/ECOSYSTEM_ARCHITECTURE.md`.
3. **Phase 3 (Remaining Decisions):**
   - `COSYevents` and `COSYgames` already exist; verify each local bridge before retiring or relocating it.
   - Decide whether to create `COSYstudio`, `COSYcourses`, and `COSYclassroom` after confirming active routes, data ownership, and replacement URLs.
   - Keep `COSYlanguages` as the public gateway and update migration records only after each extraction is deployed and its inbound links are checked.
