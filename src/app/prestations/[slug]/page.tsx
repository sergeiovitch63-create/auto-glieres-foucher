import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Check, Clock, Award, Wallet, Calendar, ArrowRight, Phone, ChevronRight } from "lucide-react";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/quote/lead-form";
import { QuoteCTA } from "@/components/quote/quote-cta";
import { SERVICES, SERVICE_BY_SLUG } from "@/lib/content/services";
import { BUSINESS } from "@/lib/content/business";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICE_BY_SLUG[slug];
  if (!s) return {};
  return {
    title: `${s.name} à ${BUSINESS.city}`,
    description: s.short,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  if (!service) notFound();

  const Icon = (Icons as any)[service.icon] ?? Icons.Car;
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-x pt-24 pb-4">
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs text-muted">
          <Link href="/" className="hover:text-foreground">Accueil</Link>
          <ChevronRight className="size-3" />
          <Link href="/prestations" className="hover:text-foreground">Prestations</Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground">{service.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <Section className="pt-6 pb-12">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon className="size-7" />
              </span>
              {service.isNew && <Badge variant="new">✨ Nouveau {service.year ?? ""}</Badge>}
              {service.cpfEligible && <Badge variant="solid">Éligible CPF</Badge>}
            </div>
            <h1 className="text-display text-5xl md:text-6xl lg:text-7xl text-balance">{service.name}</h1>
            <p className="mt-5 text-lg md:text-xl text-muted leading-relaxed max-w-xl">{service.description}</p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Stat icon={Calendar} label="Âge minimum" value={`${service.ageMin} ans`} />
              <Stat icon={Clock} label="Durée" value={service.duration} />
              {service.hours && <Stat icon={Award} label="Heures" value={`${service.hours} h`} />}
              {service.packagePrice && <Stat icon={Wallet} label="Forfait" value={formatPrice(service.packagePrice)} />}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteCTA size="lg" formation={service.slug} label="Demander un devis" />
              <Button asChild variant="outline" size="lg">
                <Link href={`tel:${BUSINESS.phoneIntl}`}>
                  <Phone /> {BUSINESS.phone}
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Highlights card */}
          <ScrollReveal delay={0.15} direction="left">
            <aside className="rounded-3xl border border-border bg-surface p-7 shadow-xl shadow-black/5 sticky top-24">
              <h2 className="text-display text-xl font-semibold mb-5">Points clés</h2>
              <ul className="space-y-3.5">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm">
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand text-white shrink-0 mt-0.5">
                      <Check className="size-3" />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-dashed border-border">
                <p className="text-xs text-muted mb-3">Ce forfait inclut :</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.cpfEligible && <Badge variant="brand">CPF</Badge>}
                  {service.oneEuroDay && <Badge variant="brand">Permis 1€/jour</Badge>}
                  {service.acceleratedAvailable && <Badge variant="brand">Formule accélérée dispo</Badge>}
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </Section>

      {/* Programme */}
      <Section className="pt-0">
        <ScrollReveal className="max-w-2xl mb-12">
          <Eyebrow>Programme</Eyebrow>
          <SectionTitle className="mt-3">Ce que tu vas apprendre.</SectionTitle>
          <SectionLead className="mt-5">
            On suit le référentiel REMC officiel, en l'adaptant à ton rythme.
          </SectionLead>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {service.programme.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="rounded-3xl border border-border bg-surface p-7">
              <p className="text-display text-5xl font-semibold text-brand-100 leading-none">0{i + 1}</p>
              <h3 className="text-display text-xl font-semibold mt-3">{step.title}</h3>
              <ul className="mt-4 space-y-2">
                {step.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="size-4 text-brand mt-0.5 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Lead form section */}
      <Section className="bg-surface-2/50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <Eyebrow>On démarre ?</Eyebrow>
            <SectionTitle className="mt-3">Demande ton devis<br/>{service.name}.</SectionTitle>
            <SectionLead className="mt-5">
              Réponse sous 24h, dossier monté en 48h, démarrage dans la foulée.
            </SectionLead>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.1}>
            <LeadForm defaultFormation={service.slug} />
          </ScrollReveal>
        </div>
      </Section>

      {/* Other services */}
      <Section>
        <ScrollReveal className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-display text-3xl md:text-4xl">Autres formations</h2>
          <Link href="/prestations" className="text-sm font-semibold text-brand inline-flex items-center gap-1 hover:gap-2 transition-all">
            Voir tout <ArrowRight className="size-4" />
          </Link>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-4">
          {otherServices.map((s) => {
            const SIcon = (Icons as any)[s.icon] ?? Icons.Car;
            return (
              <Link
                key={s.slug}
                href={`/prestations/${s.slug}`}
                className="group rounded-3xl border border-border bg-surface p-6 hover:border-brand-300 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <SIcon className="size-8 text-brand" />
                <h3 className="text-display text-xl font-semibold mt-4">{s.name}</h3>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}

function Stat({ icon: I, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-3.5">
      <I className="size-4 text-brand mb-1.5" />
      <p className="text-[11px] text-muted uppercase tracking-wider">{label}</p>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}
