import type { MetadataRoute } from "next";
import { publicRoutes, siteConfig } from "@/src/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (
    process.env.PUBLICATION_APPROVED !== "true" ||
    !process.env.NEXT_PUBLIC_SITE_URL
  )
    return [];
  return publicRoutes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
