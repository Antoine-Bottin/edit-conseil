import ContactSection from './components/ContactSection/ContactSection';
import HeroSection from './components/HeroSection/HeroSection';
import MyselfSection from './components/MyselfSection/MyselfSection';
import NumberSection from './components/NumberSection/NumberSection';
import QuoteSection from './components/QuoteSection/QuoteSection';
import Section from './components/Section/Section';
import ServicesSection from './components/ServicesSection/ServicesSection';

import './styles.scss';

const Main = () => {
  return (
    <div className="page-container">
      <h1 className="page-container__title">E D I T .</h1>
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
        <h1>Prices </h1>
      </Section>
      <Section id="contact">
        <ContactSection />
      </Section>
    </div>
  );
};

export default Main;
