# Portfolio Design Rulebook v3.0 — Cinematic Edition
> **Stack:** Next.js 15 + React 19 + Tailwind + ShadCN + Radix UI + React Three Fiber + tsparticles  
> **Style:** Brutalist-cinematic with 3D elements, particle effects, terminal UI  
> **Target:** Senior devs, design-forward recruiters, tech startups

---

## 🎯 Design Philosophy (Updated for 3D/Particle Stack)

1. **Performance over flash** — 3D and particles are cool, but if Lighthouse drops below 80, CUT THEM
2. **First viewport = hero + terminal preview** — Users should see interactive elements immediately
3. **Particles = accent, not focus** — Max 15% opacity, must not compete with text
4. **3D elements = purposeful** — Every 3D object must serve the narrative (not just "looks cool")
5. **Entry animation = 3 seconds max** — After that, localStorage skip for returning users

---

## 🚨 IMMEDIATE ACTION ITEMS (Before Anything Else)

### 1. IMAGE OPTIMIZATION (CRITICAL)
Your images are **killing performance**. Run these commands NOW:

```bash
# Install sharp for image optimization
npm install sharp

# Convert all JPG/PNG to WebP and resize
npx @squoosh/cli --webp auto public/*.jpg public/*.png
```

**Image size rules:**
- Hero backgrounds: **1920x1080px, <200KB WebP**
- Section images: **800x600px, <100KB WebP**
- Thumbnails: **400x300px, <50KB WebP**

**Your current images vs. target:**
```
❌ about_computer.jpg (3.17 MB) → ✅ about_computer.webp (150 KB)
❌ horse.png (3.75 MB) → ✅ horse.webp (200 KB)
❌ Mountains.jpg (863 KB) → ✅ mountains.webp (120 KB)
```

### 2. Next.js Image Component
Replace ALL `<img>` tags with Next.js `<Image>`:

```tsx
// ❌ WRONG
<img src="/about_computer.jpg" />

// ✅ CORRECT
import Image from 'next/image'
<Image 
  src="/about_computer.webp" 
  alt="About section background"
  width={1920}
  height={1080}
  quality={85}
  priority={false} // Only true for hero image
  className="object-cover"
/>
```

---

## 📐 Component Audit & Fixes

### ✅ **Components You Have:**
1. **Footer.tsx** — Standard footer
2. **MagicButton.tsx** — Custom button with effects
3. **Navbar.tsx** — Top navigation
4. **Navigation.tsx** — Probably mobile nav?
5. **Particles.js** — tsparticles config
6. **ProfileCard.tsx** — About card
7. **Transition.tsx** — Page transitions

### 🔧 **What You're Missing:**
1. **ProjectCard.tsx** — For showcasing work
2. **SkillBadge.tsx** — Tech stack chips
3. **StatCounter.tsx** — Animated number counters
4. **ContactForm.tsx** — Email capture (you have Supabase!)
5. **LoadingState.tsx** — For async data

---

## 🎨 Particle System Rules

### Current Setup: tsparticles
You're using `tsparticles` — great choice, but needs strict limits:

```javascript
// Particles.js optimization rules
export const particlesConfig = {
  particles: {
    number: {
      value: 50, // ❌ Never exceed 80 particles
      density: {
        enable: true,
        area: 800
      }
    },
    opacity: {
      value: 0.15, // ❌ Never exceed 0.2 opacity
    },
    size: {
      value: 2, // Keep particles small
    },
    move: {
      speed: 0.5, // Slow = less CPU
    }
  },
  detectRetina: true,
  fpsLimit: 60, // Lock at 60fps
  pauseOnOutsideBrowser: true, // Save battery
}
```

**Performance checklist:**
- [ ] Particle count < 80
- [ ] Opacity < 0.2
- [ ] FPS locked at 60
- [ ] Pauses when tab inactive
- [ ] Respects `prefers-reduced-motion`

---

## 🖥️ Terminal Component Rules

You have a Terminal component — this is FIRE for dev portfolios. Rules:

