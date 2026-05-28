import ServiceCards from './ServiceCards/ServiceCards';
import { servicesCardsContent } from './ServiceCards/content';
import './styles.scss';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className="services-section__titles">
        <div className="services-section__titles__title">Services </div>
        <div className="services-section__titles__title">Éditos</div>
      </div>

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
