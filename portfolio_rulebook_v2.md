# Portfolio Design Rulebook v2.0 — The Nuclear Option
> **For:** Next.js 14 + React 18 + Tailwind CSS 3.x  
> **Target:** Information-dense, zero-scroll hero, brutalist-minimal aesthetic  
> **Deployment:** Vercel / GitHub Pages  
> **Audience:** Technical recruiters, startup founders, senior engineers

---

## 🎯 Design Principles (Non-Negotiable)

1. **First viewport = 80% of conversion value** — Hero must contain name, tagline, CTA, tech stack overview, and social proof WITHOUT scroll
2. **Every pixel earns its keep** — If a section doesn't inform, impress, or convert → delete it
3. **Scannable in 7 seconds** — Users should grasp "who, what, proof" before deciding to scroll
4. **Scroll = reward, not requirement** — Users scroll to *explore*, not to find basic info
5. **Mobile-first brutalism** — Clean, fast, aggressive use of space; no "cute" animations that tank performance

---

## 📐 Grid & Spacing System

### Tailwind Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 0.25rem (4px) | Icon-text gaps, chip padding |
| `space-2` | 0.5rem (8px) | Inline badge spacing |
| `space-3` | 0.75rem (12px) | Card inner padding (compact) |
| `space-4` | 1rem (16px) | Standard button padding, list item gaps |
| `space-5` | 1.5rem (24px) | Section inner padding |
| `space-6` | 2rem (32px) | Between hero text and CTA |
| `space-8` | 4rem (64px) | Between major sections |
| `space-12` | 6rem (96px) | Hero section bottom margin (desktop only) |

### Breakpoints
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',   // Mobile landscape
      'md': '768px',   // Tablet
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Wide desktop
      '2xl': '1536px', // Ultra-wide
    }
  }
}
```

**Layout Rules:**
- Desktop: 12-column grid, max-width `1280px` (`max-w-7xl`)
- Tablet: 8-column grid, padding `px-8`
- Mobile: 4-column grid, padding `px-4`
- Cards in grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `gap-6`

---

## 🎨 Color System

### Base Palette (Dark Mode Primary)
```css
/* Use exact Tailwind utility classes */
bg-slate-950      /* #020617 - Primary background */
bg-slate-900      /* #0f172a - Card backgrounds */
bg-slate-800      /* #1e293b - Hover states */

text-slate-50     /* #f8fafc - Primary text */
text-slate-400    /* #94a3b8 - Secondary text */
text-slate-600    /* #475569 - Disabled text */

/* Accent Colors */
bg-violet-600     /* #7c3aed - Primary CTA */
bg-emerald-500    /* #10b981 - Success/available status */
bg-amber-400      /* #fbbf24 - Warning/highlight */
```

### Gradient Toolkit
```javascript
// Only use these approved gradients
className="bg-gradient-to-r from-violet-600 to-fuchsia-600"  // Hero headline
className="bg-gradient-to-br from-slate-900 to-slate-950"    // Section backgrounds
className="bg-gradient-to-t from-transparent to-slate-950/20" // Fade overlays
```

### Glassmorphism (Use Sparingly)
```javascript
className="bg-white/5 backdrop-blur-md border border-white/10"
// Only for: floating nav, project card hovers, modal overlays
```

**Color Rules:**
- Contrast ratio ≥ 4.5:1 for all text (use `text-slate-50` on dark, `text-slate-900` on light)
- Gradients only on headlines, buttons, or thin decorative strips (<8% page area)
- Glassmorphism must pass readability test: can you read 12px text through it?

---

## 🔤 Typography Scale

```javascript
// Component-level type system
const typography = {
  h1: "text-5xl lg:text-7xl font-bold tracking-tight leading-none",
  h2: "text-3xl lg:text-5xl font-bold tracking-tight",
  h3: "text-2xl lg:text-3xl font-semibold",
  h4: "text-xl font-semibold",
  body: "text-base lg:text-lg leading-relaxed",
  small: "text-sm text-slate-400",
  caption: "text-xs uppercase tracking-wider text-slate-500"
}
```

### Font Stack
```css
/* Next.js font optimization */
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

