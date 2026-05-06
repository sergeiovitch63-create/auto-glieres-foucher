import { User, Bell, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfilPage() {
  return (
    <div className="p-6 md:p-10 space-y-6 max-w-3xl">
      <header>
        <p className="text-xs uppercase tracking-wider text-brand font-semibold">Profil</p>
        <h1 className="text-display text-3xl md:text-4xl font-semibold mt-1">Mes infos</h1>
      </header>

      <section className="rounded-3xl border border-border bg-surface p-7">
        <h2 className="text-display text-xl font-semibold mb-5 flex items-center gap-2">
          <User className="size-5 text-brand" /> Identité
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="fn">Prénom</Label>
            <Input id="fn" defaultValue="Lucie" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="ln">Nom</Label>
            <Input id="ln" defaultValue="Martin" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="em">Email</Label>
            <Input id="em" type="email" defaultValue="lucie.martin@email.fr" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="ph">Téléphone</Label>
            <Input id="ph" type="tel" defaultValue="06 12 34 56 78" />
          </div>
        </div>
        <Button className="mt-5">Enregistrer</Button>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-7">
        <h2 className="text-display text-xl font-semibold mb-5 flex items-center gap-2">
          <Bell className="size-5 text-brand" /> Notifications
        </h2>
        <div className="space-y-3">
          {[
            { t: "Rappel de leçon par SMS", on: true },
            { t: "Email de feedback après leçon", on: true },
            { t: "Newsletter mensuelle", on: false },
          ].map((n) => (
            <label key={n.t} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-2/50 p-4">
              <span className="text-sm">{n.t}</span>
              <input type="checkbox" defaultChecked={n.on} className="size-5 rounded text-brand focus:ring-brand" />
            </label>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-7">
        <h2 className="text-display text-xl font-semibold mb-5 flex items-center gap-2">
          <Lock className="size-5 text-brand" /> Sécurité
        </h2>
        <Button variant="outline">Changer mon mot de passe</Button>
      </section>
    </div>
  );
}
