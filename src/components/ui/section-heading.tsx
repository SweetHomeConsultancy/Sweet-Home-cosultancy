import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  light = false,
  as: Tag = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
      {...props}
    >
      <span className={cn(align === "center" ? "eyebrow-center" : "eyebrow", light && "eyebrow-light")}>
        {eyebrow}
      </span>
      <Tag
        className={cn(
          "font-semibold leading-[1.05] tracking-[-0.02em] text-balance",
          align === "center" ? "max-w-3xl" : "max-w-3xl",
          light ? "text-white" : "text-brand-charcoal"
        )}
        style={{ fontSize: "clamp(2rem, 4.4vw, 3.75rem)" }}
      >
        {title}
      </Tag>
      {lead && (
        <p
          className={cn(
            "max-w-2xl text-base md:text-lg font-light leading-relaxed",
            light ? "text-brand-gray/70" : "text-brand-muted"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}