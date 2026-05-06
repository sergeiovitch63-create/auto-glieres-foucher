"use client";
import * as React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { LeadForm } from "./lead-form";

type Ctx = {
  open: (formation?: string) => void;
  close: () => void;
};

const QuoteCtx = React.createContext<Ctx | null>(null);

export function QuoteSheetProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formation, setFormation] = React.useState<string | undefined>(undefined);

  const ctx = React.useMemo<Ctx>(
    () => ({
      open: (f) => {
        setFormation(f);
        setIsOpen(true);
      },
      close: () => setIsOpen(false),
    }),
    []
  );

  return (
    <QuoteCtx.Provider value={ctx}>
      {children}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Devis gratuit en 30 secondes</SheetTitle>
            <SheetDescription>
              Réponse sous 24h. Aucun engagement, juste un échange humain.
            </SheetDescription>
          </SheetHeader>
          <div className="px-6 pb-8 pt-2">
            <LeadForm
              variant="inline"
              defaultFormation={formation}
              onSuccess={() => setTimeout(() => setIsOpen(false), 2500)}
            />
          </div>
        </SheetContent>
      </Sheet>
    </QuoteCtx.Provider>
  );
}

export function useQuoteSheet() {
  const ctx = React.useContext(QuoteCtx);
  if (!ctx) throw new Error("useQuoteSheet must be used within QuoteSheetProvider");
  return ctx;
}
