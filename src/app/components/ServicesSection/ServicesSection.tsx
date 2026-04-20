import { servicesCardsContent } from './ServiceCards/content';
import ServiceCards from './ServiceCards/ServiceCards';
import './styles.scss';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className="services-section__titles">
        <div className="services-section__titles__title">Services </div>
        <div className="services-section__titles__title">Editos</div>
      </div>

      <div className="services-section__cards">
        {servicesCardsContent.map(
          ({ number, title, description, mainWord }, key) => (
            <ServiceCards
              number={number}
              title={title}
              description={description}
              mainWord={mainWord}
              key={key}
            />
          ),
        )}
      </div>
    </div>
  );
};
export default ServicesSection;
