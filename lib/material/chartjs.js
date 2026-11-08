import {
  Chart, LineController, LineElement, PointElement,
  CategoryScale, LinearScale, Legend, Tooltip,
} from 'chart.js';

// Registro único y mínimo (tree-shaking) en vez de `registerables`.
Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip);

export { Chart };

/** Muestrea fn en [min, max]. Valores fuera del dominio (NaN/±Infinity) pasan a null = hueco en la curva. */
export function sample(fn, min, max, steps) {
  const xs = Array.from({ length: steps + 1 }, (_, i) => min + (i * (max - min)) / steps);
  return { xs, labels: xs.map((x) => x.toFixed(2)), ys: xs.map((x) => { const y = fn(x); return Number.isFinite(y) ? y : null; }) };
}
