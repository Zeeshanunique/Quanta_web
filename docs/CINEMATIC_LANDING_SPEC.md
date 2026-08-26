# Quanta Cinematic Landing — Visual & Motion Spec

**Status:** Source of truth for the cinematic home spine  
**Brand:** Quanta (not EQTYLAB)  
**Scope:** Visual language, composition, transitions, and animation behavior  
**Out of scope this doc:** Production code, pixel-perfect content clone of the reference

### Primary motion reference

Canonical scroll/animation inspiration (EQTY Lab–style cinematic landing):

https://cdn.dribbble.com/userupload/17351661/file/original-15f093aeaaa8db2dba3fc53bf15e0c67.mp4

Local copy (optional): [`docs/inspiration-ref.mp4`](inspiration-ref.mp4)

Use this video for **timing, hierarchy, transitions, and feel**. Adapt branding and copy to Quanta — do not clone EQTY wordmarks.

---

## North-star principle

**Do not recreate the screenshots. Recreate the cinematic sequence that produced the screenshots.**

Reference frames are **scroll states of one continuous page**, not independent static sections.

### Canonical instruction for Cursor / frontend implementers

> Build a premium cinematic deep-tech landing page inspired by the supplied reference. Preserve the visual hierarchy, dark-to-light transitions, restrained emerald glow, central computational object, flowing SVG/data lines, atmospheric particles, glass UI, staggered text reveals, and scroll-driven storytelling. Do not make it a collection of static sections. Every section should transition naturally into the next, with animation driven primarily by scroll position. Prioritize cinematic restraint, whitespace, typography, depth, and micro-interactions over excessive effects.

---

## 1. Overall aesthetic

**Target feel:** Apple × Linear × futuristic AI infrastructure × cybersecurity

The site should feel:

- Premium, minimal, extremely polished
- Technical, cinematic, futuristic
- Trustworthy, slightly mysterious, expensive

**Avoid looking like:**

- A generic AI startup
- A crypto website
- A gaming website
- A neon cyberpunk website
- A template with random gradients everywhere

**Green rule:** Controlled and intentional. Green appears primarily as glow, highlights, active states, borders, buttons, and network/data visualizations — never as a full-site green wash.

**Quanta brand adaptation:** Keep Quanta naming, logo, and product framing (trusted / verifiable AI workforce). Borrow the reference’s **visual language and motion behavior**, not EQTYLAB copy or logos.

---

## 2. Visual system

### Dark sections

Use almost-black backgrounds — not pure flat black.

```text
BLACK
   ↓
very subtle green atmosphere
   ↓
thin green light
   ↓
glass elements
   ↓
white typography
   ↓
bright green accent
```

Green should feel like **energy inside darkness**.

### Light sections — page rhythm

```text
BLACK
      ↓
WHITE
      ↓
soft mint
      ↓
deep emerald
      ↓
(optional) dark close / final CTA
```

That contrast is mandatory. Do not keep every section dark.

### Design tokens (targets for later Tailwind / CSS work)

| Token | Role | Target |
|-------|------|--------|
| `--void` | Page void / dark hero | `#050505` – `#0A0A0A` |
| `--void-elevated` | Slightly lifted dark surfaces | `#0E1210` – `#121816` |
| `--emerald` | Primary accent / active | `#00E8A0` family |
| `--emerald-soft` | Soft mint surfaces | `#D8F5E8` – `#E8F8F0` |
| `--emerald-deep` | Storytelling panels | `#0B3D34` – `#0A2F28` |
| `--mint-glow` | Highlights / “New Threats” accent | `#4ADE80` family |
| `--text-primary-dark` | Type on void | `#FFFFFF` |
| `--text-muted-dark` | Supporting type on void | `#888888` – `#A0A0A0` |
| `--text-primary-light` | Type on white | `#0B3D34` / near-black green |
| `--glass` | HUD / nav / cards | `rgba(255,255,255,0.04–0.08)` + blur |
| `--glass-border` | Glass edges | `rgba(255,255,255,0.08–0.14)` |

**Explicit migration note:** Retire purple / indigo as the primary accent for this landing spine (current Brainwave-style tokens in `tailwind.config.js`). Emerald replaces purple for glow, CTAs, and network energy on the cinematic home.

---

## 3. Hero — cinematic opening

The first viewport must feel like looking into a piece of **futuristic infrastructure**.

