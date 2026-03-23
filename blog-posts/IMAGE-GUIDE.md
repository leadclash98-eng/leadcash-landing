# Blog Post Image Guide - Lead Clash

## Image Sizes & Specifications

### Featured Image (Hero/Thumbnail)
- **Size:** 1200 x 630 px (OG Image standard)
- **Format:** JPG or WebP
- **File size:** Under 200KB (optimize with TinyPNG)
- **Location:** `/public/blog/` directory
- **Naming:** Match the slug (e.g., `optimize-linkedin-profile-b2b.jpg`)

### In-Article Images
- **Size:** 1200 x 675 px (16:9 ratio)
- **Format:** JPG, PNG, or WebP
- **File size:** Under 150KB
- **Location:** `/public/blog/` directory

### Infographics
- **Width:** 1200px (height flexible)
- **Format:** PNG or WebP
- **File size:** Under 300KB

---

## How to Add Images in Markdown Files

### Featured Image (Already in Frontmatter)

Each blog post already has a `featured_image` field:

```yaml
---
featured_image: "/blog/optimize-linkedin-profile-b2b.jpg"
---
```

### In-Article Images

Add images inside the markdown content like this:

```markdown
![Alt text describing the image](/blog/image-name.jpg)
```

Example:

```markdown
![LinkedIn profile optimization before and after comparison](/blog/linkedin-profile-before-after.jpg)
```

### Image with Caption

```markdown
<figure>
  <img src="/blog/image-name.jpg" alt="Descriptive alt text" />
  <figcaption>Caption text goes here</figcaption>
</figure>
```

---

## Where to Get Images

### Option 1: AI Image Generation (Recommended for Blog)

**Tools:**
- **ChatGPT / DALL-E** - Generate custom blog illustrations
- **Midjourney** - High-quality artistic images
- **Ideogram** - Good for text-in-image designs
- **Canva AI** - Generate + edit in one place

**Prompt Template for Blog Featured Images:**
```
Create a professional, modern blog featured image for an article about [TOPIC].
Style: Clean, minimal, corporate blue color scheme (#4F7BF7 primary color).
Include subtle visual elements related to [LinkedIn/B2B/outreach/etc].
No text on the image. 1200x630 pixels.
```

### Option 2: Canva (Recommended for Consistent Branding)

1. Go to canva.com
2. Create design > Custom size: 1200 x 630 px
3. Use Lead Clash brand colors:
   - Primary Blue: #4F7BF7
   - Dark Blue: #3060C0
   - Accent: #6B9FFF
   - Background: #F5F8FF
4. Add blog title text + simple illustration
5. Save template, reuse for all 48 posts

### Option 3: Stock Photos (Free)

- **Unsplash** (unsplash.com) - Free high-quality photos
- **Pexels** (pexels.com) - Free stock photos
- **Pixabay** (pixabay.com) - Free images

Search terms: "linkedin", "business meeting", "laptop", "team collaboration", "marketing", "data analytics"

### Option 4: Screenshots & Custom Graphics

- LinkedIn profile screenshots (for profile optimization posts)
- Tool screenshots (for how-to guides)
- Charts/graphs (for data-driven posts)
- Custom diagrams (for strategy posts)

---

## File Structure

Place all images in:

