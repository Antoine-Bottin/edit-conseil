import Image from 'next/image';

import ContactSection from './components/ContactSection/ContactSection';
import HeroSection from './components/HeroSection/HeroSection';
import MyselfSection from './components/MyselfSection/MyselfSection';
import NumberSection from './components/NumberSection/NumberSection';
import PriceSection from './components/PriceSection/PriceSection';
import QuoteSection from './components/QuoteSection/QuoteSection';
import Section from './components/Section/Section';
import ServicesSection from './components/ServicesSection/ServicesSection';

import './styles.scss';

const Main = () => {
  return (
    <div className="page-container">
      <div className="page-container__logo">
        <Image
          src="/assets/edit_logo_black.png"
          alt="Logo EDIT brand"
          fill // L'image remplit le parent
          sizes="5rem" // Optionnel mais recommandé pour la performance
          style={{ objectFit: 'contain' }} // Garde les proportions sans couper
          priority
        />
      </div>

      <Section id="main">
        <HeroSection />
      </Section>
      <Section id="myself">
        <MyselfSection />
      </Section>
      <Section id="quote">
        <QuoteSection />
      </Section>
      <Section id="numbers">
        <NumberSection />
      </Section>
      <Section id="services">
        <ServicesSection />
      </Section>
      <Section id="prices">
        <PriceSection />
      </Section>
      <Section id="contact">
        <ContactSection />
      </Section>
    </div>
  );
};

export default Main;
