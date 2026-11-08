import { Inter } from 'next/font/google';
import './globals.css';
import { abs } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // se consume en globals.css (@theme inline → font-sans)
});

// Next 14+: viewport y themeColor van en su propio export (no dentro de `metadata`).
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#4f46e5',
};

// Solo lo global. Title/description/canonical/OG/Twitter se definen en cada page con buildMetadata().
export const metadata = {
  metadataBase: new URL(abs('/')),
  title: 'Clases de Matemática en Palermo, CABA | Profesor particular',
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: {
    icon: [
      { url: abs('/favicon.svg'), type: 'image/svg+xml' },
      { url: abs('/favicon.png'), type: 'image/png', sizes: '192x192' },
    ],
    apple: abs('/favicon.png'),
  },
  other: {
    'geo.region': 'AR-C',
    'geo.placename': 'Palermo, Buenos Aires',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
