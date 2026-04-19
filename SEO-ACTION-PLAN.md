# Peach Bitcoin — SEO Remediation Plan

**Source audit:** [seo-audit-2026-04-17.html](./seo-audit-2026-04-17.html) (full-site crawl, 936/936 URLs)
**Baseline Health Score:** **~30/100** (updated from 44 after full crawl revealed issues at scale)
**Target after Phase 2:** ~65/100 · **Target after Phase 4:** ~85/100

Each task references the exact file + line + affected-page count. Tasks are grouped by phase; within a phase they can be parallelized across contributors.

---

## Implementation Status (updated 2026-04-19)

| Phase | Status | Commit | Key metric change |
|---|---|---|---|
| **Phase 1** — Stop the bleeding | ✅ **Shipped** | `seo: add canonical+hreflang, fix title/description leak, clean sitemap` | canonical 0/936 → 936/936, hreflang 0/936 → 936/936, sitemap `/index.html` 936 → 0, markdown leaks 37 → 0 |
| **Phase 2** — JSON-LD, titles, H1 | ✅ **Shipped** | `seo: add JSON-LD, derive unique titles, fix H1 hierarchy` | JSON-LD 0/936 → 936/936, pages missing H1 24 → 1, multiple H1 30 → 0, duplicate-title pages 480 → 62 |
| **Phase 3** — Hygiene | ✅ **Shipped** | `seo: hygiene pass — alt text, meta descriptions, llms.txt, robots.txt` + `seo: extract inline cookie CSS, add security.txt` | missing alt 1014 → 0, duplicate-description pages 170 → 97, per-page HTML −2.2 KB |
| **Phase 4** — Measurement & infra | ⏳ **Owner-action** | — | Requires Google API creds (T27), Cloudflare Transform Rules (T28 CSP, T6 redirects, T13 redirect), drift baseline (T30) |

**Verified after merge (full local rebuild, 936/936 pages):**
```
pages_without_canonical:            0
pages_without_hreflang:             0
pages_without_jsonld:               0
pages_without_h1:                   1  (single empty cfa-xof FAQ content file)
pages_with_multiple_h1:             0
pages_with_markdown_leak_in_desc:   0
pages_with_empty_og_site_name:      0
total_imgs_missing_alt:             0  (of 8,203 total)
duplicate_title_groups:            18  (all cross-locale translations)
pages_affected_by_dup_titles:      62  (was 480)
pages_affected_by_dup_descs:       97  (was 170)
sitemap URLs ending in /index.html: 0
sitemap URL count:                936
```

**Deferred to Phase 3.5 (needs Cloudflare work):**
- T6 — Rename 312 FAQ pages with literal `&` in URL → needs 301 Redirect Rules to preserve backlinks.
- T16 — Lowercase 381 uppercase slugs → same 301 requirement.
- These are tracked but not code-safe without coordinated infra.

**Deferred to Phase 4 (needs credentials / infra):**
- T27 — PageSpeed / CrUX / GSC / GA4 integration.
- T28 — Content-Security-Policy rollout via Cloudflare Transform Rule.
- T30 — `/seo drift baseline` after live deployment.

---

## Phase 1 — Stop the bleeding (1–2 PRs, ~2 days)

Goal: fix the issues that either mis-index the site, split ranking signals, or cause Google to treat half the site as duplicate content.

