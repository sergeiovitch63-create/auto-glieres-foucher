"use client";
import * as React from "react";
import { Search } from "lucide-react";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { FAQ, FAQ_CATEGORIES } from "@/lib/content/faq";
import { FinalCTA } from "@/components/home/final-cta";

export default function FaqPage() {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState<string>("Toutes");

  const filtered = FAQ.filter((f) => {
    const matchCat = cat === "Toutes" || f.category === cat;
    const ql = q.trim().toLowerCase();
    const matchQ = !ql || f.q.toLowerCase().includes(ql) || f.a.toLowerCase().includes(ql);
    return matchCat && matchQ;
  });

  return (
    <>
      <Section className="pt-32 pb-12">
        <ScrollReveal className="max-w-3xl">
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle className="mt-3">On répond à tout.</SectionTitle>
          <SectionLead className="mt-5">
            Toutes les questions qu'on nous pose le plus souvent. Tu ne trouves pas ? Pose-la directement par chat ou par téléphone.
          </SectionLead>
        </ScrollReveal>

        <ScrollReveal className="mt-10 grid lg:grid-cols-[260px_1fr] gap-8 items-start">
          {/* Sidebar */}
          <aside className="space-y-2 lg:sticky lg:top-24">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Rechercher…"
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              />
            </div>
            <div className="flex flex-wrap lg:flex-col gap-1.5">
              {["Toutes", ...FAQ_CATEGORIES].map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                    cat === c
                      ? "bg-foreground text-background font-semibold"
                      : "hover:bg-surface-2 text-muted hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <p className="rounded-3xl border border-border bg-surface p-8 text-center text-muted">
                Aucun résultat. Essaie un autre mot-clé.
              </p>
            ) : (
              <Accordion type="single" collapsible className="rounded-3xl border border-border bg-surface px-6 md:px-8">
                {filtered.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </ScrollReveal>
      </Section>

      <FinalCTA />
    </>
  );
}
