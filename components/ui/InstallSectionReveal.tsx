/* ─────────────────────────────────────────────────────────────────
   components/ui/InstallSectionReveal.tsx
   Minimal client wrapper — scroll reveal for InstallSection.
   Staggered: heading → commands → footer, each 80ms apart.
───────────────────────────────────────────────────────────────── */

"use client";

import { useEffect, useRef } from "react";

interface InstallSectionRevealProps {
  children: React.ReactNode;
}

export default function InstallSectionReveal({
  children,
}: InstallSectionRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targets = [
      { selector: ".install-heading",  delay: "0ms"   },
      { selector: ".install-commands", delay: "100ms" },
      { selector: ".install-footer",   delay: "180ms" },
    ];

    if (prefersReduced) return;

    targets.forEach(({ selector }) => {
      const el = container.querySelector<HTMLElement>(selector);
      if (el) el.classList.add("will-reveal");
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        targets.forEach(({ selector, delay }) => {
          const el = container.querySelector<HTMLElement>(selector);
          if (!el) return;
          el.classList.remove("will-reveal");
          el.style.animationDelay = delay;
          el.classList.add("is-revealed");
        });

        observer.disconnect();
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
