"use client";

import { type FC, useMemo } from "react";
import { setObserverOptions } from "./observer";

/**
 * A component to override default options for the Intersection Observer singleton used by all Reveal components.
 * Must be rendered at the root of the app (e.g., in _app.tsx or layout.tsx) before any Reveal components are mounted.
 */
export const RevealObserverSetup: FC<Partial<IntersectionObserverInit>> = (
  options,
) => {
  useMemo(() => {
    setObserverOptions(options);
  }, []);

  return null;
};
