"use client";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { BUSINESS } from "@/lib/content/business";

export function TeamSection() {
  return (
    <Section className="bg-foreground text-background">
      <div className="grid md:grid-cols-[1.2fr_2fr] gap-10 mb-12">
        <ScrollReveal>
          <Eyebrow className="text-brand-400">L'équipe</Eyebrow>
          <SectionTitle className="mt-3">5 personnes,<br/>1 mission.</SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <SectionLead className="text-background/70">
            Une équipe stable, soudée, qui te suit du premier rendez-vous au passage de l'examen. Pas de moniteur tournant, pas de planning à rallonge.
          </SectionLead>
        </ScrollReveal>
      </div>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {BUSINESS.team.map((m) => (
          <StaggerItem key={m.name}>
            <article className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.02] hover:from-brand-500/30 hover:to-brand-500/5 transition-all duration-500">
              <div
                aria-hidden
                className="absolute inset-0 bg-noise opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center text-display text-7xl md:text-8xl font-bold text-white/10 group-hover:text-brand-400/40 transition-colors">
                {m.name[0]}
              </div>
              <div className="absolute inset-x-4 bottom-4 z-10">
                <p className="text-display text-2xl font-semibold">{m.name}</p>
                <p className="text-xs text-background/60 mt-1">{m.role}</p>
                <p className="text-xs text-background/60 mt-3 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">
                  {m.bio}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
