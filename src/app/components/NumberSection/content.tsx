import { ReactNode } from 'react';
import dayjs from 'dayjs';
import CountUp from 'react-countup';

const weeklyReads: Record<number, { min: number; max: number }> = {
  0: { min: 220000, max: 300000 }, // Sunday
  1: { min: 40000, max: 50000 }, // Monday
  2: { min: 61000, max: 110000 }, // Tuesday
  3: { min: 111000, max: 155000 }, // Wednesday
  4: { min: 166000, max: 210000 }, // Thursday
  5: { min: 220000, max: 300000 }, // Friday
  6: { min: 220000, max: 300000 }, // Saturday
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
    description: 'livres de référence (presque) constamment ouverts',
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
        useGrouping={true}
        separator=" "
      />
    ),
    description: 'signes espaces comprises relus cette semaine',
  },
];
