import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Lock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/layout/logo";

export const metadata: Metadata = {
  title: "Espace élève — Connexion",
  description: "Connecte-toi à ton espace élève pour accéder au livret, au code et au suivi.",
};

export default function LoginPage() {
  return (
    <Section className="min-h-screen flex items-center pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="hidden lg:block relative aspect-square rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-12 overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />
          <div className="relative h-full flex flex-col justify-between text-white">
            <Logo className="text-white" />
            <div>
              <p className="text-display text-5xl font-semibold leading-tight">
                Ton espace élève. Tout ton parcours, en un coup d'œil.
              </p>
              <ul className="mt-8 space-y-2 text-white/90 text-sm">
                <li>✓ Livret numérique REMC</li>
                <li>✓ Heures restantes & prochaines leçons</li>
                <li>✓ Code en ligne illimité</li>
                <li>✓ Documents & factures</li>
              </ul>
            </div>
          </div>
          <div aria-hidden className="absolute -bottom-32 -right-32 size-96 rounded-full bg-amber-300 opacity-30 blur-3xl" />
        </div>

        <div className="max-w-md w-full mx-auto">
          <h1 className="text-display text-4xl md:text-5xl font-semibold">Te revoilà 👋</h1>
          <p className="mt-3 text-muted">Connecte-toi à ton espace élève.</p>

          <form className="mt-8 space-y-4" action="/dashboard">
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted" />
                <Input id="email" type="email" placeholder="lucie.martin@email.fr" className="pl-10" />
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted">
                <input type="checkbox" className="size-4 rounded border-border-strong text-brand focus:ring-brand" />
                Se souvenir de moi
              </label>
              <Link href="#" className="text-brand hover:underline font-medium">Mot de passe oublié ?</Link>
            </div>
            <Button type="submit" size="lg" className="w-full">
              Se connecter <ArrowRight />
            </Button>
            <Button variant="outline" size="lg" className="w-full" type="button">
              Connexion par lien magique
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            Pas encore inscrit(e) ?{" "}
            <Link href="/register" className="text-brand font-semibold hover:underline">
              Créer un compte
            </Link>
          </p>

          <p className="mt-6 text-center text-xs text-muted-2">
            🚧 Démo : connectez-vous avec n'importe quoi pour voir l'espace élève.
          </p>
        </div>
      </div>
    </Section>
  );
}
