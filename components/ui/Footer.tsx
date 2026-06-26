/* ─────────────────────────────────────────────────────────────────
   components/ui/Footer.tsx
   Server component. Wordmark left, links right.
   1px top border to separate from last section.
   No newsletter, no social icons, no "built with" copy.
───────────────────────────────────────────────────────────────── */

import { NAV, FOOTER_LINKS } from "@/content/landing";
import { IoTerminalOutline } from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-transparent">
      <div className="container-page py-8 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* ── Brand & Copyright (Left) ── */}
        <div className="flex items-center gap-2.5 text-ink-muted">
          <IoTerminalOutline className="text-xs text-ink" />
          <span className="font-display text-sm font-medium text-ink tracking-tight select-none">
            {NAV.wordmark}
          </span>
          <span className="font-mono text-xs text-ink-subtle select-none">
            © {currentYear}
          </span>
        </div>

        {/* ── Links (Right) ── */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 list-none m-0 p-0">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
                    font-body text-sm font-medium text-ink-muted
                    transition-colors duration-200
                    hover:text-ink focus-visible:outline-accent rounded-sm
                  "
                  {...(link.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": `${link.label} (opens in new tab)`,
                      }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
