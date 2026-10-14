# COSYlanguages Design Tokens

This document details the master design tokens available in `css/cosy-tokens.css` for the COSYlanguages platform and its ecosystem of decoupled consumer applications.

---

## 1. Consumer Repositories Linking Policy

> **CRITICAL POLICY:**
> Consumer repositories (including `COSYtools`, `COSYgames`, `COSYevents`, `COSYstudio`, `COSYcourses`, etc.) **MUST** import or link `css/cosy-tokens.css` via a `raw.githubusercontent.com` URL **pinned to a specific commit SHA or release tag**.
>
> **NEVER** reference `main` directly in consumer imports.

### Example Valid Links

#### Direct CSS `<link>` Tag
```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/cosylanguages/COSYlanguages/v1.0.0/css/cosy-tokens.css">
```

#### CSS `@import` Directive
```css
@import url("https://raw.githubusercontent.com/cosylanguages/COSYlanguages/a1b2c3d4e5f678901234567890abcdef12345678/css/cosy-tokens.css");
```

---

## 2. Premium Track Colors

The COSYlanguages product suite features six core CEFR course tracks, each assigned a distinctive signature color:

| Track / Brand | Track Token | Color Token | Hex Value | Light / Tint Token | Usage |
|---------------|-------------|-------------|-----------|--------------------|-------|
| **General Course** | `--cosy-track-general` | `--cosy-color-forest-green`, `--cosy-color-sage` | `#416b49` | `--cosy-track-general-light` (`#e8f0e9`) | Core CEFR progressive syllabus & general platform |
| **Spoken Course** | `--cosy-track-spoken` | `--cosy-color-terracotta`, `--cosy-color-coral` | `#B84318` | `--cosy-track-spoken-light` (`#faeee8`) | Conversational speaking sessions & oral fluency |
| **Professional Course** | `--cosy-track-professional` | `--cosy-color-credible-navy`, `--cosy-color-navy` | `#1e2f6b` | `--cosy-track-professional-light` (`#e8ecf5`) | Business communication, resume/CV & workplace skills |
| **Travelling Course** | `--cosy-track-travelling` | `--cosy-color-practical-fresh-green`, `--cosy-color-green` | `#4a6b50` | `--cosy-track-travelling-light` (`#e5f4ec`) | Travel, tourism, navigation & practical dialogue |
| **Relocation Course** | `--cosy-track-relocation` | `--cosy-color-warm-rust` | `#d66161` | `--cosy-track-relocation-light` (`#fcebeb`) | Expat integration, local bureaucracy & social life |
| **Exam Preparation** | `--cosy-track-exam` | `--cosy-color-scholarly-plum`, `--cosy-color-plum` | `#7a5c3a` | `--cosy-track-exam-light` (`#f5ede0`) | IELTS, DELF/DALF & formal qualification practice |

---

## 3. Base & Neutral Palette

| Token Name | Hex / RGBA Value | Purpose |
|------------|-------------------|---------|
| `--cosy-color-cream` | `#fdfcf8` | Primary light background surface |
| `--cosy-color-cream-dark` | `#f5ede0` | Secondary background / warm tint surface |
| `--cosy-color-warm-white` | `#FFFEFB` | High-contrast card surface background |
| `--cosy-color-surface` | `#FFFFFF` | Default container & modal surface |
| `--cosy-color-ink` | `#2a2a2a` | Primary body text |
| `--cosy-color-ink-soft` | `#4a4a4a` | Secondary text & subheadings |
| `--cosy-color-ink-muted` | `#4a4a4a` | Muted captions & metadata |
| `--cosy-color-ink-faint` | `#5c5957` | De-emphasized labels & borders |
| `--cosy-color-muted` | `#5c5957` | Subdued secondary text |
| `--cosy-color-border` | `rgba(74, 107, 80, 0.12)` | Standard UI container borders |
| `--cosy-color-border-hover` | `rgba(74, 107, 80, 0.25)` | Interactive border hover state |

---

## 4. Typography Scale

