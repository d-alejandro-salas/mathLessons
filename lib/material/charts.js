// Registro de gráficos del material. Las funciones viven en un módulo (referencias ESTABLES) y se
// consultan por id desde <ExerciseChart id="exp2" />: una función no puede cruzar de un Server
// Component (page.jsx) a un Client Component como prop, y referencias estables evitan que el
// useEffect de MathChart recree el gráfico en cada render.

const log = (base, v) => Math.log(v) / Math.log(base);
const exp = (base, x) => Math.pow(base, x);

// ---- Polinómicas: curva numérica (eje X lineal) + raíces + ordenada al origen + eje y = 0 ----
// Cada ventana [min, max] deja margen alrededor de las raíces y [yMin, yMax] recorta las colas
// (que crecen como x^n) para que los ceros, rebotes y cruces se vean bien.
const poly = (label, fn, zeros, min, max, yMin, yMax) => ({
  label, fn, zeros, min, max, yMin, yMax,
  yIntercept: true, xAxisLine: true, steps: 300, className: 'h-64',
});

export const CHARTS = {
  // ---- Exponenciales (asíntota horizontal en `asymptote`) ----
  exp1:  { fn: (x) => exp(2, x), min: -3, max: 3, asymptote: 0 },
  exp2:  { fn: (x) => exp(2, x) - 8, min: -2, max: 5, asymptote: -8 },
  exp3:  { fn: (x) => exp(2, x) + 1, min: -3, max: 3, asymptote: 1 },
  exp4:  { fn: (x) => exp(3, x) - 9, min: -2, max: 4, asymptote: -9 },
  exp5:  { fn: (x) => exp(4, x) - 1, min: -2, max: 2, asymptote: -1 },
  exp6:  { fn: (x) => exp(3, x - 1) - 9, min: -1, max: 4, asymptote: -9 },
  exp7:  { fn: (x) => exp(2, x + 5) - 8, min: -7, max: 0, asymptote: -8 },
  exp8:  { fn: (x) => -exp(3, x + 2) + 5, min: -5, max: 0, asymptote: 5 },
  exp9:  { fn: (x) => -exp(2, x - 1) + 3, min: -2, max: 4, asymptote: 3 },
  exp10: { fn: (x) => -exp(4, x + 1) - 3, min: -3, max: 1, asymptote: -3 },
  exp11: { fn: (x) => exp(0.5, x - 3) - 1, min: 0, max: 6, asymptote: -1 },
  exp12: { fn: (x) => exp(0.5, x + 5) + 2, min: -8, max: 0, asymptote: 2 },
  exp13: { fn: (x) => -exp(1 / 3, x) - 4, min: -3, max: 3, asymptote: -4 },
  exp14: { fn: (x) => exp(1.5, x) - 2, min: -2, max: 4, asymptote: -2 },

  // ---- Logarítmicas (asíntota vertical: no se dibuja, igual que el original) ----
  log1: { fn: (x) => Math.log2(x), min: 0.1, max: 8, asymptoteType: 'v' },
  log2: { fn: (x) => Math.log2(x - 5) + 3, min: 5.1, max: 15, asymptoteType: 'v' },
  log3: { fn: (x) => log(3, x + 2), min: -1.9, max: 10, asymptoteType: 'v' },
  log4: { fn: (x) => log(1 / 3, x + 2), min: -1.9, max: 10, asymptoteType: 'v' },
  log5: { fn: (x) => Math.log2(5 - x), min: -5, max: 4.9, asymptoteType: 'v' },
  log6: { fn: (x) => log(0.5, 3 - x), min: -5, max: 2.9, asymptoteType: 'v' },
  log7: { fn: (x) => log(2 / 3, 4 - x) + 2, min: -5, max: 3.9, asymptoteType: 'v' },
  log8: { fn: (x) => log(4, x + 1) - 3, min: -0.9, max: 70, asymptoteType: 'v' },

  // ---- Polinómicas (mismos polinomios que lib/material/polinomicas-data.js) ----
  poly1:  poly('f(x)', (x) => -(x ** 4) + 9 * x ** 2 - 4 * x - 12, [-3, -1, 2], -4, 3, -30, 22),
  poly2:  poly('g(x)', (x) => x ** 5 - 2 * x ** 4 - 6 * x ** 3 + 4 * x ** 2 + 13 * x + 6, [-1, 2, 3], -2, 4, -22, 24),
  poly3:  poly('h(x)', (x) => x ** 5 + 7 * x ** 4 + 9 * x ** 3 - 27 * x ** 2 - 54 * x, [-3, 0, 2], -4, 3, -80, 40),
  poly4:  poly('i(x)', (x) => x ** 5 + x ** 4 - 6 * x ** 3, [-3, 0, 2], -4, 3, -20, 45),
  poly5:  poly('j(x)', (x) => 2 * x ** 3 - x ** 2 - 13 * x - 6, [-2, -0.5, 3], -3, 4, -32, 16),
  poly6:  poly('k(x)', (x) => x ** 6 + 7 * x ** 5 - 5 * x ** 4 - 75 * x ** 3, [-5, 0, 3], -6.5, 4.5, -600, 800),
  poly7:  poly('m(x)', (x) => 5 * x ** 3 - 5 * x ** 2, [0, 1], -0.8, 1.5, -7, 7),
  poly8:  poly('n(x)', (x) => x ** 3 - 3 * x ** 2 + 4, [-1, 2], -2, 3, -18, 8),
  poly9:  poly('o(x)', (x) => x ** 4 + 4 * x ** 3 - 4 * x ** 2 - 16 * x, [-4, -2, 0, 2], -5, 3, -20, 16),
  poly10: poly('p(x)', (x) => 2 * x ** 3 + 4 * x ** 2 - 6 * x, [-3, 0, 1], -4, 2, -10, 20),
  poly11: poly('q(x)', (x) => x ** 4 - 4 * x ** 2, [-2, 0, 2], -3, 3, -6, 12),
  poly12: poly('f(x)', (x) => -(x ** 4) - x ** 3 + 57 * x ** 2 + 5 * x - 700, [-7, -4, 5], -9, 7, -800, 300),
  poly13: poly('g(x)', (x) => 3 * x ** 2 * (x + 5) ** 4 * (x - 3), [-5, 0, 3], -6.5, 3.6, -36000, 15000),

  // ---- Inversas: f, f⁻¹ y la recta y = x ----
  inv1: {
    kind: 'symmetry',
    f: (x) => exp(2, x - 3) - 5,
    inverse: (x) => Math.log2(x + 5) + 3,
    min: -4.8, max: 8, yMin: -6, yMax: 10,
    labels: { f: 'f(x) = 2^(x-3) - 5', inverse: 'f⁻¹(x) = log₂(x+5) + 3' },
  },
  inv2: {
    kind: 'symmetry',
    f: (x) => exp(1 / 3, x + 2) - 4,
    inverse: (x) => log(1 / 3, x + 4) - 2,
    min: -3.9, max: 6, yMin: -6, yMax: 6,
    labels: { f: 'f(x) = (1/3)^(x+2) - 4', inverse: 'f⁻¹(x) = log_{1/3}(x+4) - 2' },
  },
};
