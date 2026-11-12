import Link from "next/link";
import { ContactBand, PageIntro, SectionHeading } from "@/src/components/ui";
import { pageMetadata } from "@/src/lib/metadata";
export const metadata = pageMetadata(
  "Pour les professionnels",
  "PODO se construit autour des besoins des podologues, équipes de cabinet, professionnels de l’appareillage et partenaires d’étude.",
  "/pour-les-professionnels",
);
const audiences = [
  [
    "Pédicure-podologue",
    "Comment documenter une forme et ses dimensions sans alourdir la consultation ?",
    "Discuter des mesures prioritaires, des contraintes de capture et de la place de la revue humaine.",
  ],
  [
    "Équipe de cabinet",
    "Comment rendre un protocole compréhensible entre plusieurs opérateurs ?",
    "Explorer la traçabilité des conditions de mesure et des corrections, sous réserve d’un cadre d’usage défini.",
  ],
  [
    "Orthoprothésiste & atelier",
    "Quelles surfaces et quels formats auraient une utilité réelle ?",
    "Définir les repères, les exports et les limites d’intégration avant toute promesse de compatibilité.",
  ],
  [
    "Partenaire d’étude",
    "Quelles références et quels essais permettraient d’évaluer la méthode ?",
    "Contribuer au cadrage des protocoles, de la répétabilité et des critères d’acceptation.",
  ],
];
export default function Professionals() {
  return (
    <>
      <PageIntro
        eyebrow="POUR LES PROFESSIONNELS"
        title="Un projet qui doit se confronter aux pratiques réelles."
        text="Les usages ci-dessous sont des pistes à discuter avec les métiers concernés. Ils ne décrivent ni un programme pilote ouvert ni une solution déjà déployée."
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="VOS CONTEXTES"
            title="Quatre points de vue pour mieux concevoir."
          />
          <div className="audience-detail">
            {audiences.map(([title, question, description], i) => (
              <article key={title}>
                <span className="card-number">0{i + 1} / USAGE ENVISAGÉ</span>
                <h3>{title}</h3>
                <p className="audience-question">{question}</p>
                <p>{description}</p>
                <Link className="text-link" href="/contact?motif=partenariat">
                  Échanger sur cet usage <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container method-layout">
          <div>
            <SectionHeading
              eyebrow="COLLABORER"
              title="Commencer par les bonnes questions."
            />
            <p>
              Avant de figer un flux de travail, nous cherchons à comprendre ce
              qui rend une mesure utile et interprétable dans chaque pratique.
            </p>
          </div>
          <div className="method-points">
            <div>
              <span>01 / Mesure</span>
              <h3>Quelles dimensions ?</h3>
              <p>
                Longueur, largeur, hauteur, repères anatomiques : lesquelles
                guident réellement vos décisions ?
              </p>
            </div>
            <div>
              <span>02 / Protocole</span>
              <h3>Dans quelles conditions ?</h3>
              <p>
                En charge, sans charge, posture, appui et surfaces accessibles
                influencent le résultat.
              </p>
            </div>
            <div>
              <span>03 / Usage</span>
              <h3>Pour quelle sortie ?</h3>
              <p>
                Compte rendu, comparaison, export ou échanges avec un atelier :
                chaque besoin a ses limites.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container narrow">
          <div className="note-panel">
            <h2>Un espace de dialogue, sans donnée patient</h2>
            <p>
              Le formulaire du site sert uniquement aux échanges professionnels.
              N’y transmettez aucun nom de patient, photographie, compte rendu
              ou donnée de santé.
            </p>
          </div>
        </div>
      </section>
      <ContactBand title="Parlons de ce qui compte dans votre pratique." />
    </>
  );
}
