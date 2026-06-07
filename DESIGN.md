---
name: Wild Child Day Camps
description: Colorado's outdoor adventure day camp for ages 6-15 in Westminster
colors:
  ember-core: "#c02a0e"
  sunrise-orange: "#f9a571"
  base-layer: "#231510"
  basecamp-black: "#1e1e1e"
  chalk-dust: "#fdf5ee"
typography:
  display:
    fontFamily: '"Bebas Neue", sans-serif'
    fontWeight: 400
    fontSize: "clamp(3rem, 8vw, 4.5rem)"
    lineHeight: 1
  headline:
    fontFamily: '"Bebas Neue", sans-serif'
    fontWeight: 400
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    lineHeight: 1
  body:
    fontFamily: '"Poppins", system-ui, sans-serif'
    fontWeight: 400
    fontSize: "1rem"
    lineHeight: 1.625
  label:
    fontFamily: '"Poppins", system-ui, sans-serif'
    fontWeight: 600
    fontSize: "0.75rem"
    letterSpacing: "0.1em"
rounded:
  pill: "9999px"
  card: "12px"
  card-lg: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  section-sm: "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.ember-core}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "#ad2508"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-inverted:
    backgroundColor: "#ffffff"
    textColor: "{colors.ember-core}"
    rounded: "{rounded.pill}"
    padding: "16px 40px"
  button-inverted-hover:
    backgroundColor: "{colors.chalk-dust}"
    textColor: "{colors.ember-core}"
    rounded: "{rounded.pill}"
    padding: "16px 40px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.1)"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "16px 40px"
  button-sm:
    backgroundColor: "{colors.ember-core}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  program-card:
    backgroundColor: "#ffffff"
    rounded: "{rounded.card}"
    padding: "20px"
  testimonial-card:
    backgroundColor: "{colors.chalk-dust}"
    rounded: "{rounded.card-lg}"
    padding: "28px"
  age-badge:
    backgroundColor: "rgba(192,42,14,0.1)"
    textColor: "{colors.ember-core}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
---

# Design System: Wild Child Day Camps

## 1. Overview

**Creative North Star: "The Base Camp"**

Wild Child's design system is the interface equivalent of a well-run base camp: everything in its place, nothing excessive, warmth that signals competence rather than performing it. The site exists for a parent making a real decision about their child's summer, not for admiring design. Every element earns its place by moving that parent closer to registering, or toward feeling confident enough to do so. Safety and wildness share the same threshold; the design holds both without collapsing into either extreme.

The palette runs dark and warm. Base Layer and Basecamp Black anchor the system with a depth that communicates 26 years in the field. Ember Core provides the call to action with a campfire urgency that commands attention without alarm. Chalk Dust offers breath between sections. Typography is bold without aggression: Bebas Neue for display authority and impact, Poppins for legibility and approachable warmth. The site is image-forward because the experience is the argument; real camp photography grounds every claim that specificity alone cannot carry.

This system explicitly rejects: bright-primary-on-white summer camp clipart aesthetics; sanitized institutional design that reads "licensed facility" over "real adventure" (Learning Tree, KinderCare); extreme-sports darkness that would make safety-conscious parents hesitate; and SaaS landing page patterns (gradient heroes, hero-metric stat grids, identical icon-heading-text card rows, trust-badge strips).

**Key Characteristics:**
- Full-palette section rhythm: dark surfaces (Base Layer), brand moments (Ember), neutral breaths (White, Chalk Dust) alternate deliberately
- Display type as brand anchor: Bebas Neue at scale carries the authority of the name itself
- Pills everywhere for CTAs: thumb-friendly, brand-consistent, never rectangular
- Imagery-forward: real camp photography grounds every section
- Credibility shown through specificity, not badges: 26 years, 1:6 ratio, named director, real awards

## 2. Colors: The Camp Palette

Five names, each earned. The palette reads like the stages of a Colorado camp day: the dark of early morning mountain drive, campfire intensity, warm sunrise light, basecamp ink, and midday chalk-rock heat.

