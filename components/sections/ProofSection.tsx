import DiffViewer from "@/components/ui/DiffViewer";
import ProofSectionReveal from "@/components/ui/ProofSectionReveal";
import { SiGooglegemini, SiMarkdown } from "react-icons/si";
import { VscHistory } from "react-icons/vsc";

export default function ProofSection() {
  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className="container-page section-padding relative"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2
          id="proof-heading"
          className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-4"
        >
          Surgical precision. Zero filler.
        </h2>
        <p className="font-body text-lg text-ink-muted leading-relaxed">
          Six structured sections. Every update is exact — Archie only rewrites
          the architectural decisions that actually changed in your commit.
        </p>
      </div>

      <ProofSectionReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* ── Main Diff Window (Spans 8 columns) ── */}
          <div className="lg:col-span-8 proof-item relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-border-hover/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <DiffViewer />
          </div>

          {/* ── Context Bento Cards (Spans 4 columns) ── */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Context Card 1: Gemini Analysis */}
            <div className="proof-item flex-1 bg-surface border border-border/60 rounded-xl p-6 shadow-xl backdrop-blur-md flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <SiGooglegemini className="text-6xl text-ink" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <SiGooglegemini className="text-accent text-sm" />
                <span className="font-mono text-[0.688rem] font-medium text-ink tracking-wide uppercase">
                  Intent Analysis
                </span>
              </div>
              <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">
                Detected separation of concern. The authentication module was
                decoupled from the core API gateway into a standalone
                microservice.
              </p>
              <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
                <span className="font-mono text-[0.625rem] text-ink-subtle">
                  Confidence
                </span>
                <span className="font-mono text-[0.688rem] text-diff-add-fg font-medium">
                  98.4%
                </span>
              </div>
            </div>

            {/* Context Card 2: Git History Integration */}
            <div className="proof-item flex-1 bg-surface-2/40 border border-border/60 rounded-xl p-6 shadow-xl backdrop-blur-md flex flex-col relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <VscHistory className="text-ink-muted text-sm" />
                <span className="font-mono text-[0.688rem] font-medium text-ink tracking-wide uppercase">
                  Historical Context
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[0.625rem] text-ink-subtle">
                    Previous State (HEAD~1)
                  </span>
                  <div className="w-full bg-surface border border-border rounded px-3 py-2 font-mono text-xs text-ink-muted truncate">
                    gateway.ts handled JWT
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[0.625rem] text-ink-subtle">
                    New State (HEAD)
                  </span>
                  <div className="w-full bg-diff-add-bg/20 border border-diff-add-bar/50 rounded px-3 py-2 font-mono text-xs text-diff-add-fg truncate">
                    auth-service/ initiated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProofSectionReveal>
    </section>
  );
}
