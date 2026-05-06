"use client";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { QuoteCTA } from "@/components/quote/quote-cta";
import { BUSINESS } from "@/lib/content/business";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700" />
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-300 opacity-30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-pink-300 opacity-20 blur-3xl"
      />

      <div className="relative container-x text-white text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold">
            {BUSINESS.copy.finalCtaBadge ?? "🎯 Plus que quelques places ce mois-ci"}
          </span>
          <h2 className="text-display mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-balance leading-[0.95]">
            On commence quand ?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-white/80">
            Réponse en 24h. Aucun engagement. Et un café offert si tu passes au bureau.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <QuoteCTA size="xl" variant="secondary" className="bg-white text-foreground hover:bg-white/90 w-full sm:w-auto">
            Demander un devis <ArrowRight />
          </QuoteCTA>
          <Link
            href={`tel:${BUSINESS.phoneIntl}`}
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border-2 border-white/30 hover:bg-white/10 backdrop-blur text-white font-medium transition-colors w-full sm:w-auto"
          >
            <Phone className="size-5" /> {BUSINESS.phone}
          </Link>
        </ScrollReveal>
      </div>
    </Section>
  );
}
