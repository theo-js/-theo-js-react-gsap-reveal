'use client';

import * as React from 'react';
import { InView } from '../InView';
import { animations } from './animations';
import type { RevealProps } from './types';

export const Reveal = <C extends React.ElementType, T extends React.ElementType = 'span'>({
  children,
  animation: animationName = 'fadeUp',
  repeat,
  options,
  as,
  childAs,
  childProps,
  ...rest
}: RevealProps<C, T>) => {
  const animation = animations[animationName];

  // If animateChildren is true, we need to set the initial styles on each child element
  const wrappedChildren = React.useMemo(
    () =>
      React.Children.map(children, (child, index) => {
        const ChildComponent = childAs || 'span';
        const resolvedChildProps =
          typeof childProps === 'function'
            ? (childProps as (index: number) => React.ComponentProps<T> | undefined)(index)
            : childProps;
        return (
          <ChildComponent
            {...resolvedChildProps}
            style={{
              display: 'grid',
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
      as={as || 'span'}
      repeat={repeat}
      targetChildren
      onEnter={(elements) => animation.onEnter({ elements, options })}
      onLeave={(elements) => animation.onLeave?.({ elements })}
      {...(rest as React.ComponentPropsWithoutRef<C>)}
    >
      {wrappedChildren}
    </InView>
  );
};
