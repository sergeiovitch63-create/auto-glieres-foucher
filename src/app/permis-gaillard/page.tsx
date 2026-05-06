import type { Metadata } from "next";
import { SeoLocalPage } from "@/components/seo-local/seo-local-page";
import { TENANT } from "@/tenant";

export const metadata: Metadata = {
  title: `Permis Gaillard — ${TENANT.name}`,
  description: `Auto-école à proximité de Gaillard. ${TENANT.services.slice(0, 4).map(s => s.name).join(", ")}.`,
};

export default function Page() {
  return <SeoLocalPage slug="gaillard" />;
}
