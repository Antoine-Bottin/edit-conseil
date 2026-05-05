'use client';

import './styles.scss';
import { useInView } from 'react-intersection-observer';

const SKILLS_DATA = [
  {
    id: 'cec',
    text: (
      <>
        <strong>Relectrice-correctrice diplômée</strong> du Centre d’écriture et
        de communication (relecture et correction professionnelle, réécriture)
      </>
    ),
  },
  {
    id: 'ifp',
    text: (
      <>
        Spécialisée en <strong>analyse de la réception de contenus</strong>,
        diplômée de <strong>l’Institut français de presse</strong>
      </>
    ),
  },
  {
    id: 'com-org',
    text: (
      <>
        Spécialisée en <strong>communication des organisations</strong>
      </>
    ),
  },
];

const MyselfSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="myself-section" ref={ref}>
      {SKILLS_DATA.map(({ id, text }, idx) => {
        const direction = idx % 2 === 0 ? 'left' : 'right';

        return (
          <div
            key={id}
            className={`myself-section__content ${inView ? 'is-visible' : `is-hidden-${direction}`}`}
            style={{
              transitionDelay: inView ? `${idx * 150}ms` : '0ms',
            }}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};

export default MyselfSection;