### Composition hierarchy (strict)

```text
Chip → headline → subtitle → CTA → environmental curves → HUD cards
```

The chip is the **visual focal point**. The headline must **not** compete with it.

### Initial state (wire)

```text
                    faint particles

                       ┌─────┐
                       │ AI  │
                       │CHIP │
                       └─────┘

                 Verify to Trust AI

              Supporting description

                  [ Schedule Demo ]

              ─────────────────────
            curved green light field
          ───────────────────────────

            Preorders / Ship status

      ┌────────┐ ┌────────┐ ┌────────┐
      │   ↗    │ │   ↗    │ │   ↗    │
      │  HUD   │ │  HUD   │ │  HUD   │
      └────────┘ └────────┘ └────────┘
```

### Layout rules

- Centered, symmetrical, generous dark negative space
- Not the current left/right text+visual split in `src/components/Hero.jsx`
- Nav: brand left, glass pill center links, Login + solid Get Started right (adapt to Quanta nav)
- CTA intentionally **small** relative to headline
- Bottom cards feel like **HUD panels**, not marketing feature cards

### Quanta copy mapping (illustrative)

| Slot | Intent | Example direction |
|------|--------|-------------------|
| Headline | Trust / verify AI work | “Verify to Trust AI” (or Quanta equivalent) |
| Subtitle | Product era framing | Verifiable compute / agentic workforce ready |
| CTA | Understated demo | Schedule Demo |
| HUD cards | Infrastructure / delivery surfaces | Quanta-mapped partner or deployment surfaces (not EQTY labels) |

---

## 4. Hero load timeline (pre-scroll)

This must **not** be a simple fade-in of everything at once.

| Time | Behavior |
|------|----------|
| **0–1s** | Black screen. Very subtle green atmospheric glow appears. |
| **1–2s** | Tiny particles begin appearing. |
| **2–3s** | Central chip materializes via opacity + blur + scale + glow (almost invisible → sharp). |
| **3–4s** | Thin circuit lines extend outward from the chip. |
| **4–5s** | Small nodes activate one after another. |
| **5s+** | Entire environment continuously breathes — very slow. |

Typography and CTA enter with **Reveal** (see §10), timed after chip presence is established — not before the chip.

---

## 5. Chip animation

**Do not** rotate the chip continuously.

### Idle

```text
scale: 1 → 1.02 → 1
glow:  subtle → stronger → subtle
```

Very slow (multi-second cycle).

### Internal activity

Small squares / LEDs inside the chip activate randomly:

```text
■ □ ■ □
□ ■ ■ □
■ ■ □ ■
□ ■ □ ■
```

Impression: computation is happening inside.

### Occasional pulse

Every few seconds:

```text
chip → bright pulse → network lines → nodes
```

Energy appears to travel through the infrastructure.

---

## 6. Network animation

The network is never static.

```text
         ●
         │
● ───────┤
         │
         CHIP ─────── ●
         │
● ───────┤
         │
         ●
```

### Flow sequence (Flow primitive)

```text
Node activates
       ↓
line illuminates
       ↓
particle travels
       ↓
chip receives signal
       ↓
chip pulses
       ↓
another node activates
```

Sparse particles on paths — not a particle storm.

---

## 7. Background curves

Large green curves are **not** decorative strokes. They should feel like:

- Electromagnetic fields
- Data streams
- Gravitational curves
- Computational layers

Multiple overlapping SVG layers.

### Motion (Atmospheric)

Almost imperceptible changes to **position, opacity, glow** over **4–8 seconds**.

**Never** move them quickly.

---

## 8. Typography animation

Cinematic text reveal — not instant appearance.

Use:

- Opacity `0 → 1`
- Vertical movement ~`+16px → 0` to `+24px → 0`
- Slight blur → sharp

Avoid: bouncing, typing effects, spinning letters, exaggerated scale.

Reference typography character: large, thin, precise.

---

## 9. CTA animation

Understated glass / soft-solid pill with small leading green arrow icon.

### Hover (Micro)

```text
green glow → slightly brighter → arrow moves 3–5px
```

Do not make the button huge or neon-filled.

---

## 10. Trusted infrastructure (HUD) cards

Bottom of hero:

```text
            Preorders / Ship date (or Quanta status line)

      ┌────────┐ ┌────────┐ ┌────────┐
      │   ↗    │ │   ↗    │ │   ↗    │
      │ Card A │ │ Card B │ │ Card C │
      └────────┘ └────────┘ └────────┘
```

