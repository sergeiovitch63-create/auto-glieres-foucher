import { FileText, Upload, Check, AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DOCS = [
  { name: "Pièce d'identité", status: "ok", date: "Validée le 10 mars 2026" },
  { name: "Photos d'identité (e-photo)", status: "ok", date: "Validée le 10 mars 2026" },
  { name: "Justificatif de domicile", status: "warn", date: "Expire le 15 mai" },
  { name: "ASSR2", status: "ok", date: "Validée le 12 mars 2026" },
  { name: "Attestation de recensement", status: "missing", date: "À fournir" },
];

export default function DocumentsPage() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header>
        <p className="text-xs uppercase tracking-wider text-brand font-semibold">Documents</p>
        <h1 className="text-display text-3xl md:text-4xl font-semibold mt-1">Mon dossier</h1>
        <p className="text-muted mt-2">Tous les documents requis pour ton inscription.</p>
      </header>

      <div className="rounded-3xl border-2 border-dashed border-amber-300 bg-amber-50/50 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="size-5 text-amber-600 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-900">2 actions requises</p>
            <p className="text-sm text-amber-800 mt-1">Mets à jour ton justificatif de domicile et fournis ton attestation de recensement avant ton prochain examen blanc.</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {DOCS.map((d) => (
          <article
            key={d.name}
            className="rounded-2xl border border-border bg-surface p-5 flex items-center gap-4"
          >
            <span className={`inline-flex size-12 items-center justify-center rounded-2xl ${
              d.status === "ok" ? "bg-green-100 text-green-700" :
              d.status === "warn" ? "bg-amber-100 text-amber-700" :
              "bg-red-100 text-red-700"
            }`}>
              {d.status === "ok" ? <Check className="size-5" /> :
               d.status === "warn" ? <AlertTriangle className="size-5" /> :
               <X className="size-5" />}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{d.name}</p>
              <p className="text-xs text-muted mt-0.5">{d.date}</p>
            </div>
            {d.status === "ok" ? (
              <Badge variant="success">Validé</Badge>
            ) : (
              <Button size="sm" variant={d.status === "warn" ? "outline" : "primary"}>
                <Upload className="size-4" /> Téléverser
              </Button>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
