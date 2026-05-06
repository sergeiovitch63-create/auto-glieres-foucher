import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { SERVICES } from "@/lib/content/services";
import { formatPrice } from "@/lib/utils";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Nos formations — permis B, moto, code, conduite accompagnée",
  description:
    "Découvre nos 8 formations : permis B, boîte automatique, moto A2, conduite accompagnée, supervisée, code en ligne, AM et passerelle. Tarifs transparents, financement CPF.",
};

export default function PrestationsPage() {
  return (
    <>
      <Section className="pt-32 pb-12">
        <ScrollReveal className="max-w-3xl">
          <Eyebrow>Prestations</Eyebrow>
          <SectionTitle className="mt-3">
            Toutes nos formations,<br/>une seule équipe.
          </SectionTitle>
          <SectionLead className="mt-5">
            Du permis B classique à la moto A2, en passant par le code en ligne et la passerelle boîte auto. On t'accompagne du dossier au passage de l'examen.
          </SectionLead>
        </ScrollReveal>
      </Section>

      <Section className="pt-0">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Car;
            return (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/prestations/${s.slug}`}
                  className="group relative block h-full rounded-3xl border border-border bg-surface overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-200/40 hover:border-brand-300 transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand-50 via-amber-50 to-surface-2 relative overflow-hidden">
                    <div aria-hidden className="absolute inset-0 bg-noise opacity-30" />
                    <Icon className="absolute right-6 bottom-6 size-24 text-brand-200 group-hover:text-brand-400 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
                    {s.isNew && (
                      <Badge variant="new" className="absolute top-4 left-4">
                        ✨ Nouveau {s.year ?? ""}
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 transition-all">
                      <ArrowUpRight className="size-4" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-display text-2xl font-semibold">{s.name}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{s.short}</p>
                    <div className="mt-5 flex items-end justify-between gap-3 pt-4 border-t border-dashed border-border">
                      {s.packagePrice ? (
                        <div>
                          <p className="text-xs text-muted">À partir de</p>
                          <p className="text-display text-xl font-semibold text-foreground">{formatPrice(s.packagePrice)}</p>
                        </div>
                      ) : (
                        <div className="text-sm text-muted">Sur devis</div>
                      )}
                      <div className="flex flex-wrap gap-1.5">
                        {s.cpfEligible && <Badge variant="solid">CPF</Badge>}
                        {s.oneEuroDay && <Badge variant="brand">1€/jour</Badge>}
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <FinalCTA />
    </>
  );
}
