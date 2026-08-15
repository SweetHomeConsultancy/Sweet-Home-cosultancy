import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
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
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-charcoal text-white hover:bg-brand-accent": variant === "default",
            "border border-brand-stone bg-transparent hover:border-brand-charcoal hover:bg-brand-charcoal hover:text-white": variant === "outline",
            "hover:bg-brand-gray text-brand-charcoal": variant === "ghost",
            "text-brand-charcoal underline-offset-4 hover:underline hover:text-brand-accent": variant === "link",
            "h-11 px-8 py-2": size === "default",
            "h-9 px-4": size === "sm",
            "h-14 px-10 text-base uppercase tracking-widest": size === "lg",
            "h-11 w-11": size === "icon",
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
