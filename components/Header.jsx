// components/Header.jsx
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="wrap flex h-[60px] items-center justify-between">
        <Link href="/#inicio" aria-label="Inicio" className="text-[1.1rem] font-extrabold text-ink no-underline">
          π <b className="text-brand">Matemática</b> Palermo
        </Link>

        <nav aria-label="Principal">
          <ul className="m-0 hidden list-none gap-[1.4rem] p-0 lg:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-[0.95rem] font-semibold text-txt no-underline hover:text-brand">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/#contacto" className="btn btn-wa min-h-10 px-[1.1rem] py-2 text-[0.9rem]">
          Consultar
        </Link>
      </div>
    </header>
  );
}
