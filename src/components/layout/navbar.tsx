"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks, contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = React.useState<string>(
    pathname === "/" ? "/" : pathname
  );

  // Adjust scroll-menu + active state during render when the route changes
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setActiveLink(pathname === "/" ? "/" : pathname);
    setIsMobileMenuOpen(false);
  }

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset vertical position when navigating between routes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  // Body scroll lock when the mobile drawer is open
  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Scrollspy — keep "Home" highlighted while on the home page
  React.useEffect(() => {
    if (pathname !== "/") return;
    const hero = document.getElementById("home-hero");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) setActiveLink("/");
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  // Non-home pages always use the solid bar so text stays legible over any page header
  const solid = isScrolled || pathname !== "/";
  const isHeroState = pathname === "/" && !isScrolled && !isMobileMenuOpen;

  const isActiveHref = (href: string) =>
    href === "/"
      ? activeLink === "/"
      : activeLink === href && href.includes("#")
        ? true
        : activeLink === href;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          solid
            ? "bg-brand-ivory/95 backdrop-blur-md border-b border-brand-stone shadow-[0_1px_30px_rgba(27,25,22,0.06)]"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div
          className={cn(
            "container-custom flex items-center justify-between transition-all duration-500",
            solid ? "h-16 md:h-[72px]" : "h-20 md:h-[92px]"
          )}
        >
          {/* Logo */}
          <Logo light={isHeroState} />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = isActiveHref(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative pb-1 text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300",
                    active
                      ? isHeroState
                        ? "text-white"
                        : "text-brand-charcoal"
                      : isHeroState
                        ? "text-white/70 hover:text-white"
                        : "text-brand-muted hover:text-brand-charcoal"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 bg-brand-accent transition-all duration-300",
                      active ? "w-6" : "w-0 group-hover:w-6"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 md:gap-5">
            <Link
              href={`tel:${contactInfo.tel1}`}
              className={cn(
                "hidden items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300 xl:flex",
                isHeroState ? "text-white/80 hover:text-white" : "text-brand-muted hover:text-brand-accent"
              )}
            >
              <Phone size={15} className={cn(isHeroState ? "text-brand-accent-light" : "text-brand-accent")} />
              {contactInfo.phone1}
            </Link>

            <Button
              asChild
              variant="gold"
              className={cn(
                "hidden h-11 lg:inline-flex",
                isHeroState &&
                  "border-brand-accent-light/60 bg-transparent hover:border-brand-accent-light hover:bg-brand-accent"
              )}
            >
              <Link href="/contact">
                Get a Quote
                <ArrowUpRight size={14} />
              </Link>
            </Button>

            <button
              type="button"
              className={cn(
                "flex h-11 w-11 items-center justify-center transition-colors duration-300 lg:hidden",
                isHeroState ? "text-white" : "text-brand-charcoal"
              )}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-brand-ivory lg:hidden"
          >
            <div className="flex min-h-full flex-col pt-16 md:pt-20">
              <nav className="flex flex-1 flex-col px-6 pt-6" aria-label="Mobile">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="border-b border-brand-stone"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex w-full items-center justify-between py-[1.15rem] font-heading text-[1.7rem] font-semibold tracking-wide transition-colors",
                        activeLink === link.href ? "text-brand-accent-deep" : "text-brand-charcoal"
                      )}
                    >
                      {link.name}
                      <ArrowUpRight className={cn("h-5 w-5", activeLink === link.href ? "text-brand-accent" : "text-brand-muted")} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="space-y-4 px-6 pb-12 pt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Quote <ArrowUpRight size={15} />
                  </Link>
                </Button>
                <a
                  href={`tel:${contactInfo.tel1}`}
                  className="flex items-center justify-center gap-2 text-sm font-medium tracking-widest text-brand-muted"
                >
                  <Phone size={14} className="text-brand-accent" />
                  {contactInfo.phone1}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}