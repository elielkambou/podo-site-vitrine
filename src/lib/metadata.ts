import type { Metadata } from "next";
import { siteConfig } from "@/src/config/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = new URL(path, siteConfig.url);
  return {
    title: `${title} | PODO`,
    description,
    alternates: { canonical: url.toString() },
    openGraph: {
      title: `${title} | PODO`,
      description,
      url: url.toString(),
      locale: "fr_FR",
      type: "website",
      images: [{ url: "/opengraph-image" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | PODO`,
      description,
    },
  };
}
