"use client";
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Phone, Sparkles, Bot, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useQuoteSheet } from "@/components/quote/quote-sheet-provider";
import { BUSINESS } from "@/lib/content/business";
import { cn } from "@/lib/utils";

type Msg = { role: "bot" | "user"; text: string; suggestions?: string[]; cta?: { label: string; action: "quote" | "call" | "tarifs" | "code" } };

const SCRIPT: Record<string, Msg[]> = {
  init: [
    {
      role: "bot",
      text: `Salut 👋 Je suis l'assistant ${BUSINESS.shortName}. Je t'aide à choisir ta formation, à connaître les prix, ou à prendre rendez-vous. Qu'est-ce qui t'amène ?`,
      suggestions: ["Tarifs permis B", "Boîte auto vs manuelle", "Conduite accompagnée", "Délais d'inscription", "Parler à Eva"],
    },
  ],
  "Tarifs permis B": [
    {
      role: "bot",
      text: "Le forfait Permis B 20h démarre à 1 490 € (code + 20h conduite + frais examen). On a aussi un forfait 30h à 2 150 € et un accéléré (4 sem.) à 1 990 €. Tout est éligible CPF et permis 1€/jour.",
      cta: { label: "Voir tous les tarifs", action: "tarifs" },
      suggestions: ["Demander un devis", "Différence boîte auto", "C'est quoi le CPF ?"],
    },
  ],
  "Boîte auto vs manuelle": [
    {
      role: "bot",
      text: "Boîte auto = formation plus courte (13h mini) et examen plus simple, mais tu ne peux conduire que des voitures auto. Boîte manuelle = accès à toutes les voitures. Tu peux toujours faire la passerelle plus tard (7h, 490 €).",
      suggestions: ["Tarifs boîte auto", "Demander un devis"],
    },
  ],
  "Conduite accompagnée": [
    {
      role: "bot",
      text: "L'AAC c'est dès 15 ans. Tu commences ta formation, tu passes le code, et tu roules avec un accompagnateur pendant 1 an minimum. Réussite : 88% au premier passage. Forfait à 1 590 €.",
      cta: { label: "En savoir plus", action: "tarifs" },
      suggestions: ["Demander un devis", "Documents à fournir"],
    },
  ],
  "Délais d'inscription": [
    {
      role: "bot",
      text: "Tu peux commencer le code et les heures de conduite sous 48h après ton inscription. On s'occupe de monter le dossier ANTS pour toi.",
      suggestions: ["Documents à fournir", "Demander un devis"],
    },
  ],
  "Documents à fournir": [
    {
      role: "bot",
      text: "Pièce d'identité, 2 photos e-photo, justif de domicile -3 mois, ASSR2 (si né après 1988), attestation de recensement (16-25 ans).",
      suggestions: ["Demander un devis", "Tarifs permis B"],
    },
  ],
  "C'est quoi le CPF ?": [
    {
      role: "bot",
      text: "Le CPF (Compte Personnel de Formation) finance partiellement ou totalement ton permis. On est référencés sur Mon Compte Formation. On t'aide à monter le dossier.",
      suggestions: ["Demander un devis"],
    },
  ],
  "Parler à Eva": [
    {
      role: "bot",
      text: "Eva est dispo aux horaires d'ouverture. Tu peux l'appeler directement ou nous laisser tes coordonnées et on te rappelle dans la journée.",
      cta: { label: "📞 Appeler Eva", action: "call" },
      suggestions: ["Demander un devis"],
    },
  ],
  "Demander un devis": [
    {
      role: "bot",
      text: "Super, je t'ouvre le formulaire 👇 Réponse sous 24h, sans engagement.",
      cta: { label: "Ouvrir le formulaire", action: "quote" },
    },
  ],
};

