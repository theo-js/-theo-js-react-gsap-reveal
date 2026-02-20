import type { FC, PropsWithChildren } from "react";

export const RevealedElement: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-50 h-50 p-8 bg-gradient-to-t from-cyan-600/30 via-cyan-600 to-purple-600 text-center rounded-full relative flex items-center justify-center text-white text-lg font-bold">
    <div className="inset-0 absolute bg-gradient-to-t from-cyan-600/30 via-cyan-600 to-purple-600 rounded-full blur-xl" />
    <div className="inset-0 absolute bg-gradient-to-t from-cyan-600/30 via-cyan-600 to-purple-600 rounded-full blur-md" />

    <div className="relative">{children}</div>
  </div>
);
