# Lead Clash - Full Website SEO Audit Report

> **Audit Date:** March 23, 2026
> **Website:** https://leadclash.com
> **Pages Audited:** 8 (Homepage, Services, About, Work, Contact, Privacy, Terms, Refund)
> **Business Type:** B2B Professional Service Agency (Lead Generation & LinkedIn Marketing)
> **Hosting:** Netlify + Cloudflare CDN
> **Framework:** Next.js

---

## Executive Summary

### SEO Health Score: 72/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 78/100 | 25% | 19.5 |
| Content Quality | 62/100 | 25% | 15.5 |
| On-Page SEO | 82/100 | 20% | 16.4 |
| Schema / Structured Data | 90/100 | 10% | 9.0 |
| Performance | 75/100 | 10% | 7.5 |
| Images | 55/100 | 5% | 2.75 |
| AI Search Readiness | 30/100 | 5% | 1.5 |
| **Total** | | **100%** | **72.15** |

### Top 5 Critical Issues

1. **No blog/content section** - Zero organic content strategy; relying entirely on service pages
2. **AI crawlers blocked in robots.txt** - ClaudeBot, GPTBot, and other AI crawlers are blocked, killing AI search visibility
3. **Thin content on Work page** - Only ~250-300 words; portfolio links go to external Google Drive
4. **No blog sitemap** - Only 8 URLs in sitemap; no content marketing footprint
5. **Missing security headers** - No Content-Security-Policy, X-Frame-Options headers

### Top 5 Quick Wins

1. Unblock AI crawlers (GPTBot, ClaudeBot) in robots.txt for AI Overview visibility
2. Add `alt` text to all portfolio/work images
3. Fix Work page meta description (exceeds 160 chars)
4. Add internal links between service pages and related content
5. Create an llms.txt file for AI search optimization

---

## 1. Technical SEO (Score: 78/100)

### Crawlability

| Check | Status | Notes |
|-------|--------|-------|
| robots.txt | Present | Blocks AI crawlers (GPTBot, ClaudeBot, Amazonbot) |
| XML Sitemap | Present | 8 URLs, properly formatted |
| Sitemap in robots.txt | Yes | Referenced correctly |
| HTTPS | Yes | SSL via Cloudflare |
| HTTP to HTTPS redirect | Yes | Automatic |
| WWW redirect | Yes | Redirects to non-www |
| 404 page | Needs check | Custom 404 recommended |

### Indexability

| Check | Status | Notes |
|-------|--------|-------|
| Meta robots | index, follow | Correct on all pages |
| Canonical tags | Present | Correct on all 8 pages |
| Duplicate content | None detected | Clean |
| Pagination | N/A | No paginated content |

### Security Headers

| Header | Status |
|--------|--------|
| HTTPS/SSL | Present (Cloudflare) |
| HSTS (Strict-Transport-Security) | Present (max-age=31536000) |
| X-Content-Type-Options | Present (nosniff) |
| Content-Security-Policy | **MISSING** |
| X-Frame-Options | **MISSING** |
| Permissions-Policy | **MISSING** |
| Referrer-Policy | **MISSING** |

### URL Structure

| Page | URL | Status |
|------|-----|--------|
| Homepage | / | Clean |
| Services | /services | Clean |
| About | /about | Clean |
| Work | /work | Clean |
| Contact | /contact | Clean |
| Privacy | /privacy | Clean |
| Terms | /terms | Clean |
| Refund | /refund | Clean |

All URLs are clean, lowercase, and descriptive.

### Issues Found

- **CRITICAL:** AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Amazonbot) blocked in robots.txt - eliminates visibility in AI-powered search (ChatGPT, Perplexity, Claude)
- **MEDIUM:** Missing Content-Security-Policy, X-Frame-Options, Permissions-Policy, Referrer-Policy headers
- **LOW:** `x-powered-by: Next.js` header exposed (minor security information leak)

---

## 2. Content Quality (Score: 62/100)

### Page Word Counts

| Page | Word Count | Status |
|------|-----------|--------|
| Homepage | ~1,500 | Adequate |
| Services | ~600-700 | Thin |
| About | ~1,200 | Adequate |
| Work | ~250-300 | **Very thin** |
| Contact | ~800-1,000 | Adequate |
| Privacy | ~1,800-2,000 | Good |
| Terms | ~1,500+ | Good |
| Refund | ~800+ | Adequate |

### E-E-A-T Assessment

