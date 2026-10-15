# COSYlanguages Pull Request Technical Audit & Review Report (`docs/PR_REVIEWS.md`)

This document provides architectural audits, security evaluations, and detailed merge recommendations for open Pull Requests against `COSYlanguages`.

---

## 1. PR #1522: SSO Link Decoration & Nav User Status
- **Title**: `feat(auth): SSO link decoration and navigation user status`
- **Scope**: `js/core/auth-sso.js`, `js/core/engine.js`, `login.html`

### Status on `main`
- **`js/core/auth-sso.js`**: `main` contains a clean, self-contained Supabase auth helper (`getSupabaseClient`, `initSSO`, `logout`) that manages authentication status via standard Supabase local session persistence (`sbClient.auth.getSession()`).
- **`js/core/engine.js`**: `main` renders the standardized navigation header (`navFree()`) with a clean `🔐 Log in` anchor pointing to `loginHref`.
- **`login.html`**: `main` utilizes direct URL redirection to ecosystem hubs without modifying URL hash fragments.

### Remaining Diffs in PR #1522
- **Link Decoration (`decorateEcosystemLinks`)**: Scans DOM anchor tags targeting ecosystem hosts (`cosylanguages.github.io`) and appends `#access_token=...&refresh_token=...` to outgoing URLs.
- **URL Hash Authentication Handling**: Reads incoming URL hashes on page load (`setSession({ access_token, refresh_token })`) and stores token objects in `localStorage`.
- **Nav Status Logic**: Dynamically modifies navigation buttons to render `👑 Founder` or `👤 Account` depending on `cosy_user_role`.

### Security Assessment & Risks
1. **Bearer Tokens in URL Hashes**:
   - Appending active Supabase JWT `access_token` and `refresh_token` strings into URL hashes (`#access_token=...&refresh_token=...`) exposes high-privilege session credentials.
   - **Leakage Vectors**:
     - **Browser History**: URL hash fragments persist in browser navigation history buffers.
     - **Extension & Script Access**: Client-side scripts and browser extensions can inspect `window.location.hash` or DOM `href` attributes before hash-stripping executes.
     - **HTTP Referer Headers**: If users click external links or trigger third-party network requests prior to URL hash sanitization, tokens risk leaking via `Referer` headers.
     - **Network Proxy & Access Logs**: Un-encoded hash parameters risk capture in logging environments if client redirection fails.
2. **Domain Scoping & Cross-Origin Boundaries**:
   - `decorateEcosystemLinks()` attempts to restrict link decoration by domain string matching. However, if third-party content or malicious DOM manipulation alters anchor targets, bearer tokens could be transmitted to non-COSY domains.
   - Because all GitHub Pages subpaths under `cosylanguages.github.io` share an origin context, token hash transfers are redundant; standard Supabase session persistence or OAuth PKCE flows are both safer and cleaner.

### Recommendation
- **Recommendation**: **Close (Do Not Apply)**.
- **Reasoning**: The token hash decoration introduces severe security vulnerabilities regarding token exposure in URL hashes, browser history, and referer leakage. `main` maintains a safer, cleaner authentication architecture using standard Supabase session persistence.
- **Affected Files**: `js/core/auth-sso.js`, `js/core/engine.js`, `login.html`.

---

## 2. PR #1545: SEO Basics, Sitemap, JSON-LD, LICENSE & COSYworld Purge
- **Title**: `feat(seo): add sitemap, canonical links, open graph meta, JSON-LD, and license`
- **Scope**: `sitemap.xml`, `LICENSE`, `scripts/enhance_seo.py`, HTML header metadata across all pages.

### Status on `main`
- **COSYworld Purge**: **Already 100% completed on `main`**. All references to `COSYworld` have been purged across all HTML, JS, CSS, and documentation files.

### Remaining Diffs in PR #1545
- **Meta Tags & Open Graph**: Injects `<link rel="canonical">`, `<meta property="og:*">`, and `<meta name="twitter:*">` across HTML files.
- **JSON-LD Structured Data**: Injects `<script type="application/ld+json">` schemas into page heads.
- **LICENSE**: Adds an MIT license file.
- **Sitemap**: Replaces `sitemap.xml` with a expanded page inventory.

