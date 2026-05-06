import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { LeadForm } from "@/components/quote/lead-form";

export const metadata: Metadata = {
  title: "Inscription",
  description: "Inscris-toi en quelques minutes.",
};

export default function RegisterPage() {
  return (
    <Section className="pt-32 pb-20">
      <div className="max-w-xl mx-auto">
        <h1 className="text-display text-4xl md:text-5xl font-semibold text-center">S'inscrire</h1>
        <p className="mt-3 text-center text-muted">
          Remplis le formulaire ci-dessous, on t'ouvre ton dossier sous 48h.
        </p>
        <div className="mt-8">
          <LeadForm />
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Déjà inscrit(e) ?{" "}
          <Link href="/login" className="text-brand font-semibold hover:underline">Connecte-toi</Link>
        </p>
      </div>
    </Section>
  );
}
