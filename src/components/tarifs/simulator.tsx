"use client";
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Sparkles, Calculator, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteCTA } from "@/components/quote/quote-cta";
import { formatPrice } from "@/lib/utils";

type Step = "type" | "code" | "rythme" | "options" | "result";

type State = {
  type: "permis-b" | "boite-auto" | "moto-a2" | "code-seul" | "passerelle" | null;
  hasCode: boolean | null;
  rythme: "classique" | "intensif" | null;
  options: { code: boolean; examenBlanc: boolean; permisAUnEuro: boolean };
};

const init: State = {
  type: null,
  hasCode: null,
  rythme: null,
  options: { code: false, examenBlanc: false, permisAUnEuro: false },
};

export function Simulator() {
  const [step, setStep] = React.useState<Step>("type");
  const [state, setState] = React.useState<State>(init);

  const stepsOrder: Step[] = ["type", "code", "rythme", "options", "result"];
  const stepIdx = stepsOrder.indexOf(step);

  function reset() {
    setState(init);
    setStep("type");
  }

  const result = computeEstimate(state);

  return (
    <div className="rounded-3xl border border-border bg-surface shadow-xl shadow-black/5 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-8 pt-6 pb-5 border-b border-border bg-gradient-to-br from-brand-50/50 to-transparent">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-brand text-white">
              <Calculator className="size-5" />
            </span>
            <div>
              <h3 className="text-display text-xl font-semibold">Simulateur de tarif</h3>
              <p className="text-xs text-muted">Estimation gratuite en 30 secondes</p>
            </div>
          </div>
          {step !== "type" && (
            <button onClick={reset} className="text-xs text-muted hover:text-foreground underline">
              Recommencer
            </button>
          )}
        </div>

        {/* Progress */}
        <div className="mt-5 flex items-center gap-1.5">
          {stepsOrder.slice(0, 4).map((s, i) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                i <= stepIdx ? "bg-brand" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {step === "type" && (
            <StepWrap key="type">
              <Q n={1} q="Quelle formation t'intéresse ?" />
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { v: "permis-b", l: "Permis B (boîte manuelle)", e: "🚗" },
                  { v: "boite-auto", l: "Permis boîte automatique", e: "⚙️" },
                  { v: "moto-a2", l: "Permis Moto A2", e: "🏍️" },
                  { v: "code-seul", l: "Code de la route seul", e: "📚" },
                  { v: "passerelle", l: "Passerelle auto → manuelle", e: "🔄" },
                ].map((opt) => (
                  <Choice
                    key={opt.v}
                    selected={state.type === opt.v}
                    onClick={() => {
                      setState((s) => ({ ...s, type: opt.v as State["type"] }));
                      setTimeout(() => setStep("code"), 250);
                    }}
                  >
                    <span className="text-2xl">{opt.e}</span>
                    <span>{opt.l}</span>
                  </Choice>
                ))}
              </div>
            </StepWrap>
          )}

          {step === "code" && (
            <StepWrap key="code">
              <Q n={2} q="Tu as déjà le code de la route ?" />
              <div className="grid sm:grid-cols-2 gap-3">
                <Choice
                  selected={state.hasCode === true}
                  onClick={() => {
                    setState((s) => ({ ...s, hasCode: true }));
                    setTimeout(() => setStep("rythme"), 250);
                  }}
                >
                  <span className="text-2xl">✅</span>
                  Oui, je l'ai déjà
                </Choice>
                <Choice
                  selected={state.hasCode === false}
                  onClick={() => {
                    setState((s) => ({ ...s, hasCode: false, options: { ...s.options, code: true } }));
                    setTimeout(() => setStep("rythme"), 250);
                  }}
                >
                  <span className="text-2xl">❌</span>
                  Non, à passer
                </Choice>
              </div>
            </StepWrap>
          )}

          {step === "rythme" && (
            <StepWrap key="rythme">
              <Q n={3} q="Quel rythme tu veux ?" />
              <div className="grid sm:grid-cols-2 gap-3">
                <Choice
                  selected={state.rythme === "classique"}
                  onClick={() => {
                    setState((s) => ({ ...s, rythme: "classique" }));
                    setTimeout(() => setStep("options"), 250);
                  }}
                >
                  <span className="text-2xl">🐢</span>
                  <div className="text-left">
                    <div>Classique</div>
                    <div className="text-xs text-muted font-normal">3-6 mois</div>
                  </div>
                </Choice>
                <Choice
                  selected={state.rythme === "intensif"}
                  onClick={() => {
                    setState((s) => ({ ...s, rythme: "intensif" }));
                    setTimeout(() => setStep("options"), 250);
                  }}
                >
                  <span className="text-2xl">⚡</span>
                  <div className="text-left">
                    <div>Accéléré</div>
                    <div className="text-xs text-muted font-normal">4 semaines</div>
                  </div>
                </Choice>
              </div>
            </StepWrap>
          )}

          {step === "options" && (
            <StepWrap key="options">
              <Q n={4} q="Quelques options ?" />
              <div className="space-y-2.5">
                <Toggle
                  checked={state.options.examenBlanc}
                  onChange={(v) => setState((s) => ({ ...s, options: { ...s.options, examenBlanc: v } }))}
                  label="2 examens blancs"
                  desc="On simule l'examen en conditions réelles."
                  price={120}
                />
                <Toggle
                  checked={state.options.permisAUnEuro}
                  onChange={(v) => setState((s) => ({ ...s, options: { ...s.options, permisAUnEuro: v } }))}
                  label="Permis 1€/jour"
                  desc="Étalement gratuit sur 24-48 mois (15-25 ans)."
                  isFree
                />
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="ghost" onClick={() => setStep("rythme")}>
                  <ArrowLeft /> Retour
                </Button>
                <Button onClick={() => setStep("result")}>
                  Voir mon estimation <ArrowRight />
                </Button>
              </div>
            </StepWrap>
          )}

          {step === "result" && (
            <StepWrap key="result">
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  <Sparkles className="size-3.5" /> Ton estimation personnalisée
                </span>
                <p className="text-xs text-muted mt-3 uppercase tracking-wider">Budget total</p>
                <div className="mt-2 flex items-baseline justify-center gap-2">
                  <p className="text-display text-6xl md:text-7xl font-semibold tabular-nums">{formatPrice(result.min)}</p>
                  <p className="text-2xl text-muted">— {formatPrice(result.max)}</p>
                </div>
                {result.cpf && (
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-green-700">
                    <BadgeCheck className="size-4" /> Éligible CPF & permis 1€/jour
                  </p>
                )}
              </div>

              <ul className="mt-7 grid gap-2.5">
                {result.breakdown.map((b, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface-2/50 px-4 py-3 text-sm">
                    <span className="flex items-center gap-2">
                      <Check className="size-4 text-brand" /> {b.label}
                    </span>
                    <span className="font-semibold tabular-nums">{formatPrice(b.price)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 grid gap-2.5">
                <QuoteCTA size="lg" formation={state.type ?? undefined} className="w-full" label="Recevoir un devis détaillé" />
                <Button variant="ghost" onClick={reset} className="w-full">Refaire la simulation</Button>
              </div>

              <p className="text-center text-[11px] text-muted mt-3">
                Estimation indicative · Prix exact confirmé après échange avec Eva
              </p>
            </StepWrap>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function StepWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Q({ n, q }: { n: number; q: string }) {
  return (
    <div className="mb-5">
      <p className="text-xs text-brand font-semibold uppercase tracking-wider">Étape {n} / 4</p>
      <h4 className="text-display text-2xl font-semibold mt-1">{q}</h4>
    </div>
  );
}

function Choice({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left text-sm font-semibold transition-all hover:-translate-y-0.5 ${
        selected
          ? "border-brand bg-brand-50 text-brand-700 shadow-md"
          : "border-border bg-surface hover:border-brand-300"
      }`}
    >
      {children}
    </button>
  );
}

function Toggle({
  checked,
  onChange,
  label,
  desc,
  price,
  isFree,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  desc: string;
  price?: number;
  isFree?: boolean;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-full flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all ${
        checked ? "border-brand bg-brand-50" : "border-border bg-surface hover:border-brand-300"
      }`}
    >
      <span
        className={`inline-flex size-6 items-center justify-center rounded-md border-2 transition-colors shrink-0 ${
          checked ? "border-brand bg-brand text-white" : "border-border-strong bg-surface"
        }`}
      >
        {checked && <Check className="size-4" />}
      </span>
      <div className="flex-1">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-muted mt-0.5">{desc}</p>
      </div>
      <span className="text-sm font-semibold tabular-nums">
        {isFree ? "Gratuit" : `+${formatPrice(price ?? 0)}`}
      </span>
    </button>
  );
}

function computeEstimate(state: State) {
  let min = 0;
  let max = 0;
  const breakdown: { label: string; price: number }[] = [];
  let cpf = false;

  if (state.type === "permis-b") {
    if (state.rythme === "intensif") {
      min += 1990;
      max += 2400;
      breakdown.push({ label: "Permis B accéléré (20h, 4 sem.)", price: 1990 });
    } else {
      min += 1490;
      max += 1900;
      breakdown.push({ label: "Permis B forfait 20h", price: 1490 });
    }
    cpf = true;
  } else if (state.type === "boite-auto") {
    min += 1390;
    max += 1700;
    breakdown.push({ label: "Permis boîte automatique 13h", price: 1390 });
    cpf = true;
  } else if (state.type === "moto-a2") {
    min += 1290;
    max += 1600;
    breakdown.push({ label: "Permis Moto A2", price: 1290 });
    cpf = true;
  } else if (state.type === "code-seul") {
    min += 290;
    max += 320;
    breakdown.push({ label: "Forfait Code 6 mois", price: 290 });
    cpf = true;
  } else if (state.type === "passerelle") {
    min += 490;
    max += 600;
    breakdown.push({ label: "Passerelle 7h", price: 490 });
  }

  if (state.options.code && state.type !== "code-seul" && state.type !== "passerelle") {
    // Code is included in package, no extra. But if we want to show as option
  }

  if (state.options.examenBlanc) {
    min += 120;
    max += 120;
    breakdown.push({ label: "2 examens blancs", price: 120 });
  }

  return { min, max, breakdown, cpf };
}
