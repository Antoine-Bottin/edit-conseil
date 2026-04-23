'use client';

import Image from 'next/image';

import './styles.scss';
import { scrollToSection } from '~/app/utils/scroll';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__text">
        <div className="hero-section__text__badge">Artisan du doute</div>
        <h1 className="hero-section__text__main">Hélène Bottin</h1>
        <h4 className="hero-section__text__sub">
          Relectrice-correctrice, secrétaire de rédaction, rewriter et
          conseiller littéraire et éditorial.
          <br />
          <br />
          Je vous aide à trouver le mot juste pour des communications
          cohérentes, lisibles et adaptées à leur audience.
        </h4>
        <div className="hero-section__text__buttons">
          <button
            onClick={() => scrollToSection('contact')}
            className="hero-section__text__buttons__button-1"
          >
            Démarrer un projet
          </button>
          <button className="hero-section__text__buttons__button-2">
            Voir le manifeste
          </button>
        </div>
      </div>
      <div className="hero-section__picture">
        <Image
          src="/assets/HeleneBottin-light.jpg"
          fill
          alt="Helene Bottin's picture"
          preload
        />
      </div>
    </div>
  );
};

export default HeroSection;
