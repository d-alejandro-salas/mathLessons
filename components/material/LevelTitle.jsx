// components/material/LevelTitle.jsx
const BADGE = { blue: 'bg-blue-600', indigo: 'bg-indigo-600', emerald: 'bg-emerald-600', amber: 'bg-amber-600', rose: 'bg-rose-600', slate: 'bg-slate-800' };
const BORDER = { blue: 'border-blue-600', indigo: 'border-indigo-600', emerald: 'border-emerald-600', amber: 'border-amber-600', rose: 'border-rose-600' };

/** Título de nivel: h2 con insignia (secciones I–V) o h3 con borde de color (niveles dentro de Extra). */
export default function LevelTitle({ badge, tone, children }) {
  if (!badge) {
    return <h3 className={`mb-0 border-l-4 pl-3 text-lg font-bold tracking-normal text-slate-900 ${BORDER[tone]}`}>{children}</h3>;
  }
  return (
    <h2 className="mb-0 flex flex-wrap items-center gap-3 font-serif text-2xl font-bold tracking-normal text-academic-900">
      <span className={`rounded px-2.5 py-1 font-sans text-xs text-white ${BADGE[tone]}`}>{badge}</span>
      {children}
    </h2>
  );
}
