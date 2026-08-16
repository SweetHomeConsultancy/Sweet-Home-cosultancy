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
      className={cn(
        "group flex shrink-0 items-center transition-opacity duration-300 hover:opacity-85",
        className
      )}
    >
      <Image
        src="/sweet_home_logo.png"
        alt="SWEET HOME"
        width={538}
        height={464}
        priority
        sizes="(max-width: 768px) 132px, 168px"
        className={cn(
          "h-10 w-auto object-contain transition-all duration-500 md:h-12",
          light
            ? "drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] [filter:brightness(0)_invert(1)_drop-shadow(0_2px_10px_rgba(0,0,0,0.55))]"
            : ""
        )}
      />
    </Link>
  );
}
