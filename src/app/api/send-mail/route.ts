import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
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
