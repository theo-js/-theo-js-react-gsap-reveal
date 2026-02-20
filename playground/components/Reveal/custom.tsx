"use client";

import { createRevealSystem } from "@theo-js/react-gsap-reveal";
import gsap from "gsap";

export const {
  Reveal: CustomReveal,
  RevealDefaultsProvider: CustomRevealDefaultsProvider,
} = createRevealSystem({
  customAnimations: {
    rotateIn: {
      fromStyles: { opacity: 0, transform: "rotate(-90deg) scale(0.8)" },
      onEnter: ({ elements, options }) => {
        gsap.to(elements, { opacity: 1, scale: 1, rotation: 0, ...options });
      },
      onLeave: ({ elements, options }) => {
        gsap.to(elements, {
          opacity: 0,
          scale: 0.8,
          rotation: -90,
          ...options,
        });
      },
    },
  },
});