```
public/
  blog/
    optimize-linkedin-profile-b2b.jpg          (Month 1, Post 1)
    linkedin-headline-examples.jpg              (Month 1, Post 2)
    complete-guide-linkedin-lead-generation.jpg  (Month 1, Post 3)
    linkedin-profile-vs-resume.jpg              (Month 1, Post 4)
    build-targeted-prospect-list-linkedin.jpg   (Month 1, Post 5)
    linkedin-summary-examples-consultants.jpg   (Month 1, Post 6)
    linkedin-keyword-optimization.jpg           (Month 1, Post 7)
    outsourcing-linkedin-lead-generation.jpg    (Month 1, Post 8)
    cold-email-vs-linkedin-outreach.jpg         (Month 2, Post 1)
    linkedin-connection-request-templates.jpg   (Month 2, Post 2)
    ultimate-cold-email-outreach-strategy.jpg   (Month 2, Post 3)
    linkedin-lead-filtering.jpg                 (Month 2, Post 4)
    multi-channel-outreach-strategy.jpg         (Month 2, Post 5)
    personalize-cold-emails-at-scale.jpg        (Month 2, Post 6)
    linkedin-outreach-templates-2026.jpg        (Month 2, Post 7)
    follow-up-strategies-cold-prospects.jpg     (Month 2, Post 8)
    linkedin-lead-generation-saas.jpg           (Month 3, Post 1)
    linkedin-for-recruitment-agencies.jpg       (Month 3, Post 2)
    linkedin-profile-optimization-saas.jpg      (Month 3, Post 3)
    lead-generation-consulting-firms.jpg        (Month 3, Post 4)
    linkedin-lead-generation-finance.jpg        (Month 3, Post 5)
    linkedin-content-strategy-b2b.jpg           (Month 3, Post 6)
    linkedin-outreach-marketing-agencies.jpg    (Month 3, Post 7)
    roi-linkedin-profile-optimization.jpg       (Month 3, Post 8)
    personalized-video-outreach-b2b.jpg         (Month 4, Post 1)
    design-linkedin-carousel-posts.jpg          (Month 4, Post 2)
    short-form-vs-long-form-video-b2b.jpg       (Month 4, Post 3)
    visual-branding-linkedin.jpg                (Month 4, Post 4)
    video-cold-outreach-strategy.jpg            (Month 4, Post 5)
    linkedin-banner-design-guide.jpg            (Month 4, Post 6)
    social-media-design-b2b.jpg                 (Month 4, Post 7)
    b2b-video-content-strategy-2026.jpg         (Month 4, Post 8)
    hire-virtual-assistant-lead-generation.jpg   (Month 5, Post 1)
    crm-management-best-practices-b2b.jpg       (Month 5, Post 2)
    outsource-outreach-support.jpg              (Month 5, Post 3)
    linkedin-campaign-management-delegation.jpg  (Month 5, Post 4)
    lead-generation-inhouse-vs-outsourcing.jpg   (Month 5, Post 5)
    tasks-virtual-assistant-b2b-growth.jpg       (Month 5, Post 6)
    startups-scale-virtual-assistance.jpg        (Month 5, Post 7)
    building-outreach-machine.jpg               (Month 5, Post 8)
    case-study-saas-lead-generation.jpg         (Month 6, Post 1)
    linkedin-profile-before-after.jpg           (Month 6, Post 2)
    b2b-lead-generation-trends-2026.jpg         (Month 6, Post 3)
    cold-outreach-best-practices-2026.jpg       (Month 6, Post 4)
    choose-linkedin-lead-generation-service.jpg  (Month 6, Post 5)
    complete-linkedin-outreach-playbook.jpg      (Month 6, Post 6)
    client-results-lead-clash.jpg               (Month 6, Post 7)
    linkedin-growth-plan-2027.jpg               (Month 6, Post 8)
```

---

## Quick Canva Workflow (Fastest Method for All 48 Posts)

### Step 1: Create a Template
1. Open Canva > Custom size: **1200 x 630 px**
2. Set background: Gradient from #4F7BF7 to #3060C0
3. Add a white/light overlay shape for text area
4. Add blog title placeholder text (bold, clean font)
5. Add Lead Clash logo in corner
6. Add a simple icon/illustration area

### Step 2: Duplicate for Each Post
1. Duplicate the template 48 times
2. Change the title text for each post
3. Swap the icon/illustration to match the topic:
   - LinkedIn posts: LinkedIn icon/mockup
   - Lead Gen posts: Chart/funnel graphic
   - Outreach posts: Email/message icon
   - Creative posts: Design/video icon
   - VA posts: Team/support icon
   - Case Study posts: Results/graph icon

### Step 3: Export All
1. Select all designs
2. Download as JPG (quality 80%)
3. Run through TinyPNG (tinypng.com) to compress
4. Place in `public/blog/` folder

---

## Image Optimization Checklist

For each image before uploading:

- [ ] Correct dimensions (1200 x 630 px for featured)
- [ ] File size under 200KB
- [ ] Descriptive filename (matches slug)
- [ ] JPG or WebP format
- [ ] Compressed via TinyPNG or Squoosh
- [ ] Alt text added in markdown
- [ ] Featured image path matches frontmatter `featured_image` field

---

## Next.js Image Component (For Blog Implementation)

When building the blog in Next.js, use the optimized Image component:

```tsx
import Image from "next/image";

// Featured Image
<Image
  src={post.featured_image}
  alt={post.title}
  width={1200}
  height={630}
  className="w-full h-auto rounded-2xl"
  priority
/>

// In-Article Image
<Image
  src="/blog/example-image.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={675}
  className="w-full h-auto rounded-xl my-8"
/>
```

### next.config.js - Allow Image Domains (if using external images)

```js
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
};
```

---

## Summary

| Image Type | Size | Format | Max File Size |
|-----------|------|--------|--------------|
| Featured/OG Image | 1200 x 630 px | JPG/WebP | 200KB |
| In-Article Image | 1200 x 675 px | JPG/PNG/WebP | 150KB |
| Infographic | 1200px wide | PNG/WebP | 300KB |
| LinkedIn Screenshot | 1200 x 675 px | PNG | 150KB |

**Recommended tool:** Canva (create 1 template, duplicate 48 times, change title + icon)
**Compression:** TinyPNG (tinypng.com) or Squoosh (squoosh.app)
**Directory:** All images go in `public/blog/`
