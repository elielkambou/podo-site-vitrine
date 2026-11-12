import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";
export default function robots(): MetadataRoute.Robots {
  const publicSite =
    process.env.VERCEL_ENV === "production" &&
    process.env.PUBLICATION_APPROVED === "true" &&
    !!process.env.NEXT_PUBLIC_SITE_URL;
  return publicSite
    ? {
        rules: { userAgent: "*", allow: "/", disallow: "/api/" },
        sitemap: `${siteConfig.url}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
