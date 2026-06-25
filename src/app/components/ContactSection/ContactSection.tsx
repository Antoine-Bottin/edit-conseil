'use client';

import { useActionState, useEffect, useRef } from 'react';

import { toast } from 'react-toastify';

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
    company: formData.get('company'),
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
  const formRef = useRef<HTMLFormElement>(null);

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
        <h2 className="contact-section__presentation__main">
          Contacter <br />
          EDIT.
        </h2>
        <p className="contact-section__presentation__sub">
          Prêt·e à valoriser vos documents, retravailler vos textes et élever
          votre discours ? Dites-moi tout grâce au formulaire de contact !
        </p>
      </div>
      <form className="contact-section__form" action={formAction} ref={formRef}>
        <div className="field">
          <label htmlFor="name">Votre nom</label>
          <input type="text" placeholder="Nom" name="name" id="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Votre e-mail</label>
          <input
            type="email"
            placeholder="E-MAIL"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="message">Votre message</label>
          <textarea
            placeholder="Message"
            name="message"
            id="message"
            required
          />
        </div>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="contact-section__honeypot"
        />
        <p className="contact-section__privacy-notice">
          En envoyant ce message, vos données sont traitées conformément à
          notre <a href="/privacy">politique de confidentialité</a>.
        </p>
        <button className="send-button" type="submit" disabled={isPending}>
          {isPending ? 'Envoi...' : 'Envoyer  votre message'}
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
