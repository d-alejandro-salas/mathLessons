// components/material/TrigAside.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import ExpandableCard from './ExpandableCard';
import { useProgress } from './ProgressProvider';

const tex = String.raw;

// Mapeo de colores para Tailwind (reemplaza los hexadecimales que rompían MathJax)
const TColor = { 
  opuesto: 'text-rose-600', 
  adyacente: 'text-indigo-600', 
  H: 'text-emerald-600' 
};

// Componente React para armar fracciones sin depender de MathJax para los colores
const Frac = ({ a, b }) => (
  <span className="inline-flex flex-col items-center justify-center align-middle font-medium leading-none">
    <span className={`border-b border-slate-300 px-1 pb-[3px] ${TColor[a]}`}>{a}</span>
    <span className={`px-1 pt-[3px] ${TColor[b]}`}>{b}</span>
  </span>
);

// [razón, num, den, inversa]
const RAZONES = [
  [tex`\(\operatorname{sen}\alpha\)`, 'opuesto', 'H', tex`\(\operatorname{cosec}\alpha\)`],
  [tex`\(\cos\alpha\)`, 'adyacente', 'H', tex`\(\sec\alpha\)`],
  [tex`\(\tan\alpha\)`, 'opuesto', 'adyacente', tex`\(\operatorname{cotan}\alpha\)`],
];

const NOTABLES = [
  ['30', tex`\dfrac{1}{2}`, tex`\dfrac{\sqrt{3}}{2}`, tex`\dfrac{\sqrt{3}}{3}`],
  ['45', tex`\dfrac{\sqrt{2}}{2}`, tex`\dfrac{\sqrt{2}}{2}`, '1'],
  ['60', tex`\dfrac{\sqrt{3}}{2}`, tex`\dfrac{1}{2}`, tex`\sqrt{3}`],
];

const METODO = [
  ['text-blue-400', 'Dibujá', ' el triángulo y ubicá datos e incógnitas.'],
  ['text-indigo-400', 'Elegí la herramienta:', ' Pitágoras, seno-coseno-tangente, teorema del seno o del coseno.'],
  ['text-emerald-400', 'Calculadora en DEG', ' (grados), no en radianes.'],
  ['text-amber-400', 'Resolvé', ' y verificá: ángulos que suman 180° y lado mayor frente al ángulo mayor.'],
  ['text-rose-400', 'Recién ahí', ' abrí «Ver respuesta y resolución» y compará.'],
];

const chip = 'inline-flex items-center gap-1 rounded border px-2 py-0.5 text-xs font-semibold';

