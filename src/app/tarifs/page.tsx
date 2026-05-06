import type { Metadata } from "next";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { QuoteCTA } from "@/components/quote/quote-cta";
import { Simulator } from "@/components/tarifs/simulator";
import { PRICING } from "@/lib/content/pricing";
import { formatPrice } from "@/lib/utils";
import { Check, Sparkles, Wallet, BadgeCheck, Calendar } from "lucide-react";
import Link from "next/link";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Tarifs — forfaits permis B, boîte auto, moto, code",
  description:
    "Tarifs transparents : permis B dès 1 490€, boîte auto dès 1 390€, code 290€, moto A2 1 290€. Financement CPF et permis 1€/jour disponibles.",
};

const PACKAGES = Object.values(PRICING.packages);

export default function TarifsPage() {
  return (
    <>
      <Section className="pt-32 pb-12">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-end">
          <ScrollReveal>
            <Eyebrow>Tarifs</Eyebrow>
            <SectionTitle className="mt-3">
              Transparents.<br/>Pas de mauvaise surprise.
            </SectionTitle>
            <SectionLead className="mt-5">
              Toutes les formations, tous les prix. Forfaits clairs, options à l'unité, financement CPF et permis 1€/jour. Demande un devis détaillé en 30 secondes.
            </SectionLead>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="grid grid-cols-3 gap-3">
            <Stat icon={Wallet} value="1 490 €" label="Permis B dès" />
            <Stat icon={BadgeCheck} value="100%" label="Éligible CPF" />
            <Stat icon={Calendar} value="1€/j" label="Étalement" />
          </ScrollReveal>
        </div>
      </Section>

      {/* Packages grid */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PACKAGES.map((p) => (
            <ScrollReveal
              key={p.slug}
              className={`relative rounded-3xl p-7 border transition-all hover:-translate-y-1 hover:shadow-xl ${
                "popular" in p && p.popular
                  ? "border-brand bg-foreground text-background shadow-2xl"
                  : "border-border bg-surface hover:border-brand-300"
              }`}
            >
              {"popular" in p && p.popular && (
                <Badge variant="brand" className="absolute -top-3 left-7 bg-brand text-white border-brand">
                  ⭐ Le plus choisi
                </Badge>
              )}
              {"tag" in p && p.tag && (
                <Badge className="absolute -top-3 right-7" variant="new">{p.tag}</Badge>
              )}
              <h3 className={`text-display text-xl font-semibold ${"popular" in p && p.popular ? "" : ""}`}>{p.label}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <p className="text-display text-5xl font-semibold tabular-nums">{formatPrice(p.price)}</p>
              </div>
              {"hours" in p && p.hours && (
                <p className={`text-sm ${"popular" in p && p.popular ? "text-background/70" : "text-muted"}`}>
                  {p.hours}h de conduite incluses
                </p>
              )}
              <ul className="mt-6 space-y-2.5">
                {p.includes.map((it) => (
                  <li key={it} className={`flex items-start gap-2 text-sm ${"popular" in p && p.popular ? "text-background/90" : "text-foreground"}`}>
                    <Check className={`size-4 mt-0.5 shrink-0 ${"popular" in p && p.popular ? "text-brand-400" : "text-brand"}`} />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <QuoteCTA
                  size="md"
                  className={`w-full ${"popular" in p && p.popular ? "bg-brand text-white hover:bg-brand-600" : ""}`}
                  variant={"popular" in p && p.popular ? "primary" : "outline"}
                  label="Choisir ce forfait"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Hourly rates */}
        <ScrollReveal className="mt-12 rounded-3xl border border-border bg-surface-2/50 p-7">
          <h3 className="text-display text-2xl font-semibold mb-5">Tarifs à l'heure</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.values(PRICING.hourly).map((h) => (
              <div key={h.label} className="flex items-center justify-between gap-3 rounded-xl bg-surface border border-border px-4 py-3">
                <span className="text-sm">{h.label}</span>
                <span className="text-display text-lg font-semibold tabular-nums">{formatPrice(h.price)}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* Simulator */}
      <Section className="bg-surface-2/50">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <ScrollReveal>
            <Eyebrow>Simulateur</Eyebrow>
            <SectionTitle className="mt-3">Quel est<br/>mon budget ?</SectionTitle>
            <SectionLead className="mt-5">
              Réponds à 4 questions, on te donne une estimation immédiate. Toujours indicatif, jamais piégeux.
            </SectionLead>
            <div className="mt-7 space-y-3">
              {[
                "Estimation min/max instantanée",
                "Détail ligne par ligne",
                "Éligibilité CPF & 1€/jour",
                "Aucune saisie obligatoire",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm">
                  <Sparkles className="size-4 text-brand" />
                  {t}
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} direction="left">
            <Simulator />
          </ScrollReveal>
        </div>
      </Section>

      {/* Financements */}
      <Section>
        <ScrollReveal className="max-w-2xl mb-10">
          <Eyebrow>Financements</Eyebrow>
          <SectionTitle className="mt-3">Les aides qui te font économiser.</SectionTitle>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-5">
          <ScrollReveal className="rounded-3xl border border-border bg-surface p-7">
            <div className="text-display text-3xl font-bold text-brand">CPF</div>
            <h3 className="text-display text-xl font-semibold mt-3">Mon Compte Formation</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Utilise tes droits formation pour financer ton permis (B, boîte auto, moto, code, passerelle). Notre auto-école est référencée sur Mon Compte Formation.
            </p>
            <Link
              href="https://www.moncompteformation.gouv.fr/"
              className="mt-4 inline-block text-sm font-semibold text-brand hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              moncompteformation.gouv.fr →
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="rounded-3xl border border-border bg-foreground text-background p-7 relative overflow-hidden">
            <div className="text-display text-3xl font-bold text-brand-400">1€/jour</div>
            <h3 className="text-display text-xl font-semibold mt-3">Permis à 1€ par jour</h3>
            <p className="mt-2 text-sm text-background/70 leading-relaxed">
              Prêt à taux zéro de l'État pour les 15-25 ans. Étalement de 600€ à 1 200€ par tranches de 30€/mois. On monte le dossier ensemble.
            </p>
            <div className="absolute -right-10 -bottom-10 size-40 rounded-full bg-brand-500 opacity-20 blur-3xl" />
          </ScrollReveal>
          <ScrollReveal delay={0.16} className="rounded-3xl border border-border bg-surface p-7">
            <div className="text-display text-3xl font-bold text-brand">PE</div>
            <h3 className="text-display text-xl font-semibold mt-3">Aide Pôle Emploi</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Si tu es demandeur d'emploi, France Travail peut financer jusqu'à 1 200€ de ton permis B. Demande à conseiller.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}

function Stat({ icon: I, value, label }: { icon: React.ComponentType<{ className?: string }>; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <I className="size-4 text-brand mb-2" />
      <p className="text-display text-xl font-semibold">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}
