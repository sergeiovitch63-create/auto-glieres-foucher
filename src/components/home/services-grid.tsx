"use client";
import * as React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { SERVICES } from "@/lib/content/services";
import { formatPrice } from "@/lib/utils";

export function ServicesGrid() {
  return (
    <Section className="bg-surface-2/50">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <ScrollReveal>
          <Eyebrow>Nos prestations</Eyebrow>
          <SectionTitle className="mt-3">8 formations.<br/>Une seule promesse : ton permis.</SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <SectionLead>
            Du permis B classique à la moto A2 nouveauté 2026, en passant par la conduite accompagnée à 88% de réussite.
          </SectionLead>
        </ScrollReveal>
      </div>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {SERVICES.map((service) => {
          const Icon = (Icons as any)[service.icon] ?? Icons.Car;
          return (
            <StaggerItem key={service.slug}>
              <Link
                href={`/prestations/${service.slug}`}
                className="group relative flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-200/40 hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-start justify-between mb-5">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Icon className="size-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    {service.isNew && <Badge variant="new">✨ Nouveau {service.year ?? ""}</Badge>}
                    <motion.span
                      initial={{ x: -4, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="inline-flex size-9 items-center justify-center rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <ArrowUpRight className="size-4" />
                    </motion.span>
                  </div>
                </div>

                <h3 className="relative text-xl font-semibold tracking-tight">{service.name}</h3>
                <p className="relative mt-2 text-sm text-muted leading-relaxed flex-1">{service.short}</p>

                <div className="relative mt-5 pt-5 border-t border-dashed border-border flex items-end justify-between gap-3">
                  <div>
                    {service.packagePrice ? (
                      <>
                        <p className="text-xs text-muted">À partir de</p>
                        <p className="text-display text-2xl font-semibold text-foreground">
                          {formatPrice(service.packagePrice)}
                        </p>
                      </>
                    ) : service.hourPrice ? (
                      <>
                        <p className="text-xs text-muted">L'heure</p>
                        <p className="text-display text-2xl font-semibold text-foreground">
                          {formatPrice(service.hourPrice)}
                        </p>
                      </>
                    ) : null}
                  </div>
                  {service.cpfEligible && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-foreground text-background">
                      CPF
                    </span>
                  )}
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
