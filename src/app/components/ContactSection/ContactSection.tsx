'use client';
import { useActionState } from 'react';
import './styles.scss';

interface FormState {
  success: boolean;
}

async function handleForm(__prevState: FormState | null, formData: FormData) {
  const data = {
    email: formData.get('email'),
    message: formData.get('message'),
    name: formData.get('name'),
  };

  const response = await fetch('/api/send-mail', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Échec de l'envoi");

  return { success: true };
}

const ContactSection = () => {
  const [state, formAction, isPending] = useActionState(handleForm, {
    success: false,
  });
  return (
    <div className="contact-section">
      <div className="contact-section__presentation">
        <div className="contact-section__presentation__main">
          Contacter <br />
          EDIT.
        </div>
        <p className="contact-section__presentation__sub">
          Prêt à élever votre discours? Discutons de votre prochain projet
          éditorial
        </p>
      </div>
      <div className="contact-section__form">
        <form action={formAction}>
          <input type="text" placeholder="Nom" name="name" required />
          <input
            type="text"
            placeholder="E-mail de contact"
            name="email"
            required
          />
          <textarea placeholder="Votre message" name="message" required />
          <button type="submit" disabled={isPending}>
            {isPending ? 'Envoi...' : 'Envoyer  votre message'}
          </button>
          {state?.success && <p>Bien reçu !</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
