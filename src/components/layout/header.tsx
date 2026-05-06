"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Phone, Sparkles } from "lucide-react";
import { Logo } from "./logo";
import { OpenStatus } from "./open-status";
import { MobileNav } from "./mobile-nav";
import { QuoteCTA } from "@/components/quote/quote-cta";
import { NAV } from "@/lib/nav";
import { BUSINESS } from "@/lib/content/business";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setActiveMenu(null), [pathname]);

  const isDashboard = pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin");
  if (isDashboard) return null;

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block border-b border-border/60 bg-foreground text-background text-xs">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 opacity-90">
              <Sparkles className="size-3.5 text-brand-300" /> Depuis {BUSINESS.founded} · {BUSINESS.studentsTrained.toLocaleString("fr-FR")}+ permis obtenus · {BUSINESS.rating.toString().replace(".", ",")}/5 sur Google
            </span>
          </div>
          <div className="flex items-center gap-5">
            <OpenStatus className="text-background/80" />
            <span className="opacity-50">·</span>
            <Link href={`tel:${BUSINESS.phoneIntl}`} className="inline-flex items-center gap-1.5 hover:text-brand-300 transition-colors">
              <Phone className="size-3.5" /> {BUSINESS.phone}
            </Link>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-background/0"
        )}
        style={{ height: "var(--header-h)" }}
      >
        <div className="container-x flex h-full items-center justify-between gap-6">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setActiveMenu(null)}>
            {NAV.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
              const hasChildren = !!item.children?.length;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveMenu(item.label)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown className="size-3.5 opacity-60 transition-transform group-data-[state=open]:rotate-180" />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </Link>

                  {hasChildren && (
                    <AnimatePresence>
                      {activeMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-0 top-full pt-3 w-[680px] -translate-x-4"
                        >
                          <div className="rounded-2xl border border-border bg-surface shadow-2xl shadow-black/10 p-3">
                            <div className="grid grid-cols-2 gap-1">
                              {item.children!.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="group flex flex-col gap-0.5 rounded-xl p-3 hover:bg-surface-2 transition-colors"
                                >
                                  <span className="text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                                    {child.label}
                                  </span>
                                  {child.description && (
                                    <span className="text-xs text-muted">{child.description}</span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <Link
              href="/login"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors px-3 py-2"
            >
              Espace élève
            </Link>
            <QuoteCTA size="md" label="Devis gratuit" />
          </div>

          <MobileNav />
        </div>
      </header>
    </>
  );
}
