import Image from 'next/image';

import './styles.scss';

const QuoteSection = () => {
  const quote = `Douter de tout, surtout de ce que l'on croit savoir`;

  return (
    <div className="quote-section">
      <h1 className="quote-section__title">{quote}</h1>
      <div className="quote-section__picture">
        <Image
          src="/assets/random-illustration.png"
          fill
          alt="Helene Bottin's picture"
          preload
        />
      </div>
    </div>
  );
};
export default QuoteSection;
