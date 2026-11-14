// components/MobileNav.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/** Menú desplegable para pantallas < 1024px (donde el menú horizontal del Header está oculto). */
export default function MobileNav({ links }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        className="grid size-10 place-items-center rounded-lg border border-line bg-white text-ink"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Menú móvil"
          className="absolute inset-x-0 top-full border-b border-line bg-white shadow-soft"
        >
          <ul className="wrap m-0 grid list-none gap-1 py-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-semibold text-txt no-underline hover:bg-indigo-50 hover:text-brand"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
