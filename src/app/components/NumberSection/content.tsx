import { ReactNode } from 'react';
import dayjs from 'dayjs';
import CountUp from 'react-countup';

const weeklyReads: Record<number, { min: number; max: number }> = {
  0: { min: 64, max: 132 }, // Sunday
  1: { min: 5, max: 14 }, // Monday
  2: { min: 15, max: 31 }, // Tuesday
  3: { min: 32, max: 47 }, // Wednesday
  4: { min: 48, max: 63 }, // Thursday
  5: { min: 64, max: 132 }, // Friday
  6: { min: 64, max: 132 }, // Saturday
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
    description: 'pages relues cette semaine',
  },
];