export default function TrigAside() {
  const [open, setOpen] = useState(false);
  const { count, total, reset } = useProgress();
  const fitRef = useRef(null);

  // En escritorio escala el contenido para que entre en la altura de la pantalla (aside "pegado").
  useEffect(() => {
    const fit = () => {
      const el = fitRef.current;
      if (!el) return;
      el.style.zoom = 1;
      if (window.innerWidth < 1024) return;
      const avail = window.innerHeight - 36;
      const natural = el.getBoundingClientRect().height;
      el.style.zoom = natural > avail ? Math.max(0.5, avail / natural) : 1;
    };
    fit();
    const t = setTimeout(fit, 800);
    window.addEventListener('resize', fit);
    window.addEventListener('mathjax-typeset', fit);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', fit);
      window.removeEventListener('mathjax-typeset', fit);
    };
  }, [open]);

  const closeAnswers = () => document.querySelectorAll('details[id^="det_ex"]').forEach((d) => { d.open = false; });

  return (
    <aside
      id="razones-sticky"
      aria-label="Fórmulas y valores importantes"
      className="z-30 w-full shrink-0 lg:sticky lg:bottom-4 lg:order-2 lg:max-h-[calc(100vh-2rem)] lg:w-[22rem] lg:self-end lg:overflow-y-auto xl:w-[25rem] print:static print:max-h-none print:overflow-visible"
    >
      <div ref={fitRef} className="space-y-4">
        <ExpandableCard label="las seis razones trigonométricas">
          <h3 className="mb-0 border-l-4 border-indigo-600 pl-3 text-lg font-bold tracking-normal text-slate-900">Las seis razones trigonométricas</h3>
          <p className="text-sm leading-relaxed text-slate-700">
            {tex`Respecto al ángulo \(\alpha\):`}{' '}
            <span className={`${chip} border-rose-200 bg-rose-50 text-rose-600`}>Cateto opuesto</span>{' '}
            <span className={`${chip} border-indigo-200 bg-indigo-50 text-indigo-600`}>Cateto adyacente</span>{' '}
            <span className={`${chip} border-emerald-200 bg-emerald-50 text-emerald-600`}>Hipotenusa (H)</span>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200 text-center text-xs">
              <thead className="bg-slate-100 text-slate-700">
                <tr>{['Razón', 'Definición', 'Inversa', 'Definición'].map((h, i) => <th key={i} className="p-1.5">{h}</th>)}</tr>
              </thead>
              <tbody className="text-slate-800">
                {RAZONES.map(([r, a, b, inv]) => (
                  <tr key={a + b} className="border-t">
                    <td className="p-1.5 font-medium">{r}</td>
                    <td className="p-1.5"><Frac a={a} b={b} /></td>
                    <td className="p-1.5 font-medium">{inv}</td>
                    <td className="p-1.5"><Frac a={b} b={a} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-600">
            {tex`Para hallar un ángulo se usan las funciones inversas: \(\alpha = \operatorname{arcsen}(\cdot)\), \(\arccos(\cdot)\) o \(\arctan(\cdot)\).`}
          </p>
        </ExpandableCard>

        <ExpandableCard label="valores de ángulos notables">
          <h3 className="mb-0 border-l-4 border-emerald-600 pl-3 text-lg font-bold tracking-normal text-slate-900">Valores de ángulos notables</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200 text-center text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="p-2 font-medium">Ángulo</th>
                  {[tex`\operatorname{sen}`, tex`\cos`, tex`\tan`].map((f) => <th key={f} className="p-2 font-medium">{tex`\(${f}\)`}</th>)}
                </tr>
              </thead>
              <tbody className="text-slate-800">
                {NOTABLES.map(([ang, ...vals]) => (
                  <tr key={ang} className="border-t">
                    <td className="p-2 font-medium text-slate-600">{tex`\(${ang}^\circ\)`}</td>
                    {vals.map((v, i) => <td key={i} className="p-2">{tex`\(${v}\)`}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ExpandableCard>

        <div className="overflow-hidden rounded-xl border border-blue-500 bg-slate-900 text-white shadow-sm print:hidden">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="flex w-full cursor-pointer items-center justify-between bg-blue-600 px-4 py-3 text-left transition select-none hover:bg-blue-700"
          >
            <span className="flex items-center gap-2"><span className="text-base">📋</span><span className="text-sm font-bold">Método de trabajo</span></span>
            <span className="flex items-center gap-2">
              <span className="rounded-full bg-blue-900 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-200">{count}/{total}</span>
              <span className="rounded bg-blue-800 px-2 py-0.5 font-mono text-xs font-bold hover:bg-blue-900">{open ? '−' : '+'}</span>
            </span>
          </button>
          <div className={`${open ? '' : 'hidden'} space-y-3 bg-slate-900 p-4 text-xs`}>
            <p className="border-b border-slate-700 pb-2 font-medium text-slate-300">Antes de destapar la respuesta:</p>
            <ol className="list-decimal space-y-2 pl-4 text-[11px] text-slate-200">
              {METODO.map(([color, strong, rest]) => (
                <li key={strong}><strong className={color}>{strong}</strong>{rest}</li>
              ))}
            </ol>
            <div className="mt-2 flex items-center justify-between border-t border-slate-700 pt-3">
              <button type="button" onClick={closeAnswers} className="text-[11px] text-blue-300 hover:underline">Ocultar respuestas</button>
              <button type="button" onClick={reset} className="text-[11px] text-rose-400 hover:underline">Reiniciar tildes</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}