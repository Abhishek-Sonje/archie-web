/* ─── Shared TypeScript types for Archie landing page ─────────── */

export type StaggerStep = 1 | 2 | 3;

export interface TerminalLine {
  type: "command" | "output" | "success" | "hint" | "blank";
  text: string;
}

export interface DiffLine {
  type: "add" | "remove" | "context" | "header";
  text: string;
}

export interface HowItWorksStep {
  step: number;
  command: string;
  title: string;
  description: string;
}
