# Lead Clash - SEO Action Plan

> **Generated:** March 23, 2026
> **Current Score:** 72/100
> **Target Score:** 88/100 (within 3 months)

---

## Critical Priority (Fix Immediately)

### 1. Unblock AI Crawlers in robots.txt
**Impact:** AI Search Readiness +40 points
**Effort:** 5 minutes

Currently blocking GPTBot, ClaudeBot, PerplexityBot, Amazonbot. This makes the site invisible in ChatGPT, Claude, Perplexity, and Alexa search results.

**Action:** Update robots.txt to allow AI crawlers:
```
# Allow AI crawlers for search visibility
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Keep blocking if desired:
# User-agent: CCBot  (for training only)
# Disallow: /
```

### 2. Create llms.txt File
**Impact:** AI Search Readiness +15 points
**Effort:** 30 minutes

Create `/public/llms.txt` with structured info about Lead Clash:
```
# Lead Clash
> B2B outbound marketing agency specializing in LinkedIn optimization, lead generation, and virtual assistance.

## Services
- LinkedIn Profile Optimization ($70/profile)
- LinkedIn Lead Generation ($10/hr)
- Graphic Design & Video Editing ($10/hr)
- Virtual Assistance & Outreach Support ($10/hr)

## Contact
- Website: https://leadclash.com
- Book a call: https://calendly.com/yasiru-dasanayaka/30min
```

### 3. Add FAQPage Schema to Homepage
**Impact:** On-Page SEO +5 points, rich snippet eligibility
**Effort:** 30 minutes

The FAQ section exists but has no structured data. Add FAQPage JSON-LD schema to enable rich results in Google.

### 4. Fix Work/Portfolio Page
**Impact:** Content Quality +10 points
**Effort:** 2-4 hours

Current page is ~250 words with external Google Drive links. Actions:
- Add detailed case study descriptions (500+ words per project)
- Host portfolio images on-site instead of Google Drive
- Add proper alt text to all portfolio images
- Add before/after metrics where possible

---

## High Priority (Fix Within 1 Week)

### 5. Launch Blog Section
**Impact:** Content Quality +20 points, Organic Traffic +500%
**Effort:** 1-2 days (setup) + ongoing content

The 48 blog posts are already written. Actions:
- Set up `/blog` route in Next.js
- Implement MDX or CMS integration
- Add BlogPosting schema
- Add blog to sitemap
- Publish first 4 posts immediately

### 6. Add Breadcrumb Navigation
**Impact:** On-Page SEO +3 points
**Effort:** 1-2 hours

Add breadcrumbs to all inner pages:
```
Home > Services > LinkedIn Profile Optimization
Home > About
Home > Blog > [Post Title]
```
Also add BreadcrumbList schema markup.

### 7. Add FAQPage Schema
**Impact:** Schema +5 points
**Effort:** 30 minutes

Add FAQPage JSON-LD to the homepage FAQ section for rich snippet eligibility.

### 8. Create Unique OG Images Per Page
**Impact:** Images +10 points, Social CTR improvement
**Effort:** 2-3 hours

Create 1200x630 OG images for each page:
- Homepage: Brand + tagline
- Services: Service icons + pricing
- About: Team photo
- Work: Portfolio highlight
- Contact: CTA graphic

### 9. Expand Services Page Content
**Impact:** Content Quality +5 points
**Effort:** 2-3 hours

Each service section has ~150 words. Expand to 400-500 words each with:
- Detailed process description
- Who it's for
- Expected outcomes
- Timeline

---

## Medium Priority (Fix Within 1 Month)

### 10. Add Security Headers
**Effort:** 30 minutes

Add to `netlify.toml` or `next.config.js`:
```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
Permissions-Policy: camera=(), microphone=()
Referrer-Policy: strict-origin-when-cross-origin
```

Remove `x-powered-by` header:
```js
// next.config.js
poweredByHeader: false
```

### 11. Add Person Schema for Team Members
**Effort:** 1 hour

Add Person schema for each team member on the About page with:
- Name, role, description
- Image URL
- sameAs links (LinkedIn profiles)

### 12. Improve Internal Linking
**Effort:** 2-3 hours

- Add contextual links between service pages
- Link from About page to specific services
- Add "Related Services" section on each service
- Link legal pages back to main pages
- When blog launches, cross-link blog posts to service pages

### 13. Fix Meta Description Issues
**Effort:** 30 minutes

- Privacy page: Expand from 70 to 155 characters
- About page: Expand from 112 to 155 characters
- Services page: Fix Twitter card to use page-specific title

### 14. Add Favicon Variants
**Effort:** 1 hour

Currently only `favicon.png`. Add:
- `apple-touch-icon.png` (180x180)
- `favicon-32x32.png`
- `favicon-16x16.png`
- `site.webmanifest`

### 15. Optimize Cache Headers
**Effort:** 30 minutes

Current `max-age=0` means no browser caching. Update:
```
# Static assets
Cache-Control: public, max-age=31536000, immutable

# HTML pages
Cache-Control: public, max-age=0, must-revalidate
```

---

## Low Priority (Backlog)

### 16. Convert Images to WebP
**Effort:** 1-2 hours

Convert testimonial photos, team photos, and logos from PNG to WebP for smaller file sizes. Next.js Image component can handle this automatically with proper config.

### 17. Add Preconnect Hints
**Effort:** 15 minutes

Add preconnect for external resources:
```html
<link rel="preconnect" href="https://calendly.com" />
<link rel="preconnect" href="https://www.trustpilot.com" />
```

### 18. Create Custom 404 Page
**Effort:** 1 hour

Design a branded 404 page with:
- Search functionality
- Links to popular pages
- CTA to contact page

### 19. Add Review Schema for Individual Testimonials
**Effort:** 1 hour

Add individual Review schema for each testimonial on the homepage.

### 20. Implement Content Hubs (After Blog Launch)
**Effort:** Ongoing

Create pillar pages for each content cluster:
- `/blog/linkedin-mastery`
- `/blog/lead-generation`
- `/blog/outreach-academy`
- `/blog/creative-marketing`
- `/blog/business-efficiency`

---

## Score Improvement Projection

| Action | Score Impact | Timeline |
|--------|-------------|----------|
| Unblock AI crawlers | +5 | Day 1 |
| Add llms.txt | +2 | Day 1 |
| Add FAQPage schema | +2 | Day 1 |
| Fix Work page | +3 | Week 1 |
| Launch blog | +5 | Week 1-2 |
| Add breadcrumbs | +1 | Week 1 |
| OG images | +2 | Week 1 |
| Security headers | +1 | Week 2 |
| Internal linking | +2 | Week 2 |
| Fix meta descriptions | +1 | Week 2 |
| **Total Projected Gain** | **+24** | |
| **Projected Score** | **96/100** | **1 Month** |

---

## Monthly Review Schedule

- **Week 1:** Complete all Critical and High priority items
- **Week 2-3:** Complete Medium priority items
- **Month 2:** Launch blog with first 16 posts (Month 1 + 2)
- **Month 3:** Review rankings, adjust strategy, continue blog publishing
- **Ongoing:** Publish 2 blog posts per week per blog marketing strategy

---

*Action Plan generated March 23, 2026 | Lead Clash SEO Audit*
