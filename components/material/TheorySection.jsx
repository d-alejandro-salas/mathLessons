import SectionHeading from './SectionHeading';

const tex = String.raw;

const card = 'space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm';

export default function TheorySection() {
  return (
    <section id="teoria" className="space-y-6">
      <SectionHeading badge="Módulo 0">Fundamentos Teóricos y Propiedades Operatorias</SectionHeading>

      <div className="grid gap-6 md:grid-cols-2">
        <div className={card}>
          <h3 className="mb-0 border-l-4 border-blue-600 pl-3 text-lg font-bold text-slate-900">Función Exponencial</h3>
          <p className="text-sm text-slate-600">Estructura general con corrimientos horizontales y verticales:</p>
          <div className="text-md rounded bg-slate-50 p-3 text-center font-mono font-bold text-blue-700">
            {tex`\( f(x) = A \cdot b^{x - h} + k \quad (b > 0, \, b \neq 1) \)`}
          </div>
          <ul className="list-disc space-y-1.5 pl-5 text-xs text-slate-700">
            <li><strong>Dominio:</strong> {tex`Siempre \(\text{Dom}(f) = \mathbb{R}\).`}</li>
            <li><strong>Asíntota Horizontal (AH):</strong> {tex`Recta \(y = k\).`}</li>
            <li><strong>Imagen:</strong> {tex`Si \(A > 0 \implies \text{Im}(f) = (k, +\infty)\); si \(A < 0 \implies \text{Im}(f) = (-\infty, k)\).`}</li>
            <li><strong>Crecimiento:</strong> {tex`Creciente si (\(b > 1\) y \(A > 0\)) o (\(0 < b < 1\) y \(A < 0\)).`}</li>
          </ul>
        </div>

        <div className={card}>
          <h3 className="mb-0 border-l-4 border-indigo-600 pl-3 text-lg font-bold text-slate-900">Definición y Propiedades de Logaritmos</h3>
          <div className="rounded bg-slate-50 p-2.5 text-center font-mono text-sm text-indigo-800">
            {tex`\( \log_b(a) = c \iff b^c = a \quad (a > 0, \, b > 0, \, b \neq 1) \)`}
          </div>
          <div className="grid grid-cols-2 gap-2 font-mono text-xs text-slate-700">
            {[
              tex`1. \(\log_a(a) = 1; \log_a(1) = 0\)`,
              tex`2. \(\log_a(u \cdot v) = \log_a u + \log_a v\)`,
              tex`3. \(\log_a(u/v) = \log_a u - \log_a v\)`,
              tex`4. \(\log_a(u^n) = n \cdot \log_a u\)`,
            ].map((p) => <span key={p} className="rounded bg-slate-50 p-1.5">{p}</span>)}
            <span className="col-span-2 rounded bg-slate-50 p-1.5">
              {tex`5. Cambio de base: \(\log_b a = \frac{\log a}{\log b} = \frac{\ln a}{\ln b}\)`}
            </span>
          </div>
          <p className="text-xs text-slate-600">
            <strong>Función Logarítmica:</strong> {tex`Presenta Asíntota Vertical en la frontera de su argumento (\(x - h = 0 \implies x = h\)).`}
          </p>
        </div>
      </div>
    </section>
  );
}
