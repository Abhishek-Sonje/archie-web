"use client";

import { motion } from "framer-motion";
import React from "react";

interface ProofSectionRevealProps {
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

export default function ProofSectionReveal({
  children,
}: ProofSectionRevealProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full"
    >
      {/* 
        We map through children and wrap items with the 'proof-item' class 
        in our motion variants. Since we are passing complex DOM structures,
        we apply the stagger to the parent and handle the motion styling 
        on the specific nodes in the parent component via CSS or direct motion wrapping.
      */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Wrap the entire grid in the stagger context
          return (
            <motion.div variants={itemVariants} className="w-full h-full">
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
}
