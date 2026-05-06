import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeTokens } from "@/components/providers/theme-tokens";
import { QuoteSheetProvider } from "@/components/quote/quote-sheet-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Chatbot } from "@/components/chatbot/chatbot";
import { FloatingCallButton } from "@/components/layout/floating-call-button";
import { SchemaOrg } from "@/components/seo/schema-org";
import { TENANT } from "@/tenant";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = `https://${TENANT.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${TENANT.name} — Auto-école à ${TENANT.city}`,
    template: `%s · ${TENANT.name}`,
  },
  description:
    `${TENANT.services.slice(0, 4).map(s => s.name).join(", ")} et code en ligne à ${TENANT.city}. ${TENANT.successRateFirstAttempt}% de réussite au 1er passage. Note ${TENANT.rating}/5 sur Google.`,
  keywords: [
    `auto-école ${TENANT.city}`,
    `permis ${TENANT.city}`,
    `permis B ${TENANT.city}`,
    `code de la route ${TENANT.city}`,
    TENANT.name,
  ],
  authors: [{ name: TENANT.name }],
  creator: TENANT.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: TENANT.name,
    title: `${TENANT.name} — Permis & code à ${TENANT.city}`,
    description: `${TENANT.name}. ${TENANT.successRateFirstAttempt}% de réussite au premier passage.`,
  },
  twitter: {
    card: "summary_large_image",
    title: TENANT.name,
    description: `Auto-école à ${TENANT.city}.`,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: TENANT.brand.mode === "dark" ? "#0a0907" : "#fbfaf8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}
      data-theme={TENANT.brand.mode}
    >
      <head>
        <ThemeTokens />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SchemaOrg />
        <ThemeProvider>
          <a href="#main" className="skip-link">Aller au contenu</a>
          <QuoteSheetProvider>
            <Header />
            <main id="main" className="flex flex-col">
              {children}
            </main>
            <Footer />
            <FloatingCallButton />
            <Chatbot />
          </QuoteSheetProvider>
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            theme={TENANT.brand.mode}
            toastOptions={{ style: { fontFamily: "var(--font-sans)" } }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
