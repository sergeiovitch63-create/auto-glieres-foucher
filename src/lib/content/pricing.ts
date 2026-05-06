import { TENANT } from "@/tenant";

const packagesArray = TENANT.packages;
const packagesObj = Object.fromEntries(packagesArray.map((p) => [p.slug, p]));

const hourlyObj = Object.fromEntries(
  TENANT.hourlyRates.map((h) => [h.key, { price: h.price, label: h.label }])
);

export const PRICING = {
  hourly: hourlyObj,
  packages: packagesObj,
  options: {
    extraHourB: { label: "Heure supplémentaire boîte manuelle", price: TENANT.hourlyRates[0]?.price ?? 70 },
    examPresentation: { label: "Frais de représentation à l'examen", price: 80 },
    inscription: { label: "Frais d'inscription préfecture", price: 50 },
  },
} as const;

export type PackageKey = keyof typeof packagesObj;
