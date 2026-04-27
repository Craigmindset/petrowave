"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedReveal({
  children,
  className,
  delay = 0,
}: AnimatedRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
