"use client";
import { CountUp } from "@/components/animations/count-up";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Section, Eyebrow } from "@/components/ui/section";
import { TENANT } from "@/tenant";

const STATS = [
  { value: TENANT.studentsTrained, suffix: "+", label: "Élèves formés", sub: `depuis ${TENANT.founded}` },
  { value: TENANT.successRateFirstAttempt, suffix: " %", label: "Réussite au 1er passage", sub: "moyenne nationale : 60 %" },
  { value: TENANT.rating, decimals: 1, suffix: "/5", label: "Note Google", sub: `${TENANT.ratingCount} avis vérifiés` },
  { value: new Date().getFullYear() - TENANT.founded, label: "Ans d'expérience", sub: `depuis ${TENANT.founded} à ${TENANT.city}` },
];

export function StatsSection() {
  return (
    <Section className="py-20 md:py-24">
      <ScrollReveal className="max-w-2xl">
        <Eyebrow>Les chiffres parlent</Eyebrow>
        <h2 className="text-display mt-3 text-3xl md:text-4xl text-balance">
          {TENANT.copy.statsTitle ?? "Une auto-école qui livre la marchandise."}
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {STATS.map((s, i) => (
          <ScrollReveal
            key={i}
            delay={i * 0.08}
            className="bg-surface p-6 md:p-8 hover:bg-surface-2 transition-colors group"
          >
            <p className={`text-display text-4xl md:text-6xl tabular-nums tracking-tight ${
              TENANT.brand.logo.goldEffect ? "text-gold" : "text-foreground"
            }`}>
              <CountUp to={s.value} suffix={s.suffix ?? ""} decimals={s.decimals ?? 0} />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">{s.label}</p>
            <p className="text-xs text-muted mt-1">{s.sub}</p>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
