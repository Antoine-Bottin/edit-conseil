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

const today = dayjs().day();
const { min, max } = weeklyReads[today];

const stableRandomReads = Math.floor(Math.random() * (max - min + 1)) + min;

export const cardsContent: {
  title: (start?: boolean) => ReactNode;
  description: string;
}[] = [
  {
    title: () => '+9',
    description: "années d'expérience",
  },
  {
    title: (start) => (
      <CountUp
        end={151}
        start={start ? 147 : undefined}
        preserveValue={true}
        redraw={false}
        useGrouping={true}
        prefix="+"
      />
    ),
    description: 'clients (entreprises et particuliers)',
  },
  {
    title: (start) => (
      <CountUp
        end={352}
        start={start ? 350 : undefined}
        preserveValue={true}
        redraw={false}
        useGrouping={true}
        prefix="+"
      />
    ),
    description: 'projets',
  },
  {
    title: () => '+15',
    description: 'livres de référence (presque) constamment ouverts',
  },
  {
    title: (start) => (
      <CountUp
        end={stableRandomReads}
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
