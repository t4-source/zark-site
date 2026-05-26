"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  amount?: number;
  as?: "div" | "section" | "article" | "ul" | "li";
  className?: string;
} & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition" | "children">;

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  amount = 0.2,
  as = "div",
  className,
  ...rest
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
