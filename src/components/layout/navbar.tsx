"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHero = !isScrolled && pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-white/98 backdrop-blur-lg border-b border-brand-stone shadow-[0_1px_20px_rgba(0,0,0,0.06)] py-3"
            : "bg-gradient-to-b from-black/40 to-transparent border-b border-white/10 py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-9 h-9 overflow-hidden rounded-sm">
              <Image
                src="/logo.png"
                alt="SWEET HOME"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className={cn(
                "font-heading font-bold text-lg tracking-[0.18em] transition-colors duration-300",
                isHero ? "text-white" : "text-brand-charcoal"
              )}>
                SWEET HOME
              </span>
              <span className={cn(
                "text-[0.6rem] tracking-[0.22em] uppercase font-medium transition-colors duration-300 mt-0.5",
                isHero ? "text-white/60" : "text-brand-muted"
              )}>
                Design &bull; Inspire &bull; Build
              </span>
            </div>
          </Link>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-[0.75rem] font-bold tracking-[0.18em] uppercase pb-0.5 transition-all duration-300",
                    "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-brand-accent after:transition-all after:duration-300",
                    isActive
                      ? (isHero ? "text-white after:w-full after:bg-white" : "text-brand-charcoal after:w-full")
                      : (isHero
                        ? "text-white/75 hover:text-white after:w-0 hover:after:w-full after:bg-white"
                        : "text-brand-muted hover:text-brand-charcoal after:w-0 hover:after:w-full")
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "hidden lg:flex items-center gap-2 px-6 py-2.5 text-[0.65rem] font-bold tracking-[0.2em] uppercase border transition-all duration-300",
                isHero
                  ? "text-white border-white/50 hover:bg-white hover:text-brand-charcoal"
                  : "text-white bg-brand-charcoal border-brand-charcoal hover:bg-brand-accent hover:border-brand-accent"
              )}
            >
              Get a Quote
            </Link>

            <button
              className={cn(
                "lg:hidden p-2 transition-colors",
                isHero && !isMobileMenuOpen ? "text-white" : "text-brand-charcoal"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-stone">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative w-8 h-8">
                  <Image src="/logo.png" alt="SWEET HOME" fill className="object-contain" />
                </div>
                <span className="font-heading font-bold text-base tracking-widest text-brand-charcoal">SWEET HOME</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-charcoal p-1">
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col flex-1 px-6 py-8 gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block text-2xl font-heading font-semibold tracking-wide py-4 border-b border-brand-stone/50 transition-colors",
                        isActive ? "text-brand-accent" : "text-brand-charcoal hover:text-brand-accent"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div className="px-6 pb-10 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center h-13 bg-brand-charcoal text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-accent transition-colors"
              >
                Start Your Project
              </Link>
              <a href="tel:9007567100" className="flex items-center justify-center gap-2 text-brand-muted text-sm">
                <Phone size={14} />
                <span className="tracking-widest">9007567100</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
