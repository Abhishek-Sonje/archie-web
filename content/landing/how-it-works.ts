export const HOW_IT_WORKS_HEADING = "How Archie Works";

export const HOW_IT_WORKS_SUBHEADING =
  "Three commands. Then Archie runs quietly in the background — you commit, it documents.";

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    command: "archie init",
    title: "archie init",
    type: "terminal",
    description:
      "Reads your source files, project identity files, and recent Git history. Sends everything to Gemini 2.5 Flash in a single request. Writes a structured ARCHITECTURE.md in seconds.",
  },
  {
    step: 2,
    command: "archie hook",
    title: "archie hook",
    type: "git",
    description:
      "Installs a post-commit hook. After every commit, Archie checks whether the changes are significant. If they are, it updates only the affected sections - not a full rewrite.",
  },
  {
    step: 3,
    command: "git commit",
    title: "git commit (normal)",
    type: "file",
    description:
      "Your commits work exactly as before. Archie runs asynchronously after the commit completes - zero added latency. Use --no-verify to skip it on any specific commit.",
  },
] as const;
