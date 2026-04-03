import { ReactNode } from 'react';
import './styles.scss';

interface SectionProps {
  children: ReactNode;
  id?: string;
}

const Section = ({ children, id }: SectionProps) => {
  return (
    <section id={id} className="section-container">
      {children}
    </section>
  );
};

export default Section;
