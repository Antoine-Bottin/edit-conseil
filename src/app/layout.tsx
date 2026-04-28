import type { Metadata } from 'next';

import { Geist, Geist_Mono, Newsreader, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import './globals.css';
import ScrollProvider from './components/ScrollProvider/ScrollProvider';
import { ToastContainer } from 'react-toastify';

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
  keywords: ['conseil', 'écriture', 'relecture', 'Hélène Bottin'],
  metadataBase: new URL('https://www.portfolio.abottin.dev'),
  openGraph: {
    title: 'Edit website ',
    description: `Helene Bottin's professional website`,
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
      className={`${geistSans.variable} ${geistMono.variable} ${spacegrotesk.variable} ${newsreader.variable}`}
    >
      <body>
        <Analytics />
        <ToastContainer
          position="bottom-center"
          limit={2}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="colored"
          style={{ fontSize: '15px' }}
          // transition={Bounce}
        />
        <ScrollProvider>{children}</ScrollProvider>{' '}
      </body>
    </html>
  );
}
