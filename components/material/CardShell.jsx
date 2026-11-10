// components/material/CardShell.jsx
'use client';

import { useProgress } from './ProgressProvider';
import { CheckButton } from './ExerciseCard';

/** Contenedor de la tarjeta: solo él necesita ser cliente para pintar el estado "resuelto". */
export function CardShell({ id, children }) {
  const { isDone } = useProgress();
  return (
    <li
      id={`card_${id}`}
      // Cambiamos flex-[1_1_18rem] a flex-[1_1_22rem] para forzar menos tarjetas por fila
      className={`flex max-w-[32rem] min-w-0 flex-[1_1_22rem] scroll-mt-8 flex-col rounded-xl border p-5 shadow-sm transition duration-200 print:break-inside-avoid print:shadow-none ${
        isDone(id) ? 'border-emerald-500 bg-green-50' : 'border-slate-200 bg-white'
      }`}
    >
      {children}
    </li>
  );
}

export function ExerciseCheck({ id }) {
  const { isDone, toggle } = useProgress();
  return <CheckButton done={isDone(id)} onClick={() => toggle(id)} />;
}