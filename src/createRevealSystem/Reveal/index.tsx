"use client";

import * as React from "react";
import { InView } from "../../InView";
import { useRevealCustomDefaults } from "../RevealCustomDefaultsProvider.tsx";
import { type AnimationsMap, DEFAULT_ANIMATION_NAME } from "../animations";
import type { RevealProps } from "./types";

export const Reveal = <
  CustomAnimationNames extends string,
  C extends React.ElementType,
  T extends React.ElementType = "span",
>({
  children,
  animations,
  animation: animationName,
  repeat,
  options,
  as,
  childAs,
  childProps,
  ...rest
}: RevealProps<CustomAnimationNames, C, T> & {
  /**
   * Map of animation definitions,
   * including both default and custom animations
   */
  animations: AnimationsMap<CustomAnimationNames>;
}) => {
  const customDefaults = useRevealCustomDefaults();

  const resolvedAnimationName = (animationName ||
    customDefaults.animation ||
    DEFAULT_ANIMATION_NAME) as CustomAnimationNames;
  const animation = animations[resolvedAnimationName];

  const extendedOptions = {
    ...(customDefaults.options || {}),
    ...options,
  };

  const resolvedRepeat = repeat ?? customDefaults.repeat ?? false;

  // If animateChildren is true, we need to set the initial styles on each child element
  const wrappedChildren = React.useMemo(
    () =>
      React.Children.map(children, (child, index) => {
        const ChildComponent = childAs || "span";
        const resolvedChildProps =
          typeof childProps === "function"
            ? (
                childProps as (
                  index: number,
                ) => React.ComponentProps<T> | undefined
              )(index)
            : childProps;
        return (
          <ChildComponent
            {...resolvedChildProps}
            style={{
              display: "grid",
              ...(resolvedChildProps?.style ?? {}),
              ...animation.fromStyles,
            }}
          >
            {child}
          </ChildComponent>
        );
      }),
    [children, animation.fromStyles, childAs, childProps],
  );

  return (
    <InView
      as={as || "span"}
      targetChildren
      repeat={resolvedRepeat}
      onEnter={(elements) =>
        animation.onEnter({ elements, options: extendedOptions })
      }
      onLeave={(elements) =>
        animation.onLeave?.({ elements, options: extendedOptions })
      }
      {...(rest as React.ComponentPropsWithoutRef<C>)}
    >
      {wrappedChildren}
    </InView>
  );
};
