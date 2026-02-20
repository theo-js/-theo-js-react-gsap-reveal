import { ExampleBlock } from "@/components/ExampleBlock";
import { RevealedElement } from "@/components/RevealedElement";
import { ArrowDownIcon } from "lucide-react";
import { CustomReveal, Reveal } from "@/components/Reveal";
import { CustomRevealDefaultsProvider } from "@/components/Reveal/custom";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="px-6 py-12 max-w-7xl mx-auto">
        <div className="h-screen">
          <h1 className="text-xl">Playground</h1>
          <h2 className="text-2xl flex items-center gap-2 mt-2">
            <span>Scroll down to see the reveal effect</span>
            <ArrowDownIcon />
          </h2>
        </div>

        <div className="flex flex-col gap-30 items-start">
          <ExampleBlock title="Example 1: Basic Reveal">
            <Reveal>
              <RevealedElement />
            </Reveal>
          </ExampleBlock>

          <ExampleBlock title="Example 2: Staggered Reveal">
            <Reveal
              className="flex! gap-8"
              options={{ stagger: 0.5 }}
              as="ul"
              childAs="li"
            >
              <RevealedElement>1st child</RevealedElement>
              <RevealedElement>2nd child</RevealedElement>
              <RevealedElement>3rd child</RevealedElement>
            </Reveal>
          </ExampleBlock>

          <ExampleBlock title="Example 3: repeating Reveal">
            <Reveal repeat>
              <RevealedElement>Repeat me</RevealedElement>
            </Reveal>
          </ExampleBlock>

          <ExampleBlock title="Example 4: predefined animation with custom options">
            <Reveal
              animation="slideLeft"
              options={{ duration: 2, ease: "elastic.out(1, 0.3)" }}
            >
              <RevealedElement>Default slide left animation</RevealedElement>
            </Reveal>
          </ExampleBlock>

          <ExampleBlock title="Example 5: custom animation defined via createRevealSystem factory">
            <CustomReveal
              animation="rotateIn"
              options={{
                alignItems: "center",
                ease: "elastic.out(1, 0.3)",
                duration: 1.5,
              }}
              repeat
            >
              <RevealedElement>Custom animation</RevealedElement>
            </CustomReveal>
          </ExampleBlock>

          {/* Next features */}
          <ExampleBlock title="Example 8: Custom Defaults">
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
          </ExampleBlock>

          {/* <ExampleBlock title="Example 7: Inline custom Animation">
          </ExampleBlock> */}
        </div>
      </main>
    </div>
  );
}
