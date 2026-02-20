import type { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeSnippetProps {
  code: string;
  language?: string;
}

export const CodeSnippet: FC<CodeSnippetProps> = ({
  code,
  language = "tsx",
}) => {
  return (
    <div className="code-snippets contents">
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        customStyle={{
          width: "100%",
          maxWidth: "100dvw",
          border: "1px solid hsl(213, 39%, 21%)",
          borderRadius: "8px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
