import { ContactBand, PageIntro, SectionHeading } from "@/src/components/ui";
import { pageMetadata } from "@/src/lib/metadata";
export const metadata = pageMetadata(
  "Fonctionnement",
  "Du déplacement de la caméra à la reconstruction 3D : les étapes et les limites de la démarche PODO.",
  "/fonctionnement",
);
const steps = [
  [
    "Préparer",
    "Un pied immobile, un protocole défini et une référence physique dans la scène.",
  ],
  [
    "Capturer",
    "Le téléphone prend plusieurs vues des surfaces accessibles. La qualité des images compte autant que leur nombre.",
  ],
  [
    "Retrouver les vues",
    "La photogrammétrie estime comment les caméras se situent les unes par rapport aux autres.",
  ],
  [
    "Reconstruire",
    "Les vues sont rapprochées pour produire une surface 3D, avec ses zones visibles et ses lacunes.",
  ],
  [
    "Contrôler l’échelle",
    "Une référence calibrée relie la géométrie à des millimètres ; des contrôles indépendants doivent en éprouver la fiabilité.",
  ],
  [
    "Mesurer & revoir",
    "Les dimensions sont calculées lorsque les repères et la surface le permettent, puis soumises à la revue du praticien.",
  ],
];
export default function Fonctionnement() {
  return (
    <>
      <PageIntro
        eyebrow="FONCTIONNEMENT"
        title="Du déplacement du téléphone à un modèle géométrique exploitable."
        text="Voici la chaîne de travail étudiée. Ses étapes techniques ne constituent pas à elles seules une validation de la précision sur un pied réel."
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="LE CHEMIN DE LA DONNÉE"
            title="Six étapes, chacune vérifiable."
          />
          <div className="timeline">
            {steps.map(([title, text], index) => (
              <article key={title}>
                <span className="timeline-index">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-night">
        <div className="container narrow">
          <SectionHeading
            eyebrow="LA CONDITION ESSENTIELLE"
            title="Une 3D dense n’est pas automatiquement une mesure exacte."
          />
          <p>
            Une erreur d’échelle, un mouvement du pied, une zone cachée ou un
            repère mal identifié peuvent invalider un résultat. Des essais sur
            références indépendantes et des répétitions sont nécessaires avant
            toute annonce de performance.
          </p>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <SectionHeading
            eyebrow="POUR ALLER PLUS LOIN"
            title="Les termes derrière la méthode."
          />
          <div className="faq-list">
            <details className="faq-item">
              <summary>Pourquoi une planche ChArUco ?</summary>
              <p>
                Ses motifs géométriques servent de référence identifiable pour
                étudier la calibration et l’échelle, sous réserve d’une
                impression et d’un protocole contrôlés.
              </p>
            </details>
            <details className="faq-item">
              <summary>Que signifient SfM et MVS ?</summary>
              <p>
                La première méthode estime les positions relatives des vues ; la
                seconde cherche une surface plus dense à partir de plusieurs
                images.
              </p>
            </details>
            <details className="faq-item">
              <summary>Quel rôle joue ARCore ?</summary>
              <p>
                Il peut assister le guidage et l’estimation du mouvement. Il ne
                prouve pas à lui seul l’exactitude métrique de la
                reconstruction.
              </p>
            </details>
            <details className="faq-item">
              <summary>Que deviennent les surfaces absentes ?</summary>
              <p>
                Leur absence doit être signalée. Une surface cachée ne reçoit
                pas une mesure inventée, même si le rendu 3D paraît continu.
              </p>
            </details>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
