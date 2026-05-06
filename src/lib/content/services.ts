import { TENANT } from "@/tenant";
export type { Service } from "@/lib/tenant-types";

export const SERVICES = TENANT.services;
export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

export const REQUIRED_DOCS = [
  "Pièce d'identité en cours de validité",
  "Deux photos d'identité récentes (norme e-photo agréée)",
  "Justificatif de domicile de moins de 3 mois",
  "ASSR 2 ou ASR (obligatoire si né après 1988)",
  "Attestation de recensement (16-25 ans)",
  "Permis de conduire si déjà titulaire d'un autre permis",
];
