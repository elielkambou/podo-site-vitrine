# Préparation de la publication

## Vérifié localement

- [x] Pages rédigées, navigation et FAQ fonctionnelles.
- [x] Statut de développement et limites visibles.
- [x] Aucun formulaire actif sans envoi configuré.
- [x] Aucun visuel patient, témoignage, prix ou chiffre commercial inventé.
- [x] Lint, types, tests unitaires et build exécutés.
- [x] Inspection du rendu aux largeurs 320, 360, 390, 430, 768, 1024, 1280, 1440 et 1920 px dans le navigateur local.

## À fournir ou vérifier avant une publication professionnelle aux clients

- [ ] Identité de l’éditeur, forme juridique, identification, adresse, directeur de publication et coordonnées exactes.
- [ ] Entité d’hébergement et mentions légales adaptées au contrat Vercel effectif.
- [ ] Domaine public et adresse e-mail professionnelle vérifiés.
- [ ] Textes légaux et confidentialité revus avec la base juridique, les prestataires, transferts éventuels, droits et durée de conservation.
- [ ] Domaine d’envoi Resend vérifié et secrets configurés côté serveur.
- [ ] Upstash et règle WAF Vercel configurés puis essayés avec destinataire de test.
- [ ] Formulaire testé réellement en Preview et échecs d’envoi contrôlés.
- [ ] Relecture métier et juridique des allégations.
- [ ] Vérification de l’absence de traceurs non essentiels sur le déploiement réel.
- [ ] Audit accessibilité complet et essais sur appareils/navigateurs réels.
- [ ] URL canonique, HTTPS, robots, Open Graph et sitemap vérifiés en production.
- [ ] Forfait Vercel compatible avec la diffusion du site de prospection : le projet actuel est en formule Hobby, réservée par Vercel à l'usage personnel non commercial.

Ne définir `LEGAL_APPROVED=true`, `CONTACT_FORM_ENABLED=true` et `PUBLICATION_APPROVED=true` qu’après les contrôles correspondants.
