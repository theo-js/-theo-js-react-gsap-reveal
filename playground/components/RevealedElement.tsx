import type { FC, PropsWithChildren } from "react";

export const RevealedElement: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-50 h-50 p-8 bg-gradient-to-t from-cyan-600 via-cyan-600 to-purple-600 dark:from-cyan-600/30 dark:via-cyan-600 dark:to-purple-600 text-center rounded-full relative flex items-center justify-center text-white text-lg font-bold">
    <div className="hidden dark:block inset-0 absolute bg-gradient-to-t dark:from-cyan-600/30 dark:via-cyan-600 dark:to-purple-600 rounded-full blur-xl" />
    <div className="hidden dark:block inset-0 absolute bg-gradient-to-t dark:from-cyan-600/30 dark:via-cyan-600 dark:to-purple-600 rounded-full blur-md" />

    <div className="relative">{children}</div>
  </div>
);
