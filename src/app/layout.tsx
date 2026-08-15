import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/layout/floating-contact";

export const metadata: Metadata = {
  title: "SWEET HOME | Architecture, Interior Design & Construction",
  description: "SWEET HOME is a premium Architecture, Interior Design, Construction and Project Management company in Kolkata. DESIGN • INSPIRE • BUILD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-brand-accent selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
