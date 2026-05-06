import { Check, Clock, Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const COMPETENCES = [
  {
    title: "1. Maîtriser le maniement du véhicule",
    progress: 95,
    items: [
      { t: "Connaître les principales commandes", done: true },
      { t: "Démarrer et s'arrêter", done: true },
      { t: "Diriger la voiture en avant", done: true },
      { t: "Diriger la voiture en marche arrière", done: true },
      { t: "Réguler l'allure", done: true },
    ],
  },
  {
    title: "2. Appréhender la route",
    progress: 80,
    items: [
      { t: "Rechercher la signalisation", done: true },
      { t: "Positionner le véhicule sur la chaussée", done: true },
      { t: "Adapter l'allure aux situations", done: true },
      { t: "Tourner à droite et à gauche", done: true },
      { t: "Détecter et anticiper", done: false },
    ],
  },
  {
    title: "3. Circuler dans des situations difficiles",
    progress: 60,
    items: [
      { t: "Évaluer et maintenir les distances", done: true },
      { t: "Croiser et dépasser", done: true },
      { t: "Conduire de nuit", done: false },
      { t: "Sur route à chaussée séparée", done: false },
      { t: "Conditions météo dégradées", done: false },
    ],
  },
  {
    title: "4. Pratiquer une conduite autonome, sûre et économique",
    progress: 35,
    locked: false,
    items: [
      { t: "Préparer un trajet", done: true },
      { t: "Adapter sa conduite à l'éco-conduite", done: false },
      { t: "Anticiper les autres usagers", done: false },
      { t: "Gérer la fatigue", done: false },
      { t: "Conduire sur autoroute", done: false },
    ],
  },
];

export default function LivretPage() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header>
        <p className="text-xs uppercase tracking-wider text-brand font-semibold">Livret d'apprentissage</p>
        <h1 className="text-display text-3xl md:text-4xl font-semibold mt-1">Ton livret REMC</h1>
        <p className="text-muted mt-2 max-w-2xl">
          Le référentiel officiel de l'éducation routière. 4 compétences, validées par tes moniteurs au fil des leçons.
        </p>
      </header>

      <div className="space-y-4">
        {COMPETENCES.map((c, i) => (
          <article key={i} className="rounded-3xl border border-border bg-surface p-7">
            <div className="flex items-start justify-between gap-6 mb-5">
              <div>
                <h2 className="text-display text-xl font-semibold">{c.title}</h2>
                <p className="text-sm text-muted mt-1">
                  {c.items.filter((it) => it.done).length} / {c.items.length} compétences validées
                </p>
              </div>
              <div className="text-right">
                <p className="text-display text-3xl font-semibold tabular-nums">{c.progress}%</p>
                {c.progress === 100 && <Badge variant="success">Validée ✓</Badge>}
              </div>
            </div>
            <Progress value={c.progress} className="mb-6" />
            <ul className="grid sm:grid-cols-2 gap-2">
              {c.items.map((item, j) => (
                <li key={j} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm ${item.done ? "bg-green-50 border-green-200" : "bg-surface-2/50 border-border"}`}>
                  <span className={`inline-flex size-6 items-center justify-center rounded-full shrink-0 ${item.done ? "bg-green-500 text-white" : "bg-surface border border-border-strong"}`}>
                    {item.done ? <Check className="size-3.5" /> : <Clock className="size-3 text-muted" />}
                  </span>
                  <span className={item.done ? "text-foreground" : "text-muted"}>{item.t}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
