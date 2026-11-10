// components/material/ExerciseCard.jsx
'use client';

import { createContext, useContext, useState } from 'react';
import { useProgress } from './ProgressProvider';

// Los gráficos se construyen recién cuando el <details> se abre por primera vez.
const OpenedContext = createContext(true);
export const useCardOpened = () => useContext(OpenedContext);

const TONES = {
  blue:    { num: 'bg-blue-600',    tag: 'bg-blue-50 text-blue-600',       link: 'text-blue-600',    hover: 'hover:text-blue-600' },
  indigo:  { num: 'bg-indigo-600',  tag: 'bg-indigo-50 text-indigo-600',   link: 'text-indigo-600',  hover: 'hover:text-indigo-600' },
  slate:   { num: 'bg-slate-700',   tag: 'bg-blue-50 text-blue-600',       link: 'text-blue-600',    hover: 'hover:text-blue-600' },
  emerald: { num: 'bg-emerald-700', tag: 'text-emerald-800',               link: 'text-emerald-800', hover: 'hover:text-emerald-600' },
};

export function CheckButton({ done, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={done}
      className={`flex shrink-0 items-center gap-1 rounded-full border px-2.5 print:hidden py-1 text-[11px] font-bold transition ${
        done
          ? 'border-emerald-600 bg-emerald-500 text-white'
          : 'border-slate-300 bg-slate-100 text-slate-600 hover:border-emerald-500'
      }`}
    >
      <span>{done ? '✓' : '○'}</span>
      <span>{done ? 'Resuelto' : 'Pendiente'}</span>
    </button>
  );
}

/**
 * Tarjeta de ejercicio con estado "resuelto" persistente.
 *  - variant="compact": cabecera + consigna en tooltip + <details> con `children` (análisis y gráfico).
 *  - variant="wide":    tarjeta ancha (inversas); `children` se muestran directamente.
 * `title`, `consigna` y `description` admiten LaTeX (\( ... \)).
 */
export default function ExerciseCard({
  id, n, tone = 'blue', variant = 'compact',
  tag, title, description, consigna,
  summary = 'Ver Análisis Completo y Gráfica',
  children,
}) {
  const { isDone, toggle } = useProgress();
  const [opened, setOpened] = useState(false);
  const done = isDone(id);
  const t = TONES[tone];

  if (variant === 'wide') {
    return (
      <OpenedContext.Provider value>
        <li
          id={`card_${id}`}
          className={`space-y-4 rounded-xl border p-6 shadow-sm transition duration-200 ${
            done ? 'border-emerald-500 bg-green-50' : 'border-slate-300 bg-white'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2">
              <span className={`rounded px-2.5 py-1 font-mono text-xs font-bold text-white ${t.num}`}>#{n}</span>
              <span className={`text-sm font-bold tracking-wide uppercase ${t.tag}`}>{tag}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-xs text-emerald-800">
                {title}
              </span>
              <CheckButton done={done} onClick={() => toggle(id)} />
            </div>
          </div>
          {children}
        </li>
      </OpenedContext.Provider>
    );
  }

  return (
    <OpenedContext.Provider value={opened}>
      <li
        id={`card_${id}`}
        className={`flex flex-col justify-between rounded-xl border p-5 shadow-sm transition duration-200 ${
          done ? 'border-emerald-500 bg-green-50' : 'border-slate-200 bg-white'
        }`}
      >
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`rounded px-2 py-0.5 font-mono text-xs font-bold text-white ${t.num}`}>#{n}</span>
              <span className={`rounded px-2 py-0.5 text-xs font-bold uppercase ${t.tag}`}>{tag}</span>
            </div>
            <CheckButton done={done} onClick={() => toggle(id)} />
          </div>

          <div className="flex items-start justify-between">
            <h4 className="font-mono text-lg font-bold text-slate-900">{title}</h4>
            {consigna && (
              <div className="group/tip relative" tabIndex={0}>
                <span className={`cursor-help text-[10px] font-bold text-slate-400 ${t.hover}`}>ℹ️ Consigna</span>
                <div className="invisible absolute top-5 right-0 z-30 w-56 rounded bg-slate-900 p-2.5 text-[10px] text-white opacity-0 shadow-xl transition-[opacity,visibility] duration-200 pointer-events-none group-hover/tip:visible group-hover/tip:opacity-100 group-focus-within/tip:visible group-focus-within/tip:opacity-100">
                  {consigna}
                </div>
              </div>
            )}
          </div>
          {description && <p className="mt-1 text-xs text-slate-500">{description}</p>}

          <details
            className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs"
            onToggle={(e) => e.currentTarget.open && setOpened(true)}
          >
            <summary className={`cursor-pointer font-bold ${t.link}`}>{summary}</summary>
            <div className="mt-2 space-y-1.5 text-slate-700">{children}</div>
          </details>
        </div>
      </li>
    </OpenedContext.Provider>
  );
}
