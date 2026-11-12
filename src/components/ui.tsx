import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-line" />
      {children}
    </p>
  );
}
export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
      </div>
    </section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function ContactBand({
  title = "Construisons un outil qui répond aux réalités du cabinet.",
}: {
  title?: string;
}) {
  return (
    <section className="contact-band">
      <div className="container contact-band-inner">
        <div>
          <Eyebrow>UNE CONVERSATION POUR COMMENCER</Eyebrow>
          <h2>{title}</h2>
          <p>
            Vos retours sur les mesures, les protocoles et les usages nous
            intéressent.
          </p>
        </div>
        <Link className="button button-light" href="/contact">
          Parler de vos besoins <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
