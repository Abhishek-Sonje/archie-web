/* ─────────────────────────────────────────────────────────────────
   lib/constants.ts
   All page content lives here — copy, data, links.
   Components import from here; no hardcoded strings in JSX.
───────────────────────────────────────────────────────────────── */
import type { TerminalLine, DiffLine, HowItWorksStep } from "@/types";
import { FaGithub } from "react-icons/fa6";

/* ─── Navigation ─────────────────────────────────────────────── */
export const NAV = {
  wordmark: "archie",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/Abhishek-Sonje/Archie",
      external: true,
      logo: FaGithub,
    },
  ],
} as const;

/* ─── Hero terminal output ───────────────────────────────────── */
export const HERO_TERMINAL_LINES: TerminalLine[] = [
  { type: "command", text: "archie init" },
  { type: "blank",   text: "" },
  { type: "output",  text: "Reading source files..." },
  { type: "success", text: "47 files scanned  (1.2 MB)" },
  { type: "output",  text: "Analyzing Git history..." },
  { type: "success", text: "83 commits processed" },
  { type: "output",  text: "Generating ARCHITECTURE.md..." },
  { type: "success", text: "Written  (2,847 words)" },
  { type: "blank",   text: "" },
  { type: "hint",    text: "Run `archie hook` to keep it updated automatically." },
];

/* ─── How It Works steps ─────────────────────────────────────── */
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    command: "archie init",
    title: "archie init",
    description:
      "Reads your source files, project identity files, and recent Git history. Sends everything to Gemini 2.5 Flash in a single request. Writes a structured ARCHITECTURE.md in seconds.",
  },
  {
    step: 2,
    command: "archie hook",
    title: "archie hook",
    description:
      "Installs a post-commit hook. After every commit, Archie checks whether the changes are significant. If they are, it updates only the affected sections — not a full rewrite.",
  },
  {
    step: 3,
    command: "git commit",
    title: "git commit (normal)",
    description:
      "Your commits work exactly as before. Archie runs asynchronously after the commit completes — zero added latency. Use --no-verify to skip it on any specific commit.",
  },
];

/* ─── Diff viewer content ────────────────────────────────────── */
export const DIFF_LINES: DiffLine[] = [
  { type: "header",  text: "## Tech Stack" },
  { type: "context", text: "" },
  { type: "context", text: "- **Commander.js**: Used in `src/index.ts` to define" },
  { type: "context", text: "  CLI commands. Chosen for its mature, simple API." },
  { type: "context", text: "" },
  { type: "remove",  text: "- **simple-git**: Wraps Git operations for reading history." },
  { type: "add",     text: "- **simple-git**: Wraps Git operations. Used in `gitReader.ts`" },
  { type: "add",     text: "  and `fileReader.ts` for commit diffs and file tree traversal." },
  { type: "context", text: "" },
  { type: "context", text: "- **dotenv**: Loads `GEMINI_API_KEY` from `.env`." },
  { type: "context", text: "" },
  { type: "context", text: "- **@google/generative-ai**: Official Gemini client. Chosen" },
  { type: "context", text: "  for its 1M token context window — no chunking required." },
  { type: "context", text: "" },
  { type: "context", text: "- **Commander.js**: Used in `src/index.ts` to define" },
  { type: "context", text: "  CLI commands. Chosen for its mature, simple API." },
  { type: "context", text: "" },
  { type: "remove",  text: "- **simple-git**: Wraps Git operations for reading history." },
  { type: "add",     text: "- **simple-git**: Wraps Git operations. Used in `gitReader.ts`" },
  { type: "add",     text: "  and `fileReader.ts` for commit diffs and file tree traversal." },
  { type: "context", text: "" },
  { type: "context", text: "- **dotenv**: Loads `GEMINI_API_KEY` from `.env`." },
];

export const DIFF_META = {
  filename: "ARCHITECTURE.md",
  additions: 3,
  deletions: 1,
  lastUpdated: "3 commits ago",
} as const;

/* ─── Install commands ───────────────────────────────────────── */
export const INSTALL_COMMANDS = [
  {
    id: "install",
    command: "npm install -g archie-ai",
    label: "Install Archie globally",
  },
  {
    id: "env",
    command: 'echo "GEMINI_API_KEY=your_key_here" > .env',
    label: "Add your Gemini API key",
  },
  {
    id: "init",
    command: "archie init",
    label: "Generate your first ARCHITECTURE.md",
  },
] as const;

export const INSTALL_REQUIREMENTS =
  "Requires Node.js v18+  ·  Gemini API key (free tier works)";

export const GEMINI_API_LINK = "https://aistudio.google.com/app/apikey";
export const GEMINI_POLICY_LINK = "https://ai.google.dev/gemini-api/terms";
export const GITHUB_LINK = "https://github.com/Abhishek-Sonje/Archie";

/* ─── Footer links ───────────────────────────────────────────── */
export const FOOTER_LINKS = [
  { label: "GitHub", href: GITHUB_LINK, external: true },
  {
    label: "Docs",
    href: "https://github.com/Abhishek-Sonje/Archie/blob/main/readme.md",
    external: true,
  },
] as const;
