import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { email, message, name } = await request.json();

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
      html: `<p>${message}</p>`,
      replyTo: email,
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json(data);
  } catch (error: unknown) {
    return Response.json(
      {
        error: error instanceof Error ? error.message : 'Internal Server Error',
      },
      { status: 500 },
    );
  }
}
