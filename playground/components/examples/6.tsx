import type { FC } from "react";
import { ExampleBlock } from "../ExampleBlock";
import { RevealedElement } from "../RevealedElement";
import { CustomReveal, CustomRevealDefaultsProvider } from "../Reveal/custom";
import { CodeSnippet } from "../CodeSnippet";

export const Example6: FC = () => {
  return (
    <ExampleBlock title="Example 6: Custom Defaults">
      <CustomRevealDefaultsProvider
        animation="rotateIn"
        options={{ duration: 2 }}
      >
        <CustomReveal>
          <RevealedElement>Custom Defaults {"(2s)"}</RevealedElement>
        </CustomReveal>

        <CustomReveal options={{ duration: 6 }}>
          <RevealedElement>
            Custom Defaults with instance override {"(6s)"}
          </RevealedElement>
        </CustomReveal>
      </CustomRevealDefaultsProvider>

      <CodeSnippet
        code={`import { createRevealSystem } from "reveal-system";

const { Reveal, RevealDefaultsProvider } = createRevealSystem({
  customAnimations: {
    rotateIn: {
      from: { opacity: 0, rotate: -360 },
      to: { opacity: 1, rotate: 0 },
    },
  },
});

<RevealDefaultsProvider
  animation="rotateIn"
  options={{ duration: 2 }}
>
  <Reveal>
    <span>Custom Defaults (2s)</span>
  </Reveal>

  <Reveal options={{ duration: 6 }}>
    <span>Custom Defaults with instance override (6s)</span>
  </Reveal>
</RevealDefaultsProvider>`}
      />
    </ExampleBlock>
  );
};
