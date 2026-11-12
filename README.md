# PODO — site vitrine

Site de présentation B2B en français. Il décrit le **projet** PODO et ses limites ; il ne demande ni scan, ni dossier patient, ni donnée de santé. Le code Android et les outils de laboratoire restent dans le dossier PODO parent et ne sont pas inclus dans ce dépôt GitHub.

Code source du site : <https://github.com/elielkambou/podo-site-vitrine> (dépôt privé, branche `main`). Le dossier `site-vitrine/` est un dépôt Git indépendant du dépôt PODO parent.

## Démarrage

Depuis `/home/eliel/podo/site-vitrine` :

```bash
corepack enable --install-directory "$HOME/.local/bin"
export PATH="$HOME/.local/bin:$PATH"
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Ouvrir <http://localhost:3000>. Le formulaire est désactivé tant que l’éditeur, le flux de données et les services d’envoi ne sont pas validés. La page `/contact` le signale explicitement.

## Vérification

```bash
pnpm check
```

Cette commande lance ESLint, TypeScript, Vitest et le build Next.js. Les tests logiciels ne constituent pas une validation matérielle, clinique ou réglementaire.

## Structure

- `app/` : routes, métadonnées, SEO et API de contact ;
- `src/config/` : paramètres éditoriaux, navigation et statuts des capacités ;
- `src/content/` : FAQ et catalogue des mesures ;
- `src/components/` : interface et illustrations originales ;
- `src/lib/` : validation des données et adaptateur d’envoi ;
- `docs/` : état du contenu, décisions, contrôle qualité et publication Vercel.

## Contact

L’endpoint `/api/contact` valide les champs, impose une origine identique, limite le corps à 8 Kio, utilise un piège anti-robot et un compteur distribué Upstash. Il envoie un texte brut via Resend à une adresse fixe côté serveur. Le succès n’est retourné qu’après acceptation de la requête par le prestataire. Cinq requêtes par heure sont autorisées pour une clé hachée issue de l’adresse et de l’IP apparente ; une règle WAF Vercel doit compléter cette limite avant ouverture publique.

Les variables nécessaires sont dans `.env.example` ; aucune clé n’est versionnée. `LEGAL_APPROVED=true` et `CONTACT_FORM_ENABLED=true` sont requis avec tous les paramètres d’envoi et de limitation. La notice légale doit être remplacée et revue avant d’activer ces drapeaux. Les données de contact ne sont pas conservées dans une base du site ; leur durée de conservation dans la boîte e-mail et chez les prestataires relève de la politique à définir par l’éditeur.

## Publication

La version de test pour relecture entre amis est accessible sur <https://podo-vitrine.vercel.app>. Elle est publique par son URL, porte un bandeau « Version de test » et reste non indexable avec `PUBLICATION_APPROVED=false`. Le formulaire en ligne reste désactivé ; la page Contact affiche l'adresse e-mail fournie par le propriétaire. Cette version n'est pas une publication commerciale destinée aux clients.

Voir [DEPLOY_VERCEL.md](docs/DEPLOY_VERCEL.md) et [LAUNCH_CHECKLIST.md](docs/LAUNCH_CHECKLIST.md) pour la publication professionnelle ultérieure. Le sous-dossier `site-vitrine` est la racine du projet à déclarer dans Vercel lors d'une future connexion Git.
