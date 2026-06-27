export const FAQ_HEADING = "Frequently Asked Questions";

export const FAQ_ITEMS = [
  {
    question: "Will Archie commit ARCHITECTURE.md automatically?",
    answer:
      "No — Archie writes the file to disk but never stages or commits it. You stay in full control of what gets committed.",
  },
  {
    question: "Does the Git hook slow down my commits?",
    answer:
      "No — the post-commit hook runs asynchronously after the commit completes. Zero added latency to your workflow.",
  },
  {
    question: "How do I skip the hook on a specific commit?",
    answer:
      "Use git commit --no-verify to bypass the hook for any individual commit.",
  },
  {
    question: "Is my code sent to Google?",
    answer:
      "Yes — source files are sent to the Gemini 2.5 Flash API. Review Google's API data usage policy at https://ai.google.dev/gemini-api/terms before use.",
  },
  {
    question: "What does Archie do if a change isn't significant?",
    answer:
      "It silently advances its internal state pointer and exits. Only meaningful changes — like a modified package.json or 5+ file edits — trigger a doc update.",
  },
] as const;
