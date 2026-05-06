import Link from "next/link";
import { TENANT } from "@/tenant";
import { cn } from "@/lib/utils";

export function Logo({ className, compact }: { className?: string; compact?: boolean }) {
  const { logo } = TENANT.brand;
  const isGold = !!logo.goldEffect;

  return (
    <Link
      href="/"
      aria-label={`Accueil — ${TENANT.name}`}
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <span
        className={cn(
          "relative inline-flex size-9 items-center justify-center rounded-xl overflow-hidden transition-all group-hover:scale-105",
          isGold
            ? "bg-gradient-to-br from-[color:var(--surface)] via-[color:var(--background)] to-[color:var(--surface)] border border-brand-500/60 group-hover:border-brand-400"
            : "bg-foreground text-background group-hover:rotate-[-6deg]"
        )}
      >
        <span className={cn(
          "text-display text-lg font-extrabold leading-none",
          isGold && "text-gold"
        )}>
          {logo.monogram}
        </span>
        {!isGold && <span className="absolute -bottom-1 -right-1 size-3 rounded-full bg-brand" />}
        {isGold && <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-300/10 to-transparent pointer-events-none" />}
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={cn(
            "text-display font-bold tracking-tight",
            isGold ? "text-base tracking-[.15em] text-gold" : "text-[15px]"
          )}>
            {logo.wordmark}
          </span>
          <span className={cn(
            "font-semibold uppercase mt-1",
            isGold ? "text-[10px] tracking-[.22em] text-muted" : "text-[11px] tracking-[.18em] text-brand"
          )}>
            {logo.sub}
          </span>
        </span>
      )}
    </Link>
  );
}
