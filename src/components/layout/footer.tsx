"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/social";
import { Logo } from "./logo";
import { OpenStatus } from "./open-status";
import { QuoteCTA } from "@/components/quote/quote-cta";
import { BUSINESS, HOURS_LABEL } from "@/lib/content/business";
import { SERVICES } from "@/lib/content/services";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative mt-20 border-t border-border bg-foreground text-background">
      {/* CTA top */}
      <div className="container-x py-16 md:py-20 border-b border-white/10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-brand-400">
              <span className="inline-block h-px w-6 bg-brand-400" />
              Prêt(e) à passer le permis ?
            </span>
            <h2 className="text-display mt-4 text-4xl md:text-6xl text-balance">
              On te recontacte sous 24h. <span className="text-brand-400">Sans engagement.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <QuoteCTA size="xl" label="Demander un devis" className="w-full" />
            <a
              href={`tel:${BUSINESS.phoneIntl}`}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
            >
              <Phone className="size-5" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x py-14 grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4 space-y-5">
          <Logo className="text-background" />
          <p className="text-sm text-background/70 leading-relaxed max-w-sm">
            {BUSINESS.name} à {BUSINESS.city} depuis {BUSINESS.founded}. {BUSINESS.services.slice(0, 4).map(s => s.name).join(", ")} et code en ligne.
            {" "}{BUSINESS.successRateFirstAttempt}% de réussite au premier passage.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-3 py-1.5 text-xs font-semibold text-brand-300">
              <Star className="size-3.5 fill-brand-300 stroke-brand-300" /> {BUSINESS.rating.toString().replace(".", ",")}/5 sur Google
            </span>
            {BUSINESS.qualiopi && (
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
                ✓ Qualiopi
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <a aria-label="Instagram" href={BUSINESS.social.instagram} className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 transition-colors">
              <InstagramIcon className="size-4" />
            </a>
            <a aria-label="Facebook" href={BUSINESS.social.facebook} className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 transition-colors">
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[.15em] text-background/50 mb-4">Formations</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/prestations/${s.slug}`} className="text-background/80 hover:text-brand-400 transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[.15em] text-background/50 mb-4">L'école</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/lauto-ecole" className="text-background/80 hover:text-brand-400 transition-colors">L'auto-école</Link></li>
            <li><Link href="/tarifs" className="text-background/80 hover:text-brand-400 transition-colors">Tarifs</Link></li>
            <li><Link href="/avis" className="text-background/80 hover:text-brand-400 transition-colors">Avis</Link></li>
            <li><Link href="/faq" className="text-background/80 hover:text-brand-400 transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="text-background/80 hover:text-brand-400 transition-colors">Contact</Link></li>
            <li><Link href="/code-en-ligne" className="text-background/80 hover:text-brand-400 transition-colors">Code en ligne</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-5">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[.15em] text-background/50 mb-3">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 text-brand-400 shrink-0" />
                <span className="text-background/80">{BUSINESS.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-brand-400 shrink-0" />
                <a href={`tel:${BUSINESS.phoneIntl}`} className="text-background/80 hover:text-brand-400 transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-brand-400 shrink-0" />
                <a href={`mailto:${BUSINESS.email}`} className="text-background/80 hover:text-brand-400 transition-colors break-all">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[.15em] text-background/50 mb-3 flex items-center gap-2">
              Horaires <OpenStatus className="text-background/60" />
            </h4>
            <ul className="text-xs text-background/70 grid grid-cols-2 gap-y-1">
              {(Object.keys(BUSINESS.hours) as (keyof typeof BUSINESS.hours)[]).map((day) => (
                <li key={day} className="flex justify-between gap-2">
                  <span>{HOURS_LABEL[day]}</span>
                  <span className="text-background/90">
                    {BUSINESS.hours[day].length === 0 ? "Fermé" : BUSINESS.hours[day].join(" / ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/60">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. Tous droits réservés.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li><Link href="/mentions-legales" className="hover:text-brand-400 transition-colors">Mentions légales</Link></li>
            <li><Link href="/confidentialite" className="hover:text-brand-400 transition-colors">Confidentialité</Link></li>
            <li><Link href="/cgv" className="hover:text-brand-400 transition-colors">CGV</Link></li>
            <li><Link href="/reglement-interieur" className="hover:text-brand-400 transition-colors">Règlement intérieur</Link></li>
            <li><Link href="/accessibilite-handicap" className="hover:text-brand-400 transition-colors">Accessibilité</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
