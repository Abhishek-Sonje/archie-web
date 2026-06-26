"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavScrollWrapperProps {
  children: React.ReactNode;
}

export default function NavScrollWrapper({ children }: NavScrollWrapperProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Framer motion's highly optimized scroll listener
  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 40;
    if (shouldBeScrolled !== isScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
  });

  return (
    <motion.div
      // The `layout` prop tells Framer Motion to automatically calculate and
      // smoothly animate the difference between the max-w-[1280px] and max-w-4xl states.
      layout
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 0.8,
      }}
      // We use framer-motion's GPU-accelerated 'y' axis instead of CSS margin (mt-4)
      // to prevent the browser from recalculating document layout on scroll.
      animate={{
        y: isScrolled ? 10 : 0,
      }}
      className={cn(
        "mx-auto pointer-events-auto overflow-hidden",
        "transition-colors duration-500 ease-out", // Only CSS transition the colors/blur
        isScrolled
          ? "max-w-4xl bg-surface/75 backdrop-blur-xl border border-border/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] rounded-[1.25rem]"
          : "max-w-[1280px] bg-transparent border-transparent shadow-none rounded-none",
      )}
    >
      {children}
    </motion.div>
  );
}
