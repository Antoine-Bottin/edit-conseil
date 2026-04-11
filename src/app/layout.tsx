import type { Metadata } from 'next';
import { Geist, Geist_Mono, Newsreader, Space_Grotesk } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import Menu from './components/Menu/Menu';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const spacegrotesk = Space_Grotesk({
  variable: '--font-spacegrotesk',
  subsets: ['latin'],
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EDIT .',
  description: 'Conseil, écriture, relecture',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  keywords: [
    'web',
    'developer',
    'portfolio',
    'Hélène Bottin',
    'software ingeneer',
    'reactJS',
    'NextJs',
    'NodeJs',
    'TypeScript',
    'JavaScript',
    'HTML',
  ],
  metadataBase: new URL('https://www.portfolio.abottin.dev'),
  openGraph: {
    title: 'Antoine Bottin - Portfolio ',
    description: 'This is my dev portfolio',
    images: [{ url: '/assets/pictures/Photo_CV.jpg' }],
    type: 'website',
    url: 'https://www.portfolio.abottin.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spacegrotesk.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <Menu />
        {children}
      </body>
    </html>
  );
}
