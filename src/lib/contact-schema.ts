import { z } from "zod";

export const contactSchema = z.strictObject({
  name: z.string().trim().min(2, "Indiquez votre nom professionnel.").max(100),
  email: z.email("Saisissez une adresse e-mail valide.").max(254),
  role: z.enum([
    "podo",
    "orthoprothesiste",
    "cabinet",
    "recherche",
    "partenaire",
    "autre",
  ]),
  purpose: z.enum(["presentation", "retour", "partenariat", "autre"]),
  organization: z.string().trim().max(120).default(""),
  message: z
    .string()
    .trim()
    .min(10, "Précisez votre demande en quelques mots.")
    .max(2000, "Votre message est trop long."),
  company_site_hidden: z.string().max(120).default(""),
});
export type ContactInput = z.input<typeof contactSchema>;
export type ContactLead = z.output<typeof contactSchema>;

export const roleLabels: Record<ContactLead["role"], string> = {
  podo: "Pédicure-podologue",
  orthoprothesiste: "Orthoprothésiste",
  cabinet: "Cabinet / équipe",
  recherche: "Formation / recherche",
  partenaire: "Partenaire B2B",
  autre: "Autre professionnel",
};
export const purposeLabels: Record<ContactLead["purpose"], string> = {
  presentation: "Présentation du projet",
  retour: "Retour de professionnel",
  partenariat: "Partenariat / pilote",
  autre: "Autre demande professionnelle",
};
