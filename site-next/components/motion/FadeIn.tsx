"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

// Entrada animada NO LOAD (anima ao montar) — pro topo da página ter movimento
// imediato, sem depender de scroll. Easing-signature da referência.
type FadeInProps = HTMLMotionProps<"div"> & { delay?: number };

export function FadeIn({ delay = 0, children, ...rest }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
