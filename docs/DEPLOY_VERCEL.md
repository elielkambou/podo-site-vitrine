# Déploiement Vercel

Le projet Vercel `elielkambous-projects/podo-vitrine` est lié localement depuis `site-vitrine/`. Pour une future connexion du dépôt Git entier, définir **`site-vitrine` comme Root Directory**. Le framework configuré est Next.js ; la commande de build est `pnpm build` et le lockfile `pnpm-lock.yaml` est versionné.

## État actuel — 10 novembre 2026

- Version de test accessible sans connexion : https://podo-vitrine.vercel.app. Les contrôles HTTP anonymes ont confirmé l'accueil, la FAQ, le contact et les mentions. Un bandeau indique « Version de test » ; les métadonnées et `robots.txt` demandent la non-indexation.
- Le formulaire est désactivé (`/api/contact` répond 503). L'adresse e-mail fournie est affichée sur la page Contact.
- Preview de relecture : https://podo-vitrine-ijy4yig3o-elielkambous-projects.vercel.app (authentification Vercel requise).
- `NEXT_PUBLIC_CONTACT_EMAIL` est configuré pour Preview et Production ; `NEXT_PUBLIC_SITE_URL` pointe vers l'adresse Vercel dans Production.
- `PUBLICATION_APPROVED`, `LEGAL_APPROVED` et `CONTACT_FORM_ENABLED` ne sont pas activés. L'URL publique sert uniquement aux tests entre amis décrits par le propriétaire, sans diffusion aux clients.
- Historique : la première commande `vercel deploy` a créé automatiquement un déploiement Production, d'abord suspendu en attente d'une clarification sur l'audience. Le projet a été repris pour le déploiement de test du 10 novembre. Suspendre le projet empêche aussi de construire de nouveaux déploiements.

## 1. Preview de relecture

1. Relier le dépôt au compte Vercel du propriétaire, puis sélectionner `site-vitrine` comme racine.
2. Déployer une branche Preview. Garder `CONTACT_FORM_ENABLED=false`, `LEGAL_APPROVED=false` et `PUBLICATION_APPROVED=false` tant que les informations manquent.
3. Vérifier l’URL exacte, l’accès au Preview, les pages, le menu, la FAQ, les formats mobiles, le statut `noindex` et l’absence de formulaire trompeur.
4. Restreindre l’accès au Preview via les réglages Vercel du compte si des contenus de relecture ne doivent pas être publics. `noindex` ne fournit aucune protection d’accès.

## 2. Compléter les informations réelles

Remplacer les textes provisoires de `/mentions-legales`, `/confidentialite` et `/accessibilite` avec les données de l’éditeur. Confirmer l’URL canonique et une adresse de contact professionnelle. Faire relire les allégations et les flux de données. Voir `LAUNCH_CHECKLIST.md`.

## 3. Activer le contact

Configurer côté Vercel, dans l’environnement adapté :

| Variable | Usage |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domaine canonique vérifié, avec `https://` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Adresse publique confirmée, si souhaitée |
| `RESEND_API_KEY` | Clé serveur d’envoi |
| `CONTACT_FROM_EMAIL` | Expéditeur sur domaine vérifié |
| `CONTACT_TO_EMAIL` | Boîte de réception fixe |
| `UPSTASH_REDIS_REST_URL` et `UPSTASH_REDIS_REST_TOKEN` | Compteur distribué |
| `RATE_LIMIT_SALT` | Valeur secrète longue, propre à l’environnement |
| `LEGAL_APPROVED=true` | À définir après revue des notices et contrats |
| `CONTACT_FORM_ENABLED=true` | À définir après test de l’envoi réel |

Appliquer également une règle WAF adaptée à `/api/contact`. Tester avec une adresse de test, puis les erreurs : secrets manquants, prestataire indisponible, limite de fréquence. L’acceptation de la requête par Resend ne prouve pas la livraison finale. Ne pas mettre de secret dans `NEXT_PUBLIC_*`.

## 4. Production

Après validation de la checklist, définir `PUBLICATION_APPROVED=true` et l’URL canonique de production, puis créer le déploiement Production. Vérifier HTTPS, domaine, redirections, `robots.txt`, `sitemap.xml`, image Open Graph, en-têtes de sécurité, formulaire et pages légales sur l’URL effective. Les variables modifiées demandent un nouveau déploiement pour entrer en vigueur.

L'URL et l'état du déploiement sont consignés dans `QA_REPORT.md`.
