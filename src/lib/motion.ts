import { Variants } from 'framer-motion';

export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'up',
  delay = 0,
  duration = 0.5
): Variants => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 30, x: 0 };
      case 'down':
        return { y: -30, x: 0 };
      case 'left':
        return { x: 30, y: 0 };
      case 'right':
        return { x: -30, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const scaleUp = (delay = 0, duration = 0.4): Variants => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};

export const hoverCardVariants: Variants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.015,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

/* Phase 1 Motion Foundations & Spring Tokens */
export const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
};

export const hoverSpring = {
  type: 'spring',
  stiffness: 400,
  damping: 17,
};

export const textRevealVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.08,
    },
  }),
};

export const tiltCardVariants: Variants = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const staggerFast = (delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren,
    },
  },
});

