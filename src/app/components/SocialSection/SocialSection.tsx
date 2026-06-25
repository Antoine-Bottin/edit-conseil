import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa6';
import './styles.scss';

const SocialSection = () => {
  return (
    <footer className="social-section">
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
        <FaLinkedinIn aria-label="Linkedin logo" />
      </a>
      <a
        className="social-section__blog"
        href="https://www.startingbooks.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="social-section__blog__title">Dans les Starting Books</h2>
      </a>
      <div className="social-section__links">
        <div>&copy; 2026</div>
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
    </footer>
  );
};

export default SocialSection;
