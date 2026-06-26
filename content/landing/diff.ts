export const DIFF_META = {
  filename: "ARCHITECTURE.md",
  additions: 3,
  deletions: 1,
  lastUpdated: "3 commits ago",
} as const;

export const DIFF_LINES = [
  { type: "header", text: "## Tech Stack" },
  { type: "context", text: "" },
  {
    type: "context",
    text: "- **Commander.js**: Used in `src/index.ts` to define",
  },
  {
    type: "context",
    text: "  CLI commands. Chosen for its mature, simple API.",
  },
  { type: "context", text: "" },
  {
    type: "remove",
    text: "- **simple-git**: Wraps Git operations for reading history.",
  },
  {
    type: "add",
    text: "- **simple-git**: Wraps Git operations. Used in `gitReader.ts`",
  },
  {
    type: "add",
    text: "  and `fileReader.ts` for commit diffs and file tree traversal.",
  },
  { type: "context", text: "" },
  {
    type: "context",
    text: "- **dotenv**: Loads `GEMINI_API_KEY` from `.env`.",
  },
  { type: "context", text: "" },
  {
    type: "context",
    text: "- **@google/generative-ai**: Official Gemini client. Chosen",
  },
  {
    type: "context",
    text: "  for its 1M token context window — no chunking required.",
  },
  { type: "context", text: "" },
  {
    type: "context",
    text: "- **Commander.js**: Used in `src/index.ts` to define",
  },
  {
    type: "context",
    text: "  CLI commands. Chosen for its mature, simple API.",
  },
  { type: "context", text: "" },
  {
    type: "remove",
    text: "- **simple-git**: Wraps Git operations for reading history.",
  },
  {
    type: "add",
    text: "- **simple-git**: Wraps Git operations. Used in `gitReader.ts`",
  },
  {
    type: "add",
    text: "  and `fileReader.ts` for commit diffs and file tree traversal.",
  },
  { type: "context", text: "" },
  {
    type: "context",
    text: "- **dotenv**: Loads `GEMINI_API_KEY` from `.env`.",
  },
] as const;
