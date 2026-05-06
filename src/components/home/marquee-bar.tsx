import { Marquee } from "@/components/animations/marquee";
import * as Icons from "lucide-react";
import { Sparkles, Award, BadgeCheck } from "lucide-react";
import { TENANT } from "@/tenant";

export function MarqueeBar() {
  // On dérive automatiquement des items à partir des services du tenant + extras
  const items: { icon: React.ComponentType<{ className?: string }>; label: string }[] = [
    ...TENANT.services.map((s) => ({
      icon: ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] ?? Icons.Car,
      label: s.name,
    })),
    { icon: Award, label: `Depuis ${TENANT.founded}` },
    { icon: BadgeCheck, label: "Qualiopi & CPF" },
    { icon: Sparkles, label: `${TENANT.studentsTrained.toLocaleString("fr-FR")}+ permis obtenus` },
  ];

  const isGold = !!TENANT.brand.logo.goldEffect;

  return (
    <div
      className={`relative py-6 border-y ${
        isGold
          ? "bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700 text-background border-brand-700"
          : "bg-foreground text-background border-foreground"
      }`}
    >
      <Marquee speed={40}>
        {items.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-8 text-display text-2xl md:text-3xl font-semibold">
            <it.icon className={`size-6 ${isGold ? "" : "text-brand-400"}`} />
            {it.label}
            <span className={`ml-8 text-3xl ${isGold ? "" : "text-brand-500"}`}>★</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
