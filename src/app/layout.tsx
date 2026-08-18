import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const serifAcc = Instrument_Serif({
  variable: "--font-serif-acc",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/layout/floating-contact";

export const metadata: Metadata = {
  title: {
    default: "Sweet Home Consultancy Services — Architecture, Interior Design, Construction & Real Estate | Kolkata",
    template: "%s | Sweet Home Consultancy Services",
  },
  description:
    "Sweet Home Consultancy Services is a professional architecture, interior design, construction, project management and real estate consultancy in Kolkata. Designing better spaces, building better futures.",
  keywords: [
    "architecture",
    "interior design",
    "construction",
    "project management",
    "real estate consultancy",
    "Kolkata",
    "Barrackpore",
    "North 24 Parganas",
  ],
  openGraph: {
    title: "Sweet Home Consultancy Services — Architecture, Interior Design & Construction",
    description:
      "Architecture • Interior Design • Construction • Project Management • Real Estate Consultancy in Kolkata. Designing better spaces, building better futures.",
    type: "website",
    locale: "en_IN",
    siteName: "Sweet Home Consultancy Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Home Consultancy Services — Design • Inspire • Build",
    description:
      "Architecture, interior design, construction, project management and real estate consultancy in Kolkata.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FDFCFA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${serifAcc.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
