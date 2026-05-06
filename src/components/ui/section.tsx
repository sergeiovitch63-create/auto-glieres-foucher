import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article";
  containerClassName?: string;
  bleed?: boolean;
};

export function Section({
  as: Tag = "section",
  className,
  containerClassName,
  children,
  bleed,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn("relative w-full py-20 md:py-28", className)}
      {...props}
    >
      {bleed ? (
        children
      ) : (
        <div className={cn("container-x", containerClassName)}>{children}</div>
      )}
    </Tag>
  );
}

type EyebrowProps = React.HTMLAttributes<HTMLSpanElement>;
export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-brand",
        className
      )}
      {...props}
    >
      <span className="inline-block h-px w-6 bg-brand" />
      {children}
    </span>
  );
}

export function SectionTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-display text-4xl md:text-5xl lg:text-6xl text-balance",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "max-w-2xl text-lg text-muted leading-relaxed text-balance",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
