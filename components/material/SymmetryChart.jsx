'use client';

import { useEffect, useRef } from 'react';
import { Chart, sample } from '@/lib/material/chartjs';

/** f, f⁻¹ y el eje de simetría y = x en un mismo gráfico. */
export default function SymmetryChart({
  f, inverse, min, max, yMin, yMax, labels: names,
  step = 0.25, enabled = true, className = 'h-64',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const steps = Math.round((max - min) / step);
    const { xs, labels, ys: fData } = sample(f, min, max, steps);
    const { ys: invData } = sample(inverse, min, max, steps); // fuera del dominio → null

    const line = (label, data, borderColor, extra = {}) => ({
      label, data, borderColor, borderWidth: 2, pointRadius: 0, ...extra,
    });

    const chartInstance = new Chart(canvasRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [
          line(names.f, fData, '#2563eb'),
          line(names.inverse, invData, '#10b981'),
          line('Eje de Simetría y = x', xs, '#94a3b8', { borderDash: [4, 4], borderWidth: 1.5 }),
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: yMin, max: yMax }, x: { ticks: { maxTicksLimit: 10 } } },
      },
    });

    return () => chartInstance.destroy();
  }, [enabled, f, inverse, min, max, yMin, yMax, names, step]);

  return (
    <div className={`relative w-full ${className}`}>
      <canvas ref={canvasRef} role="img" aria-label={`Gráfica de ${names.f} y su inversa`} />
    </div>
  );
}
