import type { FC } from "react";
import { ExampleBlock } from "../ExampleBlock";
import { Reveal } from "../Reveal/default";
import { RevealedElement } from "../RevealedElement";
import { CodeSnippet } from "../CodeSnippet";

export const Example2: FC = () => {
  return (
    <ExampleBlock title="Example 2: Staggered Reveal">
      <Reveal
        className="flex! gap-8 flex-wrap justify-center"
        options={{ stagger: 0.5 }}
        as="ul"
        childAs="li"
      >
        <RevealedElement>1st child</RevealedElement>
        <RevealedElement>2nd child</RevealedElement>
        <RevealedElement>3rd child</RevealedElement>
      </Reveal>

      <CodeSnippet
        code={`<Reveal className="flex! gap-8" as="ul" childAs="li">
  <RevealedElement>1st child</RevealedElement>
  <RevealedElement>2nd child</RevealedElement>
  <RevealedElement>3rd child</RevealedElement>
</Reveal>`}
      />
    </ExampleBlock>
  );
};
