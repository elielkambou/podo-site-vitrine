# Flux de données du site vitrine

Par défaut, le formulaire est désactivé et aucun message ne quitte le site.

Après configuration et validation légale, le visiteur saisit des coordonnées professionnelles et un message. Le navigateur envoie un JSON à `/api/contact`. Le serveur valide le contenu et l’origine, limite la taille, refuse le piège anti-robot et utilise un compteur Upstash sous clé hachée. Il transmet un e-mail en texte brut via Resend à une adresse fixe. Le site ne crée pas de base de prospects et ne journalise ni le message ni l’adresse complète.

L’adresse IP apparente est utilisée temporairement pour limiter l’abus, puis combinée avec l’e-mail et un sel serveur avant hachage. Le compteur expire après une heure. Les contrats des prestataires, les lieux de traitement, la base juridique, les droits et la durée de conservation des e-mails restent à définir par l’éditeur avant activation.

Aucun upload, dossier patient, photographie ou donnée clinique n’est attendu ou autorisé. Le texte du message reste libre : la notice demande explicitement de ne pas y inscrire de donnée de santé ; une politique opérationnelle est nécessaire si un visiteur en envoie malgré cet avertissement.
