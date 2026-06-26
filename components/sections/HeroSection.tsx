"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroAnimator from "@/components/ui/HeroAnimator";
import HeroFlow from "../ui/HeroFlow";
import { IoTerminalOutline } from "react-icons/io5";
import {
  HERO_BADGE,
  HERO_HEADLINE,
  HERO_LEAD_PREFIX,
  HERO_LEAD_SUFFIX,
  HERO_PRIMARY_CTA,
  HERO_SECONDARY_CTA,
} from "@/content/landing";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="container-page section-padding flex flex-col justify-center min-h-[calc(100vh-5rem)] relative"
    >
      {/* ── Responsive Flex Layout ── */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 relative z-10">
        {/* ── Left Column: Typography & CTAs ── */}
        <div className="flex-1 w-full max-w-3xl lg:max-w-none relative">
          {/* ── Animated Isometric Grid Background ── */}
          {/* We use a clipPath wipe + opacity fade to make the grid materialize smoothly */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 0.2, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
            className="hero-grid absolute -inset-10 z-[-1] pointer-events-none"
          />

          <HeroAnimator>
            {/* ── Floating Isometric Badge ── */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-2/80 backdrop-blur-md border border-border/60 shadow-[0_8px_16px_rgba(0,0,0,0.4)] mb-8 transform transition-transform hover:-translate-y-1">
              <div className="w-4 h-4 rounded bg-surface border border-border flex items-center justify-center shadow-sm">
                <IoTerminalOutline className="text-accent text-[8px]" />
              </div>
              <span className="font-mono text-[0.688rem] text-ink-subtle uppercase tracking-widest font-semibold">
                {HERO_BADGE}
              </span>
            </div>

            {/* ── Headline ── */}
            <h1
              className="
                hero-headline
                font-display text-hero text-ink
                leading-[1.05] tracking-tight
                text-wrap-balance
                max-w-180 lg:max-w-150 xl:max-w-180
                mb-6 drop-shadow-2xl
              "
            >
              {HERO_HEADLINE[0]}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-br from-ink via-ink to-ink-muted/50">
                {HERO_HEADLINE[1]}
              </span>
            </h1>

            {/* ── Lead paragraph ── */}
            <p
              className="
                hero-lead
                font-body text-lg text-ink-muted
                leading-relaxed
                max-w-130
                mb-10
              "
            >
              {HERO_LEAD_PREFIX}
              <code className="font-mono text-sm text-ink bg-surface-2/60 backdrop-blur-sm px-1.5 py-0.5 rounded-md border border-border/80 shadow-inner">
                ARCHITECTURE.md
              </code>{" "}
              {HERO_LEAD_SUFFIX}
            </p>

            {/* ── CTA row ── */}
            <div className="hero-cta flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:mb-0">
              {/* Primary 3D Tactile Button */}
              <a
                href="#install"
                className="
                  hero-primary-button
                  group relative inline-flex items-center justify-center
                  font-mono text-sm font-medium
                  bg-accent text-bg 
                  px-8 py-3.5 rounded-xl
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[0_0_24px_var(--color-accent-dim)]
                  active:translate-y-1 active:shadow-none
                  focus-visible:outline-accent
                  whitespace-nowrap overflow-hidden
                "
              >
                {/* Button highlight glare */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-xl pointer-events-none " />
                {HERO_PRIMARY_CTA}
              </a>

              {/* Secondary Ghost Button */}
              <a
                href="#how-it-works"
                className="
                  hero-cta-secondary cta-arrow
                  font-body text-sm font-medium text-ink-muted
                  flex items-center gap-2
                  px-4 py-3.5 rounded-xl border border-transparent
                  transition-all duration-200
                  hover:bg-surface-2/50 hover:border-border/60 hover:text-ink
                  hover:shadow-lg hover:backdrop-blur-sm
                "
              >
                {HERO_SECONDARY_CTA}
                <span
                  className="cta-arrow-glyph text-accent transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </HeroAnimator>
        </div>

        {/* ── Right Column: Interactive Widget ── */}
        {/* We animate this in slightly after the background grid starts rendering */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full flex justify-center lg:justify-end xl:justify-center relative z-20"
        >
          <HeroFlow />
        </motion.div>
      </div>
    </section>
  );
}
