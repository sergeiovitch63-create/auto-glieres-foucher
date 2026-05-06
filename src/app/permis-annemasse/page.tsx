import type { Metadata } from "next";
import { SeoLocalPage } from "@/components/seo-local/seo-local-page";
import { TENANT } from "@/tenant";

export const metadata: Metadata = {
  title: `Permis Annemasse — ${TENANT.name}`,
  description: `Auto-école à Annemasse : ${TENANT.services.slice(0, 4).map(s => s.name).join(", ")}. ${TENANT.successRateFirstAttempt}% de réussite au 1er passage.`,
};

export default function Page() {
  return <SeoLocalPage slug="annemasse" />;
}
