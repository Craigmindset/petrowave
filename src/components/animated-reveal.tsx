"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  offsetX?: number | string;
  offsetY?: number | string;
};

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  offsetX = 0,
  offsetY = 24,
}: AnimatedRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: offsetX, y: offsetY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
