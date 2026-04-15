'use client';

import { useInView } from 'react-intersection-observer';
import Cards from './NumberCards/NumberCards';
import { cardsContent } from './content';

import './styles.scss';
import dayjs from 'dayjs';

const NumberSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  console.log(dayjs().day());
  return (
    <div className="number-section" ref={ref}>
      {cardsContent.map(({ title, description }, index) => (
        <Cards title={title(inView)} description={description} key={index} />
      ))}
    </div>
  );
};

export default NumberSection;
