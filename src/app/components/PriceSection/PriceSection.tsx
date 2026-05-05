'use client';

import { useActionState, useState } from 'react';
import './styles.scss';

interface FormState {
  success: boolean;
  error: string | null;
  price: number;
}

async function handleForm(
  __prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
  const signs = Number(formData.get('signs'));
  const typePrestation = formData.get('typePrestation'); // Correction ou Secrétariat
  const niveauLecture = formData.get('niveauLecture'); // Préparation ou Épreuves

  // Simulation de calcul
  await new Promise((res) => setTimeout(res, 600));

  if (!signs || signs <= 0) {
    return {
      success: false,
      error: 'Veuillez entrer un nombre de signes.',
      price: 0,
    };
  }

  // 1. Déterminer la vitesse (signes par heure)
  // Préparation : moy. 7000 | Épreuves : moy. 11000
  const signsPerHour = niveauLecture === 'preparation' ? 7000 : 11000;

  // 2. Déterminer le tarif horaire
  // Correction : 25€ | Secrétariat : 35€
  const hourlyRate = typePrestation === 'correction' ? 25 : 35;

  // 3. Calcul final
  // Temps estimé = signes totaux / vitesse
  const estimatedHours = signs / signsPerHour;
  const totalPrice = estimatedHours * hourlyRate;

  return {
    success: true,
    error: null,
    price: Math.round(totalPrice), // On arrondit pour un devis plus propre
  };
}

const PriceSection = () => {
  const [signs, setSigns] = useState<string>('');
  const [prestation, setPrestation] = useState<string>('correction');
  const [lecture, setLecture] = useState<string>('preparation');

  const [state, formAction, isPending] = useActionState(handleForm, {
    success: false,
    error: null,
    price: 0,
  });

  return (
    <div className="price-section">
      <h1 className="price-section__title">Tarification</h1>
      <div className="price-section__calculator">
        <form action={formAction} className="price-section__form">
          {/* Champ Nombre de signes */}
          <div className="field">
            <label htmlFor="signs">Volume (signes espaces comprises)</label>
            <input
              id="signs"
              type="number"
              name="signs"
              value={signs}
              onChange={(e) => setSigns(e.target.value)}
              placeholder="Ex: 45000"
              required
            />
          </div>

          {/* Champ Type de prestation */}
          <div className="field">
            <label htmlFor="typePrestation">Type de prestation</label>
            <select
              id="typePrestation"
              name="typePrestation"
              value={prestation}
              onChange={(e) => setPrestation(e.target.value)}
              required
            >
              <option value="correction">Correction (25€/h)</option>
              <option value="secretariat">
                Secrétariat de rédaction (35€/h)
              </option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="niveauLecture">Niveau de relecture</label>
            <select
              id="niveauLecture"
              name="niveauLecture"
              value={lecture}
              onChange={(e) => setLecture(e.target.value)}
              required
            >
              <option value="preparation">
                Préparation de copie (6-8k signes/h)
              </option>
              <option value="epreuves">
                Relecture sur épreuves (10-12k signes/h)
              </option>
            </select>
          </div>

          <button type="submit" className="price-button" disabled={isPending}>
            {isPending ? 'Calcul en cours...' : 'Calculer le tarif'}
          </button>
        </form>
      </div>
      <div
        className={`price-result ${state.price > 0 && !isPending ? 'is-visible' : ''}`}
      >
        {state.price > 0 && !isPending && (
          <div className="price-display">
            <p className="price-display__label">
              Estimation pour votre document :
            </p>
            <strong className="price-display__amount">
              {state.price} € TTC*
            </strong>
            <p className="price-display__info">
              Basé sur {Number(signs).toLocaleString()} signes en mode{' '}
              {prestation === 'correction'
                ? 'Correction'
                : 'Secretariat de Rédaction'}
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceSection;
