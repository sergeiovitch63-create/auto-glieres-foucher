import { TENANT } from "@/tenant";
export type { FaqItem } from "@/lib/tenant-types";

export const FAQ = TENANT.faq;
export const FAQ_CATEGORIES = Array.from(new Set(FAQ.map((f) => f.category)));
