export const INSTALL_HEADING = [
  "Three commands.",
  "Docs that keep up.",
] as const;

export const INSTALL_INTRO =
  "Install globally, point Archie at your Gemini key, and run init. From that point on, every meaningful commit updates your architecture doc automatically — no manual steps, no scheduled jobs.";

export const INSTALL_BADGE = "Initialization";

export const INSTALL_TERMINAL_PATH = "~/workspace/project";

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
