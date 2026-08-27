import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";
import { contactInfo, brand } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const servicesLinks = [
  { name: "Architecture", href: "/#services" },
  { name: "Interior Design", href: "/#services" },
  { name: "Construction", href: "/#services" },
  { name: "Project Management", href: "/#services" },
  { name: "Estimation & BOQ", href: "/#services" },
  { name: "CAD & BIM", href: "/#services" },
  { name: "Real Estate Consultancy", href: "/#services" },
  { name: "How We Work", href: "/#process" },
];

const social = [
  {
    label: "Facebook",
    href: "#",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-brand-charcoal text-brand-gray/80">
      <div className="container-custom grid gap-10 pb-16 pt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr]">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Logo light />
          <p className="max-w-sm text-sm font-light leading-relaxed text-brand-gray/70">
            Architecture, interior design, construction, project management and real
            estate consultancy in Kolkata — one accountable studio from first sketch to
            final handover.
          </p>
          <div className="flex items-center gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-brand-gray/70 transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-5">
          <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white">
            Explore
          </h4>
          <ul className="flex flex-col gap-3 border-l border-white/10 pl-5 text-sm font-light">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-brand-gray/70 transition-colors duration-300 hover:text-brand-accent-light"
                >
                  {link.name}
                  <ArrowUpRight size={12} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-5">
          <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white">
            Services
          </h4>
          <ul className="flex flex-col gap-3 border-l border-white/10 pl-5 text-sm font-light">
            {servicesLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-brand-gray/70 transition-colors duration-300 hover:text-brand-accent-light"
                >
                  {link.name}
                  <ArrowUpRight size={12} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-5">
          <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white">
            Contact Info
          </h4>
          <ul className="flex flex-col gap-4 border-l border-white/10 pl-5 text-sm font-light">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-accent" />
              <span className="leading-relaxed text-brand-gray/70">
                {contactInfo.addressLine1}
                <br />
                {contactInfo.city}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-brand-accent" />
              <div className="flex flex-wrap items-center gap-1.5 text-brand-gray/70">
                <a href={`tel:${contactInfo.tel1}`} className="hover:text-brand-accent-light transition-colors">
                  {contactInfo.phone1}
                </a>
                <span>/</span>
                <a href={`tel:${contactInfo.tel2}`} className="hover:text-brand-accent-light transition-colors">
                  {contactInfo.phone2}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-brand-accent" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="break-all text-brand-gray/70 transition-colors duration-300 hover:text-brand-accent-light"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe size={16} className="shrink-0 text-brand-accent" />
              <a
                href={`https://${brand.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray/70 transition-colors duration-300 hover:text-brand-accent-light"
              >
                {brand.website}
              </a>
            </li>
          </ul>
          <Button asChild variant="gold" className="mt-2 h-12 w-full md:w-max">
            <Link href="/contact">
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-7 text-xs font-light text-brand-gray/50 md:flex-row">
          <p>&copy; {currentYear} Sweet Home Consultancy Services. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="text-brand-accent">&bull;</span>
            {brand.motto}
            <span className="text-brand-accent">&bull;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}