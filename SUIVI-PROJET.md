# SUIVI-PROJET
_Dernière mise à jour : 2026-11-12_

## Objectif
Site vitrine Edit-conseil (Next.js) avec formulaire de contact envoyant un mail via Resend.

## Fait
- Honeypot (champ `company`) sur le formulaire de contact.
- Anti-spam serveur sur `/api/send-mail` : refus des liens (nom/message) et limite 3 envois / 10 min / IP (en mémoire).

## En cours
- Spam IA/phishing via le formulaire de contact : surveiller si les mesures ci-dessus suffisent.

## Prochaine étape
- Si le spam persiste : ajouter Cloudflare Turnstile ou Vercel BotID sur le formulaire.

## Décisions (avec le pourquoi)
- Blocage des liens plutôt que captcha d'abord : le spam reçu est un lien de phishing, un client légitime n'en met pas ; zéro friction, pas de compte externe.
- Rate limit en mémoire : best effort (serverless = non partagé entre instances), suffisant en premier rempart.

## Points ouverts / blocages
- Un bot qui envoie du texte sans lien (ex. « contactez-moi sur WhatsApp au 06… ») passerait encore.
