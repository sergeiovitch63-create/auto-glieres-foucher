"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TENANT } from "@/tenant";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme={TENANT.brand.mode}
      forcedTheme={TENANT.brand.mode}
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
