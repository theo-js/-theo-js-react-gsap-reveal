import type { PolymorphicProps } from '../types';
import type { AnimationName } from './animations';

type RevealOwnProps<T extends React.ElementType> = React.PropsWithChildren<{
  /**
   * Name of the animation to apply (default: 'fadeUp').
   */
  animation?: AnimationName;
  /** Repeat the animation every time the element enters the viewport (default: true) */
  repeat?: boolean;
  /**
   * Optional GSAP animation options to customize the animation behavior
   * (e.g., duration, delay, easing) per instance
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
  childProps?: React.ComponentProps<T> | ((index: number) => React.ComponentProps<T> | undefined);
}>;

export type RevealProps<
  C extends React.ElementType,
  T extends React.ElementType,
> = PolymorphicProps<C, RevealOwnProps<T>>;