// Apply in layout.tsx
<body className={`${inter.variable} ${mono.variable} font-sans`}>
```

**Typography Rules:**
- Headlines: Max 12 words, tracking `-0.02em`, never center-align if >2 lines
- Body text: Max 70 characters per line (`max-w-prose`)
- Code snippets: Use `font-mono` with `bg-slate-800` and `px-2 py-1 rounded`
- Numbers/stats: Use `tabular-nums` for alignment

---

## 🧩 Component Specifications

### 1. Hero Section
```jsx
<section className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
  {/* Background particles/grid at 5% opacity */}
  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
  
  <div className="max-w-4xl mx-auto text-center relative z-10">
    {/* Headline */}
    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
      <span className="bg-gradient-to-r from-violet-400 to-fuchsia-600 bg-clip-text text-transparent">
        Your Name
      </span>
    </h1>
    
    {/* Tagline */}
    <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
      One-line value prop (max 15 words)
    </p>
    
    {/* CTA Group */}
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-semibold transition">
        View Work
      </button>
      <button className="px-6 py-3 border border-slate-700 hover:border-slate-500 rounded-lg transition">
        Download Resume
      </button>
    </div>
    
    {/* Quick Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
      <StatCard number="5+" label="Years Exp" />
      <StatCard number="30+" label="Projects" />
      <StatCard number="10k+" label="Users Served" />
      <StatCard number="98%" label="Uptime" />
    </div>
  </div>
</section>
```

**Hero Rules:**
- Height: `min-h-screen` but content must fit in 85vh on 1920x1080
- CTA buttons: Must be visible without scroll (no hero image pushing them down)
- Background effects: Max 10% opacity, must not reduce text contrast

---

### 2. Project Card
```jsx
<div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-violet-600 transition-all duration-300">
  {/* Thumbnail */}
  <div className="aspect-video relative overflow-hidden bg-slate-800">
    <Image 
      src="/project-thumb.jpg" 
      fill 
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      alt="Project name"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
  </div>
  
  {/* Content */}
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">Project Name</h3>
    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
      Brief description (max 120 characters)
    </p>
    
    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-2 py-1 bg-slate-800 rounded text-xs">React</span>
      <span className="px-2 py-1 bg-slate-800 rounded text-xs">Next.js</span>
      <span className="px-2 py-1 bg-slate-800 rounded text-xs">Tailwind</span>
    </div>
    
    {/* Metrics */}
    <div className="flex justify-between text-sm text-slate-500 border-t border-slate-800 pt-4">
      <span>👤 5K users</span>
      <span>⚡ <1s load</span>
    </div>
  </div>
</div>
```

**Card Rules:**
- Fixed height: `h-[420px]` to prevent jagged grids
- Max 3 tech badges shown; rest in tooltip/modal
- Hover state must be subtle (border color change only, no complex transforms)
- If description >120 chars, truncate with `line-clamp-2` and add "Read more" button

---

### 3. Navigation Bar
```jsx
<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    {/* Logo */}
    <Link href="/" className="text-xl font-bold">YN</Link>
    
    {/* Desktop Nav */}
    <div className="hidden md:flex gap-8">
      <Link href="#work" className="hover:text-violet-400 transition">Work</Link>
      <Link href="#about" className="hover:text-violet-400 transition">About</Link>
      <Link href="#contact" className="hover:text-violet-400 transition">Contact</Link>
    </div>
    
    {/* Mobile Hamburger */}
    <button className="md:hidden">
      <MenuIcon />
    </button>
  </div>
