import HeroSection from './components/HeroSection/Hero';
import Section from './components/Section/Section';
import './styles.scss';

const Main = () => {
  return (
    <div className="page-container">
      <Section id="Main">
        <HeroSection />
      </Section>
      <Section id="myself">
        <h1>Myself</h1>
      </Section>
      <Section id="numbers">
        <h1>Numbers </h1>
      </Section>
      <Section id="services">
        <h1>Services </h1>
      </Section>
      <Section id="prices">
        <h1>Prices </h1>
      </Section>
      <Section id="prices">
        <h1>Prices </h1>
      </Section>
    </div>
  );
};

export default Main;
