import type { FC } from "react";
import { ExampleBlock } from "../ExampleBlock";
import { CustomReveal } from "../reveal";
import { RevealedElement } from "../RevealedElement";
import { CodeSnippet } from "../CodeSnippet";

export const Example5: FC = () => {
  return (
    <ExampleBlock title="Example 5: custom animation defined via createRevealSystem factory">
      <CustomReveal
        animation="rotateIn"
        options={{
          alignItems: "center",
          ease: "elastic.out(1, 0.3)",
          duration: 1.5,
        }}
      >
        <RevealedElement>Custom animation</RevealedElement>
      </CustomReveal>

      <CodeSnippet
        code={`import { createRevealSystem } from "reveal-system";

const { Reveal } = createRevealSystem({
  customAnimations: {
    rotateIn: {
      from: { opacity: 0, rotate: -360 },
      to: { opacity: 1, rotate: 0 },
    },
  },
});

<Reveal
  animation="rotateIn"
  options={{
    alignItems: "center",
    ease: "elastic.out(1, 0.3)",
    duration: 1.5,
  }}
>
  <span>Custom animation</span>
</Reveal>`}
      />
    </ExampleBlock>
  );
};
