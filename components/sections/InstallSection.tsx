"use client";

import CopyCommand from "@/components/ui/CopyCommand";
import InstallSectionReveal from "@/components/ui/InstallSectionReveal";
import {
  INSTALL_COMMANDS,
  GEMINI_API_LINK,
  GEMINI_POLICY_LINK,
} from "@/lib/constants";
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
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
      />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <InstallSectionReveal>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* ── Left Column: Ultra-Minimal Typography ── */}
            <div className="lg:col-span-5 flex flex-col install-content relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface/50 border border-border/60 w-max mb-8 backdrop-blur-md">
                <IoTerminalOutline className="text-accent text-[0.75rem]" />
                <span className="font-mono text-[0.625rem] text-ink-subtle uppercase tracking-widest font-medium">
                  Initialization
                </span>
              </div>

              <h2
                id="install-heading"
                className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight leading-[1.05] text-wrap-balance mb-6"
              >
                Three commands.
                <br className="hidden md:block" />
                <span className="text-ink-subtle">Zero config.</span>
              </h2>

              <p className="font-body text-lg text-ink-muted mb-12 max-w-[420px] leading-relaxed">
                Get up and running in under a minute. Install globally,
                initialize your repo, and link your API key. Archie handles the
                documentation continuously.
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
                  <p className="font-body text-sm text-ink-muted leading-relaxed max-w-[380px]">
                    Your code diffs are routed to Google's Gemini API for
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
            <div className="lg:col-span-7 relative group w-full max-w-[560px] mx-auto lg:ml-auto">
              {/* Outer Glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-border-hover/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-[#0A0C0B] border border-border/80 rounded-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-1">
                {/* Internal top glow */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-hover to-transparent opacity-50" />

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
                      ~/workspace/project
                    </span>
                  </div>
                  {/* Spacer to balance the flex */}
                  <div className="w-[42px]" />
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
