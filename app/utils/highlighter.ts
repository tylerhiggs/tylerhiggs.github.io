import { createHighlighter, type Highlighter } from "shiki";

let highlighterInstance: Highlighter | null = null;

export async function getHighlighter(): Promise<Highlighter> {
  if (!highlighterInstance) {
    highlighterInstance = await createHighlighter({
      themes: ["catppuccin-mocha"],
      langs: ["vue"],
    });
  }
  return highlighterInstance;
}

export async function highlightCode(code: string): Promise<string> {
  if (!code.trim()) {
    return "";
  }

  try {
    const highlighter = await getHighlighter();
    return highlighter.codeToHtml(code, {
      lang: "vue",
      theme: "catppuccin-mocha",
      defaultColor: false,
      colorReplacements: {
        "#1e1e2e": "transparent", // background
      },
    });
  } catch (error) {
    console.error("Failed to highlight code:", error);
    return `<pre><code>${code}</code></pre>`;
  }
}