| Signal | Score | Notes |
|--------|-------|-------|
| **Experience** | 6/10 | No case studies, blog, or detailed project writeups on-site |
| **Expertise** | 7/10 | Team page with roles, 7+ years experience mentioned |
| **Authoritativeness** | 5/10 | No blog, no thought leadership content, no external citations |
| **Trustworthiness** | 8/10 | Trustpilot link, testimonials (8 clients), privacy/terms/refund pages, real team photos |

### Content Issues

- **CRITICAL:** No blog or educational content - zero informational keyword targeting
- **HIGH:** Work/portfolio page is extremely thin (~250 words) and links to external Google Drive
- **HIGH:** Services page could benefit from more detailed content per service (currently ~150 words each)
- **MEDIUM:** No FAQ schema on FAQ section (homepage)
- **MEDIUM:** No author pages or author schema for thought leadership
- **LOW:** Legal pages lack internal links to main service pages

---

## 3. On-Page SEO (Score: 82/100)

### Title Tags

| Page | Title | Length | Status |
|------|-------|--------|--------|
| Home | Lead Clash - From Leads to Conversions \| Outbound Marketing Agency | 67 chars | Good |
| Services | Services - LinkedIn Optimization, Lead Generation & More \| Lead Clash | 72 chars | Slightly long |
| About | About Us - Meet the Lead Clash Team \| Lead Clash | 49 chars | Good |
| Work | Our Work - Results That Speak \| Lead Clash | 43 chars | Good |
| Contact | Contact Us - Get Started with Lead Clash \| Lead Clash | 53 chars | Good |
| Privacy | Privacy Policy \| Lead Clash | 27 chars | Short but acceptable |

### Meta Descriptions

| Page | Length | Status |
|------|--------|--------|
| Home | ~150 chars | Good |
| Services | ~124 chars | Good |
| About | ~112 chars | Could be longer |
| Work | ~156 chars | Good |
| Contact | ~155 chars | Good |
| Privacy | ~70 chars | **Too short** |

### Heading Structure

| Page | H1 | Multiple H1s? | H2 Structure |
|------|----|----|-------|
| Home | "From Leads to Conversions" | No | Good - 6 H2s |
| Services | "End-to-End Solutions" | No | Good - 6 H2s |
| About | "Where Professionalism Powers Opportunity" | No | Good - 8 H2s |
| Work | "Results That Speak" | No | Good |
| Contact | "Let's Build Something Great" | No | Good |

All pages have single, unique H1 tags with proper hierarchy.

### Internal Linking

| Check | Status |
|-------|--------|
| Navigation links | Present on all pages |
| Footer links | Comprehensive (Company, Services, Legal) |
| Cross-linking between services | Limited |
| Breadcrumbs | **Missing** |
| Contextual content links | **Missing** (no blog to link to) |

### Issues Found

- **HIGH:** No breadcrumb navigation on any page
- **MEDIUM:** Privacy page meta description too short (70 chars vs 155 target)
- **MEDIUM:** Limited contextual internal linking between service sections
- **MEDIUM:** Twitter card uses generic title on Services page instead of page-specific
- **LOW:** Services title tag slightly over 60 chars (72 chars)

---

## 4. Schema & Structured Data (Score: 90/100)

### Current Implementation

| Schema Type | Present | Valid |
|-------------|---------|-------|
| Organization | Yes | Yes |
| WebSite | Yes | Yes |
| ProfessionalService | Yes | Yes |
| OfferCatalog | Yes | Yes |
| AggregateRating | Yes | Yes (5/5, 80 reviews) |
| Service (x4) | Yes | Yes (with pricing) |

### Schema Details

- **Organization:** Name, URL, logo, founding date (2021), address (Sri Lanka), contact info
- **Services:** All 4 services listed with prices ($10-$70 USD)
- **Rating:** 5.0 stars from 80 reviews

### Missing Schema Opportunities

- **HIGH:** FAQPage schema for homepage FAQ section (currently not implemented)
- **MEDIUM:** Person schema for team members on About page
- **MEDIUM:** BreadcrumbList schema
- **LOW:** Article/BlogPosting schema (when blog is created)
- **LOW:** Review schema for individual testimonials

### Issues Found

- **HIGH:** FAQ section on homepage has no FAQPage schema markup - missing rich snippet opportunity
- **MEDIUM:** No BreadcrumbList schema
- **MEDIUM:** No Person schema for team members
- **LOW:** AggregateRating claim of 80 reviews should match actual review count on Trustpilot

---

## 5. Performance (Score: 75/100)

### Server & Infrastructure

