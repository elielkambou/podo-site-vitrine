import Link from "next/link";
import { capabilities, statusLabel } from "@/src/config/capabilities";
import { ContactBand, PageIntro, SectionHeading } from "@/src/components/ui";
import { pageMetadata } from "@/src/lib/metadata";
export const metadata = pageMetadata(
  "La solution envisagée",
  "Découvrez le projet PODO : capture guidée, reconstruction 3D, mesures documentées et contrôle du praticien.",
  "/solution",
);
export default function Solution() {
  return (
    <>
      <PageIntro
        eyebrow="LA SOLUTION"
        title="Une expérience de mesure pensée autour du geste professionnel."
        text="PODO explore un parcours de capture et de mesure dans lequel chaque résultat garde son contexte : source, conditions, qualité et revue humaine."
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="LE PARCOURS ENVISAGÉ"
            title="De la capture au résultat examiné."
          />
          <div className="three-grid editorial-cards">
            <article>
              <span className="card-number">01</span>
              <h3>Acquérir</h3>
              <p>
                Guider la prise de vues d’un pied immobile et vérifier la
                couverture des surfaces accessibles.
              </p>
            </article>
            <article>
              <span className="card-number">02</span>
              <h3>Construire</h3>
              <p>
                Relier les images à une reconstruction 3D et contrôler l’échelle
                par référence physique.
              </p>
            </article>
            <article>
              <span className="card-number">03</span>
              <h3>Examiner</h3>
              <p>
                Présenter mesures, repères, limites et provenance à la revue du
                professionnel.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <SectionHeading
            eyebrow="CAPACITÉS & STATUTS"
            title="Ce qui est étudié, et à quelles conditions."
          />
          <div className="detail-grid">
            {capabilities.map((item) => (
              <article className="detail-card" key={item.id}>
                <span className="status">{statusLabel[item.status]}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="detail-limit">
                  <strong>Condition :</strong> {item.limit}
                </p>
                <small>
                  Source : cahier des charges PODO {item.sourceSection}
                </small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container narrow">
          <SectionHeading
            eyebrow="UN OUTIL D’APPUI"
            title="La mesure accompagne le jugement du praticien."
          />
          <p>
            Une reconstruction de surface ne remplace ni l’examen clinique ni
            l’interprétation professionnelle. L’aide au chaussage calculée à
            partir d’une mesure instrumentale saisie est distincte d’une mesure
            issue d’un scan. Les exports et l’intégration à d’autres chaînes de
            travail restent des objectifs à éprouver.
          </p>
          <Link href="/fonctionnement" className="text-link">
            Comprendre la chaîne technique <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
