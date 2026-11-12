# ADR 0001 — Site vitrine isolé dans le dépôt PODO

Date : 9 novembre 2026.

## Décision

Créer le site dans `site-vitrine/` avec Next.js App Router, TypeScript strict, Tailwind CSS, pnpm et déploiement cible Vercel. Conserver l’application Android et les services de laboratoire à la racine sans les modifier.

## Motifs

Le dépôt existant n’est pas une application web. Un sous-projet autonome évite de mêler dépendances Node et Python/Kotlin et correspond au `Root Directory` configurable dans Vercel. Les contenus publics sont rendus côté serveur ; le menu et le formulaire seuls demandent du JavaScript client.

Le visuel de pied est un SVG original, explicitement conceptuel. Il évite un modèle 3D qui pourrait suggérer un résultat clinique réel ou alourdir la première visite.

Le contact est désactivé par défaut car l’identité de l’éditeur, le destinataire, le domaine d’envoi et le traitement des données n’ont pas été fournis. L’API est conçue pour échouer explicitement sans cette configuration.
