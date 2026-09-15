import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Architects & Interior Designers Near Titagarh, Kolkata",
  description:
    "Get in touch with Sweet Home Projects for architecture, interior design, construction and real estate consultancy in Kolkata, Titagarh, Barrackpore, Khardah and North 24 Parganas. Free consultation available.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Sweet Home Projects — Kolkata",
    description:
      "Speak with a senior architect about your plot, home or commercial project in Kolkata, Titagarh, Barrackpore or nearby North 24 Parganas.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
