"use client";
import Link from "next/link";
import { Section, Eyebrow, SectionTitle } from "@/components/ui/section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ArrowRight } from "lucide-react";
import { FAQ } from "@/lib/content/faq";

export function FaqSnippet() {
  const top = FAQ.slice(0, 6);
  return (
    <Section>
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <ScrollReveal>
          <Eyebrow>Questions fréquentes</Eyebrow>
          <SectionTitle className="mt-3">Tout ce que tu te demandes,<br/>en 6 points.</SectionTitle>
          <Link
            href="/faq"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all"
          >
            Voir toutes les questions <ArrowRight className="size-4" />
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Accordion type="single" collapsible className="rounded-3xl border border-border bg-surface px-6 md:px-8">
            {top.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </Section>
  );
}
