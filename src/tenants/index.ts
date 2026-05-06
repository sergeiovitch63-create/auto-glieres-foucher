import type { Tenant } from "@/lib/tenant-types";
import { glieres } from "./glieres";
import { foucher } from "./foucher";
import { leman } from "./leman";
import { scuderia } from "./scuderia";

export const TENANTS: Record<string, Tenant> = {
  glieres,
  foucher,
  leman,
  scuderia,
};

export const DEFAULT_TENANT_ID = "glieres";

export function resolveTenant(id?: string): Tenant {
  const key = (id ?? process.env.TENANT_ID ?? DEFAULT_TENANT_ID).toLowerCase();
  if (!TENANTS[key]) {
    console.warn(`[tenant] "${key}" introuvable, fallback sur "${DEFAULT_TENANT_ID}".`);
    return TENANTS[DEFAULT_TENANT_ID];
  }
  return TENANTS[key];
}
