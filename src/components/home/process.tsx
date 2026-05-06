"use client";
import { Section, Eyebrow, SectionTitle } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ClipboardCheck, BookOpen, Car, Trophy } from "lucide-react";

const STEPS = [
  { icon: ClipboardCheck, t: "Inscription en 10 min", d: "Devis gratuit en ligne, dossier monté en 48h." },
  { icon: BookOpen, t: "Code à ton rythme", d: "Plateforme web + cours en salle 2x/semaine." },
  { icon: Car, t: "Conduite progressive", d: "Livret numérique, suivi compétence par compétence." },
  { icon: Trophy, t: "Examen + permis", d: "Examens blancs, accompagnement le jour J." },
];

export function Process() {
  return (
    <Section className="bg-surface-2/50">
      <ScrollReveal className="max-w-2xl mb-14">
        <Eyebrow>Comment ça marche</Eyebrow>
        <SectionTitle className="mt-3">4 étapes, zéro prise de tête.</SectionTitle>
      </ScrollReveal>

      <div className="relative grid md:grid-cols-4 gap-6">
        {/* Connector line */}
        <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px border-t-2 border-dashed border-brand-300/60 -z-0" />

        {STEPS.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.1} className="relative bg-background rounded-2xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_20px_-6px_rgba(255,90,54,.5)]">
                <s.icon className="size-6" />
              </span>
              <span className="text-display text-5xl font-semibold text-brand-100">0{i+1}</span>
            </div>
            <h3 className="text-lg font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{s.d}</p>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
