import React, { createContext, type ReactNode, useContext } from "react";

type RevealCustomDefaults<CustomAnimationNames extends string> = {
  animation?: CustomAnimationNames;
  repeat?: boolean;
  options?: GSAPTweenVars;
};

const RevealCustomDefaultsContext = createContext<RevealCustomDefaults<any>>(
  {},
);

export type RevealCustomDefaultsProviderProps<
  CustomAnimationNames extends string,
> = RevealCustomDefaults<CustomAnimationNames> & { children: ReactNode };

export const RevealCustomDefaultsProvider = <
  CustomAnimationNames extends string,
>({
  children,
  ...value
}: RevealCustomDefaultsProviderProps<CustomAnimationNames>) => (
  <RevealCustomDefaultsContext.Provider {...{ value }}>
    {children}
  </RevealCustomDefaultsContext.Provider>
);

export const useRevealCustomDefaults = () => {
  const context = useContext(RevealCustomDefaultsContext);
  return context ?? {};
};
