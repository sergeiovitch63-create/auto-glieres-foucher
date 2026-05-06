import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-surface text-foreground",
        brand: "border-brand-200 bg-brand-50 text-brand-700",
        outline: "border-border-strong bg-transparent text-foreground",
        solid: "border-foreground bg-foreground text-background",
        success: "border-green-200 bg-green-50 text-green-700",
        new: "border-brand-300 bg-gradient-to-r from-brand-50 to-brand-100 text-brand-700",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}
