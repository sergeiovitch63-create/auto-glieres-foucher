"use client";
import { Heart, Clock, Award, GraduationCap, MapPin, Wallet } from "lucide-react";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TENANT } from "@/tenant";

const teamFirstNames = TENANT.team.map((t) => t.name.split(" ")[0]).join(", ");

const REASONS = [
  {
    icon: Heart,
    title: "Une équipe qui prend le temps",
    desc: `Pas de modèle usine. ${teamFirstNames} te connaissent par ton prénom et adaptent les leçons.`,
    span: "lg:col-span-2",
    accent: true,
  },
  { icon: Award, title: "Qualiopi + CPF", desc: "Certifiés et finançables." },
  { icon: Clock, title: "Démarrage sous 48h", desc: "On monte ton dossier ANTS, tu commences direct le code et la conduite." },
  { icon: GraduationCap, title: "Livret d'apprentissage", desc: "Suis ta progression compétence par compétence avec ton moniteur." },
  {
    icon: MapPin,
    title: `Au cœur de ${TENANT.city}`,
    desc: `${TENANT.street} — parking, transports, et zones d'examen connues sur le bout des doigts.`,
    span: "lg:col-span-2",
  },
  { icon: Wallet, title: "Tarifs transparents", desc: "Aucun frais caché. Tout est listé sur le site." },
];

export function WhyUs() {
  return (
    <Section>
      <div className="max-w-3xl">
        <ScrollReveal>
          <Eyebrow>Pourquoi nous</Eyebrow>
          <SectionTitle className="mt-3">L'auto-école qu'on aurait voulu avoir.</SectionTitle>
          <SectionLead className="mt-5">
            Des moniteurs qui aiment vraiment leur métier, des outils modernes, et une approche
            humaine qu'on ne trouve plus partout.
          </SectionLead>
        </ScrollReveal>
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {REASONS.map((r, i) => (
          <ScrollReveal
            key={i}
            delay={i * 0.07}
            className={`group relative overflow-hidden rounded-3xl border border-border p-7 transition-all hover:border-brand-300 ${r.span ?? ""} ${
              r.accent
                ? "bg-foreground text-background hover:shadow-2xl"
                : "bg-surface hover:shadow-xl hover:shadow-brand-200/30"
            }`}
          >
            <r.icon
              className={`size-8 mb-5 ${r.accent ? "text-brand-400" : "text-brand"}`}
            />
            <h3 className={`text-display text-2xl ${r.accent ? "" : "text-foreground"}`}>{r.title}</h3>
            <p className={`mt-2 text-[15px] leading-relaxed ${r.accent ? "text-background/70" : "text-muted"}`}>
              {r.desc}
            </p>
            {r.accent && (
              <div className="absolute -right-20 -bottom-20 size-64 rounded-full bg-brand-500 opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />
            )}
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