### Terminal Design Pattern:
```tsx
// Terminal.tsx structure
<div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden">
  {/* Header */}
  <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
    <div className="flex gap-2">
      <span className="w-3 h-3 bg-red-500 rounded-full" />
      <span className="w-3 h-3 bg-yellow-500 rounded-full" />
      <span className="w-3 h-3 bg-green-500 rounded-full" />
    </div>
    <span className="text-sm text-slate-400 ml-2">~/portfolio</span>
  </div>
  
  {/* Terminal content */}
  <div className="p-4 font-mono text-sm space-y-2">
    <div className="flex">
      <span className="text-emerald-400">girijesh@portfolio</span>
      <span className="text-slate-400 mx-2">~</span>
      <span className="text-violet-400">$</span>
      <span className="ml-2 text-slate-50">npm run dev</span>
    </div>
    {/* Output lines */}
  </div>
</div>
```

**Terminal rules:**
- Max height: 400px (use `max-h-96 overflow-y-auto`)
- Font: JetBrains Mono or Fira Code
- Colors: Match VS Code theme (emerald for user, slate for system)
- Commands must be real (no fake bash scripts)

---

## 🎭 Entry Animation Strategy

You're using `localStorage` to show animation only once. **This is correct**, but needs safeguards:

```tsx
// page.tsx pattern (FIXED VERSION)
'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showEntry, setShowEntry] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisited')
    
    if (!hasVisited) {
      setShowEntry(true)
      localStorage.setItem('hasVisited', 'true')
      
      // Auto-hide after 3 seconds
      setTimeout(() => setShowEntry(false), 3000)
    }
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <>
      {showEntry && <EntryAnimation />}
      <Hero />
      <Terminal />
      <AboutSection />
    </>
  )
}
```

**Entry animation rules:**
- Duration: 2-3 seconds MAX
- Use Framer Motion's `exit` prop for smooth fade-out
- No user interaction required to skip (auto-advance)
- Respect `prefers-reduced-motion`

---

## 🏗️ Section Structure (Based on Your Components)

### 1. Hero Section (First Viewport)
**Current setup:** Hero with Spotlight, TextGenerateEffect, MagicButton  
**Requirements:**
- Height: `min-h-screen` but content fits in 85vh
- Contains: Name, tagline, CTA, particle background
- Spotlight effect: Max 2 spotlights, 10% opacity
- TextGenerateEffect: Should complete in <2 seconds

```tsx
// Hero optimization
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Particles (background layer) */}
  <Particles className="absolute inset-0 opacity-10" />
  
  {/* Spotlight (accent layer) */}
  <Spotlight className="absolute top-0 left-1/4 opacity-15" />
  
  {/* Content (foreground) */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
    <TextGenerateEffect 
      words="Full-Stack Developer"
      duration={1.5} // Fast generation
    />
    <MagicButton href="#projects">View Work</MagicButton>
  </div>
</section>
```

---

### 2. Terminal Section
**Goal:** Show interactive terminal preview  
**Content ideas:**
- `whoami` → Your name and role
- `ls projects/` → List of projects
- `cat skills.txt` → Tech stack
- Interactive: User can type commands

---

### 3. About Section
**Current:** AboutSection component with ProfileCard  
**Optimization:**
```tsx
<section className="py-24 px-4 relative">
  {/* Background image (optimized) */}
  <Image 
    src="/about_computer.webp" 
    fill
    className="object-cover opacity-5"
    alt=""
  />
  
  <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-2 gap-8">
    {/* Left: Text */}
    <div>
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-slate-300 leading-relaxed max-w-prose">
        Your bio (150 words max)
      </p>
    </div>
    
    {/* Right: ProfileCard */}
    <ProfileCard />
  </div>
</section>
```

---

## 🎨 ShadCN + Radix UI Integration

You have ShadCN configured with **new-york** style. Use these components:

### Dialog (for Project Modals)
```tsx
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <button>View Project</button>
  </DialogTrigger>
  <DialogContent className="max-w-4xl">
    <DialogHeader>
      <DialogTitle>Project Name</DialogTitle>
    </DialogHeader>
    {/* Full case study */}
  </DialogContent>
</Dialog>
```