### Enter sequence

```text
card enters → glass settles → icon lights → subtle hover glow
```

No aggressive movement.

---

## 11. Scroll spine (core of the design)

Do **not** feel like separate pages stacked:

```text
Section 1 ↓ Section 2 ↓ Section 3
```

Instead, every section **transforms into** the next.

```text
        SCROLL
          ↓
┌──────────────────────┐
│ Hero                 │
│ chip → network       │
└──────────────────────┘
          ↓
┌──────────────────────┐
│ Problem              │
│ visual transforms    │
└──────────────────────┐
          ↓
┌──────────────────────┐
│ Verifiable           │
│ sticky story         │
└──────────────────────┘
          ↓
     deeper tech / CTA
```

### Hero → Problem transition

As the user scrolls:

1. Chip moves upward  
2. Network fades  
3. Green curves stretch  
4. Black gradually becomes white  

Then:

```text
WHITE
        The Problem

New AI workflows
equal New Threats
```

One continuous cinematic scene — no hard cut.

### Experience flowchart

```text
OPEN → BLACK VOID → AI CHIP → Verify headline → green energy flows
  → network activates → SCROLL → black fades → WHITE
  → New AI workflows / New Threats → threat visual + list
  → floating particles → SCROLL → Evolving trust for AI
  → VERIFIABLE → ● Training → ● Privacy → ● Safeguards
  → WHITE → GREEN → deeper technology → final CTA
```

---

## 12. Problem section

### Mood shift

| Element | Treatment |
|---------|-----------|
| Background | Pure / soft white |
| Typography | Dark green / charcoal-green |
| Accent | Mint green on “New Threats” |

Accent line should gradually brighten into mint as the section activates (scroll-linked preferred).

### Threat visual (left)

Two giant glowing forms facing each other — **two forces colliding**.

```text
        ◯          ◯

             ●

   ╭──────────────╮
   │  New Threats │
   ╰──────────────╯
```

### Floating circles

Inside / around the visual:

- Float, drift, slight scale
- Occasional glow
- Slow — particles suspended in a fluid  
- No bounce, no jitter

### Threat list (right)

Do **not** show the full list immediately.

Stagger column 1, then column 2:

```text
Backdoors → Extraction → Jailbreaks → DoS → FinOps
Hallucination → Bias → Toxicity → Social Engineering → Misalignment
```

(Copy may be Quanta-adapted; behavior is mandatory.)

---

## 13. Verifiable section

Editorial, high whitespace.

### Intro state

```text
           Solutions

       Evolving trust for
             AI with
```

Sparse green nodes in the white field (Atmospheric drift).

Then **VERIFIABLE** resolves as the sticky story engages.

### Sticky storytelling stages

As the user scrolls, a green indicator **physically travels** between states:

| Stage | Title | Proof line |
|-------|-------|------------|
| 1 | AI Training & Inference | Proof AI deployments are untampered |
| 2 | AI Privacy | Proof AI models and data are confidential |
| 3 | AI Safeguards | Proof AI guardrails are implemented |

Inactive items are muted; active item is bright; indicator is larger / glowing.

### White → green transition (scroll-interpolated)

```text
WHITE
  ↓
white + green particles
  ↓
soft mint
  ↓
deep emerald
```

Not an abrupt `background-color` jump.

Eventually:

```text
┌───────────────────────────────┐
│       VERIFIABLE              │
│  ● Training                   │
│  ● Privacy                    │
│  ● Safeguards                 │
└───────────────────────────────┘
```

---

## 14. The green indicator (recurring language)

The green dot = **verification / trust / active computation**.

Reuse across the site:

```text
●
●────────────
        ●
        │
```

Same visual language should connect Hero network nodes, Problem floats, and Verifiable stages.

---

## 15. Motion language — only five primitives

| # | Primitive | Used for | Typical params |
|---|-----------|----------|----------------|
| ① | **Atmospheric** | Gradients, background curves, particles, glow | 4–8s, tiny deltas |
| ② | **Reveal** | Headings, paragraphs, cards | blur → sharp, opacity 0 → 1, Y +20 → 0 |
| ③ | **Flow** | Network, lines, particles, verification paths | sequential illuminate + travel |
| ④ | **Transform** | Scroll section morphs | scale, position, opacity, blur, background |
| ⑤ | **Micro** | Buttons, cards, nav, icons | 150–250ms, 3–5px travel |

