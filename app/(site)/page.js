import { buildMetadata } from '@/lib/seo';
import { EMAIL, GITHUB, LINKEDIN, PHONE, abs } from '@/lib/site';
import { PRECIOS, fmt } from '@/lib/data';
import JsonLd from '@/components/JsonLd';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Method from '@/components/Method';
import Pricing from '@/components/Pricing';
import MaterialList from '@/components/MaterialList';
import Zones from '@/components/Zones';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

const DESCRIPTION =
  'Profesor particular de Matemática en Palermo, CABA: Secundaria, CBC y universidad. Clases presenciales u online. Precios claros y primera consulta por WhatsApp.';

export const metadata = buildMetadata({
  title: 'Clases de Matemática en Palermo, CABA | Profesor particular',
  description: DESCRIPTION,
  path: '/',
  ogTitle: 'Clases de Matemática en Palermo, CABA',
  ogDescription:
    'Profesor particular en Palermo: todos los niveles, presencial u online. Precios claros y primera consulta por WhatsApp.',
});

const { duraciones, filas, moneda } = PRECIOS;
const todos = filas.flatMap((f) => f.precios);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EducationalOrganization'],
  name: 'Clases particulares de Matemática y Lógica en Palermo',
  url: abs('/'),
  image: abs('/og-image.jpg'),
  description: DESCRIPTION,
  telephone: `+${PHONE}`,
  email: EMAIL,
  sameAs: [LINKEDIN, GITHUB],
  priceRange: `${fmt(Math.min(...todos))} - ${fmt(Math.max(...todos))}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Palermo, Ciudad Autónoma de Buenos Aires',
    addressCountry: 'AR',
  },
  areaServed: ['Palermo', 'Palermo Soho', 'Palermo Hollywood', 'Belgrano', 'Recoleta', 'Villa Crespo'],
  makesOffer: duraciones.map((d, i) => ({
    '@type': 'Offer',
    name: `Clase de Matemática de ${d} minutos`,
    price: filas[0].precios[i],
    priceCurrency: moneda,
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="inicio">
        <Hero />
        <Services />
        <About />
        <Method />
        <Pricing />
        <MaterialList />
        <Zones />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