### Tabs (for Project Filters)
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="featured">
  <TabsList>
    <TabsTrigger value="featured">Featured</TabsTrigger>
    <TabsTrigger value="recent">Recent</TabsTrigger>
    <TabsTrigger value="experiments">Experiments</TabsTrigger>
  </TabsList>
  
  <TabsContent value="featured">
    <ProjectGrid projects={featuredProjects} />
  </TabsContent>
</Tabs>
```

### Separator (for Section Dividers)
```tsx
import { Separator } from "@/components/ui/separator"

<Separator className="my-12 bg-slate-800" />
```

---

## 🎬 Framer Motion Patterns

You're using Framer Motion 3.11.18. Approved animation patterns:

### 1. Scroll Reveal
```tsx
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true, margin: "-100px" }}
>
  <Component />
</motion.div>
```

### 2. Stagger Children
```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.div variants={{ hidden: { y: 20 }, show: { y: 0 } }}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### 3. Page Transitions (using Transition.tsx)
```tsx
// Transition.tsx
import { motion } from "framer-motion"

export default function Transition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
```

---

## 🗄️ Supabase Integration Strategy

You have Supabase installed — use it for:

### 1. Project Data (CMS)
```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Fetch projects
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
  
  return data || []
}
```

### 2. Contact Form Submissions
```typescript
// Store contact form data
export async function submitContact(formData: ContactForm) {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([formData])
  
  if (error) throw error
}
```

### 3. View Counter
```typescript
// Track portfolio views
export async function incrementViews() {
  const { error } = await supabase
    .rpc('increment_page_views')
  
  if (error) console.error(error)
}
```

---

## 📊 Missing Components You Need

### 1. ProjectCard.tsx
```tsx
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function ProjectCard({ project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-violet-600 transition-all duration-300">
          <div className="aspect-video relative overflow-hidden bg-slate-800">
            <Image 
              src={project.thumbnail} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              alt={project.title}
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-2 py-1 bg-slate-800 rounded text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        {/* Full case study */}
      </DialogContent>
    </Dialog>
  )
}
```

### 2. SkillBadge.tsx
```tsx
export default function SkillBadge({ skill, icon }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-violet-600 transition-colors">
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-sm font-medium">{skill}</span>
    </div>
  )
}
```

---

## ⚡ Performance Optimization Checklist

### Image Optimization
- [ ] All images converted to WebP
- [ ] Hero image <200KB
- [ ] All images lazy-loaded except hero
- [ ] Using Next.js `<Image>` component everywhere
- [ ] Proper `width` and `height` specified

### JavaScript Optimization
- [ ] Framer Motion animations use GPU (transform/opacity only)
- [ ] Particle count <80
- [ ] Dynamic imports for heavy components
- [ ] No `console.log` in production

### CSS Optimization
- [ ] Using Tailwind's JIT mode
- [ ] No custom CSS unless absolutely necessary
- [ ] Purging unused styles in production

### Lighthouse Targets
- Performance: ≥85 (with 3D/particles)
- Accessibility: ≥95
- Best Practices: ≥90
- SEO: ≥95

---

## 🎯 Priority Action Plan

### Week 1: FOUNDATION (Ship This First)
1. ✅ Optimize all images (convert to WebP, resize)
2. ✅ Fix localStorage hydration in page.tsx
3. ✅ Add ProjectCard component
4. ✅ Connect Supabase to fetch projects
5. ✅ Deploy to Vercel

### Week 2: POLISH
6. Add contact form with Supabase
7. Implement project filters (ShadCN Tabs)
8. Add view counter
9. Performance audit (Lighthouse)

### Week 3: EXTRAS
10. Blog section (if needed)
11. Resume download
12. SEO optimization

---

## 🔧 Quick Fixes You Can Do RIGHT NOW

### Fix 1: Image Optimization Script
```bash
# Create optimize-images.js
node optimize-images.js
```

### Fix 2: Update page.tsx for Hydration
Add the `mounted` check I showed above

### Fix 3: Particle Performance
Reduce particle count to 50, opacity to 0.15

---

**This rulebook is tailored to YOUR exact stack. Follow it religiously and your portfolio will be untouchable.** 🔥