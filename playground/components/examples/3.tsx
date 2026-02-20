import type { FC } from "react";
import { ExampleBlock } from "../ExampleBlock";
import { Reveal } from "../reveal";
import { RevealedElement } from "../RevealedElement";
import { CodeSnippet } from "../CodeSnippet";

export const Example3: FC = () => {
  return (
    <ExampleBlock title="Example 3: repeating Reveal">
      <Reveal repeat>
        <RevealedElement>Repeat me</RevealedElement>
      </Reveal>

      <CodeSnippet
        code={`<Reveal repeat>
  <RevealedElement>Repeat me</RevealedElement>
</Reveal>`}
      />
    </ExampleBlock>
  );
};
