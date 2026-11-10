// components/material/PolyExerciseCard.jsx
import { EXERCISES } from '@/lib/material/polinomicas-data';
import { CardShell, ExerciseCheck } from './CardShell';

const TONES = {
  blue:    { num: 'bg-blue-600',    tag: 'bg-blue-50 text-blue-700',       sum: 'text-blue-700' },
  indigo:  { num: 'bg-indigo-600',  tag: 'bg-indigo-50 text-indigo-700',   sum: 'text-indigo-700' },
  emerald: { num: 'bg-emerald-600', tag: 'bg-emerald-50 text-emerald-700', sum: 'text-emerald-700' },
};

const html = (__html) => ({ __html });

export default function PolyExerciseCard({ n }) {
  const ex = EXERCISES[n];
  const t = TONES[ex.tone];

  return (
    <CardShell id={`ex${n}`}>
      {/* Añadimos flex-wrap y items-start por si los botones no entran bien en móviles */}
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded px-2 py-0.5 font-mono text-xs font-bold text-white ${t.num}`}>#{n}</span>
          <span className={`rounded px-2 py-0.5 text-xs font-bold ${t.tag}`}>{ex.tag}</span>
        </div>
        <ExerciseCheck id={`ex${n}`} />
      </div>

      {/* overflow-x-auto protege las ecuaciones muy largas. Las clases de scrollbar ocultan la barra visualmente. */}
      <h3 
        className="mb-2 max-w-full overflow-x-auto pb-1 text-base font-bold tracking-normal text-slate-900 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" 
        dangerouslySetInnerHTML={html(ex.title)} 
      />
      
      <div className="text-sm text-slate-700" dangerouslySetInnerHTML={html(ex.body)} />

      <div className="mt-auto pt-5">
        <details id={`det_ex${n}`} className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 text-xs">
          <summary className={`flex min-h-[3.25rem] cursor-pointer list-none items-center gap-2 px-4 py-4 text-sm font-bold transition select-none hover:bg-slate-100 before:mr-1.5 before:inline-block before:transition-transform before:content-['▸'] group-open:before:rotate-90 [&::-webkit-details-marker]:hidden ${t.sum}`}>
            Ver respuesta y resolución
          </summary>
          
          <div className="space-y-5 border-t border-slate-200 px-5 pt-4 pb-6">
            {/* Bloque de Respuesta protegido con overflow-x-auto */}
            <div 
              className="max-w-full overflow-x-auto rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-[13.5px] text-emerald-900 shadow-sm" 
              dangerouslySetInnerHTML={html(ex.answer)} 
            />
            
            {/* Bloque de Pasos */}
            <div>
              <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Procedimiento paso a paso
              </h4>
              <ol 
                className="list-decimal space-y-2.5 pl-5 text-[13px] leading-relaxed text-slate-700" 
                dangerouslySetInnerHTML={html(ex.steps)} 
              />
            </div>
          </div>
        </details>
      </div>
    </CardShell>
  );
}