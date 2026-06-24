/* ─────────────────────────────────────────────────────────────────
   components/ui/CopyCommand.tsx
   Single install command row with clipboard copy button.

   States:
     idle    — clipboard icon, ink-muted colour
     copying — checkmark icon, accent colour, "Copied!" aria-label
     idle    — reverts after 1.5s

   Micro-interaction:
     Icon swaps with a 150ms colour transition.
     No scale or bounce — keep it precise and quiet.

   Accessibility:
     Button aria-label updates dynamically per state.
     Icon is aria-hidden; label carries the meaning.
───────────────────────────────────────────────────────────────── */

"use client";

import { useState, useCallback } from "react";
import { copyToClipboard } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface CopyCommandProps {
  command: string;
  label: string;
}

type CopyState = "idle" | "copied";

const REVERT_DELAY = 1500;

export default function CopyCommand({ command, label }: CopyCommandProps) {
  const [state, setState] = useState<CopyState>("idle");

  const handleCopy = useCallback(async () => {
    if (state === "copied") return;

    const success = await copyToClipboard(command);
    if (!success) return;

    setState("copied");
    const timer = window.setTimeout(() => setState("idle"), REVERT_DELAY);
    return () => clearTimeout(timer);
  }, [command, state]);

  const isCopied = state === "copied";

  return (
    <div
      className="
        flex items-center justify-between gap-4
        bg-surface border border-border rounded-[var(--radius-md)]
        px-5 py-4
        group
        transition-colors duration-[var(--duration-base)]
        hover:border-border-hover
      "
    >
      {/* Command text */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Prompt glyph */}
        <span
          className="font-mono text-sm text-accent flex-shrink-0 select-none"
          aria-hidden="true"
        >
          $
        </span>

        {/* Command */}
        <code
          className="font-mono text-sm text-ink truncate"
          title={command}
        >
          {command}
        </code>
      </div>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        aria-label={isCopied ? "Copied!" : `Copy command: ${label}`}
        className={cn(
          "flex-shrink-0 p-1.5 rounded-[var(--radius-sm)]",
          "transition-colors duration-[var(--duration-fast)]",
          "focus-visible:outline-accent",
          isCopied
            ? "text-accent"
            : "text-ink-subtle hover:text-ink-muted"
        )}
      >
        {isCopied ? <CheckIcon /> : <ClipboardIcon />}
      </button>
    </div>
  );
}

/* ── Icons — inline SVG, no dependency ─────────────────────────── */
function ClipboardIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="2" width="8" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M5 4H4a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 14h6a1.5 1.5 0 0 0 1.5-1.5V12"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8.5L6.5 12L13 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
