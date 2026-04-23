import { Resend } from 'resend';

// On force la route en mode dynamique pour éviter l'erreur de build Vercel
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // Ajout d'un try/catch global pour attraper les erreurs de JSON mal formé
  try {
    const { email, message, name } = await request.json();

    // Validation minimale pour éviter d'envoyer des mails vides
    if (!email || !message) {
      return Response.json(
        { error: 'Email et message requis' },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Antoine Bottin <antoine@contact.abottin.dev>',
      to: 'a.bottin.dev@gmail.com',
      subject: `Message de ${name}`,
      html: `<p>${message}</p>`, // Il est préférable d'envelopper dans une balise HTML
      replyTo: email, // Corrigé : avec l'underscore _
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json(data);
  } catch (error: any) {
    return Response.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
