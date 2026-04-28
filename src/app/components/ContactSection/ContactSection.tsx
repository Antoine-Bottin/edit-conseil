'use client';

import { useActionState, useEffect, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import './styles.scss';

interface FormState {
  success: boolean;
  error: string | null;
}

async function handleForm(__prevState: FormState | null, formData: FormData) {
  const data = {
    email: formData.get('email'),
    message: formData.get('message'),
    name: formData.get('name'),
  };

  try {
    const response = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Indispensable pour que l'API reçoive le JSON
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erreur API:', errorData);
      toast.error("Erreur lors de l'envoi");
      return { success: false, error: "Erreur lors de l'envoi" };
    }

    toast.success('Message envoyé avec succès');
    return { success: true, error: null };
  } catch (e) {
    console.error('Erreur réseau:', e);
    return { success: false, error: 'Connexion impossible' };
  }
}

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null); // Pour cibler le formulaire

  const [state, formAction, isPending] = useActionState(handleForm, {
    success: false,
    error: null,
  });

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

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
        <form action={formAction} ref={formRef}>
          <input type="text" placeholder="Nom" name="name" required />
          <input
            type="email"
            placeholder="E-mail de contact"
            name="email"
            required
          />
          <textarea placeholder="Votre message" name="message" required />
          <button className="send-button" type="submit" disabled={isPending}>
            {isPending ? 'Envoi...' : 'Envoyer  votre message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
