"use client";
import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, Star, Phone, Sparkles, BadgeCheck } from "lucide-react";
import { SplitText } from "@/components/animations/split-text";
import { Magnetic } from "@/components/animations/magnetic";
import { LeadForm } from "@/components/quote/lead-form";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";

export function Hero() {
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 bg-noise"
    >
      {/* Decorative blobs */}
      <motion.div
        style={{ y: y1, opacity }}
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full blob"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-300 via-brand-500 to-brand-700 opacity-30 blur-3xl" />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        aria-hidden
        className="pointer-events-none absolute top-40 -left-40 w-[480px] h-[480px] rounded-full blob"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-200 via-orange-200 to-brand-200 opacity-50 blur-3xl" />
      </motion.div>

      {/* Grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_minmax(360px,440px)] lg:gap-14 items-start">
          {/* Left column */}
          <div className="pt-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-4 py-1.5 text-xs font-medium"
            >
              <span className="inline-flex items-center gap-1 text-brand">
                <Sparkles className="size-3.5" />
                <span className="font-semibold">{BUSINESS.copy.heroBadge}</span>
              </span>
              {BUSINESS.copy.heroBadgeSecondary && (
                <>
                  <span className="h-3 w-px bg-border" />
                  <span className="text-muted">{BUSINESS.copy.heroBadgeSecondary}</span>
                </>
              )}
            </motion.div>

            <h1 className="text-display mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[96px]">
              <SplitText
                as="span"
                text={BUSINESS.copy.heroTitleLine1}
                className="block"
                delay={0.05}
              />
              <span className="block">
                <SplitText
                  as="span"
                  text={BUSINESS.copy.heroTitleLine2}
                  className="inline"
                  delay={0.25}
                  wordClassName={BUSINESS.brand.logo.goldEffect ? "text-gold" : "text-brand-gradient"}
                />
                <motion.span
                  initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1.4, 0.36, 1] }}
                  className="inline-block ml-2"
                >
                  .
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-6 max-w-xl text-lg md:text-xl text-muted leading-relaxed"
            >
              {BUSINESS.copy.heroSubtitle
                .replace("__CITY__", BUSINESS.city)
                .replace("__FOUNDED__", String(BUSINESS.founded))
                .replace("__SUCCESS__", String(BUSINESS.successRateFirstAttempt))
                .split(BUSINESS.city).map((part, i, arr) =>
                  i < arr.length - 1
                    ? <React.Fragment key={i}>{part}<strong className="text-foreground font-medium">{BUSINESS.city}</strong></React.Fragment>
                    : <React.Fragment key={i}>{part}</React.Fragment>
                )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <Magnetic strength={0.2}>
                <Button asChild size="xl" className="w-full sm:w-auto">
                  <Link href="/tarifs">
                    Voir les tarifs <ArrowRight />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
                  <Link href={`tel:${BUSINESS.phoneIntl}`}>
                    <Phone /> {BUSINESS.phone}
                  </Link>
                </Button>
              </Magnetic>
            </motion.div>

            {/* Trust mini-row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {BUSINESS.reviews.slice(0, 4).map((r, i) => (
                    <span
                      key={i}
                      className="inline-flex size-8 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold ring-2 ring-background"
                    >
                      {r.initials.charAt(0)}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[0,1,2,3,4].map(i => <Star key={i} className="size-3.5 fill-current" />)}
                    <span className="text-foreground font-semibold ml-1">{BUSINESS.rating.toString().replace(".", ",")}</span>
                  </div>
                  <p className="text-xs text-muted">{BUSINESS.ratingCount} avis Google</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <BadgeCheck className="size-5 text-brand" />
                <span className="font-medium">Qualiopi & CPF</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <BadgeCheck className="size-5 text-brand" />
                <span className="font-medium">Permis 1€/jour</span>
              </div>
            </motion.div>
          </div>

          {/* Right column — embedded form */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-200/40 via-brand-100/30 to-transparent blur-2xl pointer-events-none" />
            <div className="relative">
              <LeadForm />
            </div>

            {/* Floating mini-card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="hidden md:flex absolute -left-8 -bottom-6 items-center gap-2.5 rounded-2xl border border-border bg-background shadow-xl px-4 py-3"
            >
              <span className="size-2 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className="text-xs font-semibold leading-tight">Lucie vient de réserver</p>
                <p className="text-[11px] text-muted">il y a 2 minutes · Permis B</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
