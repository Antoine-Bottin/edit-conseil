import { ReactNode } from 'react';
import './styles.scss';

interface CardsProps {
  title: ReactNode;
  description: string;
}

const Cards = ({ title, description }: CardsProps) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Cards;
