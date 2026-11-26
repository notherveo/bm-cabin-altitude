"use client";
import * as React from "react";

import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  once = true,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
}) {
  const inView = useInView(null, { once });
  return (
    <div
      className={cn("transition-all duration-700 ease-out", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {inView && children}
    </div>
  );
}
