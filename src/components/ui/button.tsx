import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "gold" | "ivory" | "outline" | "outline-light" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "group relative inline-flex select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold uppercase leading-none transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory disabled:pointer-events-none disabled:opacity-40 dark:focus-visible:ring-offset-brand-charcoal",
          {
            "btn-line btn-sheen border border-brand-charcoal bg-brand-charcoal text-brand-ivory hover:-translate-y-[2px] hover:border-brand-accent hover:shadow-[0_16px_34px_rgba(27,25,22,0.28)] hover:text-white active:translate-y-0 active:shadow-none":
              variant === "default",
            "btn-gloss btn-sheen border border-brand-accent-light/70 bg-gradient-to-b from-brand-accent-light via-brand-accent to-brand-accent-deep text-white shadow-[0_8px_24px_rgba(143,112,64,0.35)] hover:-translate-y-[3px] hover:border-brand-accent-light hover:from-brand-accent hover:via-brand-accent-light hover:to-brand-accent hover:shadow-[0_18px_44px_rgba(143,112,64,0.5)] active:translate-y-0 active:shadow-[0_6px_16px_rgba(143,112,64,0.3)]":
              variant === "gold",
            "btn-sheen border border-brand-ivory bg-brand-ivory text-brand-charcoal hover:-translate-y-[2px] hover:border-white hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:translate-y-0 active:shadow-none":
              variant === "ivory",
            "border border-brand-charcoal/25 bg-transparent text-brand-charcoal hover:-translate-y-[2px] hover:border-brand-charcoal hover:bg-brand-charcoal hover:text-white hover:shadow-[0_14px_30px_rgba(27,25,22,0.14)] active:translate-y-0 active:shadow-none":
              variant === "outline",
            "border border-white/40 bg-transparent text-white hover:-translate-y-[2px] hover:border-white hover:bg-white hover:text-brand-charcoal hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)] active:translate-y-0 active:shadow-none":
              variant === "outline-light",
            "bg-transparent text-brand-charcoal hover:bg-brand-accent/10 hover:text-brand-accent-deep":
              variant === "ghost",
            "text-brand-charcoal underline-offset-4 hover:text-brand-accent-deep hover:underline":
              variant === "link",
          },
          {
            "h-12 px-8 text-xs tracking-[0.18em]": size === "default",
            "h-10 px-6 text-[0.65rem] tracking-[0.18em]": size === "sm",
            "h-[52px] px-9 text-[0.7rem] tracking-[0.2em] md:h-14 md:px-11":
              size === "lg",
            "h-11 w-11 p-0": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };