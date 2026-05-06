import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/content/services";
import { NEARBY_CITIES } from "@/lib/content/business";
import { TENANT } from "@/tenant";

const BASE = `https://${TENANT.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/prestations",
    "/tarifs",
    "/code-en-ligne",
    "/lauto-ecole",
    "/avis",
    "/faq",
    "/contact",
    "/login",
    "/register",
    "/mentions-legales",
    "/confidentialite",
    "/cgv",
    "/reglement-interieur",
    "/accessibilite-handicap",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const services = SERVICES.map((s) => ({
    url: `${BASE}/prestations/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const local = NEARBY_CITIES.map((c) => ({
    url: `${BASE}/permis-${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...services, ...local];
}
