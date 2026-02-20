import type { FC } from "react";
import { ExampleBlock } from "../ExampleBlock";
import { Reveal } from "../reveal";
import { RevealedElement } from "../RevealedElement";
import { CodeSnippet } from "../CodeSnippet";

export const Example1: FC = () => {
  return (
    <ExampleBlock title="Example 1: Basic Reveal">
      <Reveal>
        <RevealedElement />
      </Reveal>

      <CodeSnippet
        code={`<Reveal>
  <RevealedElement />
</Reveal>`}
      />
    </ExampleBlock>
  );
};
