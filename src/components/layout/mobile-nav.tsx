"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { QuoteCTA } from "@/components/quote/quote-cta";
import { NAV } from "@/lib/nav";
import { BUSINESS } from "@/lib/content/business";
import { Logo } from "./logo";
import { OpenStatus } from "./open-status";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const [expanded, setExpanded] = React.useState<string | null>(null);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="lg:hidden inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface hover:bg-surface-2 transition-colors"
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 overflow-y-auto">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b">
            <Logo />
          </div>

          <nav className="flex-1 px-3 py-4 space-y-1">
            {NAV.map((item) => {
              const hasChildren = !!item.children?.length;
              const isExpanded = expanded === item.label;
              return (
                <div key={item.href}>
                  <div className="flex items-stretch">
                    <Link
                      href={item.href}
                      className="flex-1 px-4 py-3.5 text-base font-medium hover:bg-surface-2 rounded-xl transition-colors"
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => setExpanded(isExpanded ? null : item.label)}
                        aria-label="Étendre le sous-menu"
                        className="px-3 hover:bg-surface-2 rounded-xl"
                      >
                        <motion.span
                          animate={{ rotate: isExpanded ? 45 : 0 }}
                          className="inline-block text-2xl text-muted leading-none"
                        >
                          +
                        </motion.span>
                      </button>
                    )}
                  </div>
                  <AnimatePresence initial={false}>
                    {hasChildren && isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-5 pr-2 pb-2 pt-1 space-y-0.5">
                          {item.children!.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="block rounded-lg px-3 py-2.5 text-sm text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <div className="pt-4">
              <Link
                href="/login"
                className="flex items-center justify-between rounded-xl border border-border px-4 py-3.5 text-base font-medium hover:bg-surface-2 transition-colors"
              >
                Espace élève <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </nav>

          <div className="border-t p-5 space-y-3 bg-surface-2/50">
            <OpenStatus />
            <a
              href={`tel:${BUSINESS.phoneIntl}`}
              className="flex items-center gap-3 text-base font-semibold"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand text-white">
                <Phone className="size-4" />
              </span>
              {BUSINESS.phone}
            </a>
            <QuoteCTA size="lg" className="w-full" label="Devis gratuit en 30 sec." />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
