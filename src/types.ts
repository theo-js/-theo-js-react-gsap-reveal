import * as React from "react";

export type PolymorphicProps<C extends React.ElementType, Props> = Props &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props> & {
    as?: C;
  };
