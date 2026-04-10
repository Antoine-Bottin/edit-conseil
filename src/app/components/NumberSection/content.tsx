import { ReactNode } from 'react';
import CountUp from 'react-countup';


export const cardsContent: {
  title: (start?: boolean) => ReactNode;
  description: string;
}[] = [
  {
    title: () => '9+',
    description: "années d'expérience",
  },
  {
    title: () => '150+',
    description: 'clients ( entreprises et particuliers )',
  },
  {
    title: () => '350+',
    description: 'projets',
  },
  {
    title: () => '15+',
    description: 'livres de référence, (presque) constamment ouverts',
  },
  {
    title: (start) => <CountUp end={Math.floor(Math.random() * 150) + 1} start={start ? 0 : undefined} preserveValue={true} redraw={false} />,
    description: 'pages relues par semaine',
  },
];
