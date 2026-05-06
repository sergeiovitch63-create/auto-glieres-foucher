"use client";
import * as React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/content/business";
import { motion } from "motion/react";

export function FloatingCallButton() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 left-5 z-40 md:hidden"
    >
      <Link
        href={`tel:${BUSINESS.phoneIntl}`}
        aria-label={`Appeler ${BUSINESS.name}`}
        className="pulse-ring inline-flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand-500/40 active:scale-95 transition-transform"
      >
        <Phone className="size-6" />
      </Link>
    </motion.div>
  );
}
