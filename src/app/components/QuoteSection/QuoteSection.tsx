import Image from 'next/image';

import './styles.scss';

const QuoteSection = () => {
  const quote = `« Douter de tout, surtout de ce que l'on croit savoir. »`;

  return (
    <div className="quote-section">
      <blockquote className="quote-section__title">{quote}</blockquote>
      <div className="quote-section__picture">
        <Image src="/assets/picture_books.jpeg" fill alt="Pile de livres" />
      </div>
    </div>
  );
};
export default QuoteSection;
