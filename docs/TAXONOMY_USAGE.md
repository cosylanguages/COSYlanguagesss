# Taxonomy usage inventory

**Scope:** this file records taxonomy-bearing locations found in the COSYlanguages repository and the sibling repositories inspected for the ecosystem-wide request. It is an inventory for migration planning, not a claim that every generated asset or every unindexed file has been exhaustively enumerated. No application code or data files were changed.

## Authority and comparison sources

The canonical registry is now present in COSYdata; consumers should fetch the raw files rather than treating a local copy as authoritative:

- Levels: [taxonomy/levels.json](https://raw.githubusercontent.com/cosylanguages/COSYdata/main/taxonomy/levels.json)
- Tracks: [taxonomy/tracks.json](https://raw.githubusercontent.com/cosylanguages/COSYdata/main/taxonomy/tracks.json)
- Themes: [taxonomy/themes.json](https://raw.githubusercontent.com/cosylanguages/COSYdata/main/taxonomy/themes.json)
- Languages: [taxonomy/languages.json](https://raw.githubusercontent.com/cosylanguages/COSYdata/main/taxonomy/languages.json)
- Legacy theme crosswalk: [taxonomy/crosswalk-themes.json](https://raw.githubusercontent.com/cosylanguages/COSYdata/main/taxonomy/crosswalk-themes.json)

Fallback / compatibility sources used for comparison:

- [COSYplatform/data/taxonomy.json](https://github.com/cosylanguages/COSYplatform/blob/main/data/taxonomy.json) — platform course-type registry and roadmap filename mappings.
- [COSYdata/schemas/themes.json](https://github.com/cosylanguages/COSYdata/blob/main/schemas/themes.json) — legacy schema theme/subtheme vocabulary.
- [COSYdata/docs/TAXONOMY.md](https://github.com/cosylanguages/COSYdata/blob/main/docs/TAXONOMY.md) — documents the canonical registry, expected raw URLs, and compatibility policy.

### Canonical values

- **CEFR IDs:** `A0`, `A1`, `A2`, `B1`, `B2`, `C1`, `C2`. Canonical lowercase folder codes are `a0_a1`, `a2`, `b1`, `b2`, `c1`, `c2`; both A0 and A1 resolve to `a0_a1`. Human-readable labels are metadata, not identifiers.
- **Core tracks:** `general`, `spoken`, `professional`, `travelling`, `relocation`, `exam`.
- **Extra tracks:** `cinema`, `karaoke`, `discussion`, `pronunciation`.
- **Track alias:** `travel` → `travelling`.
- **Languages:** `en`, `fr`, `it`, `ru`, `el`, `de`, `pt`, `es`, `tt`, `ba`, `cv`, `br`, `hy`, `ka` (14 language codes in the COSYdata registry).
- **Theme IDs:** the canonical `taxonomy/themes.json` uses structured taxonomy IDs by domain (for example `V01`, `V01.01`, `G01`, `SIT02`), while `schemas/themes.json` is a legacy vocabulary schema whose keys include `actions`, `activities`, `animals`, `arts`, `body`, `business`, `clothing`, `colors`, `communication`, `crime`, `descriptors`, `education`, `emotions`, `environment`, `family`, `food`, `general`, `geography`, `grammar`, `health`, `housing`, `internet`, `law`, `leisure`, `measurement`, `media`, `money`, `nature`, `navigation`, `numbers`, `objects`, `personality`, `philosophy`, and additional keys in the schema. Use `crosswalk-themes.json` rather than assuming these names equal canonical IDs.

## Findings by repository and path

### COSYlanguages

| Path | Values / use found | Mismatch or migration note |
|---|---|---|
| `project/docs/CONTENT_ARCHITECTURE.md` §1 | Language table: `en, fr, it, ru, el, es, de, pt, hy, ka, tt, ba, br` | Missing canonical `cv` (Chuvash). Keep this as a human-facing document only if it explicitly distinguishes active vs planned language support. |
| `project/docs/CONTENT_ARCHITECTURE.md` §2 | `starter`→A1, `elementary`→A2, `intermediate`→B1, `upper_intermediate`→B2, `advanced`→C1, `proficiency`→C2 | Descriptive labels are not stable IDs. Normalize stored/query IDs to CEFR codes; preserve these strings only as display labels/aliases. It also omits A0. |
| `project/docs/CONTENT_ARCHITECTURE.md` §3 | Legacy theme slugs including `clothes`, `colours`, `describing`, `food_drink`, `health_medicine`, `jobs`, `language`, `people`, `places`, `social`, `sports`, `technology`, `travel`, `work`, `art_culture`, `psychology` | These do not directly match the legacy COSYdata schema keys (e.g. `clothing`, `colors`, `descriptors`, `food`, `health`, `geography`, `leisure`, `communication`) or canonical structured IDs. Map through the crosswalk; do not rename blindly. |
| `project/docs/CONTENT_ARCHITECTURE.md` §5.3 | Track IDs `general`, `spoken`, `professional`, `travelling`, `relocation`, `exam` | Matches canonical core track IDs. |
| `project/docs/CONTENT_ARCHITECTURE.md` §5.4 | Event/club IDs `wonder`, `science`, `mind`, `debate`, `celebrate`, `life`, `quotes`, `cinema`, `karaoke` | These are product/event identifiers, not all course track IDs. Only `cinema` and `karaoke` overlap canonical extra-track IDs. Do not infer other club IDs are valid tracks. |
| `scripts/build_markdown_report.js` (search excerpt) | Report references legacy IDs such as `fr_elementary_describing_009`, `it_upper_intermediate_environment_007`; report contrasts them with `fr:beau-a2:adjective`, `en:spicy-a1:adjective` | Legacy underscore IDs embed descriptive levels and themes. Treat as legacy data identifiers and provide a deterministic migration/crosswalk; do not assume a direct string substitution is collision-free. |
| `docs/archive/reports/vocabulary-audit.md` | Documents `starter`, `elementary`, `intermediate`, `upper-intermediate`, `advanced`, `proficiency` and recommends short CEFR codes | Historical audit content; label as historical, or update only when intentionally revising the audit. It is evidence of legacy naming, not a live registry. |
| `project/docs/CONTENT_ARCHITECTURE.md` theme table and URLs | Uses `travel` as a topic slug | Topic slug `travel` is not the course-track alias `travel` → `travelling`. Keep theme/topic namespace separate from track namespace. |

### COSYdata

| Path | Values / use found | Mismatch or migration note |
|---|---|---|
| `taxonomy/levels.json` | IDs A0–C2; folders `a0_a1`, `a2`, `b1`, `b2`, `c1`, `c2`; alias object `a0_a1: [a0, a1]` | Canonical. Consumers must handle the shared A0/A1 folder instead of deriving a folder from the level ID. |
| `taxonomy/tracks.json` | Six core tracks and four extra tracks listed above; alias `travel: travelling` | Canonical track IDs. Preserve alias for inbound legacy references; emit `travelling` for new data. Note that the platform copy has different availability rules (see below). |
| `taxonomy/languages.json` | 14 codes: `en, fr, it, ru, el, de, pt, es, tt, ba, cv, br, hy, ka` | Canonical registry set. Other files may intentionally represent a smaller active subset; distinguish supported, planned, and present-in-data rather than silently dropping codes. |
| `taxonomy/themes.json` | Structured IDs across vocabulary, lexical types, grammar, speaking, writing, receptive skills, situations, culture, mediation/learning | Canonical taxonomy uses IDs such as `V01` / `V01.01`, not legacy topic slugs alone. |
| `taxonomy/crosswalk-themes.json` | Maps legacy schema keys (e.g. `actions`, `activities`, `animals`, `arts`, `body`, `business`, `clothing`, `colors`, `communication`, `descriptors`, `education`, `emotions`, `environment`, `family`, `food`, `general`, `geography`, `grammar`, `health`, `housing`, `internet`, `law`, `leisure`, `measurement`, `media`, `money`) to canonical IDs with confidence | Some mappings are partial; use the recorded confidence and note. Avoid treating every legacy theme as a one-to-one mapping. |
| `schemas/themes.json` | Legacy domain → subtheme slug lists, e.g. `colors` / `primary_colors`, `clothing` / `everyday_wear`, `family` / `immediate_family`, `navigation` / `asking_giving_directions` | Legacy compatibility schema, not the canonical structured theme registry. Values absent from the schema require explicit crosswalk/validation decisions. |
| `README.md` (search excerpt) | Folder examples `vocabulary/<lang>/a0_a1/`, `a2/`, `b1/`; calls `a2` “Elementary” and `b1` “Intermediate” | Folder values align; descriptive labels must not be consumed as folder IDs. |
| `docs/unified-taxonomy-draft/CEFR_Theme_Taxonomy.md` and `docs/unified-taxonomy-draft/cefr_taxonomy.json` | Draft documents mention A0/A1 shared `a0_a1` folder | Mark as draft/reference only; canonical source is now `taxonomy/levels.json`. |

### COSYplatform

| Path | Values / use found | Mismatch or migration note |
|---|---|---|
| `data/taxonomy.json` | Course types `general`, `spoken`, `professional`, `travelling`, `relocation`, `exam`, `cinema`, `karaoke`, `discussion`, `pronunciation`; roadmap mapping keys such as `cinema-en-a1.json`, `discussion-en-a1.json`, `pronunciation-fr-a1.json`, with lowercase `level` values and `lang` codes | IDs broadly match tracks. Compare availability arrays with `COSYdata/taxonomy/tracks.json`: platform registry has narrower per-track/per-language availability in places, while COSYdata tracks currently express different level rules (e.g. professional/relocation/exam exclude A0/A1; travelling is broad in COSYdata). Resolve policy differences rather than letting duplicated lists drift. |
| `data/taxonomy.json` roadmap filenames | `<track>-<lang>-<lowercase-level>.json` | Filename convention is a key. Verify each key maps to a real file and to a declared `courseTypeId`; renames need redirect/alias support for old URLs. |
| Platform taxonomy URL/schema declaration | `https://cosylanguages.github.io/schemas/taxonomy.json` | Ensure published schema and consumer fetch URL resolve consistently. Prefer COSYdata raw taxonomy files as the registry source. |

### COSYmanuals

| Path | Values / use found | Mismatch or migration note |
|---|---|---|
| `README.md` — `/curriculums/{iso}/{track}/` | Language folder examples include `en, fr, ru, de, es, it, el, pt, hy, ka, ba, br, tt`; track folders `general, spoken, exam, professional, travelling, relocation`; level filenames such as `A1.json`, `A2.json`, `B1.json` | The README's active list excludes `cv` while the canonical language registry includes it as planned. It also mixes ISO-language coverage claims with available curriculum coverage; document these as separate concepts. Track names align with canonical core IDs. |
| `README.md` — manual paths | `manuals/{iso}/{module}/{level}/`; modules include `grammar`, `phrasal-verbs`, `vocabulary`, `pronunciation`, `introductory` | These are module/content identifiers, not course-track IDs. `introductory` and `pronunciation` must not be mistaken for CEFR levels or universally available course tracks. |
| `README.md` — level coverage | A0–C2 spectrum; mentions A0 as planned in live coverage; examples predominantly use A1–C2 | A0 is canonical. Preserve the distinction between taxonomy existence and repository content availability. |
| `README.md` — redirects | Login URL contains `login.html?redirect=<manual-id>` | The redirect payload may carry legacy IDs; confirm its level/language/track encoding against canonical IDs before changing URL contracts. |

### COSYevents

| Path | Values / use found | Mismatch or migration note |
|---|---|---|
| `README.md` — session example | `events/english-a2-foundations/sessions/daily-routines-and-habits.json`; `language: "English"`; `level: "A2"`; `theme: "Everyday Life"` | Human language name and free-text theme in examples differ from canonical machine IDs (`en`, structured theme ID). Confirm whether schemas expect display labels or stable IDs; machine-readable fields should use IDs and keep labels separate. |
| `README.md` — level note | Says valid CEFR grades are `A1`–`C2` (A1, A2, B1, B2, C1, C2) | Omits canonical A0. If A0 sessions are intentionally disallowed, encode that as a repository-specific constraint; otherwise update validation/schema to accept A0. |
| `README.md` — event slug paths | `events/<event-slug>/sessions/<session-slug>.json` | Slugs such as `english-a2-foundations` embed a level descriptively. They are content slugs, not canonical course-track IDs. Avoid deriving taxonomy IDs solely from slug text. |
| `schemas/event.schema.json`, `schemas/session.schema.json`, `scripts/validate-events.js`, `scripts/build-public.js`, `index.html`, `public-events.json` | README identifies these as schema, validation, generation, filter/render and generated-data touchpoints for `theme`, `language`, `level` and slugs | These are the high-priority live locations to check for hardcoded values. The README confirms their roles, but individual values in these files were not independently exhaustively enumerated in this pass. |

### COSYtools

| Path | Values / use found | Mismatch or migration note |
|---|---|---|
| `README.md` — tool paths | `tools/en/irregular-verbs/`, `tools/fr/conjugeur/`, `tools/it/reggenza/`, `tools/de/genus/`; language codes include `en`, `fr`, `it`, `de` | Language-folder values are canonical codes. Tool slugs are app identifiers, not taxonomy themes/tracks. |
| `catalog.json` | Catalog fields include `id`, `language`, `type`, `entry_url`, `data_file_paths`, `entry_counts` | Treat `language` as a canonical language code and `id` as a tool-specific identifier. Validate each catalog language against `taxonomy/languages.json`; do not normalize tool IDs as if they were track IDs. |
| `README.md` — URLs and redirects | `/conjugation/`, `/gender/`, `/cases/`, `/prepositions/`, `/verb-patterns/`, `/noun-declensions/`; query keys `verb`, `infinitive`, `word`, `noun`, `q`, `search` | These are URL/API compatibility contracts rather than taxonomy IDs. Keep redirect aliases when paths are renamed. |
| `COSYdata related_forms` protocol documented in README | `COSYtools:<tool-id>:<headword>` | Tool ID is explicitly the exact catalog `id`; renaming catalog IDs requires a compatibility map or coordinated data migration. |

### COSYgames

| Path | Values / use found | Mismatch or migration note |
|---|---|---|
| `README.md` | Describes 20 standalone games and CEFR coverage, but no explicit canonical level, language, theme, or track value list in the README excerpt | Search source files, game manifests, HTML filters, and URLs for embedded level/language lists before migration. Do not assume README alone is exhaustive. |
| Game paths / manifests / HTML filters | Not enumerated from indexed excerpts in this pass | Audit game-specific IDs separately; classify game IDs as app identifiers unless a value is explicitly used as a course track/theme/language/CEFR code. |

## Aliases and renames to preserve

| Legacy/current form | Canonical form | Rule |
|---|---|---|
| `travel` used as a **course track** | `travelling` | Accept `travel` as an inbound alias; write `travelling` for new track IDs. Do not globally rename the topic/theme slug `travel`. |
| `a0` or `a1` used as a folder | `a0_a1` | Both level IDs map to the shared folder. Keep level ID and folder code as separate fields. |
| `starter` | `A1` | Legacy descriptive alias only; do not use as a canonical level ID. |
| `elementary` | usually display label for `A2` | Ambiguous outside context; use an explicit mapping only where the old field semantics confirm A2. |
| `intermediate` | `B1` | Legacy display label, not an ID. |
| `upper_intermediate` / `upper-intermediate` | `B2` | Normalize punctuation only in a migration layer; retain original strings as aliases where URLs or records depend on them. |
| `advanced` | `C1` | Legacy display label, not an ID. |
| `proficiency` | `C2` | Legacy display label, not an ID. |
| `clothes` / `clothing`, `colours` / `colors`, `food_drink` / `food`, `health_medicine` / `health`, `art_culture` / `arts` etc. | Canonical theme IDs via `taxonomy/crosswalk-themes.json` | Locale/spelling and domain splits differ. Use the crosswalk and its confidence notes; do not apply a generic slug replacement. |
| Legacy underscore lexical IDs such as `fr_elementary_describing_009` | Current namespace-style lexical IDs such as `fr:beau-a2:adjective` | Requires data-aware migration and duplicate/collision checks; keep a reversible old→new mapping. |
| Language display names such as `English` in event examples | `en` in machine-readable language fields | Display names may remain for UI, but identifiers should be canonical language codes. |
| Uppercase level IDs in content (`A2`) vs lowercase roadmap suffixes (`a2`) | Canonical CEFR ID `A2`; lowercase only for explicitly defined filename/folder convention | Normalize at API boundaries; don't infer casing rules from one path. |

## Recommended migration order

1. Load canonical registry files from COSYdata raw URLs; cache/version them intentionally and validate schema before consuming.
2. Keep CEFR ID, folder code, display label, and legacy aliases as separate fields.
3. Replace duplicated track registries with the canonical track list while preserving `travel` as an inbound alias and respecting per-repository availability constraints.
4. Route theme migration through `crosswalk-themes.json`; surface partial mappings for review rather than auto-renaming.
5. Validate language fields against the 14-code registry while separately tracking product availability (active/planned/present).
6. Audit each repository's generated JSON, schema enums, JavaScript constants, HTML filters, URL builders, and folder/filename conventions. For URLs and file paths, keep redirects or compatibility aliases until inbound links and stored references have been migrated.

## Coverage caveat

This pass used repository documentation and indexed source excerpts, and fetched the canonical/fallback taxonomy files. It identified concrete mismatches and named high-priority live touchpoints, but it did **not** enumerate every literal in every JS/HTML/JSON file or every directory name across all seven repositories. The rows explicitly marked as not exhaustively enumerated should be treated as follow-up audit targets, not as evidence that no additional hardcodes exist.
