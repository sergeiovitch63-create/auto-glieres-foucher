import * as React from "react";
import { Section, Eyebrow, SectionTitle } from "@/components/ui/section";

type Props = {
  eyebrow?: string;
  title: string;
  updated?: string;
  children: React.ReactNode;
};

export function LegalPage({ eyebrow = "Mentions légales", title, updated, children }: Props) {
  return (
    <Section className="pt-32 pb-20">
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle className="mt-3">{title}</SectionTitle>
        {updated && <p className="mt-3 text-sm text-muted">Dernière mise à jour : {updated}</p>}
        <article className="mt-10 prose prose-neutral max-w-none [&_h2]:text-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mb-4 [&_a]:text-brand">
          {children}
        </article>
      </div>
    </Section>
  );
}
