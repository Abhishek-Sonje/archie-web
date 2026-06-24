/* ─────────────────────────────────────────────────────────────────
   components/ui/HowItWorksStep.tsx
   Client component — one step row with scroll-triggered reveal.

   Layout (desktop): two-column grid
     Col 1 (80px): large step number, decorative + semantic
     Col 2 (fluid): command heading + description

   The step number is large and muted (opacity 0.25) so it reads
   as structural scaffolding, not a primary element.
───────────────────────────────────────────────────────────────── */

"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { HowItWorksStep as HowItWorksStepType } from "@/types";

interface HowItWorksStepProps {
  step: HowItWorksStepType;
  isLast: boolean;
  staggerIndex: number;
}

export default function HowItWorksStep({
  step,
  isLast,
  staggerIndex,
}: HowItWorksStepProps) {
  const ref = useScrollReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={cn(
        "grid grid-cols-[80px_1fr] gap-8 py-12",
        "will-reveal", // initial hidden state — cleared by hook
        !isLast && "border-b border-border",
        staggerIndex === 0 && "stagger-1",
        staggerIndex === 1 && "stagger-2",
        staggerIndex === 2 && "stagger-3"
      )}
    >
      {/* Step number — large, muted, structural */}
      <div
        className="flex items-start pt-1"
        aria-hidden="true" /* screen readers get the <ol> numbering */
      >
        <span
          className="
            font-display text-4xl font-bold text-ink
            opacity-[0.18] leading-none select-none
          "
        >
          {step.step}
        </span>
      </div>

      {/* Step content */}
      <div className="flex flex-col gap-3">
        {/* Command as heading — the command IS the name of the step */}
        <h3 className="font-display text-xl text-ink leading-snug tracking-normal">
          {step.title}
        </h3>

        {/* Description */}
        <p className="font-body text-base text-ink-muted leading-relaxed max-w-[520px]">
          {step.description}
        </p>
      </div>
    </li>
  );
}
