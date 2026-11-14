// components/material/MathChart.jsx
'use client';

import { useEffect, useRef } from 'react';
import { Chart, sample } from '@/lib/material/chartjs';

/**
 * Gráfico de una función f(x).
 *  - Modo clásico (exp/log): eje X categórico + asíntota horizontal opcional.
 *  - Modo numérico (si se pasa `zeros`, p. ej. polinómicas): eje X lineal real, con marcas en las raíces,
 *    en la ordenada al origen (`yIntercept`) y la recta y = 0 punteada (`xAxisLine`).
 * `yMin` / `yMax` fijan la ventana vertical (recortan las colas que crecen como x^n).
 * `fn` y `zeros` deben ser referencias estables (módulo), no valores creados en cada render.
 * `enabled` permite construirlo recién cuando el <details> se abre (lazy).
 */
export default function MathChart({
  fn, min, max, yMin, yMax,
  asymptote = null, asymptoteType = 'h',
  zeros = null, yIntercept = false, xAxisLine = false,
  steps = 60, tension, label = 'f(x)', enabled = true, className = 'h-44',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const numeric = Array.isArray(zeros);
    const { xs, labels, ys } = sample(fn, min, max, steps);
    const hLine = (y) => (numeric ? [{ x: min, y }, { x: max, y }] : ys.map(() => y));
    const marker = (name, points, color, pointStyle = 'circle') => ({
      label: name, data: points, showLine: false, pointRadius: 5, pointHoverRadius: 7,
      pointStyle, pointBackgroundColor: color, borderColor: color,
    });

    const datasets = [
      {
        label,
        data: numeric ? xs.map((x, i) => ({ x, y: ys[i] })) : ys,
        borderColor: '#2563eb', borderWidth: 2, pointRadius: 0,
        tension: tension ?? (numeric ? 0 : 0.2),
      },
    ];

    if (asymptoteType === 'h' && asymptote !== null) {
      datasets.push({
        label: `Asíntota y = ${asymptote}`,
        data: hLine(asymptote),
        borderColor: '#ef4444', borderWidth: 1.5, borderDash: [5, 5], pointRadius: 0,
      });
    }
    if (xAxisLine) {
      datasets.push({
        label: 'Eje X (y = 0)', data: hLine(0),
        borderColor: '#64748b', borderWidth: 1.2, borderDash: [4, 4], pointRadius: 0,
      });
    }
    if (numeric && zeros.length) {
      datasets.push(marker('Raíces', zeros.map((x) => ({ x, y: 0 })), '#ef4444'));
    }
    if (numeric && yIntercept && min <= 0 && max >= 0 && !zeros.includes(0)) {
      datasets.push(marker('Ordenada al origen', [{ x: 0, y: fn(0) }], '#10b981', 'rectRot'));
    }

    const tick = (n) => ({ maxTicksLimit: n, font: { size: 9 } });
    const chartInstance = new Chart(canvasRef.current, {
      type: 'line',
      data: { labels: numeric ? undefined : labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true, labels: { boxWidth: 12, font: { size: 10 } } } },
        scales: {
          x: numeric ? { type: 'linear', min, max, ticks: tick(9) } : { ticks: tick(6) },
          y: { min: yMin, max: yMax, ticks: tick(6) }, // undefined = escala automática (gráficos existentes)
        },
      },
    });

    // Cleanup: StrictMode monta → desmonta → monta; sin destroy() Chart.js lanza "Canvas is already in use".
    return () => chartInstance.destroy();
  }, [enabled, fn, min, max, yMin, yMax, asymptote, asymptoteType, zeros, yIntercept, xAxisLine, steps, tension, label]);

  return (
    <div className={`relative mt-3 ${className}`}>
      <canvas ref={canvasRef} role="img" aria-label={`Gráfica de ${label}`} />
    </div>
  );
}
