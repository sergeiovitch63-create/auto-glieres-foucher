"use client";
import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type Direction = "up" | "down" | "left" | "right" | "none";

type ScrollRevealProps = Omit<HTMLMotionProps<"div">, "initial" | "animate" | "whileInView" | "viewport"> & {
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  amount?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 24,
  once = true,
  amount = 0.2,
  ...props
}: ScrollRevealProps) {
  const reduced = useReducedMotion();

  const offset = reduced
    ? { x: 0, y: 0 }
    : direction === "up"
    ? { y: distance, x: 0 }
    : direction === "down"
    ? { y: -distance, x: 0 }
    : direction === "left"
    ? { x: distance, y: 0 }
    : direction === "right"
    ? { x: -distance, y: 0 }
    : { x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  distance = 20,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
