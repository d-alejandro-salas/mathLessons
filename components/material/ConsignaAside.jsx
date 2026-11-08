'use client';

import { useState } from 'react';
import { useProgress } from './ProgressProvider';

const tex = String.raw;

const ITEMS = [
  ['text-blue-400', 'Dominio', tex`\(\text{Dom}(f)\)`],
  ['text-blue-400', 'Imagen', tex`\(\text{Im}(f)\)`],
  ['text-amber-400', 'Asíntota', tex`Horizontal (\(y=k\)) o Vertical (\(x=h\))`],
  ['text-emerald-400', 'Intersección Eje Y', tex`\(f(0)\) (Ordenada)`],
  ['text-emerald-400', 'Intersección Eje X', tex`\(f(x)=0\) (Ceros / \(C^0\))`],
  ['text-purple-400', 'Conjuntos de Signo', tex`\(C^+\) y \(C^-\)`],
  ['text-purple-400', 'Monotonía', tex`Crecimiento (\(C\uparrow\)) o Decrecimiento (\(C\downarrow\))`],
  ['text-rose-400', 'Gráfico', 'Trazado cartesiano cualitativo'],
];

/** Widget flotante: consigna permanente + contador de progreso + reinicio. */
export default function ConsignaAside() {
  const [open, setOpen] = useState(false);
  const { count, total, reset } = useProgress();

  return (
    <aside className="fixed right-5 bottom-5 z-50 w-[calc(100vw-2.5rem)] max-w-xs overflow-hidden rounded-xl border-2 border-blue-500 bg-academic-900 text-white shadow-2xl transition-all duration-300 sm:w-80 print:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between bg-blue-600 px-4 py-2.5 text-left select-none"
      >
        <span className="flex items-center gap-2">
          <span className="text-base">📋</span>
          <span className="text-xs font-bold tracking-wider uppercase">Consigna Obligatoria</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="rounded-full bg-blue-900 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-200">{count}/{total}</span>
          <span className="rounded bg-blue-700 px-2 py-0.5 font-mono text-xs font-bold hover:bg-blue-800">{open ? '−' : '+'}</span>
        </span>
      </button>

      {/* Siempre en el DOM (solo oculto) para que MathJax lo renderice al montar. */}
      <div className={`${open ? '' : 'hidden'} space-y-2.5 bg-slate-900/95 p-4 text-xs backdrop-blur-md`}>
        <div className="flex items-center justify-between border-b border-slate-700 pb-1">
          <p className="font-medium text-slate-300">Ítems de análisis por ejercicio:</p>
          <button type="button" onClick={reset} className="text-[10px] text-rose-400 hover:underline">Reiniciar tildes</button>
        </div>
        <ol className="list-decimal space-y-1.5 pl-4 font-mono text-[11px] text-slate-200">
          {ITEMS.map(([color, label, value]) => (
            <li key={label}><strong className={color}>{label}:</strong> {value}</li>
          ))}
        </ol>
        <div className="border-t border-slate-700 pt-2 text-center text-[10px] text-slate-400 italic">
          {tex`* En inversión analítica: obtener \(f^{-1}(x)\) y graficar simetría axial respecto a \(y = x\).`}
        </div>
      </div>
    </aside>
  );
}
