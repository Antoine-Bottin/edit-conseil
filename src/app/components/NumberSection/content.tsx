import { ReactNode } from 'react';
import dayjs from 'dayjs';
import CountUp from 'react-countup';

const weeklyReads: Record<number, { min: number; max: number }> = {
  0: { min: 120, max: 150 }, // Sunday
  1: { min: 120, max: 150 }, // Monday
  2: { min: 120, max: 150 }, // Tuesday
  3: { min: 120, max: 150 }, // Wednesday
  4: { min: 120, max: 150 }, // Thursday
  5: { min: 120, max: 150 }, // Friday
  6: { min: 120, max: 150 }, // Saturday
};

export const cardsContent: {
  title: (start?: boolean) => ReactNode;
  description: string;
}[] = [
  {
    title: () => '+9',
    description: "années d'expérience",
  },
  {
    title: () => '+150',
    description: 'clients (entreprises et particuliers)',
  },
  {
    title: () => '+350',
    description: 'projets',
  },
  {
    title: () => '+15',
    description: 'livres de référence, (presque) constamment ouverts',
  },
  {
    title: (start) => (
      <CountUp
        end={
          Math.floor(
            Math.random() *
              (weeklyReads[dayjs().day()].max -
                weeklyReads[dayjs().day()].min +
                1),
          ) + weeklyReads[dayjs().day()].min
        }
        start={start ? 0 : undefined}
        preserveValue={true}
        redraw={false}
      />
    ),
    description: 'pages relues par semaine',
  },
];
