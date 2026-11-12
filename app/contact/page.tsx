import { ContactForm } from "@/src/components/contact-form";
import { PageIntro } from "@/src/components/ui";
import { siteConfig } from "@/src/config/site";
import { pageMetadata } from "@/src/lib/metadata";
import { contactConfigured } from "@/src/lib/contact-server";
export const metadata = pageMetadata(
  "Contact et partenariats",
  "Professionnel de la podologie ou de l’appareillage ? Échangeons sur vos besoins et le développement de PODO.",
  "/contact",
);
export default function Contact() {
  const enabled = contactConfigured();
  return (
    <>
      <PageIntro
        eyebrow="CONTACT"
        title="Parlons de votre pratique."
        text="Une question, un retour métier ou une idée de collaboration ? Décrivez votre contexte professionnel, sans transmettre d’information concernant un patient."
      />
      <section className="section section-white">
        <div className="container contact-layout">
          <div className="contact-panel">
            <h2>Échanger avec PODO</h2>
            {enabled ? (
              <ContactForm />
            ) : (
              <div className="unavailable">
                <p>
                  Le canal de contact en ligne est en cours de configuration.
                  Aucun message ne peut encore être transmis depuis ce site.
                </p>
                {siteConfig.contactEmail ? (
                  <p>
                    Vous pouvez écrire à{" "}
                    <a href={`mailto:${siteConfig.contactEmail}`}>
                      {siteConfig.contactEmail}
                    </a>
                    .
                  </p>
                ) : (
                  <p>
                    Une adresse professionnelle vérifiée sera publiée ici dès
                    son activation.
                  </p>
                )}
              </div>
            )}
          </div>
          <aside className="contact-aside">
            <span className="card-number">UNE CONVERSATION UTILE</span>
            <h2>Ce site n’est pas destiné à recevoir des données de santé.</h2>
            <p>
              Merci de ne transmettre ni photographie de pied, ni nom de
              patient, ni compte rendu clinique.
            </p>
            <div className="aside-rule" />
            <h3>Ce qui nous aide à vous répondre.</h3>
            <p>
              Votre métier, les mesures qui comptent pour vous et les conditions
              dans lesquelles vous travaillez.
            </p>
            <div className="aside-rule" />
            <p>
              PODO est en développement. Une prise de contact n’implique aucun
              accès à un produit ou programme pilote.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
