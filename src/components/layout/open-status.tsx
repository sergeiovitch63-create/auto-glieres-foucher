"use client";
import * as React from "react";
import { getOpenStatus } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function OpenStatus({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<ReturnType<typeof getOpenStatus> | null>(null);

  React.useEffect(() => {
    setStatus(getOpenStatus());
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;
  const { openNow, closesAt, opensAt } = status;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium",
        openNow ? "text-green-700" : "text-muted",
        className
      )}
    >
      <span
        className={cn(
          "relative flex size-2",
          openNow && "after:absolute after:inset-0 after:rounded-full after:bg-green-500 after:animate-ping"
        )}
      >
        <span
          className={cn(
            "relative size-2 rounded-full",
            openNow ? "bg-green-500" : "bg-muted-2"
          )}
        />
      </span>
      {openNow ? `Ouvert · ferme à ${closesAt}` : `Fermé · ouvre ${opensAt}`}
    </span>
  );
}