export function Chatbot() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Msg[]>(SCRIPT.init);
  const [typing, setTyping] = React.useState(false);
  const { open: openQuote } = useQuoteSheet();
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  const isDashboard = pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin");
  if (isDashboard) return null;

  function handleAction(action: Msg["cta"] extends infer A ? (A extends { action: infer X } ? X : never) : never) {
    if (action === "quote") {
      setOpen(false);
      setTimeout(() => openQuote(), 200);
    } else if (action === "call") {
      window.location.href = `tel:${BUSINESS.phoneIntl}`;
    } else if (action === "tarifs") {
      window.location.href = "/tarifs";
    } else if (action === "code") {
      window.location.href = "/code-en-ligne";
    }
  }

  function send(text: string) {
    setMessages((m) => [...m, { role: "user", text }]);
    setTyping(true);
    setTimeout(() => {
      const reply = SCRIPT[text] ?? [{
        role: "bot" as const,
        text: "Bonne question ! Le mieux c'est qu'on en parle directement. Tu peux nous appeler ou demander un devis personnalisé.",
        cta: { label: "Demander un devis", action: "quote" as const },
        suggestions: ["Tarifs permis B", "Parler à Eva"],
      }];
      setMessages((m) => [...m, ...reply]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 15 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
        className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span
              key="msg"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="size-6" />
              <span className="absolute -top-1 -right-1 size-3 rounded-full bg-brand ring-2 ring-foreground" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-40 w-[calc(100vw-2.5rem)] sm:w-[400px] max-h-[640px] flex flex-col rounded-3xl border border-border bg-surface shadow-2xl shadow-black/20 overflow-hidden"
          >
            <header className="px-5 py-4 bg-foreground text-background flex items-center gap-3">
              <div className="relative">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand text-white">
                  <Bot className="size-5" />
                </span>
                <span className="absolute bottom-0 right-0 size-3 rounded-full bg-green-400 ring-2 ring-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold flex items-center gap-1.5">
                  {BUSINESS.shortName} <Sparkles className="size-3 text-brand-300" />
                </h3>
                <p className="text-xs text-background/60">Réponse instantanée · 7j/7</p>
              </div>
              <Link
                href={`tel:${BUSINESS.phoneIntl}`}
                className="inline-flex size-9 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label="Appeler"
              >
                <Phone className="size-4" />
              </Link>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-surface-2/30">
              {messages.map((m, i) => (
                <ChatMessage key={i} msg={m} onSuggestion={send} onAction={handleAction} />
              ))}
              {typing && (
                <div className="flex items-end gap-2">
                  <span className="size-7 rounded-full bg-brand-100 inline-flex items-center justify-center">
                    <Bot className="size-3.5 text-brand-700" />
                  </span>
                  <div className="rounded-2xl rounded-bl-sm bg-surface border border-border px-4 py-3">
                    <span className="flex gap-1">
                      <span className="size-1.5 rounded-full bg-muted-2 animate-bounce" />
                      <span className="size-1.5 rounded-full bg-muted-2 animate-bounce [animation-delay:.15s]" />
                      <span className="size-1.5 rounded-full bg-muted-2 animate-bounce [animation-delay:.3s]" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const v = String(fd.get("msg") ?? "").trim();
                if (v) {
                  send(v);
                  e.currentTarget.reset();
                }
              }}
              className="border-t bg-surface p-3 flex items-center gap-2"
            >
              <input
                name="msg"
                placeholder="Pose ta question…"
                className="flex-1 h-10 px-4 rounded-full border border-border bg-surface-2 text-sm placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
              <button
                type="submit"
                aria-label="Envoyer"
                className="inline-flex size-10 items-center justify-center rounded-full bg-brand text-white hover:bg-brand-600 transition-colors"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ChatMessage({
  msg,
  onSuggestion,
  onAction,
}: {
  msg: Msg;
  onSuggestion: (text: string) => void;
  onAction: (a: NonNullable<Msg["cta"]>["action"]) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn("flex flex-col gap-2", msg.role === "user" ? "items-end" : "items-start")}
    >
      <div className="flex items-end gap-2 max-w-[85%]">
        {msg.role === "bot" && (
          <span className="size-7 rounded-full bg-brand-100 inline-flex items-center justify-center shrink-0">
            <Bot className="size-3.5 text-brand-700" />
          </span>
        )}
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm leading-relaxed",
            msg.role === "bot"
              ? "rounded-bl-sm bg-surface border border-border text-foreground"
              : "rounded-br-sm bg-brand text-white"
          )}
        >
          {msg.text}
        </div>
        {msg.role === "user" && (
          <span className="size-7 rounded-full bg-foreground inline-flex items-center justify-center shrink-0">
            <User className="size-3.5 text-background" />
          </span>
        )}
      </div>

      {msg.cta && (
        <div className={cn("flex", msg.role === "bot" ? "ml-9" : "mr-9")}>
          <Button size="sm" onClick={() => onAction(msg.cta!.action)}>
            {msg.cta.label}
          </Button>
        </div>
      )}

      {msg.suggestions && msg.suggestions.length > 0 && (
        <div className={cn("flex flex-wrap gap-1.5", msg.role === "bot" ? "ml-9" : "mr-9")}>
          {msg.suggestions.map((s) => (
            <button
              key={s}
              onClick={() => onSuggestion(s)}
              className="text-xs px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-brand-50 hover:border-brand-300 hover:text-brand-700 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
