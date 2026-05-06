/**
 * Point d'entrée unique pour récupérer le tenant actif.
 * Sélection via env TENANT_ID au build (par défaut: glieres).
 *
 * Usage côté composant : `import { TENANT } from "@/tenant"`
 *
 * Ajouter une nouvelle auto-école :
 *   1. Créer src/tenants/[id].ts
 *   2. L'enregistrer dans src/tenants/index.ts
 *   3. Build avec TENANT_ID=[id] npm run build
 */
import { resolveTenant } from "./tenants";
export const TENANT = resolveTenant();