### Primary
- **Ember Core** (#c02a0e): The action color. Used for all primary CTAs (buttons, links), section kicker labels on light surfaces, the full-bleed CTA section background gradient, and star/checkmark accent icons. Never used decoratively; always purposeful.

### Secondary
- **Sunrise Orange** (#f9a571): Warm accent and hover signal. Kicker labels on dark (Base Layer) surfaces, nav link hover states, star rating icons, the founder portrait border ring. Softer than Ember Core; used to indicate warmth and interactive feedback rather than primary action.

### Neutral
- **Base Layer** (#231510): The deepest surface. Hero, header, and Trust section backgrounds. A warm near-black that reads as campfire-charred wood rather than corporate dark mode.
- **Basecamp Black** (#1e1e1e): Body text on light surfaces; footer background. Near-black ink with the warmth of charcoal rather than cool digital black.
- **Chalk Dust** (#fdf5ee): Light section background for Programs, Pricing, and Testimonials. A slightly warm off-white, not clinical white. Pure white (#ffffff) appears only inside cards on Chalk Dust sections, creating a one-step lift.

### Named Rules
**The Two-Surface Rule.** The page alternates: dark surface (Base Layer), brand surface (Ember), or light surface (White or Chalk Dust). Never two adjacent dark sections; never two adjacent Ember sections. Ember as full-bleed background is used exactly once, the final CTA, as its earned moment.

**The Ember-on-Ember Prohibition.** Ember Core and Sunrise Orange never appear on an Ember Core background. On Ember surfaces, CTAs use white backgrounds (Inverted button) and secondary actions use ghost treatment. Sunrise Orange hover states apply only on Base Layer and White surfaces.

## 3. Typography

**Display Font:** Bebas Neue (sans-serif fallback)
**Body Font:** Poppins (system-ui, sans-serif fallback)

**Character:** An unusual pairing on purpose. Bebas Neue is a condensed all-caps display face built for signage and sports; it carries the same energy as a trail marker or a camp banner. Poppins is a geometric humanist sans with approachable rounded forms. Together they hold the brand tension: untamed authority in the display, parental warmth in the body.

### Hierarchy
- **Display** (Bebas Neue, 400, `clamp(3rem, 8vw, 4.5rem)`, leading-none): h1-level page titles. Hero headline, CTA section headline. All-caps by the nature of the font.
- **Headline** (Bebas Neue, 400, `clamp(2.25rem, 5vw, 3rem)`, leading-none): Section h2s ("Every Week Is an Adventure", "Why Parents Trust Wild Child") and pull-quotes (founder blockquote, CTA micro-quotes).
- **Title** (Poppins, 700, `1rem`): Card headings, pricing display numerals. The only weight where Poppins reads as a title rather than body.
- **Body** (Poppins, 400, `1rem`, leading-relaxed / 1.625): All running prose. Hero supporting text, card descriptions, about copy. Max line length 65ch on large viewports.
- **Label** (Poppins, 600, `0.75rem`, `letter-spacing: 0.1em`, uppercase): Section kickers, badge text, nav links, caption metadata.

### Named Rules
**The Kicker Rule.** Every section opens with a short uppercase label in Poppins 600, letter-spacing 0.1em, Ember Core on light surfaces or Sunrise Orange on dark surfaces. This kicker appears once per section, above the h2, never repeated inside the section's content. It is the section's whisper before the display shouts.

**The Bebas-Only Rule.** Bebas Neue is used exclusively for display and headline elements at 2.25rem and above. It never appears at body size or in body copy. Its condensed all-caps form below 2rem reads aggressive rather than authoritative.

## 4. Elevation

This system uses structured, purposeful shadows that map directly to conversion priority. Elevation signals "how much does this surface want your attention," not "how modern does this look." The registration panel is the most elevated surface on the page by design — it is the goal.

### Shadow Vocabulary
- **Content lift** (`box-shadow: 0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)`): Program cards at rest. Just enough lift to read as interactive; subordinate to everything else.
- **Hover lift** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)`): Program cards on hover. A state signal, not a static design choice.
- **Structural lift** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)`): Sticky header and primary CTA button in hero. Separates persistent chrome from scrolling content.
- **CTA lift** (`box-shadow: 0 20px 25px -5px rgba(0,0,0,0.10), 0 8px 10px -6px rgba(0,0,0,0.10)`): CTA buttons in the final Ember section. Maximum button emphasis.
- **Panel lift** (`box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25)`): Hero registration panel. The most elevated surface on the page.

### Named Rules
**The Elevation Hierarchy Rule.** Shadow depth maps directly to conversion priority: the registration panel (the goal) carries the deepest shadow; primary CTAs (the means) carry the second deepest; content cards carry the least. Assign shadow only as high on this scale as an element's conversion role warrants.

**The Flat-Interior Rule.** Testimonial cards, trust items, and benefits carry no shadow. They live on surfaces that already distinguish them via background color change (Chalk Dust, Base Layer). Shadow there is redundant noise.

## 5. Components

### Buttons
All buttons are pill-shaped (rounded-full, 9999px). The pill is the system's most consistent visual motif: it appears on every CTA, every badge, and the founder portrait border ring.

- **Primary:** Ember Core background (#c02a0e), white text, Poppins 700, `padding: 16px 24px`, structural lift shadow. `transition: all 200ms`. Full-width in constrained contexts (hero panel, mobile).
- **Hover / Focus:** Background darkens to `#ad2508`, scales up `1.02x`. `active:scale-100` snaps back on tap.
- **Primary Large:** Same as Primary with `padding: 16px 40px` and CTA lift shadow. Used in the standalone CTA section at page bottom.
- **Inverted (on Ember surface):** White background, Ember Core text, same pill shape. Hover shifts background to Chalk Dust (#fdf5ee). CTA lift shadow. The equal-weight CTA when the page surface is already Ember.
- **Ghost (on Ember surface):** `background: rgba(255,255,255,0.10)`, `border: 1px solid rgba(255,255,255,0.40)`, white text, backdrop-blur-sm. A lower-priority secondary action on Ember backgrounds only; never on light surfaces.
- **Small (nav):** Ember Core background, white text, `font-size: 0.875rem`, `padding: 8px 16px`, hover lift shadow, `hover:scale-105`. Desktop header only.

### Age Badge / Pill Labels
Used inside program cards to display age ranges and classification.
- **Style:** Ember Core text (#c02a0e) on `rgba(192,42,14,0.10)` tinted background, Poppins 600, `font-size: 0.75rem`, pill-shaped, `padding: 2px 8px`.
- Appears in-line beside card headings; never as a standalone element.

### Program Cards
- **Corner Style:** Gently rounded (12px)
- **Background:** White, sitting on Chalk Dust section background (one-step lift)
- **Shadow:** Content lift at rest; hover lift plus subtle upward translate (-2px) on hover
- **Border:** `1px solid rgba(35,21,16,0.10)` — a barely-visible warm edge, not a decorative color stripe
- **Internal Padding:** 20px all sides
- **Contents:** Bold Basecamp Black heading at `0.875rem` + right-aligned age badge + `rgba(30,30,30,0.80)` description text at `0.75rem`

### Testimonial Cards
- **Corner Style:** Generously rounded (16px)
- **Background:** Chalk Dust (#fdf5ee) — the cream tint on a white section provides the card affordance without a shadow
- **Shadow:** None
- **Border:** `1px solid rgba(35,21,16,0.10)`, same warm edge as program cards
- **Internal Padding:** 28px all sides
- **Contents:** Sunrise Orange star row (5 filled stars, 16px) + italic body quote at `0.875rem` in `rgba(30,30,30,0.80)` + bold author name at `0.875rem`

### Icon Circles (Trust and Benefits)
Not cards — do not treat them as cards. Small icon containers inside full-bleed sections.
- **On Base Layer surfaces:** `background: rgba(255,255,255,0.10)`, 48px diameter circle, Sunrise Orange icon (24px, line-art, stroke-width 2px)
- **On Ember surfaces:** `background: rgba(255,255,255,0.15)`, 48px circle, white icon (24px, line-art, stroke-width 1.5px)

### Navigation
- **Style:** Base Layer background (#231510), sticky, `z-index: 50`, `border-bottom: 1px solid rgba(255,255,255,0.05)`, structural lift shadow
- **Desktop links:** `color: rgba(255,255,255,0.75)`, Poppins 500, `0.875rem`, `hover:color: #f9a571`, `transition: color 200ms`
- **Mobile:** Collapsed panel below sticky header, same Base Layer background, expanded via hamburger toggle
- **CTA in nav:** Small button variant

### Hero Registration Panel (Signature Component)
The most important surface on the page. The registration panel floats as a white card in the hero's right column, maximally elevated.
- **Background:** Pure white (#ffffff)
- **Corner Style:** 16px radius (rounded-2xl)
- **Shadow:** Panel lift (0 25px 50px -12px rgba(0,0,0,0.25)) — the deepest shadow on the page
- **Internal Padding:** 32px all sides
- **Contents top-down:** Ember kicker label ("Summer 2026 · Limited Spots") + Bebas Neue h2 + checklist (Ember Core check icons + `rgba(30,30,30,0.80)` text) + full-width Primary button + secondary text link + caption in `rgba(30,30,30,0.70)` at `0.75rem`

## 6. Do's and Don'ts

### Do:
- **Do** use Bebas Neue exclusively at 2.25rem and above. Let scale carry the authority.
- **Do** make every CTA a pill (rounded-full, 9999px). The pill is the system's most consistent motif and signals interactivity instantly on mobile.
- **Do** alternate section backgrounds in the documented rhythm: Base Layer, Ember (once, at page end), White, Chalk Dust. Two adjacent dark sections read as a mistake.
- **Do** use the kicker pattern (Poppins 600, uppercase, `letter-spacing: 0.1em`, Ember Core on light surfaces or Sunrise Orange on dark) once per section, above the h2, nowhere else inside the section.
- **Do** weight shadows by conversion priority. The registration panel earns the deepest shadow because it is the goal. Decoration earns nothing.
- **Do** use real camp photography. A real child on a real Colorado summit is the argument no copy can replicate.
- **Do** keep body text max-width at 65ch. The site is read on phones by parents deciding under time pressure.
- **Do** use Sunrise Orange (#f9a571) for accent and hover states on dark (Base Layer) surfaces. Use Ember Core (#c02a0e) for action on light (White, Chalk Dust) surfaces.

### Don't:
- **Don't** use bright primary colors on white backgrounds, clipart-style iconography, or the 2005-era summer camp visual language. The anti-reference is explicit: cheesy-clipart summer camp sites.
- **Don't** design toward the institutional daycare feel (Learning Tree, KinderCare aesthetic). If the result reads "licensed facility" rather than "real adventure," rework it.
- **Don't** go extreme-sports dark or neon-aggressive. The audience is parents deciding on child safety; visual edginess reads as a warning sign.
- **Don't** use SaaS landing page patterns: gradient hero sections (the ember gradient is reserved for the single final CTA), hero-metric stat grids (large number, small label, supporting stats), identical icon-heading-text card grids, or trust-badge strips.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on any card, alert, or list item. The system uses full borders, tonal backgrounds, or leading icons instead.
- **Don't** use gradient text (`background-clip: text` with a gradient fill). Emphasis is carried by weight, scale, and Bebas Neue, not decorative effects.
- **Don't** nest cards. Program cards sit on Chalk Dust, not inside another card. Two levels of card depth is always wrong.
- **Don't** use Bebas Neue below 2.25rem. At small sizes the condensed all-caps face loses legibility and reads aggressive rather than authoritative.
- **Don't** add trust badges (padlock graphics, shield icons, "licensed and insured" banners). Credibility in this system comes from specificity: 26 years, 1:6 ratio, named director, real awards. Badges are asserted trust; this system earns it.
- **Don't** use Ember Core on an Ember Core background. The inverted (white) and ghost variants exist for exactly this surface.
