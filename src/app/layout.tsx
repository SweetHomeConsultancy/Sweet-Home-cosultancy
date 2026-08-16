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
    default: "SWEET HOME — Architecture, Interior Design & Construction | Kolkata",
    template: "%s | SWEET HOME",
  },
  description:
    "SWEET HOME is a premium architecture, interior design, construction and project management studio in Kolkata. DESIGN • INSPIRE • BUILD — trust, precision and quality in every detail.",
  keywords: [
    "architecture",
    "interior design",
    "construction",
    "project management",
    "Kolkata",
  ],
  openGraph: {
    title: "SWEET HOME — Architecture, Interior Design & Construction",
    description:
      "Design, Inspire, Build — a premium architecture and construction studio in Kolkata.",
    type: "website",
    locale: "en_IN",
    siteName: "SWEET HOME",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWEET HOME — Design • Inspire • Build",
    description:
      "Premium architecture, interior design, construction and project management in Kolkata.",
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
