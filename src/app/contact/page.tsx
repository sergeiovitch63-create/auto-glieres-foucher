import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/social";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ContactMap } from "@/components/contact/contact-map";
import { LeadForm } from "@/components/quote/lead-form";
import { OpenStatus } from "@/components/layout/open-status";
import { BUSINESS, HOURS_LABEL } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${BUSINESS.name} — ${BUSINESS.address}. Tél : ${BUSINESS.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-32 pb-12">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <ScrollReveal>
            <Eyebrow>Contact</Eyebrow>
            <SectionTitle className="mt-3">Passe nous voir,<br/>on offre le café.</SectionTitle>
            <SectionLead className="mt-5">
              Au cœur de {BUSINESS.city}. {BUSINESS.team[1]?.name ?? "L'accueil"} t'attend pendant les horaires d'ouverture.
            </SectionLead>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              <InfoCard icon={MapPin} label="Adresse">
                <p>{BUSINESS.street}</p>
                <p>{BUSINESS.postalCode} {BUSINESS.city}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs text-brand font-semibold hover:underline"
                >
                  Itinéraire →
                </a>
              </InfoCard>
              <InfoCard icon={Phone} label="Téléphone">
                <a href={`tel:${BUSINESS.phoneIntl}`} className="text-foreground hover:text-brand transition-colors">
                  {BUSINESS.phone}
                </a>
              </InfoCard>
              <InfoCard icon={Mail} label="Email">
                <a href={`mailto:${BUSINESS.email}`} className="text-foreground hover:text-brand transition-colors break-all">
                  {BUSINESS.email}
                </a>
              </InfoCard>
              <InfoCard icon={Clock} label="Horaires">
                <OpenStatus />
                <ul className="mt-2 text-xs text-muted space-y-0.5">
                  {(Object.keys(BUSINESS.hours) as (keyof typeof BUSINESS.hours)[]).map((day) => (
                    <li key={day} className="flex justify-between gap-3">
                      <span>{HOURS_LABEL[day]}</span>
                      <span className="text-foreground">{BUSINESS.hours[day].length === 0 ? "Fermé" : BUSINESS.hours[day].join(" / ")}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <a aria-label="Instagram" href={BUSINESS.social.instagram} className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface hover:bg-brand-50 hover:border-brand-300 transition-colors">
                <InstagramIcon className="size-4" />
              </a>
              <a aria-label="Facebook" href={BUSINESS.social.facebook} className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface hover:bg-brand-50 hover:border-brand-300 transition-colors">
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="left">
            <LeadForm />
          </ScrollReveal>
        </div>
      </Section>

      <Section className="pt-0">
        <ScrollReveal>
          <ContactMap />
        </ScrollReveal>
      </Section>
    </>
  );
}

function InfoCard({ icon: I, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <I className="size-4 text-brand mb-2" />
      <p className="text-xs text-muted uppercase tracking-wider mb-2">{label}</p>
      <div className="text-sm">{children}</div>
    </div>
  );
}