### T1. Fix the homepage title / description leak  *(→ C1)*
- **Scope:** homepage + ~9 other pages that share the generic fallback title.
- **File:** the pug template that compiles to `dist/index.html` (start with `src/index.pug` or grep `src/` for `"What do people say about us"`).
- **Action:** remove the reviews-page `title` / `description` block from the home page. The template fallback at [src/includes/template.pug:4](src/includes/template.pug#L4) will then produce `"Peach Bitcoin · <tagline>"` automatically. If you want a bespoke homepage title, set it explicitly.
- **Verify:** `curl -s https://peachbitcoin.com | grep -o '<title>[^<]*</title>'` returns the marketplace title, not the reviews text.

### T2. Emit `rel="canonical"` on every page  *(→ C2, affects 930 / 936 pages)*
- **File:** [src/includes/template.pug:15-48](src/includes/template.pug#L15-L48) (head block).
- **Action:**
  ```pug
  link(rel="canonical" href=`https://peachbitcoin.com${canonicalPath || permalink}`)
  ```
  `permalink` is already used in the template ([line 58](src/includes/template.pug#L58)). Allow per-page override via `canonicalPath` for edge cases.
- **Verify:** `curl -s https://peachbitcoin.com/ | grep -c 'rel="canonical"'` returns `1` on every sampled page.

### T3. Emit full `hreflang` cluster on every page  *(→ C3, affects 936 / 936 pages)*
- **File:** [src/includes/template.pug:15-48](src/includes/template.pug#L15-L48).
- **Dependency:** `getUrl(permalink, lang)` helper (already used at [:70](src/includes/template.pug#L70) / [:79](src/includes/template.pug#L79)).
- **Action:**
  ```pug
  each l in ['en','es','de','it','fr','pt']
    if pageExistsIn(permalink, l)
      link(rel="alternate" hreflang=l href=`https://peachbitcoin.com${getUrl(permalink, l)}`)
  link(rel="alternate" hreflang="x-default" href=`https://peachbitcoin.com${getUrl(permalink, 'en')}`)
  ```
- **Edge case:** some posts only exist in EN (e.g. the 19-word `group-hug` stubs) — implement `pageExistsIn` by checking the sitemap / dist output. Don't stub-link to untranslated URLs.
- **Verify:** `curl -s https://peachbitcoin.com/ | grep -c 'hreflang='` returns `7` for fully-translated pages. Validate via Google's hreflang checker.

### T4. Strip `/index.html` from sitemap URLs  *(→ C4, affects 936 / 936 URLs)*
- **File:** [tasks/generate_sitemap.js:6-9](tasks/generate_sitemap.js#L6-L9).
- **Action:**
  ```js
  const pages = html.map(file => file
    .replace(/.*\/dist/, 'https://peachbitcoin.com')
    .replace(/\/index\.html$/, '/'))
  ```
- **Verify:** after rebuild, `grep -c '/index.html</loc>' dist/sitemap.xml` returns `0`.

### T5. Unique titles for the 480 affected pages  *(→ C5)*
- **Scope:** 55 programmatic `/buy-bitcoin-with-*/` + 312 FAQ currency pages (52+44×5) + 72 blog index/tag pages across locales + 10 locale homepages.
- **Where titles come from:**
  - **Programmatic pages**: template lives in `src/buy-bitcoin-with/` (or wherever the `/buy-bitcoin-with-*/` routes are generated). Currently all 55 emit the literal string `"How to Buy Bitcoin on Peach Bitcoin Peer-to-Peer marketplace"`. Replace with a variable title like `"Buy Bitcoin with ${paymentMethod} — No KYC"`.
  - **FAQ currency pages**: `content/**/faq/Buy-&-Sell-Bitcoin-using-*-in-2024.md` (and localized variants). Currently all 51 EN pages have the same title; same per-locale. Template titles: `"Buy & Sell Bitcoin with ${currency.toUpperCase()} in 2025"` (per locale).
  - **Blog tag pages**: 60 PT blog tag pages share `"Blog · Peach Bitcoin"` (same for other locales). Template: `"${tagName} — Peach Blog"`.
  - **Locale homepages**: 10 pages share the generic EN title. Give each locale a distinct, localized homepage title (coordinated with T9).
- **Verify:** after rebuild, count unique titles:
  ```bash
  ~/.claude/skills/seo/.venv/bin/python /tmp/peach-seo-audit/crawl.py
  jq '.title_issues.duplicate_title_groups' /tmp/peach-seo-audit/summary.json
  ```
  Target: < 5 duplicate-title groups (allow small system pages to share e.g. pagination stubs).

### T6. Fix URL ampersands on 312 FAQ currency pages  *(→ C6)*
- **Scope:** every `/faq/Buy-&-Sell-Bitcoin-using-*-in-2024/` path across all 6 locales.
- **Action:**
  1. Rename the source files in `content/{en,es,de,it,fr,pt}/faq/` — drop the `&`:
     - `Buy-&-Sell-Bitcoin-using-vnd-in-2024.md` → `buy-sell-bitcoin-using-vnd-2025.md` (also lowercase per H8/T8, and drop the `2024` → `2025` since content references 2025 elsewhere).
  2. Deploy Cloudflare Redirect Rules mapping every old `/faq/Buy-&-Sell-Bitcoin-using-{X}-in-2024/` → new lowercase path, with the correct locale prefix preserved. Generate the Rule list programmatically from the list of affected URLs in `/tmp/peach-seo-audit/per_page.json`.
  3. Rebuild + regenerate sitemap.
- **Verify:** `curl -s https://peachbitcoin.com/sitemap.xml | grep -c '&'` returns `0`. Old URL returns 301 → new URL.

### Phase 1 deliverable
Two PRs: (1) T1–T4 (template/head fixes, sitemap script), (2) T5–T6 (title templates + URL rename). Plus a Cloudflare config change for the redirect rules. Expected impact: **+25–30 health points**.

---

## Phase 2 — Structured data, H1s, i18n cleanup (2 PRs, ~3–5 days)

### T7. Add sitewide `Organization` + `WebSite` JSON-LD  *(→ H1)*
- **File:** [src/includes/template.pug](src/includes/template.pug) (new script block in head).
- **Action:** add a JSON-LD script with `@graph` containing `Organization` + `WebSite`:
  ```json
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://peachbitcoin.com/#org",
        "name": "Peach Bitcoin",
        "url": "https://peachbitcoin.com",
        "logo": "https://peachbitcoin.com/img/peach-bitcoin.svg",
        "sameAs": [
          "https://twitter.com/peachbitcoin",
          "https://t.me/peachbitcoin",
          "https://github.com/Peach2Peach",
          "https://www.youtube.com/@peachbitcoin"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://peachbitcoin.com/#website",
        "url": "https://peachbitcoin.com",
        "name": "Peach Bitcoin",
        "publisher": { "@id": "https://peachbitcoin.com/#org" },
        "inLanguage": "en"
      }
    ]
  }
  ```
  Pull `sameAs` values from siteData (already in [template.pug:150-156](src/includes/template.pug#L150-L156)). Set `inLanguage` from the current page `lang`.
- **Verify:** Google's Rich Results Test (https://search.google.com/test/rich-results) against the homepage.

### T8. `MobileApplication` schema on homepage  *(→ H1)*
- **File:** homepage pug only.
- **Action:**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Peach Bitcoin",
    "operatingSystem": ["iOS", "Android"],
    "applicationCategory": "FinanceApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "downloadUrl": [
      "https://testflight.apple.com/join/wfSPFEWG",
      "https://play.google.com/store/apps/details?id=com.peachbitcoin.peach.mainnet"
    ]
  }
  ```

### T9. `BlogPosting` schema on blog posts  *(→ H1)*
- **File:** the blog post pug template.
- **Action:** emit `BlogPosting` with `headline`, `author`, `datePublished`, `dateModified`, `image`, `mainEntityOfPage`. Pull values from front-matter.
- **Skip `FAQPage`** — Google restricts rich results to gov/healthcare. If you want AI/LLM citation benefit for the 312 FAQ currency pages, consider `QAPage` instead.

### T10. Fix H1 hierarchy  *(→ H2, 48 pages total)*
- **Missing H1 (24 pages):** `/kycfree-orderbook/`, `/how-to-buy-btc-no-kyc/`, `/referral/`, `/terms-and-conditions/` across all 6 locales. Add a semantic `<h1>` as the top-level heading for each template.
- **Multiple H1 (24 pages):** 6 locale homepages emit 2 H1s (desktop + mobile teaser). 18 blog posts (`peach-in-japanese`, `1y-anniversary`, `Alternative-to-AgoraDesk` × 6 locales). Collapse to a single `<h1>` and use CSS for responsive display.
- **Verify:** after rebuild, rerun `crawl.py`; `jq '.sitewide_gaps.pages_without_h1, .sitewide_gaps.pages_with_multiple_h1' /tmp/peach-seo-audit/summary.json` both return `0`.

### T11. Strip unrendered markdown from meta descriptions  *(→ H3, 37 pages)*
- **File:** the template step where `description` is rendered into the `<meta>` tag. Likely a pug mixin in `src/`.
- **Action:** either (a) author meta strings as plain text in the content files (safer), or (b) apply `.replace(/\*\*(.+?)\*\*/g, '$1')` and similar scrubbers at build time before emitting the description.
- **Verify:** `grep -E 'description.*\*\*' dist/**/*.html` returns nothing.

### T12. Localize non-English homepage titles  *(→ part of C5)*
- **Scope:** ES, DE, IT, FR, PT homepages.
- **Action:** in `content/{es,de,it,fr,pt}/` replace the English-language title with a localized, marketplace-centric version (e.g. ES: `"Peach Bitcoin · Compra y vende Bitcoin peer-to-peer"`).

### T13. Replace JS redirect at `/how-it-works/` with Cloudflare 301 + direct nav  *(→ H4)*
- **Code:** change [src/includes/template.pug:79](src/includes/template.pug#L79) `+navItem("how-it-works", ...)` to point at the real destination.
- **Infra:** Cloudflare → **Rules → Redirect Rules**: URI Path equals `/how-it-works/` → 301 → `/how-to-buy-btc-no-kyc/` (apply per-locale).
- **Cleanup:** delete `dist/how-it-works/index.html` stubs.
- **Verify:** `curl -sI https://peachbitcoin.com/how-it-works/` returns `HTTP/2 301`.

### T14. Fix empty `og:site_name`  *(→ H5)*
- **File:** [src/includes/template.pug:24](src/includes/template.pug#L24).
- **Action:** `content=siteData.meta.title` (or a literal `"Peach Bitcoin"`).

### T15. Reconcile noindex vs sitemap on `group-hug` stubs  *(→ H6 + H7, 6 pages)*
- **Scope:** 6 locale variants of `/blog/group-hug/` are `noindex` AND 19-word stubs AND (for 5 of them) have `html lang="en"` despite localized URLs.
- **Decision tree:**
  - **If these posts should go live:** translate them properly, remove the `noindex`, set correct `html lang`.
  - **If these are placeholder / legacy:** remove from the sitemap output in [tasks/generate_sitemap.js](tasks/generate_sitemap.js) — filter out files that contain `<meta name="robots" content="noindex"`.
- **Verify:** `jq '.noindex_pages | length' /tmp/peach-seo-audit/summary.json` returns `0` OR those pages are absent from the sitemap.

### T16. Lowercase all uppercase slugs  *(→ H8, 381 URLs)*
- **Scope:** examples — `/buy-btc-with-Amazon/`, `/blog/Alternative-to-AgoraDesk/`, all 312 `/faq/Buy-&-Sell-Bitcoin-*/` paths (overlaps with T6).
- **Action:**
  1. Rename source content files to lowercase kebab-case in `content/**/`.
  2. Update internal links that reference the capitalized slugs (grep `src/` and `content/` for the old paths).
  3. Deploy Cloudflare Redirect Rules mapping old capitalized URLs → new lowercase versions. Generate the rule list from `/tmp/peach-seo-audit/per_page.json`.
- **Verify:** `jq '.case_issue_urls_sample | length' /tmp/peach-seo-audit/summary.json` returns `0` (after updating the aggregator regex to match any path segment, not just the last).

### Phase 2 deliverable
Two PRs + Cloudflare config. Expected impact: **+15–20 points**.

---

## Phase 3 — Quality + hygiene (2 PRs, ~3–4 days)

### T17. Title & description length pass  *(→ M1 + M2, ~1,430 pages affected in total)*
- **Scope:** 125 titles < 30ch, 521 titles > 60ch, 107 descs < 80ch, 683 descs > 160ch.
- **Action:** add a build-time linter that flags out-of-range titles/descs. Many will be fixed automatically by T5 (proper templating); the rest are per-content edits.
- **Verify:** after T5+fixes, rerun crawler; `jq '.title_issues.too_long_titles, .description_issues.too_long_descs' /tmp/peach-seo-audit/summary.json` drops substantially.

### T18. Deduplicate meta descriptions  *(→ M3, 170 pages)*
- Same root cause as C5. Template descriptions with the same variable substitution used for titles in T5.

### T19. Fix 1,008 missing image `alt` attributes  *(→ M4, 930 pages)*
- **Scope:** 12.4% of all 8,149 `<img>` tags sitewide.
- **Action:**
  1. Audit the partials / mixins that emit `<img>` in `src/` and make `alt` a required param.
  2. Decorative SVG icons should use `alt=""` + `role="presentation"` rather than omit `alt`.
  3. Add a build-time lint (e.g. a grep check in `tasks/`) that fails CI if any `<img>` in `dist/` is missing `alt`.
- **Verify:** after rebuild, `jq '.sitewide_gaps.total_imgs_missing_alt' /tmp/peach-seo-audit/summary.json` returns `0`.

### T20. Spot-check content uniqueness on programmatic pages  *(→ from audit's Quality Gate)*
- The 55 `/buy-bitcoin-with-*/` pages have 0 under 500 words (good) but share titles (addressed in T5). Diff the rendered body text on 5 random pages. If >40% is boilerplate, inject payment-method-specific content (fees, popularity, region availability, tutorial link).

### T21. Remove or translate thin stub pages  *(→ M5)*
- 6 × `/blog/group-hug/` (19 words): handled by T15.
- `/de/signup-confirmation/` (38 words): consolidate with EN or expand.
- 20+ thin FAQ currency pages (83-88 words): either expand with currency-specific guidance or consolidate.

### T22. Remove duplicate cookie-consent script block  *(→ M8)*
- [src/includes/template.pug:415-488](src/includes/template.pug#L415-L488) and [:504-583](src/includes/template.pug#L504-L583) are duplicated. Keep one copy, extract to `src/js/cookie-consent.js`, load with `defer`.

### T23. De-inline cookie-banner CSS  *(→ M9)*
- Move [src/includes/template.pug:167-319](src/includes/template.pug#L167-L319) into `src/css/main.css`. Saves ~5 KB on every page × 936 pages = ~4.5 MB bandwidth reduction sitewide.

### T24. Add `llms.txt`  *(→ M7)*
- Create `static/llms.txt` following the spec at https://llmstxt.org/. Curate the most valuable pages: homepage, `/how-to-buy-btc-no-kyc/`, `/kycfree-orderbook/`, `/for-businesses/`, `/support/`, top 10 blog posts.

### T25. Add `robots.txt` directives  *(→ L1)*
- Append to `static/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://peachbitcoin.com/sitemap.xml
  ```

### T26. Remove ignored HTML security headers  *(→ L4)*
- Delete `<meta http-equiv="X-Frame-Options">` and `<meta http-equiv="X-XSS-Protection">` at [template.pug:18-19](src/includes/template.pug#L18-L19).

### Phase 3 deliverable
Two PRs (code hygiene + content/config). Expected impact: **+8–12 points**.

---

## Phase 4 — Measurement & CSP (ongoing)

### T27. Wire up Google API credentials for real field data
- Run `python ~/.claude/skills/seo/scripts/google_auth.py` to set up OAuth.
- Add a `PAGESPEED_API_KEY` to shell env (free tier: 25k QPD).
- Re-run with `/seo google pagespeed` and `/seo google crux` to replace lab estimates with field CWV data.
- Feed GSC query data into `/seo google gsc-query` to find underperforming queries and pages.

### T28. Deploy Content-Security-Policy  *(→ M6)*
- **Where:** Cloudflare Transform Rule (HTTP Response Header Modification).
- **Start report-only:**
  ```
  Content-Security-Policy-Report-Only:
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self' data:;
    connect-src 'self' https://www.google-analytics.com;
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self' mailto:;
  ```
- **Then tighten:** move inline scripts to external files, replace `'unsafe-inline'` on `script-src` with per-request nonces (Cloudflare Workers can inject these). Promote to enforcing after a week of clean reports.

### T29. Publish `.well-known/security.txt`  *(→ L2)*
- RFC 9116:
  ```
  Contact: mailto:gdpr@peachbitcoin.com
  Expires: 2027-04-17T00:00:00.000Z
  Preferred-Languages: en
  Canonical: https://peachbitcoin.com/.well-known/security.txt
  ```

### T30. Drift monitoring
- After Phase 2 ships: `/seo drift baseline https://peachbitcoin.com`
- Re-run monthly: `/seo drift compare https://peachbitcoin.com` (catches title changes, canonical drift, schema breakage).

---

## Execution checklist

| PR | Tasks | Pages touched | Reviewer focus | Risk |
|---|---|---|---|---|
| **PR 1 — head fixes** | T1, T2, T3, T4, T14 | 936 | template/head changes, sitemap output diff | Low |
| **PR 2 — title templates** | T5, T12 | 480 | programmatic titles, locale homepage titles | Low |
| **PR 3 — URL rename** | T6, T16 | 381 | slug changes, internal link updates | Medium (needs 301s) |
| **Cloudflare** | T6 redirects, T13 redirect, T28 CSP | N/A | Rules dashboard, staging test | Medium |
| **PR 4 — schema + H1** | T7, T8, T9, T10, T15 | ~30 templates | JSON-LD validity, heading hierarchy, noindex reconciliation | Low |
| **PR 5 — i18n cleanup** | T11, T13 (code side) | sitewide | markdown strip, nav target | Low |
| **PR 6 — hygiene** | T17, T18, T19, T22, T23, T25, T26 | sitewide | linters, alt text, CSS/JS extraction | Low |
| **PR 7 — content** | T20, T21, T24 | ~40 pages | content uniqueness, llms.txt curation | Low |
| **Ongoing** | T27, T30 | — | — | — |
| **Infra** | T28, T29 | N/A | CSP rollout, security.txt | Medium |

## End-to-end verification

After each phase, rerun the full-site crawler to measure progress:

```bash
~/.claude/skills/seo/.venv/bin/python /tmp/peach-seo-audit/crawl.py
jq '.sitewide_gaps, .title_issues, .description_issues' /tmp/peach-seo-audit/summary.json
```

Target totals after all phases:
- `pages_without_canonical`: 0
- `pages_without_hreflang`: ≤6 (group-hug stubs if kept)
- `pages_without_jsonld`: 0
- `pages_without_h1` / `pages_with_multiple_h1`: 0
- `duplicate_title_groups`: ≤5
- `duplicate_description_groups`: ≤5
- `pages_with_markdown_leak_in_desc`: 0
- `total_imgs_missing_alt`: 0
- `case_issue_urls`: 0
- Sitemap: 0 URLs ending in `/index.html`, 0 URLs containing `&`
- CWV (CrUX, mobile, 75th percentile): LCP <2.5s, INP <200ms, CLS <0.1 (from T27)

## Out of scope (for this plan)

- Content production (new blog posts, pillar pages) — separate editorial workflow
- Backlink acquisition — not a code task
- Google Business Profile / local SEO — Peach is global, not local-service
- Paid search / ads — separate marketing track
- Product copy / translations for untranslated stub posts — see T15 decision

## Crawl artefacts (reproducible)

- `/tmp/peach-seo-audit/crawl.py` — the concurrent crawler
- `/tmp/peach-seo-audit/per_page.json` — per-URL signals for all 936 pages
- `/tmp/peach-seo-audit/summary.json` — aggregate tallies and top duplicate groups
- `/tmp/peach-seo-audit/sitemap.xml` — snapshot of the live sitemap at crawl time
- Full crawl takes ~21s end-to-end; rerun any time to measure fix deltas.
