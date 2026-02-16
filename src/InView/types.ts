import type { PolymorphicProps } from '../types';

type InViewOwnProps = React.PropsWithChildren<{
  onEnter: (elements: HTMLElement[]) => void;
  onLeave?: (elements: HTMLElement[]) => void;
  targetChildren?: boolean;
  repeat?: boolean;
  /**
   * The HTML tag to use for the wrapper element. Defaults to 'span'.
   * This allows you to choose a semantic tag that fits your content, such as 'div', 'section', etc.
   */
  as?: React.ElementType;
}>;

export type InViewProps<C extends React.ElementType> = PolymorphicProps<C, InViewOwnProps>;
