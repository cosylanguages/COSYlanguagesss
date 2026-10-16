# COSY Ecosystem Comprehensive Architecture, Migration & Organization Strategy

This document provides a definitive architectural audit, migration strategy, and UI/UX optimization blueprint across all **7 official repositories** in the COSY ecosystem prior to migrating into fresh repositories.

---

## 1. Master Repository Overview & Operational Boundaries

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                    COSYlanguages                                        │
│                 (Master Public Gateway, Marketing, SEO & Philosophy Hub)                │
└─────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┘
          │               │               │               │               │
    ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐
    │  COSYdata │   │COSYplatform│  │COSYmanuals│   │ COSYtools │   │ COSYevents│
    │(Dict &    │   │(Virtual   │   │(Textbooks │   │(Linguistic│   │(Clubs &   │
    │ Vocab)    │   │ Classroom)│   │ & Tables) │   │ Micro-Apps│   │ Sessions) │
    └───────────┘   └───────────┘   └───────────┘   └───────────┘   └───────────┘
                                                                          │
                                                                    ┌─────▼─────┐
                                                                    │ COSYgames │
                                                                    │(Interactive│
                                                                    │ Minigames)│
                                                                    └───────────┘
```

---

## 2. Repo-by-Repo Detailed Audit & Optimization Roadmap

### 1. `cosylanguages` (Main Public Website & Ecosystem Gateway)
* **URL:** `https://github.com/cosylanguages/COSYlanguages`
* **Primary Role:** The open-access, zero-barrier entry point for potential students, teachers, and language enthusiasts. Responsible for landing pages, target language portals (`languages/`), course overviews (`courses/`), placement quiz, blog, practice drills, and printable materials.
* **Current Noise & Overlap Analysis:**
  - Currently serving as both a lightweight static marketing site and a heavy host for complex web applications (`blog/` flipbook/stage deck engine, `practice/` drill engine, and `print-studio/`).
  - Storing static content alongside dynamic engine code creates bloat for new visitors and slows down builds.
* **React / SPA Migration & Modularization Strategy:**
  - **Blog Migration:** Extracting `blog/` into a dedicated **React / Next.js SPA/PWA** will enable instant page flips, audio podcast sync, reader customization (light/dark/sepia), client-side fuzzy searching, and interactive Stage Mode presentation decks without polluting static SEO landing pages.
  - **Practice Migration:** Moving `practice/` to a dedicated **React app** (or modular React sub-app inside `cosylanguages`) provides smooth state management for cloze tests, audio synthesis, instant feedback cards, error logs, and CEFR progress badges.
* **Filtering & Menu Enhancements:**
  - Introduce a **Universal Ecosystem Filter Header** across Blog and Practice:
    - Target Language filter (`EN`, `FR`, `IT`, `RU`, `EL`, etc.)
    - CEFR Level selector (`A0` to `C2`)
    - Topic / Domain tags (`Grammar`, `Vocabulary`, `Pronunciation`, `Culture`)

---

### 2. `cosydata` (Vocabulary Canon & Central Dictionary)
* **URL:** `https://github.com/cosylanguages/COSYdata`
* **Primary Role:** The canonical linguistic repository and structured dictionary engine containing vocabulary units, theme JSONs, CEFR levels, and audio metadata. Acts as the data backbone powering all vocabulary drills and lesson materials across the ecosystem.
* **React / SPA Web Application Opportunity:**
  - **High Value React Candidate!** Transform `cosydata` into a modern, lightning-fast **React Dictionary Web Application**.
  - Features to include in the React app:
    - Real-time instant search with fuzzy auto-complete across 14 languages.
    - CEFR level badges (`A1`–`C2`), frequency scores, part-of-speech tags, and usage examples.
    - Audio pronunciation playback button for native sound snippets.
    - Interactive visual theme explorer (food, travel, business, emotion).
    - One-click export to printable vocabulary sheets or flashcard decks.
* **Filtering & Organization:**
  - Multi-faceted filter drawer: Filter by Target Language, CEFR Level, Semantic Field, Part of Speech, and Confusion Pairs.
  - Expose clean REST/JSON APIs and static endpoints (`https://cosylanguages.github.io/COSYdata/vocabulary/{lang}/index.json`) for programmatically fetching dictionary data in `cosyplatform` and `cosygames`.

---

### 3. `cosyplatform` (Virtual Classroom & Lesson Management)
* **URL:** `https://github.com/cosylanguages/COSYplatform`
* **Primary Role:** The principal learning platform for online individual and group lessons. Area for logged-in students and teachers.
* **Competitor Benchmarking & Feature Architecture (inspired by Skyeng, ProgressMe, Edvibe, Preply):**
  - **Interactive Lesson Canvas:** Multi-user synced whiteboard/canvas supporting drag-and-drop exercises, gap-fills, line matching, inline audio players, and live video stream integration.
  - **Integrated Teacher Dashboard & Lesson Creation Studio:**
    - Lesson creation feature enabling teachers and content authors to build, customize, and publish individual and group online lessons.
    - Lesson planning workspace with 1-click loading of curriculum units from `cosymanuals`, speaking club themes from `cosyevents`, and interactive drills.
    - Real-time student error tracker and "Vocabulary Collector" tool that pushes new target words directly to the student's personal dictionary notebook during class.
    - Homework assigner with auto-checking cloze drills.
  - **Student Personal Space:** Progress dashboard, lesson history, active homework tasks, diagnostic radar charts, and dictionary trainer.

---

### 4. `cosymanuals` (Textbook Engine & Grammar Reference Data)
* **URL:** `https://github.com/cosylanguages/COSYmanuals`
* **Primary Role:** Repository for structured grammar tables, CELTA 14-step lesson flow pages, and communication manuals. Used directly during online lessons in `cosyplatform` and as reference textbooks for offline teaching. Restricted to logged-in teachers and students.
* **Organization & Noise Reduction:**
  - Enforce strict hierarchical subdirectories: `manuals/{lang}/{grammar,vocabulary,communication}/{level}/topics/`.
  - Standardize raw reference data under `data/grammar/reference/{lang}/`.
* **Teacher UI / Quick Navigation Tools:**
  - **Classroom Quick-Reference Modal (Cmd+K / Ctrl+K):** A fast spotlight search allowing teachers to search for any grammar rule, conjugation table, or CELTA topic page in under 3 seconds during a live class.
  - Interactive table floating toggles (hide/show answers, highlight key endings in blue/green/orange).

---

### 5. `cosytools` (Encyclopedic Micro-Apps & Reference Tools)
* **URL:** `https://github.com/cosylanguages/COSYtools`
* **Primary Role:** Detailed linguistic encyclopedia and interactive reference micro-tools (conjugators, gender trainers, declension tables, preposition regimes).
* **React / Micro-Frontend Modularization:**
  - Build as a unified **React / Vite Micro-App Suite**. Each tool (`fr-conjugeur`, `it-genere`, `ru-rod-padezhi`, `el-syntaxi`) acts as a distinct lightweight React route/component.
  - Share a unified token system (`shared/css/tokens.css`) and common layout shell with instant tool switching.
* **UI & Filtering:**
  - Universal Search bar on top to search verb forms or noun genders directly across all tools.
  - Quick tab toggles between **Encyclopedia Mode** (deep reference table) and **Practice Mode** (speed drill trainer).

---

### 6. `cosyevents` (Speaking Clubs, Event Nights & Catalog Sync)
* **URL:** `https://github.com/cosylanguages/COSYevents`
* **Primary Role:** Dedicated repository for all online and offline speaking clubs, multimedia language nights, cinema clubs, and workshop guides.
* **Integration Pipeline: Converting Events into `cosyplatform` Catalog Lessons:**
  - Every speaking club session (e.g., "My Life With & Without Social Media") must export a standard JSON specification.
  - Implement an automated build script/exporter that compiles `cosyevents` session guides into ready-to-teach `cosyplatform` lesson modules.
  - When teachers log into `cosyplatform`, they can select any `cosyevents` session from the course catalog to teach as a 45 or 60-minute lesson with automated icebreakers, debate prompts, vocabulary chips, and wrap-up questions.
* **Filtering & UI:**
  - Public events catalog filterable by: Event Type (Speaking Club, Cinema Night, Karaoke, Workshop), Mode (Online vs Offline), Target Language, CEFR Minimum Level, and Date/Schedule.

---

### 7. `cosygames` (Interactive Practice Minigames Hub)
* **URL:** `https://github.com/cosylanguages/COSYgames`
* **Primary Role:** Interactive game repository featuring solo, multiplayer, online lesson, and offline classroom games.
* **Organization & Game Launcher Menu:**
  - Organize games into clear categorical tags:
    - **By Player Count:** Solo Practice | 1-on-1 Lesson | Small Group | Whole Class Projector
    - **By Target Skill:** Vocabulary Recall | Grammar Speed | Pronunciation & Phonics | Listening
    - **By Lesson Phase:** 5-Min Warmup | 15-Min Mid-Lesson Drill | 30-Min Main Activity
  - Filterable Game Launcher grid allowing teachers and learners to instantly find the exact game suited for their lesson context.

---

## 3. Pre-Migration Final Polish Checklist

Before migrating and setting up the new fresh repositories:

1. **Ecosystem Token & Design System Sync:**
   - Verify that `shared/css/tokens.css` is the single source of truth across all repositories.
2. **Standardized Data Contracts (Schemas):**
   - Ensure JSON schemas for vocabulary (`COSYdata`), grammar tables (`COSYmanuals`), and lesson units (`COSYplatform`) are strictly versioned.
3. **Purge Obsolete & Legacy Code:**
   - Verify removal of legacy paid course stubs, deleted route files, and redundant local data copies.
4. **Link Integrity Verification:**
   - Execute automated link checkers across all repositories to confirm cross-repo links (`COSYlanguages` -> `COSYevents` / `COSYgames` / `COSYmanuals` / `COSYtools`) resolve correctly without broken 404s.
