import ExerciseChart from './ExerciseChart';

/** Línea "Etiqueta: valor" del análisis (valor admite LaTeX). */
export function Row({ label, children }) {
  return <p><strong>{label}:</strong> {children}</p>;
}

/** Cuadrícula de conjuntos C⁰, C⁺, C⁻, C↑… */
export function SignSets({ items }) {
  return (
    <div className="mt-2 grid grid-cols-2 gap-1 rounded border border-slate-200 bg-white p-2 font-mono text-[11px]">
      {items.map((it, i) => <span key={i}>{it}</span>)}
    </div>
  );
}

function Panel({ side, titleClass }) {
  return (
    <div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
      <strong className={`block border-b pb-1 text-sm ${titleClass}`}>{side.title}</strong>
      {side.rows.map(([label, value, note]) => (
        <p key={label}>
          • <strong>{label}:</strong> {value}
          {note && <> <em>({note})</em></>}
        </p>
      ))}
    </div>
  );
}

/**
 * Cuerpo de un caso de inversión: función directa vs inversa, despeje paso a paso y gráfico dual.
 *  direct / inverse: { title, rows: [[etiqueta, valor, nota?], ...] }
 *  steps: pasos del despeje (el último se resalta); chartId: clave en lib/material/charts.js
 */
export function InverseAnalysis({ direct, inverse, steps, chartId, chartCaption }) {
  return (
    <>
      <div className="grid gap-4 text-xs md:grid-cols-2">
        <Panel side={direct} titleClass="text-blue-700" />
        <Panel side={inverse} titleClass="text-indigo-700" />
      </div>

      <div className="space-y-1 rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-100">
        <p className="font-sans font-bold text-slate-400">Despeje Analítico:</p>
        {steps.map((s, i) => (
          <p key={i} className={i === steps.length - 1 ? 'font-bold text-emerald-400' : ''}>{i + 1}. {s}</p>
        ))}
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <h5 className="mb-2 text-xs font-bold text-slate-700">{chartCaption}</h5>
        <ExerciseChart id={chartId} />
      </div>
    </>
  );
}
