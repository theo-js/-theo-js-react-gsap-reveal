'use client';

import { useEffect, useRef } from 'react';
import { register, unregister } from './observer';
import type { InViewProps } from './types';

export const InView = <C extends React.ElementType = 'span'>({
  children,
  targetChildren,
  onEnter,
  onLeave,
  repeat,
  as,
  ...rest
}: InViewProps<C>) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    register(element, {
      repeat,
      callbacks: {
        onEnter: () => {
          const targets = targetChildren
            ? (Array.from(element.children) as HTMLElement[])
            : [element];
          onEnter(targets);
        },
        onLeave: onLeave
          ? () => {
              const targets = targetChildren
                ? (Array.from(element.children) as HTMLElement[])
                : [element];
              onLeave(targets);
            }
          : undefined,
      },
    });

    return () => unregister(element);
  }, [repeat, onEnter, onLeave, targetChildren]);

  const Tag = (as ?? 'span') as React.ElementType;
  return (
    <Tag {...rest} ref={ref} style={{ ...(rest.style || {}), display: 'block' }}>
      {children}
    </Tag>
  );
};
