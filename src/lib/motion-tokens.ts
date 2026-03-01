export const MOTION = {
  // Durations (ms)
  duration: {
    fast: 150,
    normal: 180,
    slow: 260,
  },

  // Easing
  easing: {
    out: [0.34, 0, 0.66, 1] as const,
    spring: [0.34, 1.56, 0.64, 1] as const,
    in: [0.33, 0, 0.67, 0.33] as const,
  },

  // Variants for Framer Motion
  variants: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    expandY: {
      initial: { opacity: 0, scaleY: 0.95 },
      animate: { opacity: 1, scaleY: 1 },
      exit: { opacity: 0, scaleY: 0.95 },
    },
    slideDown: {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
    },
  },
} as const;
