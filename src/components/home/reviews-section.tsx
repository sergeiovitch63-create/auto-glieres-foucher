"use client";
import { Star, Quote } from "lucide-react";
import { Section, Eyebrow, SectionTitle } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { REVIEWS, REVIEW_STATS } from "@/lib/content/reviews";
import { Marquee } from "@/components/animations/marquee";
import Link from "next/link";

export function ReviewsSection() {
  const col1 = REVIEWS.slice(0, 5);
  const col2 = REVIEWS.slice(5);

  return (
    <Section className="overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 items-start">
        <ScrollReveal>
          <Eyebrow>Avis Google</Eyebrow>
          <SectionTitle className="mt-3">Ils ont kiffé,<br/>ils le disent.</SectionTitle>
          <div className="mt-6 flex items-baseline gap-3">
            <p className="text-display text-6xl font-semibold tabular-nums">{REVIEW_STATS.average}</p>
            <p className="text-muted">/ 5</p>
          </div>
          <div className="mt-2 flex items-center gap-1 text-amber-500">
            {[0,1,2,3,4].map(i => <Star key={i} className="size-5 fill-current" />)}
          </div>
          <p className="mt-2 text-sm text-muted">
            Basé sur <strong className="text-foreground">{REVIEW_STATS.total} avis</strong> Google vérifiés
          </p>
          <Link
            href="/avis"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
          >
            Voir tous les avis →
          </Link>
        </ScrollReveal>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to bottom, var(--background), transparent 12%, transparent 88%, var(--background))",
            }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-hidden">
            <ColumnMarquee items={col1} reverse={false} />
            <ColumnMarquee items={col2} reverse={true} className="hidden sm:block" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function ColumnMarquee({
  items,
  reverse,
  className,
}: {
  items: typeof REVIEWS;
  reverse: boolean;
  className?: string;
}) {
  return (
    <div className={className + " relative h-[600px] overflow-hidden"}>
      <div
        className="flex flex-col gap-4 absolute left-0 right-0"
        style={{
          animation: `${reverse ? "scroll-up" : "scroll-down"} 36s linear infinite`,
        }}
      >
        {[...items, ...items].map((r, i) => (
          <article key={i} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <Quote className="size-5 text-brand-300 mb-2" />
            <p className="text-sm leading-relaxed text-foreground">&ldquo;{r.text}&rdquo;</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold">
                {r.initials}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold">{r.author}</p>
                <p className="text-xs text-muted">{r.formation}</p>
              </div>
              <div className="flex items-center gap-0.5 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-3 fill-current" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll-down {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        @keyframes scroll-up {
          0%   { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
