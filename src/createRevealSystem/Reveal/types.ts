import * as React from "react";
import type { PolymorphicProps } from "../../types";

type RevealOwnProps<
  T extends React.ElementType,
  CustomAnimationNames extends string,
> = React.PropsWithChildren<{
  /**
   * Name of the animation to apply (default: 'fadeIn').
   */
  animation?: CustomAnimationNames;
  /**
   * Repeat the animation every time the element enters the viewport (default: true).
   * Note: if you intend to use it with a custom animation defined via `createRevealSystem`,
   * make sure to implement the `onLeave` property.
   */
  repeat?: boolean;
  /**
   * Optional GSAP animation options to customize the animation behavior
   * (e.g., duration, delay, easing) per instance.
   */
  options?: GSAPTweenVars;
  /**
   * Optional prop to specify the container element type (default: 'span')
   * This should be used for semantic purposes or when the default 'span' causes layout issues.
   * The child elements will still be wrapped in the specified `childAs` element.
   */
  as?: keyof React.JSX.IntrinsicElements;
  /**
   * Optional prop to specify the child element type (default: 'span')
   * This should be used for semantic purposes or when the default 'span' causes layout issues.
   */
  childAs?: T;
  /**
   * Optional prop to specify additional props for the child element
   */
  childProps?:
    | React.ComponentProps<T>
    | ((index: number) => React.ComponentProps<T> | undefined);
}>;

export type RevealProps<
  CustomAnimationNames extends string,
  C extends React.ElementType,
  T extends React.ElementType,
> = PolymorphicProps<C, RevealOwnProps<T, CustomAnimationNames>>;
