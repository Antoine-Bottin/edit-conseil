'use client';

import Image from 'next/image';
import { scrollToSection } from '~/app/utils/scroll';

import './styles.scss';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__text">
        <div className="hero-section__text__badge">Artisan du doute</div>
        <h1 className="hero-section__text__main">Hélène Bottin-Demirel</h1>
        <h4 className="hero-section__text__sub">
          Relectrice-correctrice, secrétaire de rédaction, rewriter et
          conseiller littéraire et éditorial de langue française.
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
