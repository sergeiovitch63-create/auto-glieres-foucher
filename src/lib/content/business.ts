// Re-export depuis le tenant actif pour compatibilité.
// Tous les composants peuvent continuer à importer { BUSINESS } from "@/lib/content/business".
import { TENANT } from "@/tenant";

export const BUSINESS = TENANT;

export const HOURS_LABEL: Record<keyof typeof TENANT.hours, string> = {
  monday: "Lundi",
  tuesday: "Mardi",
  wednesday: "Mercredi",
  thursday: "Jeudi",
  friday: "Vendredi",
  saturday: "Samedi",
  sunday: "Dimanche",
};

export const NEARBY_CITIES = TENANT.nearbyCities;
