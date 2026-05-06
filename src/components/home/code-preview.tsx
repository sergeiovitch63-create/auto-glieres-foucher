"use client";
import Link from "next/link";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Smartphone, MonitorPlay, Trophy } from "lucide-react";
import { motion } from "motion/react";

export function CodePreview() {
  return (
    <Section className="overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal>
          <Eyebrow>Code en ligne</Eyebrow>
          <SectionTitle className="mt-3">Le code,<br/>sur ton canapé.</SectionTitle>
          <SectionLead className="mt-5">
            Plus de 1 000 questions officielles, mode entraînement libre, examens blancs chronométrés, statistiques par thème. Et l'app fonctionne sur mobile.
          </SectionLead>
          <ul className="mt-7 space-y-3">
            {[
              { icon: Smartphone, t: "Web + mobile, accessible 24/7" },
              { icon: MonitorPlay, t: "Cours en salle 2x/semaine" },
              { icon: Trophy, t: "Examens blancs hebdomadaires" },
            ].map((it, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <it.icon className="size-4" />
                </span>
                <span className="font-medium">{it.t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/code-en-ligne">
                Découvrir la plateforme <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/prestations/code-de-la-route">Forfait à 290 €</Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.2}>
          <CodeMockup />
        </ScrollReveal>
      </div>
    </Section>
  );
}

function CodeMockup() {
  return (
    <div className="relative">
      {/* Background glow */}
      <div className="absolute inset-0 -m-8 rounded-[40px] bg-gradient-to-br from-brand-200/40 via-brand-100/30 to-transparent blur-3xl" />

      {/* Main quiz card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl border border-border bg-surface shadow-2xl shadow-black/10 p-6"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand text-white text-xs font-bold">
              23
            </span>
            <p className="text-sm text-muted">/ 40 questions</p>
          </div>
          <span className="font-mono text-sm font-semibold text-foreground tabular-nums">
            ⏱ 17:42
          </span>
        </div>

        <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-amber-100 via-amber-50 to-brand-50 mb-5 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-noise opacity-40" />
          <span className="text-display text-7xl">🚦</span>
          <span className="absolute bottom-3 left-3 text-xs text-foreground/60 font-medium">
            Question 23 · Priorités
          </span>
        </div>

        <p className="text-base font-semibold text-foreground mb-4">
          Le feu passe à l'orange clignotant. Que dois-je faire ?
        </p>

        <div className="space-y-2">
          {[
            { l: "A", t: "Je m'arrête immédiatement", ok: false },
            { l: "B", t: "Je passe en cédant le passage", ok: true },
            { l: "C", t: "J'accélère pour passer rapidement", ok: false },
          ].map((opt) => (
            <motion.label
              key={opt.l}
              whileHover={{ x: 2 }}
              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                opt.ok ? "border-green-300 bg-green-50" : "border-border bg-surface hover:border-brand-300"
              }`}
            >
              <span className={`inline-flex size-8 items-center justify-center rounded-lg font-bold text-sm ${
                opt.ok ? "bg-green-500 text-white" : "bg-surface-2 text-foreground"
              }`}>
                {opt.ok ? <Check className="size-4" /> : opt.l}
              </span>
              <span className="text-sm">{opt.t}</span>
            </motion.label>
          ))}
        </div>
      </motion.div>

      {/* Stats card floating */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute -bottom-6 -left-4 md:-left-12 rounded-2xl border border-border bg-background shadow-xl p-4 w-56"
      >
        <p className="text-xs font-semibold text-muted uppercase tracking-wider">Tes stats</p>
        <p className="text-display text-3xl font-semibold mt-1">87 %</p>
        <p className="text-xs text-muted">de bonnes réponses cette semaine</p>
        <div className="mt-3 h-1.5 rounded-full bg-surface-2 overflow-hidden">
          <div className="h-full w-[87%] bg-gradient-to-r from-brand-400 to-brand-600" />
        </div>
      </motion.div>
    </div>
  );
}
