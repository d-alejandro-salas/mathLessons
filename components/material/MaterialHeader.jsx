import Link from 'next/link';
import { HeaderProgress } from './ProgressProvider';

export default function MaterialHeader({ eyebrow, title, nav, sticky = true, eyebrowClass = 'tracking-widest uppercase' }) {
  return (
    <header className={`z-40 border-b-4 border-blue-600 bg-academic-900 text-white shadow-lg ${sticky ? 'md:sticky md:top-0' : ''}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="mb-1 block text-xs text-blue-300 hover:underline">← Clases de Matemática en Palermo</Link>
          <span className={`text-xs font-semibold text-blue-400 ${eyebrowClass}`}>{eyebrow}</span>
          <h1 className="font-serif text-2xl font-bold tracking-normal text-slate-100 md:text-3xl">{title}</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <HeaderProgress />
          <nav className="flex flex-wrap gap-1.5 text-xs font-medium print:hidden" aria-label="Secciones">
            {nav.map(({ href, label }) => (
              <a key={href} href={href} className="rounded bg-slate-800 px-2.5 py-1 text-slate-200 transition hover:bg-blue-600">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
