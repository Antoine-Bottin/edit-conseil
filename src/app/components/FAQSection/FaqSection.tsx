import './styles.scss';

const FAQSestion = () => {
  return (
    <div className="faq-section">
      <h2 className="faq-section__title">FAQ</h2>
      <p className="faq-section__content">
        Préparation de copie, relecture sur épreuves, secrétariat de rédaction,
        signes espaces comprises, logiciels, calcul du tarif des prestations…
        Pour en savoir plus, rendez-vous dans la{' '}
      </p>
      <a href="/faq" target="_blank" rel="noopener noreferrer">
        FAQ.
      </a>
    </div>
  );
};

export default FAQSestion;
