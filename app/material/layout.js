import MathJaxScripts from '@/components/material/MathJaxScripts';

// Un viewport anidado reemplaza al del layout raíz: se repite completo, solo cambia el themeColor.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0f172a',
};

// MathJax se carga solo en /material (la landing no lo necesita).
export default function MaterialLayout({ children }) {
  return (
    <>
      {children}
      <MathJaxScripts />
    </>
  );
}
