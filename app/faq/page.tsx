import { ContactBand, PageIntro } from "@/src/components/ui";
import { faq } from "@/src/content/faq";
import { pageMetadata } from "@/src/lib/metadata";
export const metadata = pageMetadata(
  "Questions fréquentes",
  "Disponibilité, précision, surface plantaire, données et partenariat : des réponses claires sur le projet PODO.",
  "/faq",
);
export default function Faq() {
  return (
    <>
      <PageIntro
        eyebrow="QUESTIONS FRÉQUENTES"
        title="Ce que vous voulez savoir avant d’en parler."
        text="Nous distinguons ici les objectifs de conception, les prototypes de laboratoire et ce qui demandera encore des essais."
      />
      <section className="section section-white">
        <div className="container faq-page-layout">
          <div className="faq-aside">
            <span>01—14</span>
            <h2>
              Des réponses précises, même lorsque la réponse est « pas encore ».
            </h2>
            <p>
              Une question propre à votre activité ? Nous souhaitons la
              comprendre.
            </p>
          </div>
          <div className="faq-list">
            {faq.map((item, i) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  <span className="faq-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.q}
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactBand title="Votre question mérite une réponse située dans votre pratique." />
    </>
  );
}
