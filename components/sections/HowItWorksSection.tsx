"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    id: "01",
    title: "archie init",
    desc: "Reads your source files, project identity files, and recent Git history. Sends everything to Gemini 2.5 Flash in a single request. Writes a structured ARCHITECTURE.md in seconds.",
    type: "terminal",
  },
  {
    id: "02",
    title: "archie hook",
    desc: "Installs a post-commit hook. After every commit, Archie checks whether the changes are significant. If they are, it updates only the affected sections - not a full rewrite.",
    type: "git",
  },
  {
    id: "03",
    title: "git commit (normal)",
    desc: "Your commits work exactly as before. Archie runs asynchronously after the commit completes - zero added latency. Use -- no-verify to skip it on any specific commit.",
    type: "file",
  },
] as const;


// ─────────────────────────────────────────────────────────────
// IsometricTerminal — Interactive Command Shell
// ─────────────────────────────────────────────────────────────
export const IsometricTerminal = () => (
  <div className="relative w-24 h-24 [transform-style:preserve-3d] transition-transform duration-700 ease-out group-hover:[transform:rotateX(60deg)_rotateZ(-35deg)_scale(1.1)] [transform:rotateX(60deg)_rotateZ(-45deg)]">
    {/* Base Shadow */}
    <div className="absolute inset-0 bg-black/60 blur-md [transform:translateZ(-12px)] transition-all duration-700 group-hover:blur-xl group-hover:opacity-40" />

    {/* Device Base */}
    <div className="absolute inset-0 bg-surface border border-border rounded-lg [transform:translateZ(0px)]" />

    {/* Screen Plate */}
    <div className="absolute inset-1.5 bg-bg border border-border rounded flex flex-col p-2 transition-transform duration-700 ease-out [transform:translateZ(6px)] group-hover:[transform:translateZ(20px)]">
      {/* Window Controls */}
      <div className="flex gap-1 mb-2.5">
        <div className="w-1.5 h-1.5 rounded-full bg-diff-rem-bar/80" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/80" />
        <div className="w-1.5 h-1.5 rounded-full bg-diff-add-bar/80" />
      </div>

      {/* Code / Terminal Simulation Lines */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1">
          <div className="h-1 w-2 bg-accent rounded-sm opacity-80" />
          <div className="h-1 w-8 bg-ink-muted/40 rounded-sm" />
        </div>
        <div className="flex items-center gap-1">
          <div className="h-1 w-6 bg-diff-add-fg/60 rounded-sm" />
          <div className="h-1 w-3 bg-ink-subtle rounded-sm" />
        </div>
        <div className="h-1 w-10 bg-ink-muted/20 rounded-sm" />

        {/* Prompt + Cursor */}
        <div className="flex items-center gap-1 pt-0.5">
          <span className="text-[8px] font-mono text-diff-add-fg leading-none select-none">
            ❯
          </span>
          <div className="w-1 h-2 bg-diff-add-fg rounded-sm terminal-cursor" />
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// IsometricGit — Managed Repository Platform
// ─────────────────────────────────────────────────────────────
export const IsometricGit = () => (
  <div className="relative w-24 h-24 [transform-style:preserve-3d] transition-transform duration-700 ease-out group-hover:[transform:rotateX(60deg)_rotateZ(-35deg)_scale(1.1)] [transform:rotateX(60deg)_rotateZ(-45deg)]">
    {/* Base Shadow */}
    <div className="absolute inset-0 bg-black/60 blur-md [transform:translateZ(-12px)] transition-all duration-700 group-hover:blur-xl group-hover:opacity-40" />

    {/* Device Base */}
    <div className="absolute inset-0 bg-surface border border-border rounded-lg [transform:translateZ(0px)]" />

    {/* Screen Plate */}
    <div className="absolute inset-1.5 bg-bg border border-border rounded flex flex-col items-center justify-center gap-2 p-2 transition-transform duration-700 ease-out [transform:translateZ(8px)] group-hover:[transform:translateZ(24px)]">
      {/* Git/GitHub Icon Wrapper */}
      <div className="text-ink opacity-90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
        <svg
          viewBox="0 0 96 96"
          className="w-7 h-7"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48 0C21.48 0 0 21.48 0 48c0 21.22 13.76 39.22 32.84 45.58 2.4.44 3.28-1.04 3.28-2.32 0-1.14-.04-4.16-.06-8.16-13.36 2.9-16.18-6.44-16.18-6.44-2.18-5.54-5.32-7.02-5.32-7.02-4.36-2.98.34-2.92.34-2.92 4.82.34 7.36 4.96 7.36 4.96 4.28 7.34 11.24 5.22 13.98 3.98.44-3.1 1.68-5.22 3.06-6.42-10.66-1.22-21.88-5.34-21.88-23.74 0-5.24 1.86-9.52 4.92-12.88-.5-1.22-2.14-6.1 0-12.7 0 0 4.04-1.3 13.22 4.92A45.97 45.97 0 0148 22.1c4.08.02 8.18.56 12 .16 9.16-6.22 13.2-4.92 13.2-4.92 2.16 6.6.52 11.48.02 12.7 3.08 3.36 4.92 7.64 4.92 12.88 0 18.44-11.24 22.5-21.94 23.7 1.72 1.48 3.26 4.4 3.26 8.86 0 6.4-.06 11.56-.06 13.14 0 1.28.86 2.78 3.3 2.3A48.01 48.01 0 0096 48c0-26.52-21.48-48-48-48z"
          />
        </svg>
      </div>

      {/* Embedded Mini command panel */}
      <div className="flex items-center gap-1 bg-surface border border-border rounded px-1.5 py-0.5 w-full">
        <span className="text-[7px] font-mono text-diff-add-fg leading-none">
          ❯
        </span>
        <span className="text-[6.5px] font-mono text-ink-muted leading-none truncate tracking-tight">
          archie hook
        </span>
        <div className="w-[3px] h-1.5 bg-diff-add-fg rounded-sm terminal-cursor" />
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// IsometricFile — Refactored, Clean Document Stack
// ─────────────────────────────────────────────────────────────
export const IsometricFile = () => (
  <div className="relative w-24 h-24 [transform-style:preserve-3d] transition-transform duration-700 ease-out group-hover:[transform:rotateX(60deg)_rotateZ(-35deg)_scale(1.1)] [transform:rotateX(60deg)_rotateZ(-45deg)]">
    {/* Base Shadow */}
    <div className="absolute inset-0 bg-black/60 blur-md [transform:translateZ(-12px)] transition-all duration-700 group-hover:blur-xl group-hover:opacity-40" />

    {/* ── Sheet 1: Background Layer ── */}
    <div className="absolute inset-0 bg-surface/60 border border-border/40 rounded-md transition-transform duration-700 ease-out [transform:translateZ(0px)] group-hover:[transform:translateZ(4px)_translateY(2px)_translateX(2px)]" />

    {/* ── Sheet 2: Middle Layer ── */}
    <div className="absolute inset-0 bg-surface-2 border border-border/80 rounded-md transition-transform duration-700 ease-out [transform:translateZ(4px)] group-hover:[transform:translateZ(12px)_translateY(-2px)_translateX(-2px)]" />

    {/* ── Sheet 3: Foreground Interactive Document ── */}
    <div className="absolute inset-0 bg-surface border border-border rounded-md p-2.5 flex flex-col transition-transform duration-700 ease-out [transform:translateZ(8px)] group-hover:[transform:translateZ(24px)_translateY(-6px)_translateX(-6px)]">
      {/* Header bar / Title Block */}
      <div className="flex items-center justify-between border-b border-border pb-1.5 mb-2">
        <div className="h-1.5 w-10 bg-ink-muted/40 rounded-sm" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
      </div>

      {/* Code File Content Structural Grid */}
      <div className="space-y-1.5 flex-1">
        {/* Normal structure lines */}
        <div className="h-1 w-full bg-ink-subtle/30 rounded-sm" />
        <div className="h-1 w-5/6 bg-ink-subtle/30 rounded-sm" />

        {/* Green/Add Line block */}
        <div className="flex items-center gap-1 bg-diff-add-bg/40 border-l border-diff-add-bar p-0.5 rounded-r-sm">
          <div className="h-0.5 w-2/3 bg-diff-add-fg/60 rounded-sm" />
        </div>

        {/* More code context */}
        <div className="h-1 w-4/5 bg-ink-subtle/30 rounded-sm" />

        {/* Red/Remove Line block */}
        <div className="flex items-center gap-1 bg-diff-rem-bg/40 border-l border-diff-rem-bar p-0.5 rounded-r-sm">
          <div className="h-0.5 w-1/2 bg-diff-rem-fg/60 rounded-sm" />
        </div>

        {/* Tail alignment line */}
        <div className="h-1 w-1/3 bg-ink-subtle/30 rounded-sm" />
      </div>
    </div>
  </div>
);
// ─── MAIN SECTION COMPONENT ─────────────────────────────────────────────

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="container-page section-padding relative"
    >
      <div className="max-w-[50rem] mx-auto text-center mb-16 lg:mb-24">
        <h2
          id="how-it-works-heading"
          className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-4"
        >
          How Archie Works
        </h2>
        <p className="font-body text-lg text-ink-muted leading-relaxed">
          A seamless, invisible pipeline. You write the code, we write the docs.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Background Dashed Connector Line ── */}
        <div className="absolute top-[8rem] left-0 w-full h-[2px] hidden lg:block z-0 pointer-events-none">
          <svg width="100%" height="100%" preserveAspectRatio="none">
            {/* Ghost Track */}
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="var(--color-border)"
              strokeWidth="2"
              strokeDasharray="6 6"
              opacity={0.4}
            />
            {/* Animated Flow */}
            <motion.line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="var(--color-diff-add-fg)"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
              opacity={0.5}
            />
          </svg>
        </div>

        {/* ── Mobile/Tablet Vertical Line ── */}
        <div className="absolute top-0 left-[3rem] w-[2px] h-full block lg:hidden z-0 pointer-events-none">
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="var(--color-border)"
              strokeWidth="2"
              strokeDasharray="6 6"
              opacity={0.4}
            />
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="var(--color-diff-add-fg)"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
              opacity={0.5}
            />
          </svg>
        </div>

        {/* ── Isometric Cards Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col bg-surface/80 backdrop-blur-md border border-border hover:border-border-hover rounded-2xl overflow-hidden transition-colors duration-500 shadow-xl"
            >
              {/* Isometric Stage */}
              <div className="relative w-full h-[16rem] flex items-center justify-center bg-surface-2/30 border-b border-border/50 [perspective:1000px] overflow-hidden">
                {/* Number Badge */}
                <div className="absolute top-4 left-4 font-mono text-[0.688rem] font-medium text-ink-subtle bg-surface border border-border px-2 py-1 rounded-md">
                  {step.id}
                </div>

                {/* Render corresponding graphic */}
                {step.type === "terminal" && <IsometricTerminal />}
                {step.type === "git" && <IsometricGit />}
                {step.type === "file" && <IsometricFile />}

                {/* subtle ambient light from bottom */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-diff-add-fg/5 rounded-full blur-3xl transition-opacity duration-500 group-hover:bg-diff-add-fg/10" />
              </div>

              {/* Text Content */}
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <h3 className="font-display text-xl font-medium text-ink mb-3 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-ink-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
