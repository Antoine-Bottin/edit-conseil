'use client';
import { useActionState } from 'react';
import './styles.scss';

interface FormState {
  success: boolean;
}

async function handleForm(prevState: FormState | null, formData: FormData) {
  console.log(prevState, formData);
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
  const [state, formAction, isPending] = useActionState(handleForm, null);

  return (
    <div className="contact-section">
      <div className="contact-section__presentation">
        <div className="contact-section__presentation__main">Contacter</div>
        <div className="contact-section__presentation__main">EDIT</div>
        <p className="contact-section__presentation__sub">
          Prêt à élever votre discours? Discutons de votre prochain projet
          éditorial
        </p>
      </div>
      <div className="contact-section__form">
        <form action={formAction}>
          <input type="text" placeholder="Nom / Entreprise" name="name" />
          <input type="text" placeholder="Email de contact" name="email" />
          <textarea placeholder="Votre message" name="message" />
          <button type="submit" disabled={isPending}>
            {isPending ? 'Envoi...' : 'Envoyer'}
          </button>
          {state?.success && <p>Bien reçu !</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