</nav>
```

**Nav Rules:**
- Height: 64px (`h-16`) fixed
- Must be sticky after 100px scroll on mobile
- Links: 4 max (Work, About, Contact, Resume)
- Social icons: Max 3 (GitHub, LinkedIn, Twitter)

---

## 🚫 Anti-Patterns (DO NOT DO THIS)

### ❌ Banned Layout Mistakes
1. **Centered long paragraphs**
   - Wrong: `<p className="text-center">Long bio text...</p>`
   - Right: `<p className="max-w-prose">Left-aligned text</p>`

2. **Empty hero space**
   - Wrong: Hero with just name + tagline, 60% viewport empty
   - Right: Fill with stats, quick links, or visual element

3. **Vertical testimonial stacks**
   - Wrong: 5 testimonial cards stacked vertically (huge scroll)
   - Right: Horizontal carousel with 2 visible at once

4. **Auto-height card grids**
   - Wrong: `<div className="grid grid-cols-3">` with varying content lengths
   - Right: Fixed height `h-[420px]` with `line-clamp` for overflow

5. **Unmarked code blocks**
   - Wrong: Inline code without background
   - Right: `<code className="bg-slate-800 px-2 py-1 rounded font-mono">`

6. **Gradient text on gradient backgrounds**
   - Wrong: Purple gradient text on purple gradient background (unreadable)
   - Right: Gradient text only on solid dark backgrounds

7. **More than 3 font weights**
   - Wrong: Using light, regular, medium, semibold, bold, extrabold
   - Right: Regular (400), Semibold (600), Bold (700) only

8. **CTA buttons below the fold**
   - Wrong: Hero with giant image, CTAs require scroll
   - Right: CTAs always visible in first viewport

---

## 📏 Section-by-Section Blueprint

### Section 1: Hero (Above the Fold)
**Goal:** Communicate "who + what + proof" in 7 seconds  
**Height:** 85vh (`min-h-[85vh]`)  
**Components:**
- Name/headline (gradient text, 72px desktop)
- One-line tagline (24px, max 15 words)
- CTA button group (2 buttons max)
- Quick stat grid (4 metrics: years, projects, users, uptime)
- Social badge strip (GitHub stars, LinkedIn followers)

**Tailwind Classes:**
```javascript
className="min-h-[85vh] flex items-center justify-center relative px-4"
```

---

### Section 2: About (Story)
**Goal:** Humanize without fluff  
**Layout:** Two-column split (60/40)  
**Left Column:** 
- Subheading "About"
- Bio paragraph (150 words max, `max-w-prose`)
- "Skills" chip grid (8-12 chips)

**Right Column:**
- Timeline graphic (3-4 milestones)
- Profile photo (rounded, 200x200px)

**Mobile:** Stack into single column

---

### Section 3: Featured Work
**Goal:** Show best 6 projects without infinite scroll  
**Layout:** 3-column grid (desktop), 1-column (mobile)  
**Card specs:** See "Project Card" component above  
**Interaction:** Click card → opens modal with full case study  

**If >6 projects:** Add tabs (Featured, Recent, Experiments)

---

### Section 4: Stats / Impact
**Goal:** Quantify value in a single glance  
**Layout:** Horizontal strip with 4-6 stats  
**Example metrics:**
- 1M+ API calls handled
- 99.9% uptime achieved
- 30% performance boost delivered
- 5 teams collaborated with

**Tailwind:**
```javascript
className="grid grid-cols-2 md:grid-cols-4 gap-4"
```

---

### Section 5: Testimonials (Optional)
**Goal:** Social proof without scroll fatigue  
**Layout:** Horizontal carousel, 2 visible at once  
**Card specs:** 
- Quote (80 chars max)
- Name + title
- Avatar (40x40px)

**If <3 testimonials:** Skip this section entirely

---

### Section 6: Contact / Footer
**Goal:** Clear next steps  
**Height:** 1 viewport  
**Contains:**
- "Let's work together" headline
- Email button
- Calendar booking link
- Resume download
- Social links repeated

**Background:** Contrasting from previous section (if previous was dark, use `bg-slate-900`)

---

## 🎭 Animation Guidelines

### Approved Animations
1. **Hover effects:** Scale, border color, opacity (max 300ms transition)
2. **Scroll reveals:** Fade-in + slight translate-up (use Intersection Observer)
3. **Page transitions:** Fade between routes (Next.js page transitions)

### Banned Animations
- Parallax scrolling >40px translate (causes motion sickness)
- Continuous looping Lottie files >500KB
- Text typing effects (annoying, not accessible)
- Auto-playing video backgrounds (performance killer)

### Implementation Example
```javascript
// Framer Motion scroll reveal
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <ProjectCard />
</motion.div>
```

**Performance Budget:**
- Total JS animations: <50KB
- Frame rate: Must maintain 60fps on mid-tier laptops
- Use `will-change: transform` sparingly (max 3 elements at once)

---

## 📱 Responsive Behavior

### Desktop (≥1024px)
- Content max-width: `1280px` (`max-w-7xl`)
- Grid: 12 columns
- Project cards: 3 per row
- Nav: Full horizontal links

### Tablet (768-1023px)
- Content padding: `px-8`
- Grid: 8 columns
- Project cards: 2 per row
- Nav: Still horizontal, condensed spacing

### Mobile (≤767px)
- Content padding: `px-4`
- Grid: 4 columns
- Project cards: 1 per row
- Nav: Hamburger menu
- Hero text: `text-4xl` instead of `text-7xl`
- Sections collapse to single-column

**Mobile-Specific Rules:**
- Section height: Max 2.5 viewports
- Use accordions for non-critical info (e.g., all projects list)
- Sticky nav collapses to icon dock after 120px scroll

---

## ⚡ Performance Checklist

### Image Optimization
```javascript
// Next.js Image component
import Image from 'next/image'

<Image
  src="/hero-bg.jpg"
  alt="Background"
  fill
  priority  // Only for hero image
  quality={85}
  className="object-cover"
