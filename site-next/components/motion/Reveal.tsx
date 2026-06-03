"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

// Scroll reveal — fade-up. Tokens da referência:
// duration base 0.35s, easing enter cubic-bezier(0,0,0.2,1), offset 20px.
type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
