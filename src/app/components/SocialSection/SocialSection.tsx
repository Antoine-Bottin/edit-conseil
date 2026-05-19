import Image from 'next/image';

import './styles.scss';

const SocialSection = () => {
  return (
    <div className="social-section">
      <a
        className="social-section__malt"
        href="https://www.malt.fr/profile/helenebottin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="assets/Malt_logo_white.svg" alt="Malt logo" fill />
      </a>
      <a
        className="social-section__linkedin"
        href="https://www.linkedin.com/in/helenebottin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="assets/Linkedin_logo.svg" alt="Linkedin logo" fill />
      </a>
      <div className="social-section__links">
        <a
          className="social-section__links__link"
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          A propos
        </a>
        <a
          className="social-section__links__link"
          href="/legals"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mentions légales
        </a>
        <a
          className="social-section__links__link"
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Politique de confidentialité
        </a>
      </div>
    </div>
  );
};

export default SocialSection;
