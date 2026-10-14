# Skyeng vs COSYlanguages — Dimension Comparison

Sources: [Skyeng programs](https://skyeng.ru/programs/), [Skyeng adults](https://skyeng.ru/adults/), [Engblog review](https://engblog.ru/skyeng-review), [Vimbox paper](https://ceur-ws.org/Vol-2562/paper-03.pdf). All Skyeng figures are as published on those pages.

---

## 1. Lessons & lesson format

| Dimension | Skyeng | COSYlanguages |
|---|---|---|
| Lesson duration | 30 min intro, 50 min standard ([Skyeng](https://skyeng.ru/programs/)) | Spoken lessons are 60 min (`curriculum/en/spoken/*.json` `duration_minutes: 60`); other courses lesson-sized by unit |
| Lesson structure | Video + exercises in one window; communicative, ~80% student talking time ([Skyeng](https://skyeng.ru/programs/)) | CELTA 6-stage model: lead-in → meaning check (CCQs) → form → pronunciation → controlled/freer practice → production (`grammar/GRAMMAR_STANDARD.md` §4, `manuals/_TEMPLATE.md`) |
| Personalisation | AI builds materials from learner interests ([Skyeng](https://skyeng.ru/programs/)) | Lessons are pre-authored per CEFR level; personalisation via ecosystem routing (tools/games/events) |
| Homework | Auto-graded in app ([Engblog](https://engblog.ru/skyeng-review)) | `practice/` engines + SRS (e.g. `COSYtools` irregular-verbs SRS) |
| Lesson stage data | Proprietary, not exposed | Machine-readable `reference-grammar/{lang}/lessons/*.json` (`lesson-stage.schema.json`) with inline CCQs |

**Takeaway:** Skyeng wins on live personalisation and auto-grading. COSY wins on pedagogical transparency — every lesson is stageable and the CCQs are structured data a teacher or engine can consume.

---

## 2. Courses & course catalogue

Skyeng offers 20+ courses ([Engblog](https://engblog.ru/skyeng-review)): general, business, IT, marketing, career, exam (EГЭ, IELTS), travel, kids, gamers, native-speaker.

COSY's catalogue (`data/courses/courses.json`):

| COSY course | Levels | Skyeng equivalent |
|---|---|---|
| `general` | A1–C2 | General English / level courses |
| `spoken` | A1–C2 | Conversational English + Talks |
| `exam` | B1–C2 | EГЭ / IELTS prep |
| `travelling` | A1–B1 | English for travel |
| `professional` | B1–C2 | Business / IT / marketing English |
| `relocation` | A2–C1 | (no direct equivalent — relocation is a COSY differentiator) |

**Takeaway:** COSY covers the same core course types but lacks dedicated IT/marketing/career and kids verticals. COSY's `relocation` course is a niche Skyeng doesn't have.

---

## 3. Curriculum & CEFR roadmap

Skyeng's level ladder ([Skyeng](https://skyeng.ru/programs/)):

| Level | Skyeng lessons | Modules | Claimed outcome |
|---|---|---|---|
| A1 | 48 | 12 | Greet, introduce, order food, ask directions |
| A2 | 48 | 12 | Talk about self, routine, family, hobbies |
| B1 | 60 | 15 | Everyday topics, travel, opinions on films/news |
| B2 | 60 | 15 | Argue viewpoints, films/articles without dictionary, work in EN |
| C1 | 52 | 13 | Complex topics, professional debate, presentations |
| C2 | 52 | 13 | Nuance, idioms, humour, academic lectures, negotiations |

Skyeng also publishes CEFR hour targets: A1 ≈ 90–100 h, A2 ≈ 180–200 h, B1 ≈ 350–400 h, B2 ≈ 500–600 h, C1 ≈ 700–800 h, C2 ≈ 1000–1200 h ([Engblog](https://engblog.ru/skyeng-review)).

COSY's curriculum: `curriculum/en/{general,spoken,exam,professional,relocation,travelling}/{A1..C2}.json`, each structured as `units → lessons → grammar[] + vocabulary[] + teacher_notes` (with `cando` statements, pronunciation notes, and recycled-vocabulary links). General course also has per-level `*_VISUAL_DICTIONARY_MASTER_CURRICULUM.md` files.

**Takeaway:** Skyeng publishes a clean outcome-per-level table and hour estimates; COSY's curriculum JSON is richer per-lesson (grammar/vocab/cando/pronunciation) but does not publish a single outcome-per-level summary or hour estimates. COSY should add a level-outcome + hour table to match Skyeng's marketing-clarity.

---

## 4. Methodology

| Aspect | Skyeng | COSY |
|---|---|---|
| Core method | Communicative; 80% student talk; minimal grammar drills ([Engblog](https://engblog.ru/skyeng-review)) | Monolingual (no translation); CELTA-staged lessons with explicit CCQs (`schema/ccq.schema.json`, `schema/lesson-stage.schema.json`) |
| Meaning checking | Implicit (teacher asks ad hoc) | Explicit, machine-readable CCQs (yes/no or short factual, never translation) |
| Error correction | Delayed, teacher-led | `feedbackNotes` field in lesson-stage JSON |
| Scope | English (and Russian as foreign) | 15+ languages incl. minority languages (Bashkir, Breton, Chuvash, Tatar, Armenian, Georgian, etc.) |

**Takeaway:** Skyeng's "80% talking time" is a strong, marketable metric. COSY's CELTA+CCQ structure is more rigorous and reproducible but doesn't have a single headline talking-time metric.

---

## 5. Platform & ecosystem

Skyeng: **Vimbox** browser platform (no install) — video + exercises in one window, mobile app, 24/7 speaking bot, AI trainer, progress analytics ([Skyeng](https://skyeng.ru/programs/); [Vimbox paper](https://ceur-ws.org/Vol-2562/paper-03.pdf)).

COSY: web monorepo (PWA — `manifest.json`, `sw.js`) split into:
- `manuals/` — CEFR HTML textbooks (interactive widgets)
- `reference-grammar/` — machine-readable JSON
- `practice/` — interactive drill engines
- `apps/` — standalone conjugators/print studio
- `COSYtools` — standalone apps (irregular verbs, Italian conjugatore)
- `COSYgames` — standalone games (20+ titles)
- `COSYevents` — speaking clubs, cinema club, karaoke, long-reads
- spatial quest-style experiences

**Takeaway:** Skyeng has a 24/7 speaking bot and AI personalisation COSY lacks. COSY has a far wider content ecosystem (games, print, events, 15+ languages) Skyeng lacks.

---

## 6. Teacher model

Skyeng: 7000+ teachers, 2–3 of 100 accepted, native/non-native, 1-on-1 and groups of 4–6, tiers Standard/Native/Premium ([Skyeng](https://skyeng.ru/programs/); [Engblog](https://engblog.ru/skyeng-review)).

COSY: content-first, no teacher marketplace. Teaching is delivered via the ecosystem + events. This is a structural gap (no live human teachers on demand) and a structural advantage (no teacher-quality variance, fully open materials).

---

## 7. Pricing & guarantee

Skyeng: ~13 900 ₽/month for most courses (≈ €135), installments from 10 333 ₽/month, 13% tax deduction, level-up guarantee in 3–5 months (conditions: ≥80% attendance + ≥80% homework + final exam), CEFR certificate valid 3 years ([Skyeng](https://skyeng.ru/programs/)).

COSY: open/free content. No paid tier, no guarantee, no certificate. A CEFR-aligned certificate and a progression guarantee are both missing and could be added as product features.

---

## 8. Summary scorecard

| Dimension | Skyeng | COSY | Winner |
|---|---|---|---|
| Live personalisation & AI | Strong | Absent | Skyeng |
| 24/7 speaking practice | Bot available | Events only (scheduled) | Skyeng |
| Teacher marketplace | 7000+ | None | Skyeng |
| Pedagogy transparency (CCQs/CELTА stages) | Proprietary | Open, machine-readable | COSY |
| Language breadth | English (+RU as foreign) | 15+ incl. minority | COSY |
| Content ecosystem (games/print/events) | Limited | Rich | COSY |
| Curriculum depth per lesson | Outcome summaries | Grammar/vocab/cando/pronunciation JSON | COSY |
| Pricing/access | Paid | Free/open | COSY |
| Certificate & guarantee | Yes | No | Skyeng |
