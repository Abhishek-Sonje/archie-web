/* ─────────────────────────────────────────────────────────────────
   hooks/useScrollReveal.ts
   Attaches IntersectionObserver to a ref. Adds `is-revealed` class
   when the element enters the viewport. CSS handles the animation.
   Safe: element is visible in DOM before JS runs (no display:none).
───────────────────────────────────────────────────────────────── */

"use client";

import { useEffect, useRef } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, reveal immediately without animation
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.remove("will-reveal");
      return;
    }

    el.classList.add("will-reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("will-reveal");
          el.classList.add("is-revealed");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
