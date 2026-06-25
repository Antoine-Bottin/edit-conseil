import { Geist, Geist_Mono, Newsreader, Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/next';
import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import ScrollProvider from './components/ScrollProvider/ScrollProvider';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './globals.scss';
import './styles.scss';

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
  } catch (e) {}
})();
`;

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
  metadataBase: new URL('https://www.edit-conseil.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Edit website ',
    description: `Helene Bottin's professional website`,
    images: [{ url: '/assets/edit_logo_black.png' }],
    type: 'website',
    url: 'https://www.edit-conseil.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Edit.',
  description: 'Relecture-correction et secrétariat de rédaction',
  url: 'https://www.edit-conseil.com',
  email: 'contact@edit-conseil.com',
  image: 'https://www.edit-conseil.com/assets/edit_logo_black.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 place du Petit Enfer',
    postalCode: '76200',
    addressLocality: 'Dieppe',
    addressCountry: 'FR',
  },
  sameAs: [
    'https://www.linkedin.com/in/helenebottin/',
    'https://www.malt.fr/profile/helenebottin',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spacegrotesk.variable} ${newsreader.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

        <ThemeToggle />

        <header className="page-container__header">
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
        </header>

        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
