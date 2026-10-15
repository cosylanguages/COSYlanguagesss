# COSYlanguages Blog Build Pipeline Architecture (`docs/BLOG_PIPELINE.md`)

## Source of Truth Decision & Justification

### Canonical Source: JSON Schema (`blog/posts/*.json`)
`blog/posts/*.json` is the **single canonical source of truth** for all blog posts across the COSYlanguages ecosystem.

### Justification
1. **Rich Editorial & Teleprompter Metadata**: The JSON schema (`blog/SCHEMA.md`) supports structured editorial features that plain Markdown cannot express, including:
   - `artDirection` (color palette, display/text/accent fonts, layout style, visual motif)
   - `desk` classification (`Front Page`, `Words`, `Grammar Made Cosy`, `Say It`, etc.)
   - `format` typing (`list`, `essay`, `qa`, `ranking`, `photo-essay`, `quiz`, `quote-wall`)
   - `podcast` episode tracking & RSS feeds
   - Block-level `say` speech scripts for teleprompter / podcast read-aloud
   - Block-level `beat` camera directions and visual animations
2. **Elimination of Dual-Source Drift**: Maintaining two parallel files (`.md` and `.json`) per post led to severe content drift and unused metadata. In the legacy pipeline, `scripts/build-blog.js` built HTML from Markdown files while ignoring JSON posts, causing art direction, `say` scripts, and podcast metadata to be ignored.
3. **Strict No-Translation Fallback Core Directive**: Each language variant (e.g., `-fr`, `-it`, `-ru`, `-el`) is authored fully in its own language as an independent post object with its own slug and `language` field. Articles are linked across language variants via the `translationOf` property to enable non-translated UI language switching.
4. **Unified Build Pipeline**: `scripts/build-blog.js` parses JSON post files directly, renders semantic HTML magazine spreads, compiles `blog/posts.json` and `blog/index.json`, and generates podcast RSS feeds in a single atomic pass.
