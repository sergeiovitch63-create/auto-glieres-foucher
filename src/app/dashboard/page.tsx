import Link from "next/link";
import { Calendar, BookOpen, GraduationCap, MessageSquare, ArrowRight, Clock, Trophy, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function DashboardHome() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      <header>
        <p className="text-xs uppercase tracking-wider text-brand font-semibold">Tableau de bord</p>
        <h1 className="text-display text-3xl md:text-4xl font-semibold mt-1">Bonjour Lucie 👋</h1>
        <p className="text-muted mt-2">Voici ton parcours du moment.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-foreground text-background relative overflow-hidden">
          <Clock className="size-6 text-brand-400 mb-3" />
          <p className="text-display text-4xl font-semibold">12<span className="text-xl text-background/60">h</span></p>
          <p className="text-sm text-background/70 mt-1">Heures restantes</p>
          <p className="text-xs text-brand-300 mt-3">8h faites sur 20h</p>
          <div className="absolute -right-10 -bottom-10 size-32 rounded-full bg-brand-500 opacity-20 blur-3xl" />
        </Card>
        <Card>
          <Trophy className="size-6 text-brand mb-3" />
          <p className="text-display text-4xl font-semibold">87%</p>
          <p className="text-sm text-muted mt-1">Réussite au code</p>
          <p className="text-xs text-foreground mt-3">38/40 sur 5 examens blancs</p>
        </Card>
        <Card>
          <Calendar className="size-6 text-brand mb-3" />
          <p className="text-display text-2xl font-semibold">Mer. 10 mai</p>
          <p className="text-sm text-muted mt-1">Prochaine leçon</p>
          <p className="text-xs text-foreground mt-3">14:00 avec Sylvain</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-display text-xl font-semibold">Ta progression</h2>
              <p className="text-sm text-muted">Livret REMC — 4 compétences officielles</p>
            </div>
            <Link href="/dashboard/livret" className="text-sm text-brand font-semibold hover:underline">
              Voir le livret →
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { t: "1. Maîtriser le maniement du véhicule", v: 95 },
              { t: "2. Appréhender la route", v: 80 },
              { t: "3. Circuler dans des situations difficiles", v: 60 },
              { t: "4. Pratiquer une conduite autonome", v: 35 },
            ].map((c) => (
              <div key={c.t}>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm font-medium">{c.t}</p>
                  <span className="text-xs font-semibold tabular-nums">{c.v}%</span>
                </div>
                <Progress value={c.v} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-display text-xl font-semibold mb-4">Dernier feedback</h2>
          <div className="flex items-start gap-3">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold shrink-0">SY</span>
            <div className="flex-1">
              <p className="text-sm font-semibold">Sylvain</p>
              <p className="text-xs text-muted">il y a 2 jours · Leçon n°7</p>
              <p className="mt-3 text-sm leading-relaxed">
                "Très bonne progression sur les ronds-points. À retravailler : la gestion des angles morts en changement de file. On y revient mercredi !"
              </p>
              <Badge variant="brand" className="mt-3">+3 compétences validées</Badge>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/dashboard/code" className="group rounded-3xl border border-border bg-surface p-6 hover:border-brand-300 hover:shadow-lg transition-all">
          <BookOpen className="size-6 text-brand mb-3" />
          <h3 className="text-display text-xl font-semibold flex items-center gap-2">
            Code en ligne <ArrowRight className="size-5 text-muted group-hover:translate-x-1 transition-transform" />
          </h3>
          <p className="text-sm text-muted mt-2">Continue ta dernière série · 23/40 questions faites</p>
          <Progress value={57} className="mt-4" />
        </Link>
        <Link href="/dashboard/documents" className="group rounded-3xl border border-border bg-surface p-6 hover:border-brand-300 hover:shadow-lg transition-all">
          <MessageSquare className="size-6 text-brand mb-3" />
          <h3 className="text-display text-xl font-semibold flex items-center gap-2">
            Documents <ArrowRight className="size-5 text-muted group-hover:translate-x-1 transition-transform" />
          </h3>
          <p className="text-sm text-muted mt-2">⚠️ Justificatif de domicile à mettre à jour</p>
          <Badge variant="brand" className="mt-4">1 action requise</Badge>
        </Link>
      </div>
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-border bg-surface p-6 ${className ?? ""}`}>{children}</div>;
}
