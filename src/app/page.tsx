import HeroSection from './components/HeroSection/HeroSection';
import NumberSection from './components/NumberSection/NumberSection';
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
        <h1>Myself</h1>
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
        <h1>Contact </h1>
      </Section>
    </div>
  );
};

export default Main;
