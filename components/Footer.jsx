import Link from 'next/link';
import { MATERIAL_LINKS } from '@/lib/site';

export default function Footer() {
  // Se calcula en el build (export estático); se actualiza en cada deploy.
  const year = new Date().getFullYear();

  return (
    <footer className="pt-8 pb-[5.5rem] text-center text-[0.88rem] text-slate-500">
      <div className="wrap">
        <p>
          Material gratuito:{' '}
          {MATERIAL_LINKS.map(({ href, label }, i) => (
            <span key={href}>
              {i > 0 && ' · '}
              <Link href={href} className="text-brand underline">
                {label}
              </Link>
            </span>
          ))}
        </p>
        <p>© {year} Clases particulares de Matemática en Palermo, Ciudad Autónoma de Buenos Aires.</p>
      </div>
    </footer>
  );
}
