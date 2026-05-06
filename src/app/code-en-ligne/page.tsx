import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, MonitorPlay, Trophy, BookOpen, Target, Brain, BarChart3, Check, ArrowRight } from "lucide-react";
import { CodePreview } from "@/components/home/code-preview";
import { FinalCTA } from "@/components/home/final-cta";
import { QuoteCTA } from "@/components/quote/quote-cta";

export const metadata: Metadata = {
  title: "Code de la route en ligne — accès illimité 6 mois",
  description:
    "Plateforme code en ligne web et mobile, 1 000+ questions officielles, examens blancs chronométrés, statistiques par thème. Forfait à 290€.",
};

const FEATURES = [
  { icon: BookOpen, t: "10 thèmes officiels", d: "Tout le programme du code, à jour 2026." },
  { icon: Target, t: "1 000+ questions", d: "Questions officielles + nos exclusives." },
  { icon: Brain, t: "Recommandations IA", d: "On te pousse les thèmes où tu as moins de 70%." },
  { icon: BarChart3, t: "Stats détaillées", d: "Suis ta progression, identifie tes points faibles." },
  { icon: Smartphone, t: "Web + mobile", d: "Bosse depuis ton canapé, ton bus, ton lit." },
  { icon: Trophy, t: "Examens blancs", d: "Conditions réelles : 40 questions, 30 minutes." },
];

export default function CodeEnLignePage() {
  return (
    <>
      <Section className="pt-32 pb-12">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <ScrollReveal>
            <Badge variant="new">✨ Plateforme nouvelle génération</Badge>
            <Eyebrow className="mt-5">Code en ligne</Eyebrow>
            <SectionTitle className="mt-3">Le code,<br/>partout, tout le temps.</SectionTitle>
            <SectionLead className="mt-5">
              Notre plateforme web et mobile : 1 000+ questions officielles, mode entraînement libre, examens blancs, stats personnalisées. 290€ pour 6 mois d'accès illimité.
            </SectionLead>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="xl">
                <Link href="/login">
                  Accéder à la plateforme <ArrowRight />
                </Link>
              </Button>
              <QuoteCTA size="xl" variant="outline" formation="code-de-la-route" label="S'inscrire au forfait" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="left" className="rounded-3xl bg-foreground text-background p-7 relative overflow-hidden">
            <div className="text-display text-7xl font-bold tabular-nums">290€</div>
            <p className="text-background/70 mt-2">6 mois d'accès illimité</p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Web + mobile", "Cours en salle 2x/semaine", "Inscription à l'examen incluse", "Sans engagement"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-brand-400" /> {t}
                </li>
              ))}
            </ul>
            <div className="absolute -right-20 -bottom-20 size-64 rounded-full bg-brand-500 opacity-20 blur-3xl" />
          </ScrollReveal>
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-surface-2/50">
        <ScrollReveal className="max-w-2xl mb-10">
          <Eyebrow>Fonctionnalités</Eyebrow>
          <SectionTitle className="mt-3">Tout pour réussir<br/>du premier coup.</SectionTitle>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <StaggerItem key={f.t}>
              <div className="rounded-3xl border border-border bg-surface p-7 h-full">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-4">
                  <f.icon className="size-6" />
                </span>
                <h3 className="text-display text-xl font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{f.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Demo screenshot reuse */}
      <CodePreview />

      <FinalCTA />
    </>
  );
}
