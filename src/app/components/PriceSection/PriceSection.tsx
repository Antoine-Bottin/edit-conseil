'use client';

import { useActionState, useState, startTransition } from 'react';
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
  const typePrestation = formData.get('typePrestation');
  const niveauLecture = formData.get('niveauLecture');

  // Simulation de calcul
  await new Promise((res) => setTimeout(res, 600));

  if (!signs || signs <= 0) {
    return {
      success: false,
      error: 'Veuillez entrer un nombre de signes.',
      price: 0,
    };
  }

  // Cas particulier : Réécriture (40€ les 8 000 signes)
  if (typePrestation === 'reecriture') {
    const totalPrice = (signs / 8000) * 40;
    return {
      success: true,
      error: null,
      price: Math.round(totalPrice),
    };
  }

  // 1. Déterminer la vitesse (signes par heure)
  const signsPerHour = niveauLecture === 'preparation' ? 7000 : 10000;

  // 2. Déterminer le tarif horaire
  const hourlyRate = typePrestation === 'correction' ? 25 : 35;

  // 3. Calcul final
  const estimatedHours = signs / signsPerHour;
  const totalPrice = estimatedHours * hourlyRate;

  return {
    success: true,
    error: null,
    price: Math.round(totalPrice),
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

  // Cette fonction empêche React de "nettoyer" le formulaire après le calcul
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Bloque la remise à zéro par défaut
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="price-section">
      <h1 className="price-section__title">
        Tarifs de correction et réécriture
      </h1>

      <div className="price-section__calculator">
        {/* On remplace l'attribut action par notre fonction handleSubmit */}
        <form onSubmit={handleSubmit} className="price-section__form">
          {/* Champ Nombre de signes */}
          <div className="field">
            <label htmlFor="signs">
              Volume de votre document (signes espaces comprises)
            </label>
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
            <label htmlFor="typePrestation">Type de prestation souhaitée</label>
            <select
              id="typePrestation"
              name="typePrestation"
              value={prestation}
              onChange={(e) => setPrestation(e.target.value)}
              required
            >
              <option value="correction">Correction</option>
              <option value="secretariat">Secrétariat de rédaction</option>
              <option value="reecriture">Réécriture</option>
            </select>
          </div>

          {/* On conditionne la présence du DOM entier selon le useState */}
          {prestation !== 'reecriture' && (
            <div className="field">
              <label htmlFor="niveauLecture">Type de relecture</label>
              <select
                id="niveauLecture"
                name="niveauLecture"
                value={lecture}
                onChange={(e) => setLecture(e.target.value)}
                required
              >
                <option value="preparation">Préparation de copie</option>
                <option value="epreuves">Relecture sur épreuves</option>
              </select>
            </div>
          )}

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
              Tarif estimatif non contractuel :
            </p>
            <strong className="price-display__amount">
              {state.price} € TTC
            </strong>
            <p className="price-display__info">
              Basé sur {Number(signs).toLocaleString()} signes pour une
              prestation de{' '}
              <strong>
                {prestation === 'correction' && 'correction'}
                {prestation === 'secretariat' && 'secrétariat de rédaction'}
                {prestation === 'reecriture' && 'réécriture'}
              </strong>
              {prestation !== 'reecriture' && (
                <>
                  {' '}
                  en{' '}
                  <strong>
                    {lecture === 'preparation'
                      ? 'préparation de copie'
                      : 'relecture sur épreuves'}
                  </strong>
                </>
              )}
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceSection;
