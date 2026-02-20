import type { FC, PropsWithChildren } from "react";

type ExampleBlockProps = {
  title: string;
};

export const ExampleBlock: FC<PropsWithChildren<ExampleBlockProps>> = ({
  title,
  children,
}) => (
  <div className="flex flex-col items-start gap-8">
    <h3 className="text-lg font-semibold">{title}</h3>
    {children}
  </div>
);
