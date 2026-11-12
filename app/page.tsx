import Link from "next/link";
import { ContactBand, Eyebrow, SectionHeading } from "@/src/components/ui";
import { FootVisual } from "@/src/components/foot-visual";
import { capabilities, statusLabel } from "@/src/config/capabilities";
import { measures } from "@/src/content/measures";
import { faq } from "@/src/content/faq";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>TECHNOLOGIE PODOLOGIQUE EN DÉVELOPPEMENT</Eyebrow>
            <h1>
              La mesure du pied, <em>repensée</em> pour les podologues.
            </h1>
            <p className="lead">
              Nous développons une approche du scan 3D sur smartphone pour
              documenter la morphologie du pied et accompagner les mesures en
              cabinet, avec une attention particulière à la traçabilité et aux
              limites de chaque acquisition.
            </p>
            <div className="button-row">
              <Link className="button" href="/contact">
                Échanger sur le projet <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/fonctionnement">
                Découvrir le fonctionnement <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hero-notes">
              <span>Android en priorité</span>
              <span>Mesures à valider</span>
              <span>Contrôle du praticien</span>
            </div>
          </div>
          <FootVisual />
        </div>
        <div className="container hero-index">
          <span>01 / UNE APPROCHE À CONSTRUIRE</span>
          <span>
            Défiler pour explorer <span aria-hidden="true">↓</span>
          </span>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="LE CONSTAT"
            title="La morphologie du pied mérite plus qu’une simple image."
            text="Une acquisition utile doit relier la forme observée à des repères, à une échelle et à un contexte de mesure compréhensibles."
          />
          <div className="three-grid editorial-cards">
            <article>
              <span className="card-number">01</span>
              <h3>Voir la forme</h3>
              <p>
                Explorer une surface 3D peut aider à documenter ce qui est
                réellement visible au moment de l’acquisition.
              </p>
            </article>
            <article>
              <span className="card-number">02</span>
              <h3>Définir les mesures</h3>
              <p>
                Longueur, largeurs et hauteurs n’ont de sens qu’avec des repères
                et un protocole reproductibles.
              </p>
            </article>
            <article>
              <span className="card-number">03</span>
              <h3>Garder le jugement humain</h3>
              <p>
                Le professionnel examine la qualité des données et conserve la
                maîtrise de leur interprétation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="split-heading">
            <SectionHeading
              eyebrow="NOTRE VISION"
              title="Du geste de capture à une information traçable."
            />
            <p>
              Chaque étape est pensée pour rendre les conditions de la mesure
              lisibles. Le produit professionnel reste en développement ; les
              prototypes de laboratoire ne valent pas validation clinique.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.slice(0, 4).map((item, index) => (
              <article className="capability-card" key={item.id}>
                <span className="card-number">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="status">{statusLabel[item.status]}</span>
                </div>
              </article>
            ))}
          </div>
          <Link className="text-link section-link" href="/solution">
            Explorer la solution envisagée <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section section-night">
        <div className="container">
          <SectionHeading
            eyebrow="COMMENT ÇA POURRAIT FONCTIONNER"
            title="Un parcours en trois temps."
            text="Une chaîne de travail à développer et à évaluer, de l’acquisition au contrôle humain."
          />
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Préparer & capturer</h3>
              <p>
                Pied immobile, vues accessibles, conditions de prise de vue et
                référence physique documentées.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Reconstruire & étalonner</h3>
              <p>
                Les images sont rapprochées pour reconstruire une surface.
                L’échelle métrique demande un contrôle indépendant.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Mesurer & examiner</h3>
              <p>
                Des dimensions externes peuvent être calculées uniquement si les
                surfaces et repères nécessaires sont fiables.
              </p>
            </article>
          </div>
          <Link className="button button-outline-light" href="/fonctionnement">
            Comprendre la méthode <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="section section-white">
        <div className="container visual-story">
          <div>
            <SectionHeading
              eyebrow="UNE LECTURE DE LA FORME"
              title="Observer ce qui existe. Signaler ce qui manque."
              text="La géométrie est une représentation de surface. Une zone cachée, notamment sous l’appui, ne peut devenir une dimension inventée."
            />
            <p>
              Les lignes de l’illustration montrent des familles de mesures
              possibles. Elles ne représentent ni un scan patient ni une
              performance atteinte.
            </p>
            <Link className="text-link" href="/mesures">
              Voir les mesures étudiées <span aria-hidden="true">→</span>
            </Link>
          </div>
          <FootVisual compact />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="split-heading">
            <SectionHeading
              eyebrow="LES DIMENSIONS"
              title="Des mesures, avec leurs conditions."
            />
            <p>
              Le catalogue distingue chaque grandeur, les surfaces nécessaires
              et le stade de recherche.
            </p>
          </div>
          <div className="measure-list">
            {measures.slice(0, 4).map((m, i) => (
              <Link href="/mesures" key={m.name} className="measure-row">
                <span className="measure-num">0{i + 1}</span>
                <span className="measure-name">{m.name}</span>
                <span className="measure-axis">{m.axis}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <p className="fine-note">
            Aucune dimension issue d’un scan du pied n’est annoncée comme
            validée à ce stade.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container method-layout">
          <div>
            <SectionHeading
              eyebrow="LA CONFIANCE PAR LA MÉTHODE"
              title="La rigueur se voit dans les limites que l’on énonce."
            />
            <p>
              Le cahier des charges sépare une forme reconstruite, une échelle
              vérifiée, un calcul géométrique et la revue du praticien. Chacun a
              sa propre provenance et son propre niveau de confiance.
            </p>
            <Link className="text-link" href="/fonctionnement">
              Notre démarche technique <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="method-points">
            <div>
              <span>01 / Référence</span>
              <h3>Échelle physique</h3>
              <p>
                Une référence calibrée est nécessaire avant de parler de
                millimètres.
              </p>
            </div>
            <div>
              <span>02 / Observation</span>
              <h3>Couverture explicite</h3>
              <p>
                Les zones manquantes et les conditions de capture restent
                visibles.
              </p>
            </div>
            <div>
              <span>03 / Décision</span>
              <h3>Revue humaine</h3>
              <p>
                Une correction manuelle est attribuée au praticien, jamais au
                scan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading
            eyebrow="POUR QUI ?"
            title="Conçu autour des pratiques professionnelles."
          />
          <div className="audience-grid">
            <article>
              <span>01 / Cabinet</span>
              <h3>Pédicures-podologues</h3>
              <p>
                Explorer une documentation morphologique mieux liée au contexte
                de consultation.
              </p>
            </article>
            <article>
              <span>02 / Équipe</span>
              <h3>Cabinets de groupe</h3>
              <p>
                Discuter des besoins de protocole, de revue et de traçabilité
                entre opérateurs.
              </p>
            </article>
            <article>
              <span>03 / Appareillage</span>
              <h3>Orthoprothésistes</h3>
              <p>
                Définir les données de surface et les formats qui seraient
                réellement utiles.
              </p>
            </article>
            <article>
              <span>04 / Étude</span>
              <h3>Partenaires pilotes</h3>
              <p>
                Contribuer à formuler les conditions d’évaluation avant tout
                usage professionnel.
              </p>
            </article>
          </div>
          <Link
            className="text-link section-link"
            href="/pour-les-professionnels"
          >
            Voir les usages envisagés <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section section-white">
        <div className="container faq-preview">
          <div>
            <SectionHeading
              eyebrow="QUESTIONS FRÉQUENTES"
              title="Des réponses sans surpromesse."
            />
            <Link className="text-link" href="/faq">
              Toutes les questions <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div>
            {[faq[0], faq[3], faq[5], faq[7]].map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
