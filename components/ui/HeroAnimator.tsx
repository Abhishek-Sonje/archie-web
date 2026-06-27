"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroAnimatorProps {
  children: React.ReactNode;
}

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
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 280,
      damping: 24,
    },
  },
} satisfies import("framer-motion").Variants;

export default function HeroAnimator({ children }: HeroAnimatorProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show" // We use animate instead of whileInView because this is the hero (above the fold)
      className="flex flex-col items-start w-full"
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div variants={itemVariants} className="w-full">
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
}