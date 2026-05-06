"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
  fade?: boolean;
};

export function Marquee({ children, speed = 40, className, pauseOnHover = true, fade = true }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fade && "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className="marquee-track group"
        style={{ animationDuration: `${speed}s` }}
        onMouseEnter={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = "running")}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
