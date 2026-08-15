import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  light = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        {
          "items-start text-left": align === "left",
          "items-center text-center": align === "center",
          "items-end text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {subtitle && (
        <span
          className={cn(
            "text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2",
            light ? "text-brand-gray/60" : "text-brand-accent"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.1]",
          light ? "text-white" : "text-brand-charcoal"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
