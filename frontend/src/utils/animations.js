// Apple-inspired animation configurations
export const appleEasing = {
  // Apple's signature smooth easing - slightly overshoots then settles
  smooth: [0.25, 0.46, 0.45, 0.94],
  // More pronounced bounce for interactive elements
  bounce: [0.68, -0.55, 0.265, 1.55],
  // Subtle spring for micro-interactions
  spring: [0.34, 1.56, 0.64, 1],
  // Linear for predictable animations
  linear: [0, 0, 1, 1],
}

// Standard timing values (in seconds)
export const timing = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
}

// Stagger delays for sequential animations
export const stagger = {
  tight: 0.05,
  normal: 0.1,
  loose: 0.15,
  looser: 0.2,
}

// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: timing.normal, ease: appleEasing.smooth }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: timing.normal, ease: appleEasing.smooth }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: timing.normal, ease: appleEasing.smooth }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: timing.normal, ease: appleEasing.smooth }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: timing.normal, ease: appleEasing.smooth }
}

export const slideInUp = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: timing.slow, ease: appleEasing.smooth }
}

// Staggered container variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.1
    }
  }
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: timing.normal, ease: appleEasing.smooth }
  }
}

// Hover animations
export const hoverLift = {
  scale: 1.02,
  y: -2,
  transition: { duration: timing.fast, ease: appleEasing.spring }
}

export const hoverGlow = {
  boxShadow: "0 10px 30px rgba(127, 219, 255, 0.2)",
  transition: { duration: timing.fast, ease: appleEasing.smooth }
}

// Button press animation
export const pressAnimation = {
  scale: 0.98,
  transition: { duration: timing.fast, ease: appleEasing.spring }
}

// Additional micro-interaction variants
export const tapAnimation = {
  scale: 0.95,
  transition: { duration: timing.fast, ease: appleEasing.spring }
}

export const focusAnimation = {
  scale: 1.02,
  boxShadow: "0 0 0 3px rgba(127, 219, 255, 0.3)",
  transition: { duration: timing.fast, ease: appleEasing.smooth }
}

// Accessibility: Check for reduced motion preference
export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Utility function to get motion-safe animations
export const getMotionSafeVariant = (variant, reducedVariant = {}) => {
  return prefersReducedMotion ? { ...variant, ...reducedVariant } : variant
}

// Parallax scroll utility
export const parallaxVariants = (speed = 0.5) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -speed * 100, 0],
    transition: {
      duration: 2,
      ease: appleEasing.smooth,
      repeat: Infinity
    }
  }
})
