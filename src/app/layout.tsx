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
import { contactInfo, serviceAreas, brand } from "@/lib/data";

const siteUrl = `https://${brand.website}`;
const locationList = serviceAreas.filter((a) => a !== "and nearby areas");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sweet Home Consultancy Services — Architects, Interior Designers & Contractors in Kolkata, Titagarh & Barrackpore",
    template: "%s | Sweet Home Consultancy Services",
  },
  description:
    "Sweet Home Consultancy Services is a professional architecture, interior design, construction, project management and real estate consultancy serving Kolkata, Titagarh, Barrackpore, Khardah, Sodpur, New Town, Salt Lake and North 24 Parganas. 16+ years of experience — free consultation.",
  keywords: [
    "architects in Kolkata",
    "interior designer in Kolkata",
    "construction company Kolkata",
    "architect near Titagarh",
    "architect near Barrackpore",
    "interior design Khardah",
    "construction company Sodpur",
    "architects North 24 Parganas",
    "real estate consultancy Kolkata",
    "project management Kolkata",
    "architecture",
    "interior design",
    "construction",
    "project management",
    "real estate consultancy",
    ...locationList,
  ],
  authors: [{ name: "Sweet Home Consultancy Services" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Sweet Home Consultancy Services — Architecture, Interior Design & Construction in Kolkata",
    description:
      "Architecture • Interior Design • Construction • Project Management • Real Estate Consultancy serving Kolkata, Titagarh, Barrackpore, Khardah, Sodpur and North 24 Parganas.",
    type: "website",
    locale: "en_IN",
    siteName: "Sweet Home Consultancy Services",
    url: siteUrl,
    images: [
      {
        url: "/images/hero-main2.jpeg",
        width: 1600,
        height: 900,
        alt: "Sweet Home Consultancy Services — Architecture & Interior Design in Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Home Consultancy Services — Design • Inspire • Build",
    description:
      "Architecture, interior design, construction, project management and real estate consultancy in Kolkata, Titagarh & Barrackpore.",
    images: ["/images/hero-main2.jpeg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "ProfessionalService"],
  name: brand.name,
  alternateName: "Sweet Home Consultancy",
  description:
    "Architecture, interior design, construction, project management and real estate consultancy serving Kolkata and surrounding North 24 Parganas areas.",
  url: siteUrl,
  logo: `${siteUrl}/sweet-home.png`,
  image: `${siteUrl}/images/hero-main2.jpeg`,
  telephone: contactInfo.tel1,
  email: contactInfo.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contactInfo.addressLine1}, ${contactInfo.addressLine2}`,
    addressLocality: "Titagarh",
    addressRegion: "West Bengal",
    postalCode: "700119",
    addressCountry: "IN",
  },
  areaServed: locationList.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "21:00",
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural Design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Management" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate Consultancy" } },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
