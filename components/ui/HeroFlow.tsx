"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGooglegemini, SiMarkdown } from "react-icons/si";
import { VscGitCommit } from "react-icons/vsc";
import { HERO_FLOW_STATES, HERO_FLOW_STREAM } from "@/content/landing";

const CYCLE_MS = 8000;

export default function HeroFlow() {
  const [streamIndex, setStreamIndex] = useState(0);
  const [engineState, setEngineState] = useState<
    "commit" | "analyzing" | "patching"
  >("commit");

  const activeData = HERO_FLOW_STREAM[streamIndex];

  useEffect(() => {
    const toAnalyzing = setTimeout(() => setEngineState("analyzing"), 1500);
    const toPatching = setTimeout(() => setEngineState("patching"), 4500);
    const recycle = setTimeout(() => {
      setEngineState("commit");
      setStreamIndex((prev) => (prev + 1) % HERO_FLOW_STREAM.length);
    }, CYCLE_MS);

    return () => {
      clearTimeout(toAnalyzing);
      clearTimeout(toPatching);
      clearTimeout(recycle);
    };
  }, [streamIndex]);

  return (
    <div className="relative w-full max-w-md mx-auto select-none py-8">
      {/* ── BACKGROUND: Subtle Isometric Grid ── */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden perspective-[1000px]">
        <div className="absolute w-[200%] h-[200%] opacity-[0.25] bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]  bg-size-[40px_40px] transform-[rotateX(60deg)_rotateZ(-45deg)_translateY(-10%)] mask-[radial-gradient(circle_at_center,black_10%,transparent_60%)][-webkit-mask-image:radial-gradient(circle_at_center,black_10%,transparent_60%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* ── TOP CARD: The Input & Processing ── */}
        <div className="w-full h-58 flex flex-col justify-between bg-surface/90 backdrop-blur-md border border-border/80 rounded-xl p-5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]">
          <div>
            {/* Header Row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded bg-surface border border-border">
                  <VscGitCommit className="text-ink-muted text-sm" />
                </div>
                <span className="font-mono text-[0.688rem] text-ink-subtle uppercase tracking-widest font-medium">
                  New Commit
                </span>
              </div>
              <div className="flex gap-1.5 opacity-60">
                <div className="w-2 h-2 rounded-full bg-border-hover" />
                <div className="w-2 h-2 rounded-full bg-border-hover" />
                <div className="w-2 h-2 rounded-full bg-border-hover" />
              </div>
            </div>

            {/* Commit Message Pill (Strict Height Lock: h-[3rem]) */}
            <div className="relative w-full h-[3rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center px-4 bg-surface-2/60 border border-border/50 rounded-lg"
                >
                  <span className="font-mono text-sm text-ink font-medium truncate w-full">
                    {activeData.commitMsg}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* AI Processing Status Bar (Strict Height Lock: h-[4.5rem]) */}
          <div
            className={`relative w-full h-18 flex items-center gap-3 px-4 rounded-lg border transition-colors duration-500 ${
              engineState === "analyzing"
                ? "bg-accent/5 border-accent/20"
                : "bg-surface-2 border-border/50"
            }`}
          >
            <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
              {engineState === "analyzing" && (
                <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
              )}
              <SiGooglegemini
                className={`text-lg transition-colors duration-500 ${
                  engineState === "analyzing" ? "text-accent" : "text-ink-muted"
                }`}
              />
            </div>

            <div className="flex flex-col justify-center h-full w-full overflow-hidden">
              <span className="font-body text-sm font-medium text-ink transition-colors truncate">
                {HERO_FLOW_STATES[engineState].title}
              </span>
              <span className="font-mono text-[0.688rem] text-ink-subtle transition-opacity duration-300 truncate">
                {engineState === "analyzing"
                  ? `Scanning ${activeData.fileCount} changed files`
                  : HERO_FLOW_STATES[engineState].subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* ── CONNECTOR SVG ── */}
        <div
          className="w-full h-[4rem] pointer-events-none relative"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 448 64"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 224 0 L 224 20 C 224 44 320 28 320 52 L 320 64"
              stroke="var(--color-border)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity={0.5}
            />
            <motion.path
              d="M 224 0 L 224 20 C 224 44 320 28 320 52 L 320 64"
              stroke="var(--color-diff-add-fg, #10b981)"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -24 }}
              transition={{ duration: 1, ease: "linear", repeat: Infinity }}
              opacity={engineState === "patching" ? 1 : 0.15}
              className="transition-opacity duration-500"
            />
          </svg>
        </div>

        {/* ── BOTTOM CARD: The Result (Strict Height Lock: h-[10.5rem]) ── */}
        <div className="w-[88%] self-end h-42 flex flex-col bg-surface/90 backdrop-blur-md border border-border/80 rounded-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header */}
          <div className="h-[2.5rem] shrink-0 flex items-center gap-2 bg-surface-2 border-b border-border/60 px-4">
            <SiMarkdown className="text-ink-muted text-sm shrink-0" />
            <span className="font-mono font-medium text-[0.688rem] text-ink">
              ARCHITECTURE.md
            </span>
            <span
              className={`ml-auto w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                engineState === "patching"
                  ? "bg-diff-add-fg animate-pulse"
                  : "bg-border-hover"
              }`}
            />
          </div>

          {/* Editor Body */}
          <div className="flex-1 p-4 font-mono text-[0.688rem] bg-bg">
            <div className="text-ink-muted font-semibold tracking-tight mb-2.5">
              ## Core Architecture
            </div>

            <div className="pl-3 border-l-2 border-border space-y-2">
              <div className="h-1.5 w-3/4 bg-surface-2 rounded-sm" />
              <div className="h-1.5 w-1/2 bg-surface-2 rounded-sm" />

              {/* The Live Patch Line (Strict Height Lock: h-[1.75rem]) */}
              <div className="relative h-7 w-full rounded flex items-center overflow-hidden">
                <div
                  className={`absolute inset-0 transition-all duration-700 rounded-r ${
                    engineState === "patching"
                      ? "bg-diff-add-bg/30 border-l-[3px] border-diff-add-fg"
                      : "bg-transparent border-l-[3px] border-transparent"
                  }`}
                />
                <div className="relative z-10 px-2 w-full">
                  <AnimatePresence mode="wait">
                    {engineState === "patching" ? (
                      <motion.span
                        key={activeData.id + "-patch"}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-diff-add-fg block truncate"
                      >
                        {activeData.patchLine}
                      </motion.span>
                    ) : (
                      <span className="text-ink-subtle/40 block truncate">
                        awaiting changes...
                      </span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="h-1.5 w-2/5 bg-surface-2 rounded-sm mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
