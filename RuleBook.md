# Portfolio Layout & Aesthetic Rule Book

> **North Star:** Deliver a premium, information-dense portfolio that feels intentional on every single viewport. No dead zones, no endless scroll, no filler—only tightly curated content, balanced composition, and confident visual rhythm.

---

## 1. Experience Principles

1. **Single-glance storytelling** – Each viewport on desktop must communicate at least one complete narrative (who I am, what I build, why it matters) without requiring scroll.
2. **Scroll as a reveal, not a requirement** – Users should scroll because they *want* to discover more, never because essential info is hidden.
3. **Edge-to-edge intention** – Reserve large margins only for breathers between dense clusters. Default to full-width sections or layered compositions that feel immersive.
4. **Balanced density** – For every block of text, pair a visual, stat, interaction, or supporting micro-copy to avoid visual monotony.
5. **Clarity beats decoration** – Design flourishes (particles, gradients, glass) must support readability and hierarchy; turn them off if they cause haze or reduce contrast.

---

## 2. Grid, Sizing & Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro gaps, icon labels |
| `space-2` | 8px | Inline chips, badge spacing |
| `space-3` | 12px | Vertical rhythm between tight elements |
| `space-4` | 16px | Default padding for compact cards |
| `space-5` | 24px | Section content padding |
| `space-6` | 32px | Hero text separation |
| `space-7` | 48px | Section headers from body |
| `space-8` | 64px | Maximum spacing unless hero banner |

- **Grid:** 12-column grid with 80px gutters on desktop, collapsing to 8 columns (40px gutters) on tablet, 4 columns (20px gutters) on mobile.
- **Content width:** 1200–1360px for readability; hero and feature sections may stretch to full width if elements lock to grid.
- **Card heights:** Aim for consistent heights; if content lengths vary, add supportive tags or CTA rows to fill the space.

---

## 3. Section-by-Section Composition Rules

### 3.1 Hero / Above the Fold
- Contains: headline, supporting statement, CTA group, social badges, quick stats, and a visual (avatar, mockup, or dynamic canvas).
- Height target: 85–100% of viewport; avoid double scroll to exit hero.
- Include ambient motion (particle field, gradient animation, or scrolling marquee) constrained to ≤20% opacity so text remains crisp.

### 3.2 About / Story
- Place in a two-column split: text on left (max 350 words), visual timeline or stat cluster on right.
- Integrate “value chips” (e.g., *Full-stack*, *Systems thinker*, *Motion design*) to fill whitespace.
- Provide a compact bio summary card accessible without scrolling.

### 3.3 Projects / Work Showcase
- Use a responsive grid (desktop: 3 cards per row). Each card must show title, stack badges, 1-line value prop, and quick metrics (e.g., users, performance gains).
- Offer **show/hide detail** toggles or modal overlays rather than extending card height.
- Group projects into tabs (Recent, Case Studies, Experiments) if list exceeds six items.

### 3.4 Stats / Highlights
- Present KPIs in a dense horizontal strip; no vertical stacking of single numbers.
- Use contrasting pill backgrounds and micro-icons to prevent the strip from feeling empty.

### 3.5 Testimonials / Social Proof
- Limit to two slides visible simultaneously, with horizontal scroll or snap tabs for more. Avoid stacking quotes vertically.

### 3.6 Contact / CTA
- Fit within one viewport with actionable items (email button, schedule link, resume download).
- Backgrounds should contrast previous section to signal the end of page while still feeling full.

---

## 4. Content Compression Techniques

1. **Tabs & accordions** – Use for certifications, secondary projects, FAQs. Default collapsed state keeps sections slim.
2. **Horizontal carousels** – Employ for galleries or logos; ensure drag + arrow controls exist.
3. **Inline stats** – Convert narrative metrics ("helped 1M+ users") into stylized chips.
4. **Split descriptions** – Instead of one long paragraph, divide into labeled micro-cards (Challenge, Solution, Impact) arranged horizontally.
5. **Floating labels** – Annotate visuals with subtle labels to deliver context without extra paragraphs.

---

## 5. Typography Stack

