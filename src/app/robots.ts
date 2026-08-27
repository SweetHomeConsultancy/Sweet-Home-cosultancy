import type { MetadataRoute } from "next";
import { brand } from "@/lib/data";

const siteUrl = `https://${brand.website}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
