import { Geist, Geist_Mono, Newsreader, Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/next';
import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import ScrollProvider from './components/ScrollProvider/ScrollProvider';
import './globals.css';
import './styles.scss';

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
  title: 'EDIT.',
  description: 'Conseil, écriture, relecture',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  keywords: [
    'Hélène Bottin',
    'Correction',
    'Relecture',
    'Réécriture',
    'Correctrice',
    'Correcteur',
    'Relectrice',
    'Relecteur',
    'Réécrivaine',
    'Rewriter',
    'Réécrivain',
    'Secrétaire de rédaction',
    'Secrétariat de rédaction',
    'SR',
    'Conseil littéraire',
    'Conseil éditorial',
    'Éditorial',
    'Prête-plume',
    'Ghostwriter',
    'Français',
    'Écriture',
    'Écrivain',
    'Accompagnement',
  ],
  metadataBase: new URL('https://www.portfolio.abottin.dev'),
  openGraph: {
    title: 'Edit website ',
    description: `Helene Bottin's professional website`,
    images: [{ url: '/assets/edit_logo_black.png' }],
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
      lang="fr"
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
        />

        <div className="page-container__header">
          <div className="page-container__header__words">
            <span>Relecture.</span>
            <span>Écriture.</span>
            <span>Conseil.</span>
          </div>

          <div className="page-container__header__logo">
            <Image
              src="/assets/edit_logo_black.png"
              alt="Logo EDIT brand"
              fill
              sizes="(min-width: 1024px) 7rem, 5rem"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
