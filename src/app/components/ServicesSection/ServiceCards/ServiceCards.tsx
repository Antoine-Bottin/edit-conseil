import './styles.scss';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  mainWord: string;
  isDisabled?: boolean;
}

const ServiceCards = ({
  number,
  title,
  description,
  mainWord,
  isDisabled = false,
}: ServiceCardProps) => {
  return (
    <div
      className={`services-cards-container ${isDisabled ? 'is-disabled' : ''}`}
      id={mainWord}
    >
      {isDisabled && <div className="not-available">Indisponible</div>}

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