Do not invent a sixth random motion style. Prefer scroll-position driving **Transform** over timeline-only section entrances where sections meet.

---

## 16. Hard bans

| Do not use | Why |
|------------|-----|
| Constant 3D rotation | Looks cheap |
| Particles everywhere | Dilutes atmosphere |
| Neon green text everywhere | Breaks restraint |
| Huge glowing buttons | CTA must stay understated |
| Fast parallax | Breaks cinematic calm |
| Random Framer Motion animations | Motion system must stay limited |
| Scroll-jacking | Natural scroll only; progress drives visuals |
| All-dark sections | Rhythm requires dark → white → emerald → dark |

---

## 17. Implementation mapping (guidance — no code in this phase)

Grounded in the current Quanta stack:

| Concern | Approach |
|---------|----------|
| Stack | Keep **React 18 + Vite + Tailwind + Framer Motion** (`package.json`) |
| Scroll progress | Framer `useScroll` / `useTransform` on section refs |
| Smooth scroll | Optional Lenis later — **not required for v1** |
| Sticky story | CSS `position: sticky` + scroll progress → indicator Y + active index |
| Chip / network / curves | **SVG + CSS / Framer** — not Three.js |
| Particles | Sparse SVG/div dots; avoid flooding with current `FloatingParticles` defaults |
| Tokens | Add void / emerald / mint / glass tokens in `tailwind.config.js` + `src/index.css` |
| Home composer | Later: replace order in `src/pages/Home.jsx` with cinematic spine |
| Retire for spine | Purple hero gradients, left/right Hero layout, typewriter / mega-CTA patterns, aggressive particle counts |

### Suggested component boundaries (future build)

| Piece | Likely home |
|-------|-------------|
| Cinematic Hero (chip, network, curves, HUD) | New/replaced `Hero` or `CinematicHero` |
| Problem | New `ProblemSection` |
| Verifiable sticky | New `VerifiableSection` |
| Shared green indicator | Small shared visual primitive |
| Motion presets | Shared variants for the five primitives only |

---

## 18. Acceptance checklist

A build passes only if **all** are true:

- [ ] First viewport reads as an infrastructure void with the **chip dominant**
- [ ] Green appears only as **controlled energy** (glow, borders, active, network)
- [ ] Pre-scroll hero timeline (0–5s+) completes without user interaction
- [ ] Chip idles with breathe + LEDs; **no** continuous rotation
- [ ] Network uses Flow (node → line → particle → chip)
- [ ] Curves move almost imperceptibly (4–8s)
- [ ] Hero → Problem feels **continuous** (no hard cut)
- [ ] Problem list **staggers**; dual forms + fluid float circles
- [ ] Verifiable sticky indicator travels through **three** stages
- [ ] White → emerald is **scroll-interpolated**
- [ ] Only the **five** motion primitives appear
- [ ] Page rhythm includes **dark → white → emerald → (dark)**
- [ ] Feels expensive and restrained — not crypto, cyberpunk, or template

---

## 19. Post-spec build phase (follow-ups)

When implementation is requested:

1. **Token migration** — Introduce void/emerald/mint/glass; demote purple/indigo on the landing spine.
2. **Home spine rewrite** — `Home.jsx`: Hero → Problem → Verifiable → deeper tech/CTA; remap or retire `Solutions`, `Advantages`, `IndustrySolutions`, `SuccessStories` as needed.
3. **Hero replacement** — Centered chip scene; remove left/right mega-hero and particle flood.
4. **Scroll infrastructure** — Section progress + sticky Verifiable with traveling indicator.
5. **Nav / glass HUD** — Align Header with glass pill + restrained CTAs for the cinematic aesthetic.
6. **Content pass** — Quanta-specific copy for threats, HUD labels, and Verifiable proof lines.
7. **Do not** add GSAP/Three.js unless a later decision explicitly requires them.

---

## 20. Key principle (repeat)

**Screenshots are states. Build the sequence.**

Preserve hierarchy, dark-to-light transitions, restrained emerald glow, central computational object, flowing data lines, atmospheric particles, glass UI, staggered reveals, and scroll-driven storytelling. Prefer cinematic restraint over excessive effects.
