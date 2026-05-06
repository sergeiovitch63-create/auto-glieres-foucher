"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, FileText, GraduationCap, Receipt, User, LogOut, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/dashboard/livret", label: "Livret d'apprentissage", icon: GraduationCap },
  { href: "/dashboard/code", label: "Code en ligne", icon: BookOpen },
  { href: "/dashboard/documents", label: "Documents", icon: FileText },
  { href: "/dashboard/factures", label: "Factures", icon: Receipt },
  { href: "/dashboard/profil", label: "Mon profil", icon: User },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-surface-2/40 grid lg:grid-cols-[280px_1fr]">
      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-30 bg-background border-b border-border flex items-center justify-between p-4">
        <Logo />
        <button onClick={() => setOpen(!open)} aria-label="Menu" className="size-10 rounded-full border border-border inline-flex items-center justify-center">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-30 h-screen w-72 lg:w-auto border-r border-border bg-background flex flex-col transition-transform",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6 hidden lg:block">
          <Logo />
        </div>
        <div className="px-6 pt-6 lg:pt-2 pb-4">
          <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-4 text-white">
            <p className="text-xs opacity-80">Bonjour</p>
            <p className="text-display text-xl font-semibold">Lucie 👋</p>
            <p className="text-xs opacity-80 mt-1">Permis B · 12h restantes</p>
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-0.5">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  active
                    ? "bg-foreground text-background"
                    : "text-muted hover:bg-surface-2 hover:text-foreground"
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border">
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted hover:bg-surface-2 hover:text-foreground transition-colors">
            <LogOut className="size-4" /> Déconnexion
          </Link>
        </div>
      </aside>

      <main className="min-w-0">
        {children}
      </main>
    </div>
  );
}
