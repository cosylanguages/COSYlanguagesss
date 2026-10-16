# COSY Ecosystem Design Tokens Audit (`TOKENS_AUDIT.md`)

This document presents a comprehensive audit of CSS design tokens across the COSYlanguages ecosystem repositories and stylesheets:
- **COSYlanguages** (`css/tokens.css`, `shared/css/tokens.css`, `css/cosy-tokens.css`)
- **COSYblog** (`blog/css/tokens.css`)
- **COSYtools**
- **COSYmanuals**
- **COSYplatform**
- **COSYevents** (`COSYevents/shared/css/tokens.css`)
- **COSYgames** (`COSYgames/shared/css/tokens.css`)
- **COSYworld** (`cosy-tokens.css`)

---

## 1. Brand Accents Matrix

Each ecosystem destination maintains a distinct signature brand accent color while sharing core neutral, sage, and button token foundations:

| Repository / Destination | Brand Accent Variable | Hex Value | Color Name | Purpose |
|---|---|---|---|---|
| **COSYlanguages** (Public Site) | `--cosy-languages-accent` | `#416b49` | Sage Green | Public website, general track, and core design system |
| **COSYtools** | `--cosy-tools-accent` | `#0d7a5f` | Forest Teal | Linguistic micro-apps and verb/grammar reference tools |
| **COSYmanuals** | `--cosy-manuals-accent` | `#7a5c3a` | Scholarly Plum | Comprehensive CEFR lesson manuals and textbooks |
| **COSYplatform** | `--cosy-platform-accent` | `#1e2f6b` | Credible Navy | Paid member platform, private lessons, and student dashboard |
| **COSYevents** | `--cosy-events-accent` | `#B84318` | Spoken Coral / Terracotta | Live speaking clubs, culture nights, and workshops |
| **COSYgames** | `--cosy-games-accent` | `#945e05` | Honey Gold | Interactive minigames and vocabulary/grammar card decks |
| **COSYworld** | `--cosy-world-accent` | `#d66161` | Warm Rust / Amber | Decommissioned legacy destination & archive reference |

---

## 2. Variables Inventory by Repository & Source

### A. COSYlanguages Public Site (`shared/css/tokens.css` & `css/tokens.css`)
* **Prefixes / Namespaces:** `--cosy-*`, `--btn-*`, `--sage-*`, `--cream*`, `--ink*`, `--honey*`, `--coral*`, `--blue*`, `--green*`, `--rose*`, `--navy*`, `--plum*`.
* **Core Tokens:**
  - Colors: `--cosy-color-cream`, `--cosy-color-cream-dark`, `--cosy-color-warm-white`, `--cosy-color-surface`, `--cosy-color-ink`, `--cosy-color-ink-soft`, `--cosy-color-ink-muted`, `--cosy-color-ink-faint`, `--cosy-color-muted`, `--cosy-color-border`, `--cosy-color-border-hover`
  - Sage Brand: `--cosy-color-sage`, `--cosy-color-sage-dark`, `--cosy-color-sage-deep`, `--cosy-color-sage-soft`, `--cosy-color-sage-mist`, `--cosy-color-sage-pale`, `--cosy-color-sage-light`
  - Group Accents: `--cosy-accent-learn-free` (`#0d7a5f`), `--cosy-accent-your-classes` (`#1e2f6b`), `--cosy-accent-join-in` (`#B84318`)
  - Course Track Tokens: `--cosy-track-general`, `--cosy-track-spoken`, `--cosy-track-professional`, `--cosy-track-travelling`, `--cosy-track-relocation`, `--cosy-track-exam`
  - Button System: `--btn-height`, `--btn-radius`, `--btn-padding`, `--btn-font-size`, `--btn-primary-bg`, `--btn-primary-color`, `--btn-secondary-*`, `--btn-soft-*`, `--btn-tertiary-*`
  - Shadows & Radii: `--cosy-shadow-raised`, `--cosy-shadow-pressed`, `--cosy-shadow-sm`, `--cosy-shadow-base`, `--cosy-shadow-md`, `--cosy-shadow-lg`, `--cosy-radius-xs` through `--cosy-radius-full`

### B. COSYblog Vogue Gazette (`blog/css/tokens.css`)
* **Prefixes / Namespaces:** `--blog-*`, `--post-palette-*`.
* **Unique Variables:**
  - Fonts: `--blog-font-display`, `--blog-font-body`, `--blog-font-accent`, `--blog-font-mono`
  - Type Scale: `--blog-text-xs` (0.75rem), `--blog-text-sm` (0.875rem), `--blog-text-base` (1.0625rem), `--blog-text-lg` (1.25rem), `--blog-text-xl` (1.5rem), `--blog-text-2xl` (2rem), `--blog-text-3xl` (2.75rem), `--blog-text-4xl` (3.5rem)
  - Editorial Palette: `--blog-paper-light` (`#faf7f2`), `--blog-paper-card` (`#ffffff`), `--blog-paper-aged` (`#f3ede4`), `--blog-ink-primary` (`#1c1917`), `--blog-ink-secondary` (`#44403c`), `--blog-ink-muted` (`#78716c`), `--blog-accent-teal` (`#0d9488`), `--blog-accent-crimson` (`#be123c`), `--blog-accent-gold` (`#b45309`), `--blog-accent-navy` (`#1e293b`), `--blog-accent-sage` (`#3d5a45`)
  - Paper Shadows & Textures: `--blog-shadow-paper`, `--blog-shadow-floating`, `--blog-shadow-stamp`, `--blog-texture-grain`
  - Stage & Post Overrides: `--post-palette-accent`, `--post-palette-bg`, `--post-palette-text`

