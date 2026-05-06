import { Receipt, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FACTURES = [
  { n: "F-2026-042", date: "10 mars 2026", label: "Forfait Permis B 20h", amount: "1 490,00 €", status: "paid" },
  { n: "F-2026-067", date: "3 avril 2026", label: "2 heures supplémentaires", amount: "140,00 €", status: "paid" },
  { n: "F-2026-091", date: "28 avril 2026", label: "Examen blanc", amount: "60,00 €", status: "pending" },
];

export default function FacturesPage() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header>
        <p className="text-xs uppercase tracking-wider text-brand font-semibold">Factures</p>
        <h1 className="text-display text-3xl md:text-4xl font-semibold mt-1">Mes paiements</h1>
        <p className="text-muted mt-2">Toutes tes factures, téléchargeables en PDF.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-3">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-xs text-muted">Total payé</p>
          <p className="text-display text-3xl font-semibold mt-1">1 630 €</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-xs text-muted">À régler</p>
          <p className="text-display text-3xl font-semibold mt-1 text-amber-600">60 €</p>
        </div>
        <div className="rounded-2xl border border-border bg-foreground text-background p-5">
          <p className="text-xs text-background/60">CPF mobilisé</p>
          <p className="text-display text-3xl font-semibold mt-1">800 €</p>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-surface-2/60 border-b border-border">
            <tr className="text-left text-xs uppercase tracking-wider text-muted">
              <th className="px-5 py-3.5 font-semibold">Référence</th>
              <th className="px-5 py-3.5 font-semibold hidden sm:table-cell">Date</th>
              <th className="px-5 py-3.5 font-semibold">Libellé</th>
              <th className="px-5 py-3.5 font-semibold text-right">Montant</th>
              <th className="px-5 py-3.5 font-semibold">Statut</th>
              <th className="px-5 py-3.5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {FACTURES.map((f) => (
              <tr key={f.n} className="hover:bg-surface-2/40 transition-colors">
                <td className="px-5 py-4 font-mono text-xs text-muted">{f.n}</td>
                <td className="px-5 py-4 hidden sm:table-cell">{f.date}</td>
                <td className="px-5 py-4 font-medium">{f.label}</td>
                <td className="px-5 py-4 text-right tabular-nums font-semibold">{f.amount}</td>
                <td className="px-5 py-4">
                  {f.status === "paid" ? <Badge variant="success">Payée</Badge> : <Badge variant="brand">En attente</Badge>}
                </td>
                <td className="px-5 py-4 text-right">
                  <Button size="icon-sm" variant="ghost" aria-label="Télécharger">
                    <Download />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
