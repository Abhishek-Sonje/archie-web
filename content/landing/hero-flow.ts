export const HERO_FLOW_STREAM = [
  {
    id: "p1",
    commitMsg: "feat: add billing module",
    fileCount: 7,
    patchLine: "+ Billing module integrated into core API gateway.",
  },
  {
    id: "p2",
    commitMsg: "refactor: split auth service",
    fileCount: 5,
    patchLine: "+ Auth logic moved to standalone microservice.",
  },
] as const;

export const HERO_FLOW_STATES = {
  commit: {
    title: "Watching for commits...",
    subtitle: "Post-commit hook active",
  },
  analyzing: {
    title: "Analyzing changes",
    subtitle: "Reading diffs and intent",
  },
  patching: {
    title: "Docs updated",
    subtitle: "Only affected sections rewritten",
  },
} as const;
