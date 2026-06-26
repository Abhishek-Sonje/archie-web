"use client";

import CopyCommand from "@/components/ui/CopyCommand";
import InstallSectionReveal from "@/components/ui/InstallSectionReveal";
import {
  INSTALL_COMMANDS,
  GEMINI_API_LINK,
  GEMINI_POLICY_LINK,
  INSTALL_BADGE,
  INSTALL_HEADING,
  INSTALL_INTRO,
  INSTALL_TERMINAL_PATH,
} from "@/content/landing";
import { IoTerminalOutline } from "react-icons/io5";
import { SiGooglecloud } from "react-icons/si";

export default function InstallSection() {
  return (
    <section
      id="install"
      aria-labelledby="install-heading"
      className="container-page section-padding relative overflow-hidden"
    >
      {/* Minimal Architectural Grid Background (Fades out via mask) */}
      <div className="install-grid absolute inset-0 z-0 opacity-20 pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <InstallSectionReveal>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* ── Left Column: Ultra-Minimal Typography ── */}
            <div className="lg:col-span-5 flex flex-col install-content relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface/50 border border-border/60 w-max mb-8 backdrop-blur-md">
                <IoTerminalOutline className="text-accent text-[0.75rem]" />
                <span className="font-mono text-[0.625rem] text-ink-subtle uppercase tracking-widest font-medium">
                  {INSTALL_BADGE}
                </span>
              </div>

              <h2
                id="install-heading"
                className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight leading-[1.05] text-wrap-balance mb-6"
              >
                {INSTALL_HEADING[0]}
                <br className="hidden md:block" />
                <span className="text-ink-subtle">{INSTALL_HEADING[1]}</span>
              </h2>

              <p className="font-body text-lg text-ink-muted mb-12 max-w-105 leading-relaxed">
                {INSTALL_INTRO}
              </p>

              {/* API Disclosures */}
              <div className="mt-auto">
                <div className="relative pl-5 border-l-2 border-border/80 flex flex-col gap-3 transition-colors hover:border-accent/50">
                  <div className="flex items-center gap-2 text-ink-muted">
                    <SiGooglecloud className="text-sm" />
                    <span className="font-mono text-[0.625rem] tracking-widest uppercase">
                      Gemini AI Integration
                    </span>
                  </div>
                  <p className="font-body text-sm text-ink-muted leading-relaxed max-w-95">
                    Your code diffs are routed to Google&apos;s Gemini API for
                    analysis.{" "}
                    <a
                      href={GEMINI_API_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink hover:text-accent border-b border-ink/20 hover:border-accent transition-colors duration-200 pb-0.5"
                    >
                      Get a free API key
                    </a>
                    {" · "}
                    <a
                      href={GEMINI_POLICY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink hover:text-accent border-b border-ink/20 hover:border-accent transition-colors duration-200 pb-0.5"
                    >
                      Usage policy
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right Column: Flat, Practical Terminal ── */}
            <div className="lg:col-span-7 relative group w-full max-w-140 mx-auto lg:ml-auto">
              {/* Outer Glow on hover */}
              <div className="absolute -inset-1 bg-linear-to-br from-border-hover/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-[#0A0C0B] border border-border/80 rounded-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-1">
                {/* Internal top glow */}
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border-hover to-transparent opacity-50" />

                {/* Terminal Header */}
                <div className="flex items-center px-5 py-3.5 bg-surface-2/40 border-b border-border/60">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-diff-rem-bar/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-diff-add-bar/80" />
                  </div>
                  <div className="mx-auto flex items-center gap-2 opacity-60">
                    <IoTerminalOutline className="text-[10px]" />
                    <span className="font-mono text-[0.625rem] tracking-widest text-ink">
                      {INSTALL_TERMINAL_PATH}
                    </span>
                  </div>
                  {/* Spacer to balance the flex */}
                  <div className="w-10.5" />
                </div>

                {/* Terminal Body */}
                <div className="p-6 md:p-8 flex flex-col gap-6">
                  {INSTALL_COMMANDS.map((item) => (
                    <div key={item.id} className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-mono text-accent leading-none">
                          ❯
                        </span>
                        <span className="font-mono text-[0.625rem] text-ink-subtle uppercase tracking-widest">
                          {item.label}
                        </span>
                      </div>
                      <div className="relative group/cmd">
                        <div className="absolute -inset-1.5 bg-accent/5 rounded-lg opacity-0 group-hover/cmd:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <CopyCommand
                          command={item.command}
                          label={item.label}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Fake typing cursor at the bottom */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] font-mono text-diff-add-fg leading-none">
                      ❯
                    </span>
                    <div className="w-2 h-3 bg-diff-add-fg/80 terminal-cursor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InstallSectionReveal>
    </section>
  );
}
