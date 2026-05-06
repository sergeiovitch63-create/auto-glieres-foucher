"use client";
import * as React from "react";
import Image from "next/image";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { CountUp } from "@/components/animations/count-up";
import { REVIEWS, REVIEW_STATS } from "@/lib/content/reviews";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BUSINESS } from "@/lib/content/business";
import { FinalCTA } from "@/components/home/final-cta";

const FORMATIONS = ["Toutes", ...Array.from(new Set(REVIEWS.map((r) => r.formation)))];

export default function AvisPage() {
  const [filter, setFilter] = React.useState("Toutes");
  const filtered = filter === "Toutes" ? REVIEWS : REVIEWS.filter((r) => r.formation === filter);

  return (
    <>
      <Section className="pt-32 pb-12">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <ScrollReveal>
            <Eyebrow>Avis Google</Eyebrow>
            <SectionTitle className="mt-3">Ce que nos élèves<br/>en pensent.</SectionTitle>
            <SectionLead className="mt-5">
              {REVIEW_STATS.total} avis vérifiés sur Google, mis à jour en continu. Pas de filtre, pas de triche.
            </SectionLead>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="rounded-3xl border border-border bg-foreground text-background p-7">
            <div className="flex items-baseline gap-3">
              <p className="text-display text-6xl font-semibold tabular-nums">
                <CountUp to={REVIEW_STATS.average} decimals={1} />
              </p>
              <p className="text-background/60">/ 5</p>
            </div>
            <div className="mt-2 flex items-center gap-1 text-amber-400">
              {[0,1,2,3,4].map(i => <Star key={i} className="size-5 fill-current" />)}
            </div>
            <p className="mt-2 text-sm text-background/70">
              <CountUp to={REVIEW_STATS.total} /> avis Google
            </p>
            <Button asChild variant="secondary" size="md" className="mt-5 w-full bg-brand text-white hover:bg-brand-600">
              <a href={BUSINESS.social.google} target="_blank" rel="noreferrer">
                Voir sur Google <ExternalLink />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="pt-0">
        <ScrollReveal className="flex flex-wrap gap-2 mb-8">
          {FORMATIONS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-surface border border-border hover:border-brand-300"
              }`}
            >
              {f}
            </button>
          ))}
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((r) => (
            <StaggerItem key={r.id}>
              <article className="rounded-3xl border border-border bg-surface p-6 hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col">
                <header className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-sm font-bold">
                    {r.initials}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{r.author}</p>
                    <time className="text-xs text-muted">{new Date(r.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
                  </div>
                </header>
                <Badge variant="brand" className="mt-3 self-start">{r.formation}</Badge>
                <Quote className="size-5 text-brand-300 mt-4" />
                <p className="mt-2 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                {r.reply && (
                  <div className="mt-4 pl-3 border-l-2 border-brand-200 text-xs text-muted">
                    <p className="font-semibold text-foreground mb-1">Réponse de l'auto-école</p>
                    {r.reply}
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <FinalCTA />
    </>
  );
}
