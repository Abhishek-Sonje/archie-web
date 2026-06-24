"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiTypescript,
  SiGooglegemini,
  SiNodedotjs,
  SiMarkdown,
} from "react-icons/si";
import { VscGitCommit } from "react-icons/vsc";

interface CommitPipeline {
  id: string;
  message: string;
  steps: { label: string; activeOn: "trigger" | "processing" | "output" }[];
  mutationLineText: string;
  detail: string; // extra detail shown in the top card's "processing" zone
}

const LIFECYCLE_STREAM: CommitPipeline[] = [
  {
    id: "p1",
    message: "feat: add billing module",
    steps: [
      { label: "Commit hook triggered", activeOn: "trigger" },
      { label: "Significance check passed", activeOn: "processing" },
      { label: "ARCHITECTURE.md patched", activeOn: "output" },
    ],
    detail: "7 files · src/billing/** · package.json",
    mutationLineText: "+ Billing module added to Core Flows.",
  },
  {
    id: "p2",
    message: "refactor: split auth service",
    steps: [
      { label: "Commit hook triggered", activeOn: "trigger" },
      { label: "Changed files analyzed", activeOn: "processing" },
      { label: "ARCHITECTURE.md patched", activeOn: "output" },
    ],
    detail: "5 files · src/auth/** · types/index.ts",
    mutationLineText: "+ Auth service split documented.",
  },
];

const CYCLE_MS = 8000;

