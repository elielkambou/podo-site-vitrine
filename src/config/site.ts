export const siteConfig = {
  name: "PODO",
  tagline: "La mesure du pied, repensée pour les podologues.",
  stage: "Projet en développement — recherche de partenaires pilotes",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
} as const;

export const navigation = [
  { href: "/solution", label: "La solution" },
  { href: "/fonctionnement", label: "Fonctionnement" },
  { href: "/mesures", label: "Mesures" },
  { href: "/pour-les-professionnels", label: "Professionnels" },
  { href: "/faq", label: "FAQ" },
] as const;

export const publicRoutes = [
  "/",
  "/solution",
  "/fonctionnement",
  "/mesures",
  "/pour-les-professionnels",
  "/faq",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/accessibilite",
] as const;
