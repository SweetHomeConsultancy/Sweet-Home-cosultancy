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
      aria-label="SWEET HOME — Home"
      className={cn("group flex shrink-0 items-center gap-3", className)}
    >
      <span
        className={cn(
          "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-[3px] ring-1 transition-all duration-500 md:h-11 md:w-11",
          light
            ? "bg-brand-charcoal/60 ring-brand-accent-light/50 group-hover:ring-brand-accent-light"
            : "ring-brand-accent/30 group-hover:ring-brand-accent"
        )}
      >
        <span className="relative h-full w-full overflow-hidden rounded-lg bg-white">
          <Image
            src="/logo.png"
            alt=""
            fill
            priority
            sizes="44px"
            className="object-contain"
          />
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[0.95rem] font-extrabold tracking-[0.2em] transition-colors duration-500 md:text-[1.05rem]",
            light ? "text-white" : "text-brand-charcoal"
          )}
        >
          SWEET&nbsp;HOME
        </span>
        <span
          className={cn(
            "mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-500 md:text-[0.6rem]",
            light ? "text-white/55" : "text-brand-muted"
          )}
        >
          Design &middot; Inspire &middot; Build
        </span>
      </span>
    </Link>
  );
}