export default function HeroFlow() {
  const [streamIndex, setStreamIndex] = useState(0);
  const [engineState, setEngineState] = useState<
    "trigger" | "processing" | "output"
  >("trigger");

  const activePipeline = LIFECYCLE_STREAM[streamIndex];

  useEffect(() => {
    const toProcessing = setTimeout(() => setEngineState("processing"), 2200);
    const toOutput = setTimeout(() => setEngineState("output"), 4800);
    const recycle = setTimeout(() => {
      setEngineState("trigger");
      setStreamIndex((prev) => (prev + 1) % LIFECYCLE_STREAM.length);
    }, CYCLE_MS);

    return () => {
      clearTimeout(toProcessing);
      clearTimeout(toOutput);
      clearTimeout(recycle);
    };
  }, [streamIndex]);

  return (
    <div className="w-full max-w-[32.5rem] flex flex-col items-center bg-transparent select-none">
      {/* ── TOP CARD — Constant professional height + hidden overflow ── */}
      <div className="w-full h-[21rem] flex flex-col justify-between z-10 bg-surface border border-border rounded-xl p-5 shadow-[0_24px_48px_rgba(0,0,0,0.6)] backdrop-blur-sm overflow-hidden">
        <div>
          {/* Window chrome */}
          <div className="flex gap-1.5 mb-4 pb-3 border-b border-border/60">
            <div className="w-2.5 h-2.5 rounded-full bg-border-hover" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-hover" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-hover" />
            <span className="ml-auto font-mono text-[0.625rem] text-ink-subtle tracking-wider">
              post-commit hook
            </span>
          </div>

          {/* Commit message pill */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePipeline.id + "-msg"}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-xs mb-5 bg-surface-2 px-3 py-2.5 rounded-lg border border-border flex items-center gap-2.5 min-h-[2.5rem]"
            >
              <VscGitCommit className="text-diff-add-fg shrink-0 text-base" />
              <span className="text-ink font-semibold truncate">
                {activePipeline.message}
              </span>
              <span className="ml-auto text-ink-subtle shrink-0 text-[0.625rem] opacity-60">
                HEAD~0
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Pipeline steps — Balanced grid structure */}
          <div className="grid grid-cols-12 gap-4 items-start">
            {/* Steps column */}
            <div className="col-span-7 space-y-3 relative">
              {/* Vertical connector track */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-border" />

              {activePipeline.steps.map((step) => {
                const isCompleted =
                  engineState === "output" ||
                  (engineState === "processing" &&
                    (step.activeOn === "trigger" ||
                      step.activeOn === "processing")) ||
                  (engineState === "trigger" && step.activeOn === "trigger");

                return (
                  <div
                    key={step.label}
                    className="flex items-center gap-3 text-xs relative z-10 h-5"
                  >
                    <div
                      className={`w-[15px] h-[15px] rounded-full border-[1.5px] flex items-center justify-center text-[8px] font-mono shrink-0 transition-all duration-500 ${
                        isCompleted
                          ? "bg-diff-add-bg border-diff-add-bar text-diff-add-fg shadow-[0_0_6px_var(--color-diff-add-fg,#10b981)]/30"
                          : "bg-surface-2 border-border text-ink-subtle"
                      }`}
                    >
                      ✓
                    </div>
                    <span
                      className={`transition-colors duration-500 font-mono truncate ${isCompleted ? "text-ink font-medium" : "text-ink-subtle"}`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Detail side panel — Fixed internal box dimensions */}
            <div className="col-span-5 h-[6.5rem] flex flex-col justify-between rounded-lg border border-border bg-surface-2/60 p-3 overflow-hidden">
              <div>
                <div className="font-mono text-[0.563rem] text-ink-subtle uppercase tracking-widest mb-1.5">
                  Scope
                </div>
                <AnimatePresence mode="wait">
                  {engineState !== "trigger" ? (
                    <motion.div
                      key={activePipeline.id + "-detail"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="font-mono text-[0.625rem] text-diff-add-fg leading-relaxed line-clamp-2"
                    >
                      {activePipeline.detail}
                    </motion.div>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-3/4 bg-surface-2 rounded animate-pulse" />
                      <div className="h-1.5 w-1/2 bg-surface-2 rounded animate-pulse" />
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Gemini badge */}
              <div
                className={`pt-2 border-t border-border/60 flex items-center gap-1.5 transition-opacity duration-500 ${engineState === "processing" ? "opacity-100" : "opacity-30"}`}
              >
                <SiGooglegemini className="text-[10px] text-ink-muted shrink-0" />
                <span className="font-mono text-[0.563rem] text-ink-subtle truncate">
                  Gemini 2.5 Flash
                </span>
                {engineState === "processing" && (
                  <span className="ml-auto w-1 h-1 rounded-full bg-diff-add-fg animate-pulse shrink-0" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="pt-3 border-t border-border/60 flex items-center gap-3">
          <div className="flex gap-2 items-center text-ink-muted">
            <SiNodedotjs className="text-xs" title="Node.js v18+" />
            <SiTypescript className="text-xs" title="TypeScript" />
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                engineState === "trigger"
                  ? "bg-accent"
                  : engineState === "processing"
                    ? "bg-diff-add-fg animate-pulse"
                    : "bg-diff-add-bar"
              }`}
            />
            <span className="font-mono text-[0.625rem] text-ink-subtle tracking-widest uppercase">
              {engineState}
            </span>
          </div>
        </div>
      </div>

      {/* ── CONNECTOR SVG — Scaled dynamically via viewBox ── */}
      <div
        className="w-full h-[5.625rem] pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 520 90"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 260 0 L 260 22 C 260 58 310 32 310 68 L 310 90"
            stroke="var(--color-border)"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={0.35}
          />
          <motion.path
            d="M 260 0 L 260 22 C 260 58 310 32 310 68 L 310 90"
            stroke="var(--color-diff-add-fg, #10b981)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -24 }}
            transition={{
              duration: 1.4,
              ease: "linear",
              repeat: Infinity,
            }}
            opacity={engineState === "trigger" ? 0.25 : 0.9}
            style={{ transition: "opacity 0.6s ease" }}
          />
          <motion.circle
            cx="310"
            cy="88"
            r="2.5"
            fill="var(--color-diff-add-fg, #10b981)"
            animate={{
              opacity: engineState === "output" ? [0.4, 1, 0.4] : 0.2,
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* ── BOTTOM CARD — Refactored to rem layout boundaries ── */}
      <div className="w-[18.75rem] self-start ml-[9.6rem] z-10 bg-surface border border-border rounded-xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.55)] backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-border/60 pb-2.5 mb-3">
          <SiMarkdown className="text-accent text-sm shrink-0" />
          <span className="font-mono font-semibold text-[0.688rem] text-ink">
            ARCHITECTURE.md
          </span>
          <span className="ml-auto font-mono text-[0.563rem] text-ink-subtle opacity-50">
            surgical patch
          </span>
        </div>

        {/* Doc content */}
        <div className="font-mono text-[0.625rem] space-y-2">
          <div className="text-ink-muted font-bold">## Core Flows</div>
          <div className="pl-2 space-y-1.5">
            <div className="h-1.5 w-3/4 bg-surface-2 rounded-sm" />
            <div className="h-1.5 w-1/2 bg-surface-2 rounded-sm" />

            {/* The live patch line */}
            <div className="relative min-h-[1.25rem] w-full rounded flex items-center overflow-hidden">
              <div
                className={`absolute inset-0 transition-colors duration-700 rounded ${
                  engineState === "output"
                    ? "bg-diff-add-bg/25 border-l-2 border-diff-add-fg"
                    : "bg-transparent"
                }`}
              />
              <div className="relative z-10 px-2 py-0.5 w-full truncate">
                <AnimatePresence mode="wait">
                  {engineState === "output" ? (
                    <motion.span
                      key={activePipeline.id + "-patch"}
                      initial={{ opacity: 0, x: -3 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 3 }}
                      transition={{ duration: 0.3 }}
                      className="text-diff-add-fg font-medium whitespace-nowrap"
                    >
                      {activePipeline.mutationLineText}
                    </motion.span>
                  ) : (
                    <span className="text-ink-subtle italic opacity-50">
                      awaiting patch...
                    </span>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="h-1.5 w-2/5 bg-surface-2 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
