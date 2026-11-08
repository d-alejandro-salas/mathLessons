import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';

// Layout de la landing. Las páginas de /material tienen su propio header/footer,
// por eso viven fuera de este grupo de rutas.
export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsAppFab />
    </>
  );
}
