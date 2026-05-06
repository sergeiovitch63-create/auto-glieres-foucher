"use client";
import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useQuoteSheet } from "./quote-sheet-provider";

type Props = ButtonProps & {
  formation?: string;
  label?: string;
  withArrow?: boolean;
};

export function QuoteCTA({
  formation,
  label = "Devis gratuit",
  withArrow = true,
  children,
  ...props
}: Props) {
  const { open } = useQuoteSheet();
  return (
    <Button onClick={() => open(formation)} {...props}>
      {children ?? label}
      {withArrow && !children && <ArrowRight />}
    </Button>
  );
}
