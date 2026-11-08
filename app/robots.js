import { abs } from '@/lib/site';

export const dynamic = 'force-static'; // requerido por output: 'export'

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: abs('/sitemap.xml'),
  };
}
