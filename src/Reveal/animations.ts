import { gsap } from 'gsap';
import type { CSSProperties } from 'react';

export type AnimationName = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn';

type Animation = {
  fromStyles: CSSProperties;
  onEnter: (params: { elements: HTMLElement[]; options?: GSAPTweenVars }) => void;
  onLeave?: (params: { elements: HTMLElement[] }) => void;
};

const DEFAULT_OPTIONS: GSAPTweenVars = {
  duration: 1,
  ease: 'elastic.out(0.75, 0.3)',
  stagger: 0.1,
};

export const animations: Record<AnimationName, Animation> = {
  fadeUp: {
    fromStyles: { opacity: 0, transform: 'translateY(20px)' },
    onEnter: ({ elements, options = {} }) => {
      gsap.to(elements, {
        ...DEFAULT_OPTIONS,
        opacity: 1,
        y: 0,
        ...options,
      });
    },
    onLeave: ({ elements }) => {
      gsap.to(elements, {
        ...DEFAULT_OPTIONS,
        opacity: 0,
        y: 20,
      });
    },
  },

  fadeIn: {
    fromStyles: { opacity: 0 },
    onEnter: ({ elements, options = {} }) => {
      gsap.to(elements, {
        ...DEFAULT_OPTIONS,
        opacity: 1,
        ...options,
      });
    },
    onLeave: ({ elements }) => {
      gsap.to(elements, {
        ...DEFAULT_OPTIONS,
        opacity: 0,
      });
    },
  },

  slideLeft: {
    fromStyles: { opacity: 0, transform: 'translateX(-20px)' },
    onEnter: ({ elements, options = {} }) => {
      gsap.to(elements, {
        ...DEFAULT_OPTIONS,
        opacity: 1,
        x: 0,
        ...options,
      });
    },
    onLeave: ({ elements }) => {
      gsap.to(elements, {
        ...DEFAULT_OPTIONS,
        opacity: 0,
        x: -20,
      });
    },
  },

  slideRight: {
    fromStyles: { opacity: 0, transform: 'translateX(20px)' },
    onEnter: ({ elements, options = {} }) => {
      gsap.to(elements, {
        ...DEFAULT_OPTIONS,
        opacity: 1,
        x: 0,
        ...options,
      });
    },
    onLeave: ({ elements }) => {
      gsap.to(elements, {
        ...DEFAULT_OPTIONS,
        opacity: 0,
        x: 20,
      });
    },
  },

  scaleIn: {
    fromStyles: { opacity: 0, transform: 'scale(0.9)' },
    onEnter: ({ elements, options = {} }) => {
      gsap.to(elements, {
        ...DEFAULT_OPTIONS,
        opacity: 1,
        scale: 1,
        ...options,
      });
    },
    onLeave: ({ elements }) => {
      gsap.to(elements, {
        ...DEFAULT_OPTIONS,
        opacity: 0,
        scale: 0.9,
      });
    },
  },
};
