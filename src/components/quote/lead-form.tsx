"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { leadSchema, type LeadValues } from "@/lib/schema/lead";
import { SERVICES } from "@/lib/content/services";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  defaultFormation?: string;
  variant?: "card" | "inline";
  onSuccess?: () => void;
  compact?: boolean;
};

export function LeadForm({
  className,
  defaultFormation,
  variant = "card",
  onSuccess,
  compact,
}: Props) {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { formation: defaultFormation ?? "permis-b" },
  });

  async function onSubmit(values: LeadValues) {
    await new Promise((r) => setTimeout(r, 1100));
    toast.success("Demande envoyée !", {
      description: `Merci ${values.firstName}, on te recontacte sous 24h.`,
    });
    reset({ formation: defaultFormation ?? "permis-b" } as LeadValues);
    setSubmitted(true);
    onSuccess?.();
    setTimeout(() => setSubmitted(false), 6000);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-green-200 bg-green-50 p-8 text-center",
          variant === "card" && "shadow-lg",
          className
        )}
      >
        <CheckCircle2 className="mx-auto size-14 text-green-600" />
        <h3 className="mt-4 text-xl font-semibold text-green-900">Demande envoyée !</h3>
        <p className="mt-2 text-sm text-green-800">
          Notre équipe te recontacte sous 24h pour caler ton dossier.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        variant === "card" &&
          "rounded-3xl border border-border bg-surface p-6 md:p-7 shadow-xl shadow-black/5",
        className
      )}
    >
      {variant === "card" && !compact && (
        <header className="mb-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            <span className="size-1.5 rounded-full bg-brand-500 animate-pulse" />
            Réponse sous 24h
          </span>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">Devis gratuit en 30 sec.</h3>
          <p className="mt-1 text-sm text-muted">
            Reçois ton estimation personnalisée.
          </p>
        </header>
      )}

      <div className="grid gap-3.5">
        <div className="grid grid-cols-2 gap-3">
          <Field id="firstName" label="Prénom" error={errors.firstName?.message}>
            <Input id="firstName" autoComplete="given-name" placeholder="Lucie" {...register("firstName")} />
          </Field>
          <Field id="lastName" label="Nom" error={errors.lastName?.message}>
            <Input id="lastName" autoComplete="family-name" placeholder="Martin" {...register("lastName")} />
          </Field>
        </div>

        <Field id="email" label="Email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" placeholder="lucie.martin@email.fr" {...register("email")} />
        </Field>

        <Field id="phone" label="Téléphone" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" {...register("phone")} />
        </Field>

        <Field id="formation" label="Formation souhaitée" error={errors.formation?.message}>
          <select
            id="formation"
            {...register("formation")}
            className="flex h-11 w-full rounded-xl border border-border bg-surface px-4 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand"
          >
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
                {s.isNew ? " (Nouveau)" : ""}
              </option>
            ))}
          </select>
        </Field>

        {!compact && (
          <Field id="message" label="Un message ? (facultatif)">
            <Textarea
              id="message"
              rows={3}
              placeholder="Une question, un créneau particulier, un objectif…"
              {...register("message")}
            />
          </Field>
        )}

        <label className="flex items-start gap-2.5 text-xs text-muted leading-relaxed mt-1">
          <input
            type="checkbox"
            {...register("rgpd")}
            className="mt-0.5 size-4 rounded border-border-strong text-brand focus:ring-brand"
          />
          <span>
            J'accepte d'être recontacté(e). Mes données restent chez l'auto-école et ne sont jamais
            transmises à des tiers.{" "}
            <a href="/confidentialite" className="text-brand hover:underline">En savoir plus</a>.
          </span>
        </label>
        {errors.rgpd && (
          <p className="text-xs text-danger -mt-2">{errors.rgpd.message}</p>
        )}

        <Button type="submit" size="lg" className="mt-2 w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" /> Envoi en cours…
            </>
          ) : (
            <>
              Recevoir mon devis <ArrowRight />
            </>
          )}
        </Button>

        <p className="text-center text-[11px] text-muted-2 mt-1">
          🔒 Tes infos sont protégées · Aucun engagement
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
}
