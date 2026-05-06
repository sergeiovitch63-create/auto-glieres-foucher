import Link from "next/link";
import { Play, Award, Clock, Target, BookOpen, BarChart3, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const THEMES = [
  { name: "Circulation routière", q: 142, success: 88 },
  { name: "Conducteur", q: 97, success: 75 },
  { name: "Route", q: 113, success: 91 },
  { name: "Autres usagers", q: 88, success: 82 },
  { name: "Notions diverses", q: 72, success: 65 },
  { name: "Premiers secours", q: 41, success: 95 },
  { name: "Mécanique & équipement", q: 64, success: 70 },
  { name: "Sécurité passagers", q: 55, success: 84 },
  { name: "Environnement", q: 48, success: 78 },
  { name: "Réglementation", q: 86, success: 60 },
];

export default function DashboardCode() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header>
        <p className="text-xs uppercase tracking-wider text-brand font-semibold">Code en ligne</p>
        <h1 className="text-display text-3xl md:text-4xl font-semibold mt-1">Entraîne-toi au code</h1>
        <p className="text-muted mt-2">10 thèmes officiels, plus de 1 000 questions.</p>
      </header>

      {/* Quick stats */}
      <div className="grid md:grid-cols-4 gap-3">
        <StatCard icon={Award} label="Réussite globale" value="87%" sub="+5% cette semaine" />
        <StatCard icon={Target} label="Questions tentées" value="412" sub="sur 1 000+" />
        <StatCard icon={Clock} label="Temps moyen" value="14s" sub="par question" />
        <StatCard icon={BarChart3} label="Examens blancs" value="5" sub="3 réussis" />
      </div>

      {/* Modes */}
      <div className="grid md:grid-cols-3 gap-4">
        <ModeCard
          title="Entraînement libre"
          desc="Choisis tes thèmes et avance à ton rythme."
          color="bg-brand text-white"
          cta="Commencer"
        />
        <ModeCard
          title="Examen blanc"
          desc="40 questions, 30 minutes, conditions réelles."
          color="bg-foreground text-background"
          cta="Démarrer l'examen"
        />
        <ModeCard
          title="Série courte"
          desc="10 questions, 5 minutes. Idéal en pause."
          color="bg-surface border border-border"
          cta="Lancer une série"
        />
      </div>

      {/* Recommandation */}
      <div className="rounded-3xl border-2 border-dashed border-brand-300 bg-brand-50/50 p-6">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="brand">✨ Reco IA</Badge>
        </div>
        <h3 className="text-display text-xl font-semibold">À retravailler en priorité</h3>
        <p className="text-sm text-muted mt-2 mb-4">
          Tu es en dessous de 70% sur 2 thèmes. On te propose une série dédiée de 20 questions.
        </p>
        <Button>
          <Play /> Lancer la série de remise à niveau (20 q)
        </Button>
      </div>

      {/* Themes */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-display text-2xl font-semibold">Tes 10 thèmes</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {THEMES.map((t) => (
            <Link
              key={t.name}
              href="#"
              className="group rounded-2xl border border-border bg-surface p-5 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="size-4 text-brand" />
                  <p className="font-semibold">{t.name}</p>
                </div>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-md ${t.success >= 80 ? "bg-green-100 text-green-700" : t.success >= 70 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}
                >
                  {t.success}%
                </span>
              </div>
              <Progress value={t.success} />
              <p className="text-xs text-muted mt-2">{t.q} questions disponibles</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: I, label, value, sub }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <I className="size-4 text-brand mb-2" />
      <p className="text-display text-2xl font-semibold">{value}</p>
      <p className="text-xs text-muted">{label}</p>
      <p className="text-xs text-foreground mt-1">{sub}</p>
    </div>
  );
}

function ModeCard({ title, desc, color, cta }: { title: string; desc: string; color: string; cta: string }) {
  return (
    <div className={`rounded-3xl ${color} p-6 relative overflow-hidden`}>
      <h3 className="text-display text-xl font-semibold">{title}</h3>
      <p className={`mt-2 text-sm ${color.includes("white") || color.includes("background") ? "opacity-80" : "text-muted"}`}>{desc}</p>
      <button className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${color.includes("white") || color.includes("background") ? "underline" : "text-brand"}`}>
        {cta} <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
