import { EXERCISES } from '@/lib/material/trigonometria-data';
import { CardShell, ExerciseCheck } from './CardShell';

// Clases completas y estáticas (Tailwind no detecta nombres armados con template strings).
const TONES = {
  blue:    { num: 'bg-blue-600',    tag: 'bg-blue-50 text-blue-700',       sum: 'text-blue-700' },
  indigo:  { num: 'bg-indigo-600',  tag: 'bg-indigo-50 text-indigo-700',   sum: 'text-indigo-700' },
  emerald: { num: 'bg-emerald-600', tag: 'bg-emerald-50 text-emerald-700', sum: 'text-emerald-700' },
  amber:   { num: 'bg-amber-600',   tag: 'bg-amber-50 text-amber-700',     sum: 'text-amber-700' },
  rose:    { num: 'bg-rose-600',    tag: 'bg-rose-50 text-rose-700',       sum: 'text-rose-700' },
};

const html = (__html) => ({ __html });

/** Server Component: enunciado y resolución viven en lib/material/trigonometria-data.js. */
export default function TrigExerciseCard({ n }) {
  const ex = EXERCISES[n];
  const t = TONES[ex.tone];
  const Heading = `h${ex.h}`;

  return (
    <CardShell id={`ex${n}`}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded px-2 py-0.5 font-mono text-xs font-bold text-white ${t.num}`}>#{n}</span>
          <span className={`rounded px-2 py-0.5 text-xs font-bold ${t.tag}`}>{ex.tag}</span>
        </div>
        <ExerciseCheck id={`ex${n}`} />
      </div>

      <Heading className="mb-0 text-base font-bold tracking-normal text-slate-900" dangerouslySetInnerHTML={html(ex.title)} />
      <div dangerouslySetInnerHTML={html(ex.body)} />

      <div className="mt-auto pt-5">
        <details id={`det_ex${n}`} className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 text-xs">
          <summary
            className={`flex min-h-[3.25rem] cursor-pointer list-none items-center gap-2 px-4 py-4 text-sm font-bold transition select-none hover:bg-slate-100 before:mr-1.5 before:inline-block before:transition-transform before:content-['▸'] group-open:before:rotate-90 [&::-webkit-details-marker]:hidden ${t.sum}`}
          >
            Ver respuesta y resolución
          </summary>
          <div className="space-y-4 border-t border-slate-200 px-4 pt-4 pb-5 text-slate-700">
            <div
              className="space-y-1 rounded-md border border-emerald-300 bg-emerald-50 p-3 font-mono text-[12px] text-emerald-900"
              dangerouslySetInnerHTML={html(ex.answer)}
            />
            <ol className="list-decimal space-y-2 pl-5 leading-relaxed" dangerouslySetInnerHTML={html(ex.steps)} />
          </div>
        </details>
      </div>
    </CardShell>
  );
}
