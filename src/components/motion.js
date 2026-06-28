export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export function motionProps(prefersReducedMotion, variant = fadeUp) {
  if (prefersReducedMotion) {
    return {};
  }

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.22 },
    variants: variant,
  };
}
