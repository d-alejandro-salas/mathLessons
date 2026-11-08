import { CANONICAL, abs } from '@/lib/site';

export const dynamic = 'force-static'; // requerido por output: 'export'

// Mismas URLs y fechas que el sitemap.xml actual. Actualizá lastModified al editar cada página.
export default function sitemap() {
  return [
    { url: abs('/'), lastModified: '2026-10-11', priority: 1.0 },
    { url: abs(CANONICAL.funciones), lastModified: '2026-10-11', priority: 0.7 },
    { url: abs(CANONICAL.trigonometria), lastModified: '2026-10-30', priority: 0.7 },
  ];
}
