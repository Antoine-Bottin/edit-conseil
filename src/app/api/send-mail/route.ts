import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, message } = await request.json();

  console.log(email, message);

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'a.bottin.dev@gmail.com',
      subject: 'Test 2',
      html: message,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
