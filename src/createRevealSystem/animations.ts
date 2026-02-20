import { gsap } from "gsap";
import * as React from "react";

export type DefaultAnimationNames =
  | "fadeUp"
  | "fadeIn"
  | "slideLeft"
  | "slideRight"
  | "scaleIn";

export const DEFAULT_ANIMATION_NAME: DefaultAnimationNames = "fadeIn";

type AnimationHandler = (params: {
  elements: HTMLElement[];
  options: GSAPTweenVars | undefined;
}) => void;
type Animation = {
  fromStyles?: React.CSSProperties;
  onEnter: AnimationHandler;
  onLeave?: AnimationHandler;
};

const DEFAULT_OPTIONS: GSAPTweenVars = {
  duration: 1.5,
  ease: "elastic.out(0.75, 0.3)",
  stagger: 0.1,
};

export type AnimationsMap<AnimationName extends string> = Record<
  AnimationName,
  Animation
>;

export const DEFAULT_ANIMATIONS: AnimationsMap<DefaultAnimationNames> = {
  fadeUp: {
    fromStyles: { opacity: 0, transform: "translateY(20px)" },
    onEnter: ({ elements, options }) => {
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
    fromStyles: { opacity: 0, transform: "translateX(-20px)" },
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
    fromStyles: { opacity: 0, transform: "translateX(20px)" },
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
    fromStyles: { opacity: 0, transform: "scale(0.9)" },
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
