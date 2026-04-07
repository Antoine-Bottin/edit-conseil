import Image from 'next/image';

import './styles.scss';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__text">
        <div className="hero-section__text__badge">Artisan du doute</div>
        <h1 className="hero-section__text__main">
          Douter de tout, surtout de ce que l&apos;on croit savoir
        </h1>
        <h4 className="hero-section__text__sub">
          Curatrice de mots pour agences audacieuses, et marques visionnaires.
        </h4>
        <div className="hero-section__text__buttons">
          <button className="hero-section__text__buttons__button-1">
            Démarrer un projet
          </button>
          <button className="hero-section__text__buttons__button-2">
            Voir le manifeste
          </button>
        </div>
      </div>
      <div className="hero-section__picture">
        <Image
          src="/assets/ecrivaine.png"
          fill={true}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default HeroSection;
