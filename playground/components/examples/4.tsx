import type { FC } from "react";
import { ExampleBlock } from "../ExampleBlock";
import { Reveal } from "../Reveal/default";
import { RevealedElement } from "../RevealedElement";
import { CodeSnippet } from "../CodeSnippet";

export const Example4: FC = () => {
  return (
    <ExampleBlock title="Example 4: predefined animation with custom options">
      <Reveal
        animation="slideLeft"
        options={{ duration: 2, ease: "elastic.out(1, 0.3)" }}
      >
        <RevealedElement>Default slide left animation</RevealedElement>
      </Reveal>

      <CodeSnippet
        code={`<Reveal
  animation="slideLeft"
  options={{ duration: 2, ease: "elastic.out(1, 0.3)" }}
>
  <RevealedElement>Default slide left animation</RevealedElement>
</Reveal>`}
      />
    </ExampleBlock>
  );
};
