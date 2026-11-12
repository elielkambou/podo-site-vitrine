import { PageIntro } from "@/src/components/ui";
import { pageMetadata } from "@/src/lib/metadata";
export const metadata = pageMetadata(
  "Mentions légales",
  "Informations légales du site vitrine PODO et éléments à confirmer avant publication publique.",
  "/mentions-legales",
);
export default function Legal() {
  return (
    <>
      <PageIntro
        eyebrow="INFORMATIONS LÉGALES"
        title="Mentions légales."
        text="Cette page sera complétée et validée avec les informations exactes de l’éditeur avant toute publication commerciale."
      />
      <section className="section section-white">
        <div className="container narrow prose">
          <div className="legal-alert">
            Publication publique en attente : identité de l’éditeur, coordonnées
            et hébergeur à vérifier.
          </div>
          <h2>Éditeur du site</h2>
          <p>
            Dénomination, forme juridique, identification, adresse, contact et
            responsable de publication :{" "}
            <strong>à fournir et à valider par le propriétaire</strong>. Aucune
            identité juridique n’est présumée.
          </p>
          <h2>Hébergement</h2>
          <p>
            Hébergement prévu sur Vercel. L’identité juridique et les
            coordonnées de l’entité d’hébergement applicable seront vérifiées
            avant publication.
          </p>
          <h2>Objet du site</h2>
          <p>
            Ce site présente un projet de recherche et développement destiné aux
            professionnels de la podologie et de l’appareillage. Il ne propose
            ni consultation, ni diagnostic, ni dossier patient en ligne.
          </p>
          <h2>Contenus</h2>
          <p>
            Les textes et illustrations conceptuelles du site sont préparés pour
            PODO. Les droits de publication de l’ensemble des éléments doivent
            être confirmés par l’éditeur avant mise en ligne.
          </p>
        </div>
      </section>
    </>
  );
}
