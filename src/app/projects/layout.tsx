import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects — Architecture & Interior Design Portfolio, Kolkata",
  description:
    "Explore completed architecture, interior design and construction projects across Kolkata, Titagarh, Barrackpore, Khardah, New Town and Salt Lake by Sweet Home Consultancy Services.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — Sweet Home Consultancy Services",
    description:
      "Residential, commercial and interior design projects completed across Kolkata and North 24 Parganas.",
    url: "/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
