import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export function Logo({ light = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="SWEET HOME Consultancy Services — Architectural, Interior, Construction"
      className={cn(
        "group inline-flex shrink-0 items-center gap-2 sm:gap-2.5 md:gap-3 transition-opacity duration-300 hover:opacity-90 select-none",
        className
      )}
    >
      {/* Emblem Icon */}
      <div className="relative shrink-0 flex items-end self-end mt-2 sm:mt-2.5">
        <Image
          src="/sweet-home.png"
          alt="SWEET HOME Emblem"
          width={550}
          height={460}
          priority
          sizes="(max-width: 640px) 68px, (max-width: 768px) 78px, 92px"
          className={cn(
            "h-16 sm:h-18 md:h-19 lg:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105",
            light
              ? "drop-shadow-[0_2px_12px_rgba(200,152,14,0.35)]"
              : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
          )}
        />
      </div>

      {/* Brand Text Stack */}
      <div className="flex flex-col justify-center items-center leading-none tracking-normal">
        {/* Line 1: SWEET (Black/White) + HOME (Gold) */}
        <div className="flex items-center gap-1.5 leading-none -ml-2">
          <span
            className={cn(
              "font-heading font-black text-base sm:text-lg md:text-lg lg:text-[1.3rem] uppercase tracking-[0.06em] sm:tracking-[0.08em] transition-colors duration-300",
              light ? "text-white" : "text-brand-charcoal"
            )}
          >
            SWEET
          </span>
          <span
            className={cn(
              "font-heading font-black text-base sm:text-lg md:text-lg lg:text-[1.3rem] uppercase tracking-[0.06em] sm:tracking-[0.08em] transition-colors duration-300",
              light ? "text-brand-accent-light" : "text-brand-accent-deep"
            )}
          >
            HOME
          </span>
        </div>

        {/* Line 2: —— CONSULTANCY SERVICES —— */}
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 my-[2px] sm:my-[3px] w-full">
          <span
            className={cn(
              "h-[1px] w-[15px] transition-colors duration-300",
              light ? "bg-brand-accent-light/70" : "bg-brand-accent-deep/80"
            )}
          />
          <span
            className={cn(
              "font-heading font-bold text-[9.5px] sm:text-[10px] md:text-[10px] lg:text-[10.5px] uppercase tracking-[0.2em] sm:tracking-[0.26em] transition-colors duration-300 leading-none whitespace-nowrap",
              light ? "text-brand-accent-light" : "text-brand-accent-deep"
            )}
          >
            CONSULTANCY SERVICES
          </span>
          <span
            className={cn(
              "h-[1px] w-[15px] transition-colors duration-300",
              light ? "bg-brand-accent-light/70" : "bg-brand-accent-deep/80"
            )}
          />
        </div>

        {/* Line 3: ARCHITECTURAL | INTERIOR | CONSTRUCTION */}
        <div
          className={cn(
            "flex items-center justify-between gap-1 text-[7.5px] sm:text-[8.5px] md:text-[8.5px] lg:text-[9px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.14em] transition-colors duration-300 leading-none whitespace-nowrap",
            light ? "text-white/80" : "text-brand-charcoal/85"
          )}
        >
          <span>ARCHITECTURAL</span>
          <span
            className={cn(
              "font-normal transition-colors duration-300",
              light ? "text-brand-accent-light" : "text-brand-accent"
            )}
          >
            |
          </span>
          <span>INTERIOR</span>
          <span
            className={cn(
              "font-normal transition-colors duration-300",
              light ? "text-brand-accent-light" : "text-brand-accent"
            )}
          >
            |
          </span>
          <span>CONSTRUCTION</span>
        </div>
      </div>
    </Link>
  );
}
