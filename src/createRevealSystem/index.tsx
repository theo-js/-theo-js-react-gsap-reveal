import React from "react";
import {
  type AnimationsMap,
  DEFAULT_ANIMATIONS,
  type DefaultAnimationNames,
} from "./animations";
import { Reveal as WrappedReveal } from "./Reveal";
import {
  RevealCustomDefaultsProvider as WrappedRevealDefaultsProvider,
  type RevealCustomDefaultsProviderProps,
} from "./RevealCustomDefaultsProvider.tsx";
import type { RevealProps } from "./Reveal/types";

export function createRevealSystem<
  CustomAnimationNames extends string = DefaultAnimationNames,
>(options?: { customAnimations?: AnimationsMap<CustomAnimationNames> }) {
  type ExtendedAnimationNames = DefaultAnimationNames | CustomAnimationNames;
  const extendedAnimations = {
    ...DEFAULT_ANIMATIONS,
    ...(options?.customAnimations || {}),
  } as AnimationsMap<ExtendedAnimationNames>;

  const Reveal = <
    C extends React.ElementType,
    T extends React.ElementType = "span",
  >(
    props: RevealProps<ExtendedAnimationNames, C, T>,
  ) => {
    return (
      <WrappedReveal<ExtendedAnimationNames, C, T>
        {...props}
        animations={extendedAnimations}
      />
    );
  };

  const RevealDefaultsProvider = (
    props: RevealCustomDefaultsProviderProps<ExtendedAnimationNames>,
  ) => <WrappedRevealDefaultsProvider {...props} />;

  return {
    Reveal,
    RevealDefaultsProvider,
  };
}
