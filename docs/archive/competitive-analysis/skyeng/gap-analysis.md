# Gap Analysis — Skyeng → COSYlanguages

Concrete, prioritised actions derived from the [dimension comparison](./skyeng-vs-cosy.md). Each item maps to a specific repo/path. Items are tagged **Adopt** (learn from Skyeng), **Differentiate** (lean into what COSY already does better), and **Maintain** (parity).

---

## A. Adopt from Skyeng (high leverage)

### A1. Level-outcome + hour table per CEFR level
Skyeng publishes a clean "A1 = 48 lessons, 12 modules, can-do X" table and CEFR hour estimates (A1 ≈ 90–100 h … C2 ≈ 1000–1200 h) ([Skyeng](https://skyeng.ru/programs/); [Engblog](https://engblog.ru/skyeng-review)). COSY's curriculum JSON is richer per-lesson but has no single summary.

**Action:** generate `curriculum/en/{course}/_OUTCOMES.md` (or a `data/levels/cefr-outcomes.json`) summarising, per level: lesson count, unit count, can-do outcomes, and estimated hours. Derive counts programmatically from the existing `curriculum/en/**/*.json`.

### A2. Placement test → level recommendation
Skyeng has a 5-min, 95%-accuracy placement test ([Skyeng](https://skyeng.ru/programs/)). COSY already has `placement-quiz.html`.

**Action:** audit `placement-quiz.html` against the CEFR outcomes from A1, and make it emit a recommended starting course+level that deep-links into `curriculum/en/{course}/{level}.json`.

### A3. 24/7 speaking practice partner
Skyeng's differentiator is an always-on speaking bot that adapts to level ([Skyeng](https://skyeng.ru/programs/)). COSY has scheduled speaking clubs in `COSYevents` only.

**Action:** scope a self-study speaking-practice app in `COSYtools` (e.g. `tools/en/speaking-bot`) that reuses the `reference-grammar/en/lessons/*.json` CCQs and `curriculum` vocabulary as prompt banks, plus a freer-production prompt set drawn from `COSYevents/speaking-clubs` topics. (Voice I/O is a separate, later milestone; start with text-based roleplay prompts.)

### A4. Progress dashboard + level-up guarantee
Skyeng guarantees a level-up in 3–5 months (conditions: ≥80% attendance + ≥80% homework + final exam) and issues a CEFR certificate valid 3 years ([Skyeng](https://skyeng.ru/programs/)).

**Action:** `COSYtools` already has SRS (`tools/en/irregular-verbs/js/spaced_repetition.js`). Generalise it into a cross-course progress store (`COSYtools/shared/progress.js`) that tracks lesson completion + SRS mastery, and define a "COSY level-up" rule set in `data/levels/`. A printable CEFR certificate can be generated via the existing `print-studio` app.

### A5. Dedicated professional verticals (IT / marketing / career)
Skyeng has dedicated IT, marketing, and career courses ([Skyeng](https://skyeng.ru/programs/)). COSY's `professional` course is general business English.

**Action:** extend `curriculum/en/professional/` with `it/`, `marketing/`, `career/` sub-curricula, reusing the existing professional B1–C2 structure and the `apps/` conjugators as practice references.

---

## B. Differentiate — lean into COSY strengths Skyeng lacks

### B1. Monolingual, CCQ-driven, CELTA-staged pedagogy (machine-readable)
COSY's `schema/lesson-stage.schema.json` + `schema/ccq.schema.json` + `manuals/_TEMPLATE.md` make every lesson stageable and meaning-checkable without translation. Skyeng's lessons are proprietary and teacher-implicit.

**Action:** keep building lesson-stage exemplars across levels/languages (continues the work in PR #1356 / #1357). Make the "CELTA-staged, CCQ-verified, monolingual" line the headline COSY differentiator on the website and in `about/`.

### B2. Language breadth incl. minority languages
COSY covers 15+ languages including Bashkir, Breton, Chuvash, Tatar, Armenian, Georgian, etc. Skyeng is English-focused.

**Action:** this is a unique selling point. Surface it on the landing page and in `data/languages/`; ensure each language has at least one lesson-stage exemplar under `reference-grammar/{lang}/lessons/`.

### B3. Open content ecosystem (games, print, events)
`COSYgames` (20+ titles), `COSYevents` (cinema/karaoke/speaking clubs), print studio, and spatial quests have no Skyeng equivalent.

**Action:** cross-link lesson-stage `freerPractice`/`production` fields to specific games/events (the schema already supports this) so every lesson routes into the ecosystem — the "80% talking time" Skyeng markets can become "100% of lessons connect to a real activity."

---

## C. Maintain parity

- **CEFR coverage A1–C2:** both cover it. COSY should keep C1/C2 depth for `general`/`spoken`/`exam`.
- **Mobile access:** Skyeng has an app; COSY is a PWA (`manifest.json`, `sw.js`). Keep PWA installability and offline-first quality.
- **Installment / access options:** not applicable while COSY is free/open, but worth a note if a paid tier is ever considered.

---

## Priority order

1. **A1** (level-outcome table) — cheap, high marketing value, unblocks A2.
2. **A2** (placement test wiring) — small, builds on A1.
3. **B1** (keep shipping CELTA+CCQ exemplars) — already in flight via PRs #1356/#1357.
4. **A5** (IT/marketing/career verticals) — extends existing `professional` course.
5. **A4** (progress dashboard + level-up) — bigger build; reuses existing SRS.
6. **A3** (speaking-practice partner) — biggest build; start text-based, voice later.
7. **B2/B3** (differentiation messaging + cross-linking) — low-cost, ongoing.

---

## What COSY has that Skyeng cannot easily replicate

- **Open, versioned content** on GitHub — teachers and institutions can fork, audit, and localise.
- **Machine-readable pedagogy layer** (CCQs + CELTA stages as JSON schemas) — Skyeng's lessons are locked in Vimbox.
- **15+ languages including minority/endangered languages.**
- **A full content ecosystem** (games, print studio, events, apps, reference grammar) rather than a single lesson-delivery platform.

These are structural, not feature-level, advantages — they should anchor COSY's positioning against Skyeng-style marketplaces.
