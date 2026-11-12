import { PageIntro } from "@/src/components/ui";
import { siteConfig } from "@/src/config/site";
import { pageMetadata } from "@/src/lib/metadata";
export const metadata = pageMetadata(
  "Confidentialité",
  "Fonctionnement du site vitrine PODO et informations à compléter sur le traitement des demandes professionnelles.",
  "/confidentialite",
);
export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="CONFIDENTIALITÉ"
        title="Des échanges professionnels, sans donnée de patient."
        text="Le site vitrine est distinct de l’application de laboratoire et de tout futur traitement clinique."
      />
      <section className="section section-white">
        <div className="container narrow prose">
          <div className="legal-alert">
            Cette notice doit être validée avec l’identité du responsable, les
            prestataires retenus et la durée de conservation avant activation du
            formulaire public.
          </div>
          <h2>Ce que le site reçoit</h2>
          <p>
            Par défaut, aucun formulaire n’est activé. S’il est configuré, il
            demandera un nom professionnel, une adresse e-mail, une fonction, un
            motif et un message. L’organisation est facultative. Aucune pièce
            jointe ni donnée de santé n’est demandée.
          </p>
          <h2>Finalité</h2>
          <p>
            Les informations de contact serviraient uniquement à répondre à une
            demande professionnelle ou à discuter d’un éventuel partenariat.
            Elles ne sont pas utilisées pour une newsletter automatique.
          </p>
          <h2>Prestataires et conservation</h2>
          <p>
            Un déploiement Vercel et un envoi par Resend sont envisagés. Les
            prestataires effectivement utilisés, les transferts éventuels, la
            base juridique, la durée de conservation et la procédure d’exercice
            des droits restent à confirmer par l’éditeur avant activation
            publique.
          </p>
          <h2>Cookies et mesure d’audience</h2>
          <p>
            Le site n’intègre aucun outil publicitaire, aucune mesure d’audience
            et aucun bandeau de consentement artificiel. Les cookies techniques
            éventuels du service d’hébergement devront être vérifiés sur le
            déploiement réel.
          </p>
          <h2>Vos demandes</h2>
          <p>
            {siteConfig.contactEmail ? (
              <>
                Pour toute question sur les données de contact, écrivez à{" "}
                <a href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
                .
              </>
            ) : (
              <>
                Le contact pour l’exercice des droits sera publié une fois
                l’adresse officielle vérifiée.
              </>
            )}
          </p>
        </div>
      </section>
    </>
  );
}
