/* ─────────────────────────────────────────────────────────────────
   components/ui/NavBar.tsx
   Site navigation. Server component shell + client scroll wrapper.

   Scroll behaviour (handled in NavScrollWrapper):
     - Transparent & full width at top
     - Transitions into a floating, frosted pill on scroll
───────────────────────────────────────────────────────────────── */

import { NAV } from "@/lib/constants";
import NavScrollWrapper from "./NavScrollWrapper";
import { IoTerminalOutline } from "react-icons/io5";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[var(--z-sticky)] px-4 py-4 pointer-events-none">
      {/* pointer-events-none on header, auto on the nav inside so clicks pass 
        through the invisible full-width header container. 
      */}
      <NavScrollWrapper>
        <nav
          aria-label="Site navigation"
          className="flex items-center justify-between h-14 px-5 sm:px-6 w-full"
        >
          {/* ── Brand / Wordmark ── */}
          <a
            href="#"
            className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            aria-label="Archie home"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-2 border border-border group-hover:border-accent/50 transition-colors">
              <IoTerminalOutline className="text-accent text-sm" />
            </div>
            <span className="font-display font-medium text-lg text-ink tracking-tight select-none">
              {NAV.wordmark}
            </span>
          </a>

          {/* ── Nav Links ── */}
          <ul className="flex items-center gap-1 sm:gap-2 list-none m-0 p-0">
            {NAV.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
                    nav-link flex items-center gap-1.5 px-3 py-2 rounded-lg
                    font-body text-sm font-medium text-ink-muted 
                    transition-all duration-200 hover:text-ink hover:bg-surface-2/50
                    outline-none focus-visible:ring-2 focus-visible:ring-accent
                  "
                  {...(link.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": `${link.label} (opens in new tab)`,
                      }
                    : {})}
                >
                  <div className="flex items-center justify-center gap-1">
                    {link.label}
                    {link.external && link.logo && (
                      <span
                        aria-hidden="true"
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                      >
                        <link.logo className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </NavScrollWrapper>
    </header>
  );
}
