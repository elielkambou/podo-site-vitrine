# Rapport qualité — 10 novembre 2026

## Environnement

WSL Ubuntu, Node 20.20.1, pnpm 12.18.0, Next.js 16.4.5. Projet local `site-vitrine/`.

## Résultats

Les contrôles logiciels concernent exclusivement le site vitrine ; ils ne valident ni matériel, ni mesure clinique, ni conformité réglementaire.

| Contrôle | Résultat |
|---|---|
| TypeScript strict | Réussi |
| ESLint | Réussi après correction du menu |
| Vitest contact/API et interface | 7 tests réussis |
| Next.js build | Réussi, 10 pages publiques, API dynamique |
| Navigation manuelle et FAQ | Vérifiées en navigateur local |
| Menu mobile et Escape | Vérifiés en navigateur local |
| Largeurs 320 à 1920 px | Pas de débordement horizontal observé ; accueil testé à 320/390/768/1440 px, contact inspecté aux autres formats |
| `pnpm install --frozen-lockfile` | Réussi |
| `pnpm check` | Réussi : format, lint, types, 7 tests Vitest et build |
| `pnpm test:e2e` sur serveur de développement | 5 tests Chromium réussis avant ajout du contrôle 404/API/robots |
| `SITE_TEST_URL=http://localhost:3001 pnpm test:e2e` sur `pnpm start` | 6 tests Chromium réussis, dont 404/API/robots et axe accueil/contact |
| `pnpm dlx vercel login` et `pnpm dlx vercel whoami` | Réussis après connexion du propriétaire au compte `elielkambou` |
| `pnpm dlx vercel deploy --yes --logs` | Build Next.js réussi ; Preview final `podo-vitrine-ijy4yig3o-elielkambous-projects.vercel.app` prêt |
| Contrôle HTTP sans connexion | Preview : redirection 302 vers l'authentification Vercel ; Production suspendue : HTTP 503 |
| `vercel curl` sur Preview | Contact HTTP 200 avec e-mail fourni et formulaire désactivé ; `robots.txt` HTTP 200 avec `Disallow: /` ; contournement temporaire d'automatisation révoqué après vérification |
| `pnpm dlx vercel teams ls` | Équipe `elielkambous-projects` en formule Hobby ; publication commerciale non activée |
| `pnpm check` après ajout du bandeau de test | Réussi : format, lint, types, 7 tests Vitest et build |
| `pnpm dlx vercel deploy --prod --yes --logs` | Réussi : Production de test prête et alias `https://podo-vitrine.vercel.app` actif |
| HTTP anonyme sur l'URL de test | Accueil, Contact, FAQ et mentions : 200 ; bandeau « Version de test », e-mail de contact, métadonnée `noindex` et `robots.txt` `Disallow: /` constatés |
| `POST /api/contact` sur l'URL de test | HTTP 503 ; aucun message ne peut être envoyé par le formulaire |
| `pnpm check` avant mise sur GitHub, 12 novembre 2026 | Réussi : format, lint, types, 7 tests Vitest et build Next.js |
| Inventaire Git du seul `site-vitrine/` | 53 fichiers ; `.env.local`, `.vercel/`, `.next/` et `node_modules/` exclus ; aucun motif de jeton ou clé privée détecté dans les fichiers sélectionnés |

## Limites

Le formulaire réel n’est pas activé : identité légale, expéditeur vérifié et secrets des prestataires absents. Aucun envoi réel n'est revendiqué. L'adresse Preview reste protégée par l'authentification Vercel. L'adresse Production est accessible pour une relecture non commerciale par des amis, selon la clarification du propriétaire ; elle ne doit pas être annoncée comme site professionnel prêt pour les clients. Les mentions légales contiennent encore des informations à compléter. La première commande de déploiement avait automatiquement affecté la Production, ensuite suspendue puis reprise après clarification. Le contrôle de navigateur a porté sur Chromium local ; Safari, Firefox et appareils physiques restent à vérifier. Aucun audit RGAA complet n’a été réalisé. Les tests axe automatisés ne remplacent pas cette évaluation.