### C. COSYevents & COSYgames Monorepo Workspace (`COSYevents/shared/css/tokens.css` & `COSYgames/shared/css/tokens.css`)
* **Prefixes / Namespaces:** Unprefixed legacy primitive tokens (`--cream`, `--sage`, `--ink`, `--border`, `--space-*`, `--r-*`).
* **Variables:**
  - Primitive Colors: `--cream`, `--cream-dark`, `--warm-white`, `--ink`, `--ink-soft`, `--ink-muted`, `--ink-faint`, `--sage`, `--sage-dark`, `--sage-deep`, `--sage-soft`, `--sage-mist`, `--sage-pale`, `--sage-light`
  - Tints: `--teal`, `--honey`, `--coral`, `--gold`, `--plum`, `--blue`, `--green`, `--rose`, `--navy`, `--accent-color`
  - Theme Logic: `--paper-bg`, `--paper-txt`, `--contrast-bg`, `--contrast-txt`, `--contrast-border`, `--background-color`, `--surface-color`, `--text-color`, `--light-gray`

### D. COSYworld Legacy Token Definitions (`cosy-tokens.css`)
* **Prefixes / Namespaces:** Mixed `--cosy-color-*` and direct aliases.
* **Variables:**
  - Legacy Tag Colors: `--cosy-tag-a2-bg` (`#FAF0E6`), `--cosy-tag-a2-color` (`#8A5200`), `--cosy-tag-sensitive-bg` (`#FFF5F5`), `--cosy-tag-sensitive-color` (`#B91C1C`)
  - Legacy Track Names: `--cosy-track-relocation` (`#d66161`), `--cosy-track-exam` (`#7a5c3a`)

---

## 3. Conflict Analysis & Resolution Matrix

When unifying tokens into the canonical `shared/css/tokens.css`, conflicts between token names and values across sources are resolved in favor of COSYlanguages' public-site values:

| Variable Name | Public-Site Value (`shared/css/tokens.css`) | Conflicting Value & Source | Resolution Strategy |
|---|---|---|---|
| `--cosy-color-sage` / `--sage` | `#416b49` | `#3d5a45` (Blog) / `#6c9172` (Dark) | Resolved to `#416b49` in Light mode; dark mode override `#5A7A5F` |
| `--cosy-color-cream` / `--cream` | `#FAF7F2` | `#fdfcf8` (`cosy-tokens.css`) | Resolved to `#FAF7F2` (Warm Cream) as public canonical surface |
| `--cosy-color-cream-dark` | `#F2EBDC` | `#f5ede0` (`cosy-tokens.css`) | Resolved to `#F2EBDC` (Warm Cream Dark) for public card contrasts |
| `--cosy-color-ink` / `--ink` | `#181C18` | `#2a2a2a` (`cosy-tokens.css`) | Resolved to `#181C18` (Dark Roast Ink) for optimal typography contrast |
| `--cosy-color-border` | `rgba(24, 28, 24, 0.12)` | `rgba(74, 107, 80, 0.12)` | Resolved to `rgba(24, 28, 24, 0.12)` for natural ink border transparency |
| `--accent-color` | `#416b49` (Sage) | `#d66161` (Rust/COSYworld) | Resolved to `--cosy-languages-accent` (`#416b49`); brand accents available as named overrides |
| `--radius` / `--cosy-radius-base` | `18px` | `10px` / `14px` | Resolved to `18px` with alias mapping `--radius-sm: 10px`, `--radius-md: 14px` |

---

## 4. Union & Canonical Master System Structure

The canonical `shared/css/tokens.css` incorporates:
1. **Repository Brand Accents:** Named variables (`--cosy-languages-accent`, `--cosy-tools-accent`, `--cosy-manuals-accent`, `--cosy-platform-accent`, `--cosy-events-accent`, `--cosy-games-accent`, `--cosy-world-accent`).
2. **Canonical Colors & Tints:** Public-site Warm Cream base (`#FAF7F2`), Dark Roast Ink (`#181C18`), Sage palette, and group accents (`Learn free`, `Your classes`, `Join in`).
3. **Typography & Spacing Scale:** Shared standard font stacks, CEFR track badges, and button system variables.
4. **Theme Overrides:** `html[data-theme="dark"]` and `@media (prefers-color-scheme: dark)` overrides preserving WCAG AA contrast.
