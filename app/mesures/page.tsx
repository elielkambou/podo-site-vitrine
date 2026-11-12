import { ContactBand, PageIntro, SectionHeading } from "@/src/components/ui";
import { FootVisual } from "@/src/components/foot-visual";
import { measures } from "@/src/content/measures";
import { pageMetadata } from "@/src/lib/metadata";
export const metadata = pageMetadata(
  "Mesures et méthode",
  "Longueur, largeurs, hauteur : les mesures morphologiques étudiées par PODO et leurs conditions de validité.",
  "/mesures",
);
export default function Mesures() {
  return (
    <>
      <PageIntro
        eyebrow="MESURES & MÉTHODE"
        title="Une dimension n’a de sens qu’avec sa provenance."
        text="Le catalogue décrit des grandeurs externes étudiées. Aucune valeur de patient ni performance clinique n’est présentée ici."
      />
      <section className="section section-white">
        <div className="container visual-story">
          <div>
            <SectionHeading
              eyebrow="LIRE UNE FORME"
              title="Des axes, des repères, des conditions."
            />
            <p>
              Longueur et largeur dépendent d’une géométrie visible et d’une
              définition stable des extrémités. Certaines zones demandent des
              repères anatomiques palpés ou marqués.
            </p>
            <p>
              La saisie instrumentale manuelle et le calcul issu d’un scan sont
              deux sources différentes, toujours à distinguer.
            </p>
          </div>
          <FootVisual compact />
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <SectionHeading
            eyebrow="CATALOGUE"
            title="Ce que chaque mesure suppose."
          />
          <div className="measure-catalog">
            {measures.map((m, i) => (
              <article key={m.name}>
                <span className="card-number">0{i + 1}</span>
                <div>
                  <h3>{m.name}</h3>
                  <p>{m.condition}</p>
                </div>
                <span className="status">{m.status}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container narrow">
          <SectionHeading
            eyebrow="VALIDATION"
            title="Des millimètres ne suffisent pas à prouver l’exactitude."
          />
          <p>
            La résolution d’un modèle, son échelle et son erreur de mesure sont
            des notions différentes. Une évaluation devra comparer les résultats
            à des références indépendantes, documenter la répétabilité, les
            incertitudes et les échecs, puis délimiter les cas d’usage
            acceptables.
          </p>
          <div className="note-panel">
            <h3>Pourquoi certaines dimensions sont-elles absentes ?</h3>
            <p>
              Une circonférence exige une section de surface fermée. Une face
              plantaire cachée sous un support opaque demande un autre
              protocole. Une valeur absente reste absente.
            </p>
          </div>
        </div>
      </section>
      <ContactBand title="Quelles mesures comptent vraiment dans votre pratique ?" />
    </>
  );
}
