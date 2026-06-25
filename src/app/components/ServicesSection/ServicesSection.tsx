import ServiceCards from './ServiceCards/ServiceCards';
import { servicesCardsContent } from './ServiceCards/content';
import './styles.scss';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2 className="services-section__titles">
        <span className="services-section__titles__title">Services </span>
        <span className="services-section__titles__title">Éditos</span>
      </h2>

      <div className="services-section__cards">
        {servicesCardsContent.map(
          ({ number, title, description, mainWord, isDisabled }, key) => (
            <ServiceCards
              number={number}
              title={title}
              description={description}
              mainWord={mainWord}
              key={key}
              isDisabled={isDisabled}
            />
          ),
        )}
      </div>
    </div>
  );
};
export default ServicesSection;
