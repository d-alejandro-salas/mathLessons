'use client';

import { useEffect, useRef } from 'react';
import { Chart, sample } from '@/lib/material/chartjs';

/**
 * Gráfico de una función f(x) con su asíntota horizontal opcional.
 * `fn` debe ser una referencia estable (módulo), no una flecha creada en cada render.
 * `enabled` permite construirlo recién cuando el <details> se abre (lazy, como el original).
 */
export default function MathChart({
  fn, min, max,
  asymptote = null, asymptoteType = 'h',
  steps = 60, label = 'f(x)', enabled = true, className = 'h-44',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const { labels, ys } = sample(fn, min, max, steps);
    const datasets = [
      { label, data: ys, borderColor: '#2563eb', borderWidth: 2, pointRadius: 0, tension: 0.2 },
    ];
    if (asymptoteType === 'h' && asymptote !== null) {
      datasets.push({
        label: `Asíntota y = ${asymptote}`,
        data: ys.map(() => asymptote),
        borderColor: '#ef4444', borderWidth: 1.5, borderDash: [5, 5], pointRadius: 0,
      });
    }

    const chartInstance = new Chart(canvasRef.current, {
      type: 'line',
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true, labels: { boxWidth: 12, font: { size: 10 } } } },
        scales: {
          x: { ticks: { maxTicksLimit: 6, font: { size: 9 } } },
          y: { ticks: { maxTicksLimit: 6, font: { size: 9 } } },
        },
      },
    });

    // Cleanup: StrictMode monta → desmonta → monta; sin destroy() Chart.js lanza "Canvas is already in use".
    return () => chartInstance.destroy();
  }, [enabled, fn, min, max, asymptote, asymptoteType, steps, label]);

  return (
    <div className={`relative mt-3 ${className}`}>
      <canvas ref={canvasRef} role="img" aria-label={`Gráfica de ${label}`} />
    </div>
  );
}