/>
```

**Rules:**
- Hero image: 1920x1080px, <200KB, WebP format
- Project thumbnails: 800x450px, <120KB, lazy-loaded
- Profile photo: 400x400px, <50KB

### Lighthouse Targets
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

### Bundle Size
- First Load JS: <100KB (use Next.js dynamic imports)
- Total page weight: <500KB (uncompressed)

---

## ♿ Accessibility Requirements

1. **Keyboard navigation:** All interactive elements accessible via Tab
2. **Focus states:** Visible `ring-2 ring-violet-500` on all buttons/links
3. **ARIA labels:** All icon-only buttons need `aria-label`
4. **Color contrast:** Minimum 4.5:1 (use `text-slate-50` on `bg-slate-900`)
5. **Reduced motion:** Respect `prefers-reduced-motion` media query
6. **Alt text:** All decorative images have `alt=""`, content images have descriptive alt

### Example: Accessible Button
```javascript
<button
  className="px-6 py-3 bg-violet-600 hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 rounded-lg transition"
  aria-label="View all projects"
>
  View Work
</button>
```

---

## 🔧 Tech Stack Constraints

### Required Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^10.0.0" // For animations
  }
}
```

### Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        // Custom brand colors if needed
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'), // For blog posts
    require('@tailwindcss/line-clamp'), // For text truncation
  ]
}
```

---

## 📋 Pre-Launch QA Checklist

### Visual
- [ ] Hero section fits in 85vh on 1920x1080 without scroll
- [ ] No horizontal scroll on any breakpoint
- [ ] All text readable (4.5:1 contrast minimum)
- [ ] No more than 3 font weights used
- [ ] Cards in grids have consistent heights
- [ ] CTAs visible without scroll on all devices

### Functionality
- [ ] All links work (no 404s)
- [ ] Forms submit successfully
- [ ] Images load progressively (blur-up effect)
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Keyboard navigation reaches all interactive elements
- [ ] Focus states visible on all buttons/links

### Performance
- [ ] Lighthouse Performance ≥90
- [ ] First Contentful Paint <1.5s
- [ ] Largest Contentful Paint <2.5s
- [ ] Total Blocking Time <200ms
- [ ] No layout shift (CLS <0.1)

### Content
- [ ] No lorem ipsum text
- [ ] All project descriptions <120 characters
- [ ] Bio paragraph ≤150 words
- [ ] Contact info up-to-date
- [ ] Resume PDF <2MB

### Responsive
- [ ] Tested on: Desktop (1920px), Laptop (1440px), Tablet (768px), Mobile (390px)
- [ ] No content cut off or overlapping
- [ ] Touch targets ≥44x44px on mobile
- [ ] Text remains readable at all sizes

---

## 🎯 Final Design Philosophy

**Every design decision must answer:**
1. Does this help users understand my value faster?
2. Does this reduce cognitive load or add to it?
3. Would I keep this if I could only have 5 sections total?

**Red flags to delete immediately:**
- "Fun" cursor effects that don't add value
- Scroll-triggered counters that don't finish before user scrolls past
- "About Me" sections longer than 200 words
- Project lists without filtering/tabs if >8 items
- Testimonials without attribution (look fake)
- Social links to inactive profiles (<5 posts/year)

**Gold standard checklist:**
- ✅ First viewport communicates full story
- ✅ Users can scan entire page in <30 seconds
- ✅ Every section has a clear purpose
- ✅ Zero dead space (every area informs or delights)
- ✅ Fast enough to feel instant (<2s FCP)
- ✅ Accessible enough for WCAG AA compliance

---

## 📚 Appendix: Decision Trees

### Should I add this section?
```
START
├─ Does it showcase a skill/project?
│  ├─ YES → Does it fit in 1.5 viewports?
│  │  ├─ YES → ADD IT
│  │  └─ NO → Compress into tabs/accordion or SKIP
│  └─ NO → Does it build trust (testimonial/stat)?
│     ├─ YES → Is it quantifiable?
│     │  ├─ YES → ADD IT
│     │  └─ NO → SKIP (vague praise doesn't convert)
│     └─ NO → SKIP
```

### Should I use a modal or dedicated page for project details?
```
START
├─ Is project a major case study (>500 words)?
│  ├─ YES → Dedicated page (/projects/[slug])
│  └─ NO → Modal overlay
└─ Does user need to reference other projects while viewing?
   ├─ YES → Modal (keeps grid context visible)
   └─ NO → Dedicated page
```

### Should I use tabs, filters, or pagination for project list?
```
START
├─ Total projects < 8?
│  ├─ YES → No system needed, show all in grid
│  └─ NO → Total projects < 20?
│     ├─ YES → Use tabs (Featured / Recent / Experiments)
│     └─ NO → Use filters by tech stack + pagination
```

---

**Last updated:** December 2024  
**Versioning:** Update this doc whenever Tailwind or Next.js major versions change  
**Owner:** Pin this in your project README and reference during code reviews