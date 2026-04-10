

import { ReactNode } from 'react';
import './styles.scss';

interface CardsProps {
    title: ReactNode;
    description: string;
}


const Cards = ({ title, description }: CardsProps) => {
  return (
    <div className="card-outer-container">
        <div className="card-inner-container">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
    </div>
  );
}

export default Cards