import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Car, Users, Award } from "lucide-react";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ServicesGrid } from "@/components/home/services-grid";
import { ReviewsSection } from "@/components/home/reviews-section";
import { FaqSnippet } from "@/components/home/faq-snippet";
import { FinalCTA } from "@/components/home/final-cta";
import { QuoteCTA } from "@/components/quote/quote-cta";
import { Button } from "@/components/ui/button";
import { TENANT } from "@/tenant";

export function SeoLocalPage({ slug }: { slug: string }) {
  const city = TENANT.nearbyCities.find((c) => c.slug === slug);
  if (!city) notFound();

  const km = city.km ?? 5;
  const intro = city.intro
    ?? `${TENANT.name} accompagne les habitants de ${city.name} et alentours depuis ${TENANT.founded}. ${TENANT.services.slice(0, 3).map(s => s.name).join(", ")} et code en ligne. Une équipe humaine, des tarifs transparents, et ${TENANT.successRateFirstAttempt}% de réussite au premier passage.`;

  return (
    <>
      <Section className="pt-32 pb-12">
        <ScrollReveal className="max-w-3xl">
          <Eyebrow>
            <MapPin className="size-3" /> {city.name}
          </Eyebrow>
          <SectionTitle className="mt-3">
            Auto-école à {city.name}.<br/>À {km} min de chez toi.
          </SectionTitle>
          <SectionLead className="mt-5">{intro}</SectionLead>
          <div className="mt-7 flex flex-wrap gap-3">
            <QuoteCTA size="lg" />
            <Button asChild variant="outline" size="lg">
              <Link href="/tarifs">Voir les tarifs</Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-3 gap-3">
          <Stat icon={Car} value={`${TENANT.services.length} formations`} label="Tout le catalogue" />
          <Stat icon={Award} value={`${TENANT.successRateFirstAttempt}% réussite`} label="au premier passage" />
          <Stat icon={Users} value={`${TENANT.studentsTrained.toLocaleString("fr-FR")}+ élèves`} label={`dont nombreux à ${city.name}`} />
        </div>
      </Section>

      {city.highlights && (
        <Section className="bg-surface-2/50">
          <ScrollReveal className="max-w-2xl mb-8">
            <Eyebrow>Pourquoi nous depuis {city.name}</Eyebrow>
            <SectionTitle className="mt-3">L'auto-école qui te suit, depuis {city.name}.</SectionTitle>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.highlights.map((h, i) => (
              <ScrollReveal key={i} delay={i * 0.06} className="rounded-3xl border border-border bg-surface p-6">
                <div className="text-display text-3xl font-semibold text-brand">0{i + 1}</div>
                <p className="mt-3 text-foreground">{h}</p>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      <ServicesGrid />
      <ReviewsSection />
      <FaqSnippet />
      <FinalCTA />
    </>
  );
}

function Stat({ icon: I, value, label }: { icon: React.ComponentType<{ className?: string }>; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <I className="size-5 text-brand mb-3" />
      <p className="text-display text-xl font-semibold">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}
