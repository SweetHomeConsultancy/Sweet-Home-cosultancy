import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Architecture & Interior Design Firm in Kolkata",
  description:
    "Sweet Home Consultancy Services is a Kolkata-based architecture, interior design and construction firm serving Titagarh, Barrackpore, Khardah, Sodpur and North 24 Parganas with 16+ years of experience across India and the Gulf (GCC).",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Sweet Home Consultancy Services — Architects in Kolkata",
    description:
      "16+ years of architecture, interior design and construction experience serving Kolkata, Titagarh, Barrackpore and North 24 Parganas.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
