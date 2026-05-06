import type { Metadata } from "next";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { CountUp } from "@/components/animations/count-up";
import { Award, Heart, Users, Zap, BadgeCheck, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/content/business";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "L'auto-école — notre histoire, notre équipe",
  description: `L'auto-école : créée en ${BUSINESS.founded} à ${BUSINESS.city}. Une équipe expérimentée, ${BUSINESS.studentsTrained}+ élèves formés, ${BUSINESS.successRateFirstAttempt}% de réussite.`,
};

const VALUES = [
  { icon: Heart, t: "L'humain d'abord", d: "Pas de modèle usine. On te connaît, on t'accompagne, on s'adapte." },
  { icon: Award, t: "Exigence pédagogique", d: "Référentiel REMC, livret numérique, examens blancs réguliers." },
  { icon: Zap, t: "Modernité", d: "Plateforme code en ligne, espace élève, communication instantanée." },
  { icon: BadgeCheck, t: "Transparence", d: "Aucun frais caché, tarifs publics, contrat clair dès le départ." },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <ScrollReveal>
            <Eyebrow>L'auto-école</Eyebrow>
            <SectionTitle className="mt-3">L'auto-école qui<br/>a remis l'humain au centre.</SectionTitle>
            <SectionLead className="mt-5">
              {BUSINESS.copy.aboutIntro
                .replace("__FOUNDED__", String(BUSINESS.founded))
                .replace("__CITY__", BUSINESS.city)}
            </SectionLead>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="grid grid-cols-3 gap-3">
            <BigStat value={BUSINESS.studentsTrained} suffix="+" label="Élèves formés" />
            <BigStat value={BUSINESS.successRateFirstAttempt} suffix="%" label="Réussite 1er passage" />
            <BigStat value={BUSINESS.team.length} label="Personnes dans l'équipe" />
          </ScrollReveal>
        </div>
      </Section>

      {/* Values */}
      <Section className="pt-0">
        <ScrollReveal className="max-w-2xl mb-10">
          <Eyebrow>Nos valeurs</Eyebrow>
          <SectionTitle className="mt-3">4 principes,<br/>aucun compromis.</SectionTitle>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((v) => (
            <StaggerItem key={v.t}>
              <div className="rounded-3xl border border-border bg-surface p-6 h-full">
                <v.icon className="size-7 text-brand mb-4" />
                <h3 className="text-display text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{v.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Team */}
      <Section className="bg-foreground text-background">
        <ScrollReveal className="max-w-2xl mb-10">
          <Eyebrow className="text-brand-400">L'équipe</Eyebrow>
          <SectionTitle className="mt-3">Les visages<br/>derrière l'école.</SectionTitle>
          <SectionLead className="mt-5 text-background/70">
            Une équipe stable, soudée, qui te suit du dossier au passage de l'examen.
          </SectionLead>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BUSINESS.team.map((m) => (
            <StaggerItem key={m.name}>
              <article className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div className="aspect-square mb-5 rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-500/5 flex items-center justify-center text-display text-7xl font-bold text-brand-400/60">
                  {m.name[0]}
                </div>
                <h3 className="text-display text-2xl font-semibold">{m.name}</h3>
                <p className="text-sm text-brand-400 font-medium mt-1">{m.role}</p>
                <p className="text-sm text-background/70 mt-3 leading-relaxed">{m.bio}</p>
                {m.senior && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                    <Award className="size-3.5" /> Fondateur
                  </span>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Locaux */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal>
            <Eyebrow>Nos locaux</Eyebrow>
            <SectionTitle className="mt-3">Au cœur de {BUSINESS.city}.</SectionTitle>
            <SectionLead className="mt-5">
              {BUSINESS.address}. À 5 minutes à pied de la gare et du centre-ville. Salle de code dédiée, accueil chaleureux, café offert.
            </SectionLead>
            <div className="mt-7 space-y-3">
              {[
                { icon: MapPin, t: "Accès facile", d: "Parking, transports en commun, gare à 5 min." },
                { icon: Users, t: "Salle de code", d: "8 places, écran HD, supports officiels." },
                { icon: Heart, t: "Accueil 6 j/7", d: "L'équipe est là pour toi, sans rendez-vous." },
              ].map((i) => (
                <div key={i.t} className="flex items-start gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 shrink-0">
                    <i.icon className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{i.t}</p>
                    <p className="text-sm text-muted">{i.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.15}>
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand-200 via-amber-100 to-brand-50 relative overflow-hidden border border-border">
              <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center text-display text-9xl text-brand-400/30 font-bold">{BUSINESS.brand.logo.monogram}</div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 backdrop-blur p-4 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-muted">Photo bientôt</p>
                <p className="text-sm font-semibold mt-1">Locaux</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}

function BigStat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-5">
      <p className="text-display text-3xl md:text-4xl font-semibold text-foreground tabular-nums">
        <CountUp to={value} suffix={suffix} />
      </p>
      <p className="text-xs text-muted mt-1">{label}</p>
    </div>
  );
}
