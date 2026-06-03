"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

// Container que escalona a entrada dos filhos. Use <StaggerItem> nos filhos.
type StaggerProps = HTMLMotionProps<"div"> & { stagger?: number };

export function Stagger({ stagger = 0.08, children, ...rest }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
