'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './styles.scss';

const SKILLS_DATA = [
  {
    id: 'cec',
    text: (
      <>
        <strong>Relectrice-correctrice et relectrice-rewriter diplômée</strong>{' '}
        du Centre d&apos;écriture et de communication
      </>
    ),
    sub: (
      <p>
        J&apos;ai les connaissances, l&apos;entraînement et la certification
        nécessaires à la relecture et la correction professionnelle de tous
        types de documents (tapuscrits, rapports, réponses à appel
        d&apos;offres, magazines professionnels…). Je suis entraînée à la
        réécriture de textes, quels qu&apos;ils soient. Je le fais en fonction
        des objectifs d&apos;écriture ou de communication établis en amont.
      </p>
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
    sub: <p>J&apos;ai à cœur de penser à la fois production et réception. </p>,
  },
  {
    id: 'com-org',
    text: (
      <>
        Spécialisée en <strong>communication des organisations</strong>
      </>
    ),
    sub: (
      <p>
        Je comprends votre vocabulaire, connais vos contraintes et sais écouter
        pour proposer. Je « n&apos;exécute » pas une mission, je collabore à vos
        projets.
      </p>
    ),
  },
];

interface Skill {
  id: string;
  text: React.ReactNode;
  sub: React.ReactNode;
}

const MyselfSection = () => {
  const [activeModalData, setActiveModalData] = useState<Skill | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="myself-section" ref={ref}>
      {SKILLS_DATA.map((skill, idx) => {
        const { id, text } = skill;
        const direction = idx % 2 === 0 ? 'left' : 'right';

        return (
          <div
            key={id}
            className={`myself-section__content ${inView ? 'is-visible' : `is-hidden-${direction}`}`}
            style={{
              transitionDelay: inView ? `${idx * 150}ms` : '0ms',
            }}
          >
            <div className="myself-section__text-wrapper">{text}</div>

            {/* 2. Le bouton "+" qui ouvre la modale au clic */}
            <button
              className="myself-section__open-btn"
              onClick={() => setActiveModalData(skill)}
              aria-label="En savoir plus"
            >
              +
            </button>
          </div>
        );
      })}

      {/* 3. La structure HTML de la modale (affichée uniquement si activeModalData n'est pas null) */}
      {activeModalData && (
        <div
          className="myself-section__modal-overlay"
          onClick={() => setActiveModalData(null)}
        >
          <div
            className="myself-section__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="myself-section__modal-close"
              onClick={() => setActiveModalData(null)}
              aria-label="Fermer la modale"
            >
              &times;
            </button>

            <div className="myself-section__modal-body">
              {activeModalData.sub}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyselfSection;