| Check | Status | Notes |
|-------|--------|-------|
| Hosting | Netlify | Edge CDN |
| CDN | Cloudflare | Global distribution |
| HTTP/2 | Yes | Enabled |
| Framework | Next.js | SSG/ISR enabled |
| Cache-Control | Present | `public, max-age=0, must-revalidate` |
| Edge Caching | Yes | Netlify Edge cache hit |

### Estimated Core Web Vitals

| Metric | Estimate | Threshold | Status |
|--------|----------|-----------|--------|
| LCP (Largest Contentful Paint) | ~1.5-2.5s | < 2.5s | Likely Good |
| INP (Interaction to Next Paint) | ~100-200ms | < 200ms | Likely Good |
| CLS (Cumulative Layout Shift) | ~0.05-0.1 | < 0.1 | Likely Good |

*Note: Actual CWV measurements require PageSpeed Insights or Chrome UX Report data*

### Performance Optimizations Present

- Next.js static generation (prerendered pages)
- Cloudflare CDN
- Image optimization via Next.js Image component
- Edge caching enabled

### Issues Found

- **MEDIUM:** `cache-control: max-age=0` means browser doesn't cache - consider longer cache for static assets
- **MEDIUM:** No preconnect hints for external resources (Calendly, Trustpilot)
- **LOW:** `x-powered-by: Next.js` header should be removed (both security and minor performance)

---

## 6. Images (Score: 55/100)

### Image Audit

| Check | Status |
|-------|--------|
| Alt text on logos | Present ("Lead Clash") |
| Alt text on testimonial photos | Present (names) |
| Alt text on team photos | Present (names) |
| Alt text on portfolio images | **Unknown/Missing** |
| Image format optimization | Mixed (PNG, SVG) |
| Lazy loading | Yes (Next.js default) |
| Responsive images | Yes (Next.js Image) |
| OG Image | **Not specified per page** |

### Issues Found

- **HIGH:** No unique OG images per page (social sharing will use default)
- **HIGH:** Portfolio/Work page likely has unoptimized images or external images
- **MEDIUM:** Logo images are PNG - could be WebP/SVG for smaller size
- **MEDIUM:** No favicon variety (only favicon.png; missing apple-touch-icon, manifest icons)
- **LOW:** Testimonial photos could use WebP format

---

## 7. AI Search Readiness (Score: 30/100)

### AI Crawler Access

| Crawler | Status |
|---------|--------|
| GPTBot (ChatGPT) | **BLOCKED** |
| ClaudeBot (Claude) | **BLOCKED** |
| PerplexityBot | **BLOCKED** |
| Amazonbot | **BLOCKED** |
| Google-Extended | Not blocked |
| Bingbot | Not blocked |

### AI Optimization Signals

| Check | Status |
|-------|--------|
| llms.txt | **Missing** |
| Structured FAQ content | Present but no FAQPage schema |
| Citability (clear, quotable statements) | Medium |
| Author attribution | **Missing** |
| Original data/statistics | **Missing** |
| Topical authority (blog/content) | **Missing** |

### Issues Found

- **CRITICAL:** All major AI crawlers blocked in robots.txt - site invisible in AI search results
- **CRITICAL:** No llms.txt file for AI-friendly content
- **HIGH:** No blog/content = no passages for AI to cite
- **HIGH:** No author schema or bylines for E-E-A-T signals
- **MEDIUM:** FAQ content exists but lacks FAQPage schema for AI parsing

---

## Page-by-Page Summary

| Page | Title Score | Meta Desc | Schema | Content | Internal Links | Overall |
|------|------------|-----------|--------|---------|---------------|---------|
| Homepage | 9/10 | 9/10 | 9/10 | 7/10 | 7/10 | **82%** |
| Services | 8/10 | 8/10 | 9/10 | 6/10 | 7/10 | **76%** |
| About | 8/10 | 7/10 | 9/10 | 7/10 | 6/10 | **74%** |
| Work | 8/10 | 7/10 | 9/10 | 3/10 | 5/10 | **64%** |
| Contact | 8/10 | 9/10 | 9/10 | 6/10 | 6/10 | **76%** |
| Privacy | 7/10 | 5/10 | 8/10 | 8/10 | 4/10 | **64%** |

---

## Competitor Comparison Context

As a B2B lead generation agency, Lead Clash competes with:
- SalesBread, Martal Group, Cleverly - all have extensive blogs (100+ posts)
- Most competitors rank for informational keywords via content marketing
- Lead Clash currently has ZERO blog content, giving competitors a massive organic traffic advantage

---

*Audit performed March 23, 2026 | Lead Clash SEO Audit v1.0*
