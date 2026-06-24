import HeroAnimator from "@/components/ui/HeroAnimator";
import HeroFlow from "../ui/HeroFlow";
import { IoTerminalOutline } from "react-icons/io5";


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
          {/* Subtle Isometric Grid Background behind the text */}
          <div
            className="absolute -inset-10 z-[-1] opacity-20 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              transform:
                "rotateX(55deg) rotateZ(-45deg) scale(1.5) translateY(-100px)",
              transformStyle: "preserve-3d",
              maskImage:
                "radial-gradient(circle at center, black 10%, transparent 60%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 10%, transparent 60%)",
            }}
          />

          <HeroAnimator>
            {/* ── Floating Isometric Badge ── */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-2/80 backdrop-blur-md border border-border/60 shadow-[0_8px_16px_rgba(0,0,0,0.4)] mb-8 transform transition-transform hover:-translate-y-1">
              <div className="w-4 h-4 rounded bg-surface border border-border flex items-center justify-center [transform:rotateX(20deg)_rotateZ(-15deg)] shadow-sm">
                <IoTerminalOutline className="text-accent text-[8px]" />
              </div>
              <span className="font-mono text-[0.688rem] text-ink-subtle uppercase tracking-widest font-semibold">
                Archie Core v1.0
              </span>
            </div>

            {/* ── Headline ── */}
            <h1
              className="
                hero-headline
                font-display text-hero text-ink
                leading-[1.05] tracking-tight
                text-wrap-balance
                max-w-[720px] lg:max-w-[600px] xl:max-w-[720px]
                mb-6 drop-shadow-2xl
              "
            >
              Architecture docs
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-ink via-ink to-ink-muted/50">
                that write themselves.
              </span>
            </h1>

            {/* ── Lead paragraph ── */}
            <p
              className="
                hero-lead
                font-body text-lg text-ink-muted
                leading-relaxed
                max-w-[520px]
                mb-10
              "
            >
              Archie reads your code, analyzes your Git history, and keeps{" "}
              <code className="font-mono text-sm text-ink bg-surface-2/60 backdrop-blur-sm px-1.5 py-0.5 rounded-md border border-border/80 shadow-inner">
                ARCHITECTURE.md
              </code>{" "}
              up to date on every commit.
            </p>

            {/* ── CTA row ── */}
            <div className="hero-cta flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:mb-0">
              {/* Primary 3D Tactile Button */}
              <a
                href="#install"
                className="
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
                style={{
                  boxShadow: "0 4px 0 0 var(--color-accent-dim)",
                }}
              >
                {/* Button highlight glare */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-t-xl pointer-events-none" />
                npm install -g archie
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
                See how it works
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
        <div className="flex-1 w-full flex justify-center lg:justify-end xl:justify-center relative z-20">
          <HeroFlow />
        </div>
      </div>
    </section>
  );
}
