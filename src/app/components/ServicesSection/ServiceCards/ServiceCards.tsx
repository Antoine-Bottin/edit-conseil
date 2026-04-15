import './styles.scss';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  mainWord: string;
}

const ServiceCards = ({
  number,
  title,
  description,
  mainWord,
}: ServiceCardProps) => {
  return (
    <div className="services-cards-container">
      <div>
        <div
          className="services-cards-container__top__card-number"
          id={mainWord}
        >
          {number}
        </div>
        <div className="services-cards-container__top__card-title">{title}</div>
      </div>
      <div className="services-cards-container__card-description">
        {description}
      </div>
      <div className="services-cards-container__card-main-word" id={mainWord}>
        {mainWord}
      </div>
    </div>
  );
};

export default ServiceCards;
