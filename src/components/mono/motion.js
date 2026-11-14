/** Shared motion presets for the mono design language. */
export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.7, delay, ease },
});
