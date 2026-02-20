import { ArrowDownIcon, GithubIcon } from "lucide-react";
import * as examples from "@/components/examples";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans dark:bg-black">
      <header className="fixed top-0 z-1 px-6 py-3 bg-background/50 backdrop-blur-xl flex justify-between items-start flex-wrap gap-x-16 gap-y-2 w-full">
        <h1 className="text-xl text-foreground/70">
          @theo-js/react-gsap-reveal: interactive example
        </h1>

        <Link
          className="hover:underline"
          href={`https://github.com/theo-js/${process.env.NEXT_PUBLIC_REPO_NAME}`}
        >
          <GithubIcon className="inline h-[1em] w-[1em] mr-2" /> View on GitHub
        </Link>
      </header>

      <div className="px-6 py-12 max-w-7xl mx-auto">
        <aside className="h-screen">
          <h2 className="mt-20 md:mt-6 text-2xl flex items-center gap-2 mt-2">
            <span>
              <strong>Scroll down</strong> to see the reveal effect
            </span>
            <ArrowDownIcon />
          </h2>
        </aside>

        <main className="flex flex-col gap-30 items-start">
          {Object.entries(examples).map(([key, Example]) => (
            <Example key={key} />
          ))}
        </main>
      </div>
    </div>
  );
}
