import { PageIntro } from "@/src/components/ui";
import { siteConfig } from "@/src/config/site";
import { pageMetadata } from "@/src/lib/metadata";
export const metadata = pageMetadata(
  "Accessibilité",
  "Démarche d’accessibilité du site vitrine PODO et moyens de signaler une difficulté.",
  "/accessibilite",
);
export default function Accessibility() {
  return (
    <>
      <PageIntro
        eyebrow="ACCESSIBILITÉ"
        title="Un site conçu pour être consultable par chacun."
        text="Nous travaillons la lisibilité, la navigation au clavier et la réduction des mouvements. Aucun audit de conformité formel n’est revendiqué."
      />
      <section className="section section-white">
        <div className="container narrow prose">
          <h2>Fonctions intégrées</h2>
          <p>
            Structure de titres, lien d’évitement, focus visible, FAQ native
            utilisable au clavier, légendes des illustrations et adaptation aux
            petits écrans.
          </p>
          <h2>Évaluation</h2>
          <p>
            Les contrôles automatisés et manuels effectués sont décrits dans le
            rapport qualité du projet. Une déclaration de conformité
            réglementaire demanderait un audit complet selon le référentiel
            applicable.
          </p>
          <h2>Signaler un obstacle</h2>
          <p>
            {siteConfig.contactEmail ? (
              <>
                Écrivez à{" "}
                <a href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>{" "}
                en décrivant la page et la difficulté.
              </>
            ) : (
              <>
                Un moyen de signalement direct sera publié après validation de
                l’adresse de contact officielle.
              </>
            )}
          </p>
        </div>
      </section>
    </>
  );
}
