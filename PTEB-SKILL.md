---
name: pteb-tuning-website
description: Optimized blueprint for PTEB Tuning website — dark theme, automotive performance shop with animations, SEO/AEO focus
---

# PTEB Tuning — Quick Reference

**Business:** Prestige Team Euro Boost | Melbourne, VIC | ECU/TCU tuning, engine rebuilds, performance parts  
**Contact:** prestigeteamhelp@gmail.com | +61 430 026 715 | [Facebook](https://www.facebook.com/p/Prestige-Team-Euro-Boost-61552644926281/) | [TikTok](https://www.tiktok.com/@_prestigeteameuroboost)

---

## CHEAT SHEET — Copy-Paste Ready

### Colors
```css
--color-black: #0a0a0a;  --color-dark: #111111;  --color-card: #1e1e1e;  --color-border: #2a2a2a;
--color-red: #e63946;    --color-red-hover: #ff4d5a;   --color-gold: #d4a843;
--color-text: #e0e0e0;   --color-text-muted: #888888;
```

### Fonts
```
Headings: Oswald (700), uppercase, 2px letter-spacing
Body: Inter, 16px, 1.7 line-height, #e0e0e0
```

### Button Styles
**Primary (Red CTA):** `--gradient-red` gradient, 14px 36px padding, uppercase, 2px tracking  
**Ghost:** Transparent, border, hover → red border + glow

### Spacing
```css
--section-padding: 100px 0;  --gap-md: 24px;  --gap-lg: 48px;  --gap-xl: 80px;
--container-max: 1200px;     --border-radius: 8px;
```

---

## ANIMATIONS (Intersection Observer + Data Attributes)

**Setup:** Every animated element gets `data-animate="[type]"` and optional `data-delay="[ms]"`.

```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('animate-in'));
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

**Types:** `fade-up`, `fade-down`, `fade-left`, `fade-right`, `fade-in`, `zoom-in`, `zoom-out`, `stagger`, `line-reveal`, `count-up`, `img-reveal`

**Special Effects:**
- **Parallax:** `data-parallax="0.3"` + scroll listener → `translateY(scrolled * speed)`
- **Counter:** `data-target="500"` `data-suffix="%"` + `animateCounter(el)` function
- **Glow pulse:** `@keyframes glowPulse` on red accent elements
- **Marquee scroll:** `@keyframes marquee` for logo tracks

---

## PAGE STRUCTURE

### Homepage Flow
1. **Navbar** (fixed, blur on scroll) → Logo + links + "Book Now" CTA
2. **Hero** (100vh) → BG image + overlay, h1 (fade-up 0ms), subtitle (200ms), buttons (400ms), scroll arrow bounce
3. **Services** (3-column stagger) → Icon, title, desc, "Learn More" → hover: lift + red top border glow
4. **Why Choose** (split text/image) → Text fade-right, image img-reveal
5. **Stats** (4-column band) → data-target counters (count-up animation)
6. **Stage Tiers** (Stage 1/2/3 cards) → Middle card gold-bordered "POPULAR", all stagger
7. **Products** (4-column grid, stagger) → Image zoom on hover, "Add Cart" slides up
8. **Testimonials** (carousel or static) → Auto-rotate or swipe, red quote marks
9. **CTA Banner** (full-width) → "Ready to Unlock?" heading (fade-up) + buttons (fade-up 200ms delay)
10. **Footer** (dark band) → Links, contact, socials, copyright

### Additional Pages
- **Tuning:** Hero + split sections (ECU/TCU/Dyno) + specs + CTA
- **Servicing:** Stage details, mechanical services list, DPF solutions banner
- **About:** Story + mission + values + services list + team
- **Products:** Shopify-style grid + category filters + product detail pages
- **Contact:** Form (name/email/phone/vehicle/service/message) + embedded map + hours

---

## SEO/AEO — Token-Saving Summary

### Meta Tags Template (Every Page)
```html
<title>[Page Title] | Prestige Team Euro Boost — Melbourne</title>
<meta name="description" content="[150–160 chars, includes primary keyword]">
<link rel="canonical" href="https://ptebtuning.com/[slug]">

<!-- OG + Twitter (use 1200×630 image, <300KB) -->
<meta property="og:title" content="[Title]">
<meta property="og:description" content="[Meta description]">
<meta property="og:image" content="/images/og/[page]-og.jpg">
```

### Primary Keywords by Page
| Page | Primary | Secondary |
|---|---|---|
| Home | `ECU tuning Melbourne` | `European car tuning`, `German car specialist`, `performance tuning VIC` |
| Tuning | `custom dyno tuning Melbourne` | `ECU remapping`, `TCU tuning`, `VW Golf R tune` |
| Servicing | `European car mechanic Melbourne` | `BMW mechanic`, `Audi service`, `DPF delete` |
| About | `Prestige Team Euro Boost` | `PTEB tuning`, `performance workshop Melbourne` |
| Products | `performance parts Melbourne` | `blow off valve MK7`, `intercooler Golf GTI` |
| Contact | `book car tuning Melbourne` | `performance tuning appointment`, `ECU remap quote` |

### Structured Data (JSON-LD in `<head>`)
**Required on every page:** Organization schema with name, url, logo, contactPoint, sameAs (socials)

**Homepage + Contact:** LocalBusiness (AutoRepair) schema with address, phone, email, openingHours, areaServed, hasOfferCatalog

**Products:** Product schema with @type, price, currency, availability, seller

**Interior pages:** BreadcrumbList schema

**Homepage only:** WebSite schema with SearchAction (site search)

### Image Optimization
- **Format:** Hero = AVIF primary + WebP fallback + JPEG | Products = WebP + JPEG
- **Responsive:** Use `<picture>` with srcset (400w, 800w, 1200w, 2400w)
- **LCP hero:** fetchpriority="high", loading="eager", preload in `<head>`
- **Below-fold:** loading="lazy"
- **All:** width + height attributes (prevents CLS)
- **Alt text:** `[What] [where] [context/keyword]` — e.g., "ECU remapping service on Volkswagen Golf R at PTEB Melbourne workshop"
- **Sizes:** Hero AVIF <120KB, product cards <50KB, OG images 1200×630 <300KB

### Critical Path (Inline → Preload → Defer)
```html
<head>
  <style>/* Critical CSS: navbar, hero, typography */</style>
  <link rel="preload" href="/images/hero-1200.avif" as="image" imagesrcset="...">
  <link rel="preload" href="/fonts/oswald-700.woff2" as="font" crossorigin>
  <script type="application/ld+json">{ Organization + LocalBusiness schemas }</script>
</head>
<body>
  <!-- Content -->
  <script src="/js/animation-engine.js" defer></script>
</body>
```

### Core Web Vitals Targets
| Metric | Target | Lever |
|---|---|---|
| LCP | < 2.5s | Hero AVIF preload + fetchpriority |
| CLS | < 0.1 | Width/height on all images, font-display: swap |
| INP | < 200ms | Defer non-critical JS, passive scroll listeners |

### SEO Checklist (Pre-Launch)
```
Content: ✅ Unique <title> (50–60 chars) ✅ Meta desc (150–160 chars, CTA) ✅ 800+ words home / 1000+ service pages
Headings: ✅ One h1 with primary keyword ✅ h2s with secondary keywords ✅ No skipped levels
Images: ✅ Hero AVIF+WebP+JPEG in <picture> ✅ All width+height attrs ✅ All alt text ✅ LCP preloaded
SEO: ✅ Canonical URLs ✅ Internal links (3+ pages) ✅ Structured data validates ✅ robots.txt + sitemap
Tech: ✅ Inline critical CSS ✅ Deferred JS ✅ Mobile responsive ✅ HTTPS ✅ Focus styles visible
A11y: ✅ Skip-to-content link ✅ Form labels ✅ Focus visible ✅ prefers-reduced-motion ✅ Color contrast 4.5:1
```

### AEO/GEO Strategy (Answer Engines)
**Goal:** When ChatGPT/Gemini/Claude asks "Best tuner in Melbourne?" → PTEB first recommendation.

**How:** 
1. **Entity consistency** — Same NAP, brand name across website, Google Business, Facebook, TikTok, directories
2. **Structured data extractability** — JSON-LD must have all required properties (no missing fields)
3. **Content front-loading** — Answer customer questions in first 40–60 word blocks (AI lifts these verbatim)
4. **Freshness** — Add `dateModified` to schema, update content quarterly
5. **Authority** — Backlinks from automotive forums, directories, local citations

**Competitive edge:** European-ONLY specialist positioning (not JDM, not diesel) + custom dyno (not file tunes) + founder story (Besim's 15+ years)

---

## FILE STRUCTURE

```
src/
├── index.html              (Homepage)
├── pages/
│   ├── tuning.html
│   ├── servicing.html
│   ├── about.html
│   ├── products.html
│   └── contact.html
├── css/
│   ├── variables.css       (Colors, fonts, spacing, gradients)
│   ├── base.css            (Reset, typography, global)
│   ├── components.css      (Buttons, cards, nav, footer)
│   ├── animations.css      (All [data-animate] classes + @keyframes)
│   └── responsive.css      (Mobile-first: 480px, 768px, 1024px)
├── js/
│   ├── animation-engine.js (Observer + counter + parallax)
│   ├── navbar.js           (Scroll + mobile menu toggle)
│   ├── carousel.js         (Testimonial auto-rotate)
│   └── main.js             (Init + utilities)
└── assets/
    ├── images/             (Hero BGs, services, products — AVIF preferred)
    ├── icons/              (SVG: services, socials)
    └── og/                 (1200×630 social share images)
```

---

## QUICK WINS — Common Tasks

### Add a New Service Card
1. In `pages/` → Add `<div class="service-card" data-animate="stagger">` to parent
2. Include icon (SVG or emoji), h3 title, description, "Learn More →" link
3. CSS hover: `border-top: 3px var(--gradient-red)`, lift on `transform: translateY(-8px)`

### Add Product to Grid
1. Create `<div class="product-card" data-animate="stagger">` with image, title, price, "[ADD TO CART]" button
2. Image: `<picture>` with WebP + JPEG, `loading="lazy"`
3. Button appears on hover (slide up from bottom)

### Update Meta/Schema
1. Copy template from "Meta Tags Template" section
2. Replace `[Page Title]`, keyword description
3. Paste relevant JSON-LD schema in `<script type="application/ld+json">`
4. Validate at [schema.org validator](https://validator.schema.org/)

### Fix CLS / Performance
1. Add `width="X" height="Y"` to every `<img>` and video
2. Ensure fonts have `font-display: swap` and size-adjust fallback
3. Hero image: preload + fetchpriority="high"
4. Test at [PageSpeed Insights](https://pagespeed.web.dev/)

### Enable Animations
1. Add `data-animate="[type]"` to element (see ANIMATIONS section)
2. Optional: `data-delay="200"` for staggered timing
3. CSS auto-applies from animations.css
4. Test in browser → Lighthouse Performance

---

## SEO/AEO Validation Workflow

**Before deploying any page:**

1. **Content check:** Primary keyword in h1, first 100 words, body, last paragraph (no stuffing)
2. **Meta check:** Unique title (50–60 chars) + description (150–160 chars) + canonical URL
3. **Images:** All have alt text, width/height, AVIF where possible, preload LCP
4. **Schema:** Validate JSON-LD at validator.schema.org + [Google Rich Results Test](https://search.google.com/test/rich-results)
5. **Mobile:** Test at 360px, 768px, 1024px+ breakpoints
6. **Performance:** Lighthouse > 90 on Performance, Accessibility, Best Practices, SEO
7. **A11y:** Tab through page → all interactive elements reachable, focus visible

**Long-term (monthly):**
- Update Google Business Profile with new photos/services
- Add 1–2 blog posts (e.g., "Stage 1 vs Stage 2 Tuning Explained", "DPF Problems & Solutions")
- Monitor backlinks + citations (use Ahrefs / Moz / SEMrush)
- Check Core Web Vitals at [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Notes for Future Optimization

- **Parallax backgrounds:** Smooth but can cause jank on low-end devices → test on throttled CPU
- **Stagger animations:** Inspect `nth-child` delay timing; keep < 0.5s total for snappy feel
- **Product images:** Use optimization tool (TinyPNG, ImageOptim) before uploading
- **Form validation:** Implement Zod schema if integrating backend
- **Testimonials carousel:** Use vanilla JS (no jQuery) or consider Swiper.js if many testimonials
- **Google Map embed:** Request dark theme embed URL + adjust overlay opacity for readability

---

## SEO Long-Tail Keywords (Scatter Naturally Throughout Copy)

```
ECU remap Melbourne | VW tuning specialist | BMW performance upgrades Melbourne
Audi ECU tune | Mercedes tuning workshop VIC | custom exhaust Melbourne
Stage 1/2/3 tune Melbourne | turbo upgrade | engine rebuild Melbourne
DPF solutions Melbourne | dyno tuning | European car mechanic
Transmission tune | performance parts | blow off valve MK7
Intercooler kit Golf GTI | downpipe MK8 | stage tuning packages
```

---

## Social Links & NAP (Consistent Across All Touchpoints)

**Name:** Prestige Team Euro Boost  
**Address:** Melbourne, VIC, Australia  
**Phone:** +61 430 026 715  
**Email:** prestigeteamhelp@gmail.com  
**Website:** https://ptebtuning.com  
**Facebook:** https://www.facebook.com/p/Prestige-Team-Euro-Boost-61552644926281/  
**TikTok:** https://www.tiktok.com/@_prestigeteameuroboost
