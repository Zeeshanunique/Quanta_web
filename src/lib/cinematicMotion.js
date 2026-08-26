/**
 * Five motion primitives for the cinematic landing spine.
 * @see docs/CINEMATIC_LANDING_SPEC.md §15
 */

/** ① Atmospheric — gradients, curves, particles, glow (4–8s) */
export const atmospheric = {
  breathe: {
    scale: [1, 1.02, 1],
    opacity: [0.55, 0.9, 0.55],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
  curveDrift: {
    opacity: [0.35, 0.65, 0.35],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
  },
  particleFloat: (delay = 0) => ({
    y: [0, -8, 0],
    opacity: [0.3, 0.7, 0.3],
    transition: { duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay },
  }),
};

/** ② Reveal — headings, copy, cards */
export const reveal = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** ③ Flow — network lines, particles, verification paths */
export const flow = {
  lineDraw: (delay = 0) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: { duration: 1.2, delay, ease: 'easeOut' },
  }),
  nodePop: (delay = 0) => ({
    scale: [0, 1],
    opacity: [0, 1],
    transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** ④ Transform — scroll-driven section morphs (use with useTransform) */
export const transformEase = [0.22, 1, 0.36, 1];

/** ⑤ Micro — buttons, cards, nav, icons (150–250ms) */
export const micro = {
  ctaHover: { scale: 1.02, transition: { duration: 0.2 } },
  cardHover: {
    borderColor: 'rgba(0, 232, 160, 0.35)',
    boxShadow: '0 0 24px rgba(0, 232, 160, 0.2)',
    transition: { duration: 0.2 },
  },
  arrowNudge: { x: 4, transition: { duration: 0.2 } },
};

/** Hero load timeline delays (seconds from mount) — keep first paint alive, not a black wait */
export const heroTimeline = {
  atmosphere: 0.05,
  particles: 0.25,
  chip: 0.35,
  circuits: 0.7,
  nodes: 1.0,
  text: 0.55,
  cta: 0.85,
  cards: 1.15,
  breathe: 1.4,
};
