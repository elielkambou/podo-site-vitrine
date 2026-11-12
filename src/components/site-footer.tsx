import Link from "next/link";
import { navigation, siteConfig } from "@/src/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand brand-light">
            <span className="brand-mark" aria-hidden="true">
              <span />
            </span>
            <span>PODO</span>
          </Link>
          <p>
            Une nouvelle approche de la mesure du pied, pensée pour les
            professionnels.
          </p>
          <span className="footer-status">Projet en développement</span>
        </div>
        <div>
          <h2>Explorer</h2>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Échanger</h2>
          <Link href="/contact">Nous contacter</Link>
          {siteConfig.contactEmail && (
            <a href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
          )}
          <p>Le site vitrine ne reçoit aucune donnée de patient.</p>
        </div>
        <div>
          <h2>Informations</h2>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/accessibilite">Accessibilité</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} PODO</span>
        <span>Conçu avec rigueur, pour un projet en recherche.</span>
      </div>
    </footer>
  );
}
