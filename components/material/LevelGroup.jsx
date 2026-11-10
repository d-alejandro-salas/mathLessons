// components/material/LevelGroup.jsx
'use client';

import { useProgress } from './ProgressProvider';

const sq = 'inline-flex size-[1.65rem] items-center justify-center rounded-[0.4rem] border-[1.5px] text-[0.68rem] font-bold no-underline transition hover:-translate-y-px';

function LevelProgress({ exercises }) {
  const { isDone } = useProgress();
  const done = exercises.filter((n) => isDone(`ex${n}`)).length;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2">
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Progreso del nivel">
        {exercises.map((n) => {
          const d = isDone(`ex${n}`);
          return (
            <a
              key={n}
              href={`#card_ex${n}`}
              title={`Ejercicio #${n}`}
              aria-label={`Ejercicio ${n}`}
              className={`${sq} ${d ? 'border-emerald-600 bg-emerald-500 text-white' : 'border-slate-300 bg-white text-slate-500 hover:border-emerald-500 hover:text-emerald-600'}`}
            >
              {d ? '✓' : n}
            </a>
          );
        })}
      </div>
      <span className="font-mono text-xs font-bold text-slate-500">{done}/{exercises.length}</span>
      {done === exercises.length && (
        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
          ✓ Nivel completo
        </span>
      )}
    </div>
  );
}

const BARS =
  'relative scroll-mt-8 rounded-xl transition-[background] duration-300 before:pointer-events-none before:absolute before:inset-y-0 before:-left-[7px] before:w-1 before:rounded-sm before:bg-emerald-500 before:opacity-0 before:transition-opacity before:duration-300 after:pointer-events-none after:absolute after:inset-y-0 after:-right-[7px] after:w-1 after:rounded-sm after:bg-emerald-500 after:opacity-0 after:transition-opacity after:duration-300 print:before:hidden print:after:hidden';
const COMPLETE =
  'before:opacity-100 after:opacity-100 bg-[linear-gradient(to_right,rgba(16,185,129,0.13),transparent_2.5rem,transparent_calc(100%_-_2.5rem),rgba(16,185,129,0.13))] print:bg-none';

/**
 * Nivel con progreso: título + cuadraditos + contador + insignia, y la grilla de tarjetas (children).
 * Se marca como completo (barras verdes laterales) cuando todos sus ejercicios están resueltos.
 */
export default function LevelGroup({ id, exercises, heading, as: Tag = 'section', variant = 'section', children }) {
  const { isDone } = useProgress();
  const complete = exercises.length > 0 && exercises.every((n) => isDone(`ex${n}`));
  const head =
    variant === 'section' ? (
      <div className="border-b border-slate-300 pb-3">
        {heading}
        <LevelProgress exercises={exercises} />
      </div>
    ) : (
      <>
        {heading}
        <LevelProgress exercises={exercises} />
      </>
    );

  return (
    <Tag id={id} className={`${BARS} ${variant === 'section' ? 'space-y-6' : 'space-y-4'} ${complete ? COMPLETE : ''}`}>
      {head}
      <ol className="m-0 flex list-none flex-wrap gap-6 p-0">{children}</ol>
    </Tag>
  );
}