### Font Families
- `--cosy-font-sans`: `'Nunito', 'DM Sans', sans-serif`
- `--cosy-font-serif`: `'Fraunces', 'Lora', serif`
- `--cosy-font-mono`: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace`

### Font Sizes
- `--cosy-font-size-xs`: `0.75rem` (12px)
- `--cosy-font-size-sm`: `0.875rem` (14px)
- `--cosy-font-size-base`: `1rem` (16px)
- `--cosy-font-size-lg`: `1.125rem` (18px)
- `--cosy-font-size-xl`: `1.25rem` (20px)
- `--cosy-font-size-2xl`: `1.5rem` (24px)
- `--cosy-font-size-3xl`: `2rem` (32px)
- `--cosy-font-size-4xl`: `2.5rem` (40px)

### Font Weights
- `--cosy-font-weight-normal`: `400`
- `--cosy-font-weight-medium`: `500`
- `--cosy-font-weight-semibold`: `600`
- `--cosy-font-weight-bold`: `700`
- `--cosy-font-weight-extrabold`: `800`

### Line Heights
- `--cosy-line-height-tight`: `1.2`
- `--cosy-line-height-snug`: `1.375`
- `--cosy-line-height-normal`: `1.5`
- `--cosy-line-height-relaxed`: `1.625`
- `--cosy-line-height-loose`: `1.7`

---

## 5. Spacing Scale

| Token Name | Value | Pixel Equivalent |
|------------|-------|-------------------|
| `--cosy-space-xs` | `4px` | 4px |
| `--cosy-space-sm` | `8px` | 8px |
| `--cosy-space-md` | `16px` | 16px |
| `--cosy-space-lg` | `24px` | 24px |
| `--cosy-space-xl` | `32px` | 32px |
| `--cosy-space-xxl` | `48px` | 48px |

---

## 6. Border Radius Scale

| Token Name | Alias Token | Value | Common Application |
|------------|-------------|-------|--------------------|
| `--cosy-radius-xs` | — | `4px` | Chips, inline badges |
| `--cosy-radius-sm` | `--cosy-r-sm` | `8px` | Small buttons, tooltips |
| `--cosy-radius-smm` | `--radius-sm` | `10px` | Medium buttons, inputs |
| `--cosy-radius-md` | `--cosy-r-md` | `14px` | Cards, popovers |
| `--cosy-radius-base` | `--radius` | `18px` | Primary UI containers |
| `--cosy-radius-lg` | `--cosy-r-lg` | `22px` | Large feature cards |
| `--cosy-radius-xl` | `--cosy-r-xl` | `32px` | Hero sections, modals |
| `--cosy-radius-full` | — | `100px` | Pill buttons, avatars |

---

## 7. Elevation & Shadows

| Token Name | Value | Purpose |
|------------|-------|---------|
| `--cosy-shadow-sm` | `0 2px 12px rgba(46, 74, 51, 0.07)` | Subtle card elevation |
| `--cosy-shadow-base` | `0 6px 28px rgba(46, 74, 51, 0.10)` | Standard container shadow |
| `--cosy-shadow-md` | `0 4px 14px rgba(46, 74, 51, 0.15)` | Dropdown menus & hover states |
| `--cosy-shadow-lg` | `0 6px 20px rgba(46, 74, 51, 0.25)` | Modals, prominent CTAs |

---

## 8. Dark Mode Overrides

When dark theme is activated (`html[data-theme="dark"]` or `body.theme-dark`), background and ink tokens automatically adjust:

```css
html[data-theme="dark"], body.theme-dark {
    --cosy-color-cream:      #1a1f1a;
    --cosy-color-cream-dark: #141914;
    --cosy-color-warm-white: #222b22;
    --cosy-color-surface:    #222b22;
    --cosy-color-ink:        #e8f0e9;
    --cosy-color-ink-soft:   #c8d8c9;
    --cosy-color-muted:      #8a9e8b;
    --cosy-color-border:     rgba(107, 143, 113, 0.2);
}
```
