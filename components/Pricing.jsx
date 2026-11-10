// components/Pricing.jsx
'use client';

import { useState } from 'react';
import Section from './Section';
import { PRECIOS, PROMO_FINDE, fmt } from '@/lib/data';

const { duraciones, filas, destacada } = PRECIOS;
const pct = Math.round(PROMO_FINDE.descuento * 100);
const hl = (d) => (d === destacada ? 'bg-indigo-100' : '');
const cell = 'border-b border-line px-[0.6rem] py-[0.9rem]';

export default function Pricing() {
  const [col, setCol] = useState(duraciones.indexOf(destacada));
  const [cant, setCant] = useState(1);
  const [finde, setFinde] = useState(false);

  // Valores derivados del estado: se calculan en cada render, no hace falta useEffect.
  const conPromo = PROMO_FINDE.activa && finde;
  let total = filas.slice(0, cant).reduce((s, f) => s + f.precios[col], 0);
  if (conPromo) total = Math.round((total * (1 - PROMO_FINDE.descuento)) / 100) * 100;

  return (
    <Section
      id="precios"
      alt
      kicker="Precios"
      title="Valores claros por clase"
      lead="Cuantas más clases tomás en la semana, menor es el valor de cada una. Elegí la duración que mejor se adapte a vos."
    >
      {PROMO_FINDE.activa && (
        <p className="mt-4 rounded-[14px] border border-acc bg-amber-100 px-4 py-[0.8rem] font-semibold text-amber-900">
          🎉 Promo de fin de semana: {pct}% de descuento en clases de sábado y domingo.
        </p>
      )}

      <div className="mt-8 overflow-x-auto rounded-card bg-white shadow-soft">
        <table className="w-full min-w-[420px] border-collapse text-center">
          <caption className="caption-bottom p-[0.8rem] text-[0.85rem] text-slate-500">
            Valores en pesos argentinos (ARS) por clase, según el orden de la clase dentro de la semana.
          </caption>
          <thead>
            <tr>
              <th scope="col" className={`${cell} bg-ink pl-4 text-left text-[0.95rem] text-white`}>Semanalmente</th>
              {duraciones.map((d) => (
                <th key={d} scope="col" className={`${cell} text-[0.95rem] text-white ${d === destacada ? 'bg-brand' : 'bg-ink'}`}>
                  {d} minutos
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filas.map((f) => (
              <tr key={f.etiqueta} className="[&:last-child>*]:border-b-0">
                <th scope="row" className={`${cell} pl-4 text-left text-ink`}>{f.etiqueta}</th>
                {f.precios.map((p, i) => (
                  <td key={i} className={`${cell} font-semibold tabular-nums ${hl(duraciones[i])}`}>{fmt(p)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-[1.6rem] grid gap-4 min-[700px]:grid-cols-[1fr_1fr_1.2fr] min-[700px]:items-end">
        <label className="grid gap-[0.3rem] text-[0.9rem] font-bold text-ink">
          Duración de cada clase
          <select
            value={col}
            onChange={(e) => setCol(Number(e.target.value))}
            className="min-h-12 rounded-xl border-2 border-line bg-white p-[0.8rem]"
          >
            {duraciones.map((d, i) => (
              <option key={d} value={i}>{d} minutos</option>
            ))}
          </select>
        </label>

        <label className="grid gap-[0.3rem] text-[0.9rem] font-bold text-ink">
          Clases por semana
          <select
            value={cant}
            onChange={(e) => setCant(Number(e.target.value))}
            className="min-h-12 rounded-xl border-2 border-line bg-white p-[0.8rem]"
          >
            {filas.map((_, i) => (
              <option key={i} value={i + 1}>{i + 1} {i ? 'clases' : 'clase'} por semana</option>
            ))}
          </select>
        </label>

        <div className="rounded-card bg-ink p-[1.2rem] text-center text-white" aria-live="polite">
          <small className="text-indigo-200">Total semanal</small>
          <strong className="block text-[2.2rem] leading-[1.1] text-acc">{fmt(total)}</strong>
          <small className="text-indigo-200">
            ≈ {fmt(Math.round(total / cant))} por clase{conPromo ? ' · promo fin de semana' : ''}
          </small>
        </div>

        {PROMO_FINDE.activa && (
          <label className="col-span-full flex items-center gap-[0.6rem] font-semibold text-ink">
            <input
              type="checkbox"
              checked={finde}
              onChange={(e) => setFinde(e.target.checked)}
              className="size-[22px] accent-brand"
            />
            <span>Mis clases son en fin de semana (−{pct}%)</span>
          </label>
        )}
      </div>
    </Section>
  );
}