### Conflicts & Architecture Issues
1. **Build Pipeline Conflict**:
   - PR #1545 directly modifies generated blog HTML pages (`blog/*.html`). On `main`, all `blog/*.html` pages are generated artifacts produced by `scripts/build-blog.js` from canonical JSON sources (`blog/posts/*.json`). Direct manual edits to `blog/*.html` create immediate drift and are overwritten on `npm run build:blog`.
2. **Sitemap Inventory Audit (`sitemap.xml`)**:
   - **Private & Noindex Pages Listed**: PR #1545's `sitemap.xml` includes `login.html` (which explicitly carries `<meta name="robots" content="noindex, follow">` as a private authentication entry point) and internal standalone templates (`templates/blog-post-template.html`, `templates/grammar/lesson-template.html`, etc.).
   - **Non-Existent / Deprecated Pages Listed**: Includes dead or removed paths such as `apps/premium-courses/*` and legacy root language shortcuts (`languages/ba.html`, `languages/fr.html`).

### Recommendation
- **Recommendation**: **Close / Re-scope**.
- **Reasoning**: The COSYworld purge is already on `main`. The SEO meta modifications conflict with `main`'s single-source blog build pipeline (`scripts/build-blog.js`), and the proposed `sitemap.xml` incorrectly exposes private (`login.html`), internal template, and deprecated URLs to search engines.
- **Actionable Next Step**: Re-scope SEO generation into `scripts/build-blog-index.js` or a dedicated node script that dynamically generates `sitemap.xml` directly from valid published posts and public entry pages while excluding `noindex`, template, and private app paths.
- **Affected Files**: `sitemap.xml`, `scripts/enhance_seo.py`, `templates/*`, `login.html`, `LICENSE`.

---

## 3. PR #1387: French Pronunciation Marathon
- **Title**: `feat(fr): add French Pronunciation Marathon A0-C2`
- **Scope**: `languages/fr/marathon-prononciation.html`, `languages/fr/marathon/*.html`, `vocabulary/*`

### Comparison of `languages/fr/marathon` on `main` vs PR #1387
- **`main` is strictly superior and more complete**:
  - `main` contains complete French Pronunciation Marathon spreads across all CEFR levels (`a0-a1.html`, `a2.html`, `b1.html`, `b2.html`, `c1.html`, `c2.html`) and the hub (`marathon-prononciation.html`).
  - PR #1387 accidentally **deleted** key educational content from `main`, specifically stripping Unité 3 callouts on vowel quantity (`[pɑːt]` vs `[pat]`), glottal stop hiatus avoidance (`il a eu`), regional orthoepy, and historic sound shifts (`je faisais` [fəzɛ]).
  - PR #1387 corrupted title tags by truncating strings (e.g. `<title>🟣 Marathon de Prononciation — Niveau C1 Poésie &amp; Dict...</title>`).

### Intent & Ecosystem Boundaries
1. **Public / Free Access Intent**:
   - `languages/fr/marathon-prononciation.html` and `languages/fr/marathon/*.html` are designed as free, public interactive web guides hosted on `COSYlanguages` for learners practicing French phonetics.
2. **COSYmanuals Overlap**:
   - While the interactive web pages reside on `COSYlanguages`, the underlying full-length structured lesson plans, teacher guides, and PDF bootcamp workbooks reside in the gated `COSYmanuals` repository (`marathons/pronunciation-bootcamp/`). `COSYlanguages` links out to these resources as appropriate.
3. **Destructive Deletions in PR #1387**:
   - PR #1387 improperly deleted thousands of vocabulary dataset files across Italian (`vocabulary/it/*`), Russian (`vocabulary/ru/*`), Portuguese (`vocabulary/pt/*`), Georgian (`vocabulary/ka/*`), Armenian (`vocabulary/hy/*`), and Tatar (`vocabulary/tt/*`), directly violating repository safeguards protecting `vocabulary/`.

### Recommendation
- **Recommendation**: **Close (Do Not Apply)**.
- **Reasoning**: `main` already possesses a superior, intact version of the French Pronunciation Marathon. PR #1387 degrades content quality (truncating titles and stripping Unité 3 phonetic callouts) and contains destructive deletions of vocabulary pool files across 6 target languages.
- **Affected Files**: `languages/fr/marathon*`, `vocabulary/*`.
