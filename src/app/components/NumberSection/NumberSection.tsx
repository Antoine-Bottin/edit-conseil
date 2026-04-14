'use client';

import { useInView } from 'react-intersection-observer';
import Cards from '../Cards/Cards';
import { cardsContent } from './content';

import './styles.scss';

const NumberSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="number-section" ref={ref}>
      {cardsContent.map(({ title, description }, index) => (
        <Cards title={title(inView)} description={description} key={index} />
      ))}
    </div>
  );
};

export default NumberSection;
