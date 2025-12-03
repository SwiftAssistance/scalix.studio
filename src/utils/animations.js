// Animation variants and utilities for Framer Motion

export const easings = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  snappy: [0.68, -0.55, 0.265, 1.55],
  linear: [0, 0, 1, 1],
};

// Fade in from below
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  }
};

// Fade in
export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Scale in
export const scaleIn = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth
    }
  }
};

// Stagger children
export const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Stagger children (fast)
export const staggerContainerFast = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// Slide in from left
export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  }
};

// Slide in from right
export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  }
};

// Page transition
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.smooth
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

// Hover scale (for buttons, cards)
export const hoverScale = {
  rest: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: easings.smooth
    }
  },
  tap: {
    scale: 0.95
  }
};

// Hover lift (for cards)
export const hoverLift = {
  rest: {
    y: 0,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 25px rgba(0,0,0,0.2)',
    transition: {
      duration: 0.3,
      ease: easings.smooth
    }
  }
};

// Text reveal (split text animation)
export const textReveal = {
  hidden: {
    y: '100%',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  }
};

// Blob morph animation
export const blobMorph = {
  animate: {
    scale: [1, 1.1, 0.9, 1],
    x: [0, 30, -20, 0],
    y: [0, -50, 20, 0],
    transition: {
      duration: 7,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop'
    }
  }
};

// Counter animation utility
export const animateCounter = (from, to, duration = 2000, onUpdate) => {
  const startTime = Date.now();
  const animate = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(from + (to - from) * easeProgress);

    onUpdate(currentValue);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get animation props based on reduced motion preference
export const getAnimationProps = (variants) => {
  if (prefersReducedMotion()) {
    return {
      initial: variants.visible,
      animate: variants.visible,
      exit: variants.visible
    };
  }
  return variants;
};