- **Hero Title:** 64–72px, tracking -2%, leading ≤ 1.05.
- **Section Heading:** 36–44px, leading 1.1, margin-bottom `space-5`.
- **Body Copy:** 16–18px, leading 1.4. Maximum of 70 characters per line.
- **Supporting Text:** 14px, uppercase or semi-bold for labels.
- **Number styles:** Use tabular lining figures for stats to maintain alignment.

**Rules:**
- Never center-align text blocks longer than 3 lines.
- Use gradient text sparingly—only for emphasis in hero headline or stat highlight.
- Avoid italics for body copy; reserve for quotes.

---

## 6. Color & Lighting

- **Primary background:** Deep charcoal (#050608 to #0d1117). Maintain 95% opacity overlays to keep content legible.
- **Accent gradients:** Use 2-color gradients (e.g., #7f5af0 → #2cb67d). Apply as thin strips, button backgrounds, or outlines—not full backgrounds unless content is behind glass.
- **Glassmorphism panels:** 10–20% white overlay, blur 12px, border 1px with 20% opacity to prevent haziness.
- **Highlight zones:** If a section risks feeling empty, overlay subtle grid lines or particle speckles at ≤8% opacity.

---

## 7. Motion & Interaction

- **Purposeful motion:** Limit large animations to one per viewport. Micro-interactions (hover tilt, button glow) are allowed per component.
- **Scroll cues:** Use animated chevrons or microtext to indicate scroll only if the next section is not visible.
- **Parallax bounds:** Max translate 40px to avoid misalignment with edge-to-edge layout.
- **Performance:** All Lottie/Canvas animations must stay under 2MB and run at ≤60fps.

---

## 8. Responsiveness & Breakpoints

| Breakpoint | Width | Layout Adjustments |
|------------|-------|--------------------|
| Desktop XL | ≥1440px | Expand hero visual, add side stat tower |
| Desktop | 1200–1439px | Base design reference |
| Tablet | 768–1199px | Switch to 2-column grids, stack hero text above visual |
| Mobile | ≤767px | Single column, use accordions for non-critical info |

- Keep mobile sections within 2–2.5 scroll lengths; condense cards into carousels.
- Sticky nav must collapse into an icon-based dock after 120px scroll on mobile.

---

## 9. Performance & Accessibility Guardrails

1. **Lighthouse goals:** Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 95.
2. **Image discipline:** Use next/image with `priority` only for hero art; all others must be lazy-loaded and ≤ 200KB (desktop) / 120KB (mobile).
3. **Contrast ratio:** Maintain WCAG AA minimum (4.5:1) even on gradient backgrounds by placing text atop semi-opaque scrims.
4. **Keyboard nav:** All interactive components (tabs, carousels, modals) must be reachable via keyboard with visible focus rings.
5. **Reduced motion:** Honor `prefers-reduced-motion` by disabling parallax and swapping Lottie loops with static frames.

---

## 10. QA Checklist Before Shipping a Section

- [ ] Section fits within ≤ 1.5 viewport heights on desktop.
- [ ] At least 85% of horizontal space is utilized by content or purposeful decoration.
- [ ] No block of text exceeds 3 sentences without visual support.
- [ ] Scroll distance between major CTAs ≤ 900px.
- [ ] Sticky navigation anchors jump to every major section.
- [ ] Tab order follows visual hierarchy; no focus traps.
- [ ] All animations degrade gracefully on low-power devices.
- [ ] Section passes contrast, responsive, and performance rules above.

---

## 11. Continuous Improvement Loop

1. **Weekly audit:** Capture full-page screenshots at 1440px, 1024px, 768px, 390px. Verify density and alignment.
2. **Heatmap review:** Use analytics or user testing to confirm users are not rage scrolling or abandoning mid-section.
3. **Component library sync:** Any new card/button style must be added to the design system with spacing + usage notes.
4. **Content refresh cadence:** Hero statement, featured project list, and stats reviewed every 60 days to keep page fresh without extending length.

---

Keep this rule book pinned during design and development. Treat every pixel as mission-critical real estate—if it isn’t informing, delighting, or converting, compress it, remix it, or remove it.