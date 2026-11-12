import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-intro not-found">
      <div className="container">
        <p className="eyebrow">PAGE INTROUVABLE</p>
        <h1>Cette page n’existe pas.</h1>
        <p className="lead">Le lien est peut-être ancien ou incomplet.</p>
        <Link className="button" href="/">
          Retour à l’accueil <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
