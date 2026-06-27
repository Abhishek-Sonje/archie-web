"use client";

import React from "react";
import { motion } from "framer-motion";
import { FAQ_HEADING, FAQ_ITEMS } from "@/content/landing";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 24 },
  },
};

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="container-page section-padding relative overflow-hidden"
    >
      {/* ── Isometric Tilted Grid Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden [perspective:1000px]">
        <div
          className="absolute w-[200%] h-[200%] opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            transform: "rotateX(60deg) rotateZ(-45deg) translateY(-20%)",
            transformOrigin: "center center",
            maskImage:
              "radial-gradient(circle at center, black 10%, transparent 60%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 10%, transparent 60%)",
          }}
        />
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2
            id="faq-heading"
            className="font-display text-3xl md:text-5xl font-semibold text-ink tracking-tight mb-4 drop-shadow-sm"
          >
            {FAQ_HEADING}
          </h2>
          <p className="font-body text-lg text-ink-muted">
            Everything you need to know about how Archie works.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:gap-8"
        >
          {FAQ_ITEMS.map((item, index) => {
            const paddedIndex = (index + 1).toString().padStart(2, "0");

            return (
              <motion.article
                key={item.question}
                variants={itemVariants}
                className="relative group w-full [perspective:1400px]"
              >
                {/* 3D Transform Wrapper */}
                <div className="relative w-full [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform:translateZ(0px)] group-hover:[transform:translateZ(16px)]">
                  {/* Deep Shadow Layer */}
                  <div className="absolute inset-0 bg-black/50 blur-xl rounded-2xl [transform:translateZ(-30px)] opacity-40 transition-all duration-700 group-hover:opacity-20 group-hover:blur-2xl group-hover:[transform:translateZ(-40px)]" />

                  {/* Glass Slab Content */}
                  <div className="relative bg-surface/70 backdrop-blur-xl border border-border/60 rounded-2xl p-6 md:p-8 shadow-xl transition-colors duration-500 group-hover:bg-surface/90 group-hover:border-border">
                    {/* Top inner glow */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-hover/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      {/* Monospace Index Badge */}
                      <div className="shrink-0 mt-1">
                        <span className="inline-flex items-center justify-center font-mono text-[0.688rem] text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md">
                          Q.{paddedIndex}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display text-xl md:text-2xl font-medium text-ink mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                          {item.question}
                        </h3>
                        <p className="font-body text-base md:text-lg text-ink-muted leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
