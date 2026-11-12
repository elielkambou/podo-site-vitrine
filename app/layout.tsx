import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteHeader } from "@/src/components/site-header";
import { SiteFooter } from "@/src/components/site-footer";
import { siteConfig } from "@/src/config/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PODO — La mesure du pied, repensée pour les podologues",
    template: "%s",
  },
  description:
    "PODO développe une approche du scan 3D du pied et des mesures morphologiques pour les professionnels. Projet en développement, avec calibration et revue humaine.",
  openGraph: {
    siteName: "PODO",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/opengraph-image" }],
  },
  robots: {
    index:
      process.env.VERCEL_ENV === "production" &&
      process.env.PUBLICATION_APPROVED === "true" &&
      !!process.env.NEXT_PUBLIC_SITE_URL,
    follow:
      process.env.VERCEL_ENV === "production" &&
      process.env.PUBLICATION_APPROVED === "true" &&
      !!process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className={manrope.className}>
        <a className="skip-link" href="#contenu">
          Aller au contenu principal
        </a>
        {process.env.PUBLICATION_APPROVED !== "true" && (
          <div className="test-notice" role="note">
            Version de test — contenu en cours de relecture. Ne transmettez
            aucune donnée de patient.
          </div>
        )}
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
