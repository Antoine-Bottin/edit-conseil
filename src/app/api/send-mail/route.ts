import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

// Les messages légitimes n'ont aucune raison de contenir un lien : c'est le
// vecteur des spams/phishing envoyés par les bots.
const URL_REGEX =
  /(https?:\/\/|www\.|\b[a-z0-9-]+\.(com|net|org|io|ru|xyz|top|info|biz|co|me|app|link|site|online|click|live|shop|club)\b)/i;
const EMAIL_STRIP_REGEX = /[^\s@]+@[^\s@]+\.[^\s@]+/g;

function containsLink(value: string) {
  return URL_REGEX.test(value.replace(EMAIL_STRIP_REGEX, ''));
}

// Limitation de débit "best effort" (mémoire de l'instance) : 3 envois / 10 min / IP.
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return Response.json({ error: 'Trop de tentatives' }, { status: 429 });
  }

  const resend = new Resend(process.env.HELENE_RESEND_API_KEY);

  try {
    const { email, message, name, company } = await request.json();

    // Honeypot : un bot remplit ce champ caché, un humain ne le voit jamais.
    if (typeof company === 'string' && company.trim() !== '') {
      return Response.json({ success: true });
    }

    if (
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      typeof name !== 'string' ||
      !EMAIL_REGEX.test(email) ||
      !name.trim() ||
      !message.trim()
    ) {
      return Response.json(
        { error: 'Champs invalides ou manquants' },
        { status: 400 },
      );
    }

    if (containsLink(name) || containsLink(message)) {
      return Response.json(
        { error: 'Les liens ne sont pas autorisés dans le message' },
        { status: 400 },
      );
    }

    if (name.length > MAX_NAME_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
      return Response.json(
        { error: 'Champs trop longs' },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Edit-conseil <helene@edit-conseil.com>',
      to: 'redirection.edit.conseil@gmail.com',
      subject: `Message de ${escapeHtml(name)}`,
      html: `<p>${escapeHtml(message)}</p>`,
      replyTo: email,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return Response.json({ error: "Erreur lors de l'envoi" }, { status: 502 });
    }

    return Response.json(data);
  } catch (error: unknown) {
    console.error('Erreur send-mail:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
