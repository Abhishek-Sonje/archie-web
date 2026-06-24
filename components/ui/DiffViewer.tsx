import { cn } from "@/lib/utils";
import { DIFF_LINES, DIFF_META } from "@/lib/constants";
import type { DiffLine } from "@/types";
import { SiMarkdown } from "react-icons/si";

export default function DiffViewer() {
  return (
    <div
      role="region"
      aria-label="Example ARCHITECTURE.md diff — Archie's output"
      className="
        relative w-full h-full min-h-[26rem] flex flex-col
        border border-border/80 rounded-xl
        bg-surface/80 backdrop-blur-xl shadow-2xl z-10
      "
    >
      {/* ── Window Header ── */}
      <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border/60 rounded-t-xl z-20">
        <div className="flex items-center gap-3">
          {/* macOS style controls, but using theme muted colors */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-border-hover" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-hover" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-hover" />
          </div>
          <div className="h-4 w-[1px] bg-border mx-1" />
          <div className="flex items-center gap-2 text-ink">
            <SiMarkdown className="text-accent text-[0.875rem]" />
            <span className="font-mono text-[0.75rem] font-medium tracking-tight">
              {DIFF_META.filename}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-surface-2 border border-border px-2.5 py-1 rounded-md">
          <span className="font-mono text-[0.688rem] text-diff-add-fg flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-diff-add-fg" />+
            {DIFF_META.additions}
          </span>
          <span className="font-mono text-[0.688rem] text-diff-rem-fg flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-diff-rem-fg" />−
            {DIFF_META.deletions}
          </span>
        </div>
      </div>

      {/* ── Diff Body ── */}
      {/* Mask image creates the fade-out effect at the top and bottom of the scroll */}
      <div
        className="flex-1 overflow-hidden relative bg-[#0a0a0a]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="diff-scroll-track absolute w-full py-8">
          <pre
            className="font-mono text-[0.813rem] leading-[1.6] m-0 p-0 bg-transparent overflow-x-auto"
            aria-label="ARCHITECTURE.md diff content"
          >
            {DIFF_LINES.map((line, index) => (
              <DiffLineRow key={index} line={line} />
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
}

/* ── Single diff line ──────────────────────────────────────────── */
function DiffLineRow({ line }: { line: DiffLine }) {
  const isAdd = line.type === "add";
  const isRemove = line.type === "remove";
  const isHeader = line.type === "header";

  return (
    <div
      className={cn(
        "flex items-baseline gap-0 px-4 py-[2px] transition-colors duration-200 hover:bg-white/[0.02]",
        isAdd && "bg-diff-add-bg/40 border-l-[2px] border-diff-add-bar",
        isRemove && "bg-diff-rem-bg/40 border-l-[2px] border-diff-rem-bar",
        isHeader && "mt-4 mb-1",
        !isAdd && !isRemove && "border-l-[2px] border-transparent",
      )}
    >
      {/* Glyph column */}
      <span
        className={cn(
          "w-6 flex-shrink-0 select-none text-[0.75rem] text-center",
          isAdd && "text-diff-add-fg",
          isRemove && "text-diff-rem-fg",
          !isAdd && !isRemove && "text-ink-subtle opacity-30",
        )}
        aria-hidden="true"
      >
        {isAdd ? "+" : isRemove ? "−" : " "}
      </span>

      {/* Line content */}
      <span
        className={cn(
          "font-mono text-[0.813rem] tracking-tight whitespace-pre",
          isAdd && "text-diff-add-fg/90",
          isRemove &&
            "text-diff-rem-fg/90 line-through decoration-diff-rem-fg/30",
          isHeader && "text-accent font-semibold",
          !isAdd && !isRemove && !isHeader && "text-ink-muted/70",
        )}
      >
        {line.text || "\u00A0"}
      </span>
    </div>
  );
}
