import SectionHeading from './SectionHeading';

const tex = String.raw;
const card = 'min-w-0 flex-[1_1_18rem] space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm';
const h3 = 'mb-0 border-l-4 pl-3 text-lg font-bold tracking-normal text-slate-900';

const NOTABLES = [
  ['30°', tex`\(\tfrac{1}{2}\)`, tex`\(\tfrac{\sqrt{3}}{2}\)`, tex`\(\tfrac{\sqrt{3}}{3}\)`],
  ['45°', tex`\(\tfrac{\sqrt{2}}{2}\)`, tex`\(\tfrac{\sqrt{2}}{2}\)`, '1'],
  ['60°', tex`\(\tfrac{\sqrt{3}}{2}\)`, tex`\(\tfrac{1}{2}\)`, tex`\(\sqrt{3}\)`],
];

export default function TrigTheory() {
  return (
    <section id="teoria" className="scroll-mt-8 space-y-6">
      <SectionHeading badge="Módulo 0">Fundamentos teóricos y fórmulas</SectionHeading>

      <div className="flex flex-wrap gap-6">
        <div className={card}>
          <h3 className={`${h3} border-blue-600`}>Propiedades de todo triángulo</h3>
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
            <li><strong>Suma de ángulos interiores:</strong> {tex`\(\alpha + \beta + \gamma = 180^\circ\)`}.</li>
            <li><strong>Lado y ángulo opuesto:</strong> al mayor ángulo se opone el mayor lado, al menor ángulo el menor lado, y a ángulos iguales, lados iguales.</li>
            <li><strong>Pitágoras</strong> (solo triángulos rectángulos): {tex`\(\text{opuesto}^2 + \text{adyacente}^2 = H^2\)`}. La hipotenusa H es el lado opuesto al ángulo recto.</li>
          </ul>
          <div className="rounded border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
            <strong>Antes de calcular:</strong> poné la calculadora en modo <strong>DEG</strong> (grados). Para pasar de decimal a grados, minutos y segundos usá la tecla <strong>° ′ ″</strong>.
          </div>
        </div>

        <div className={card}>
          <h3 className={`${h3} border-emerald-600`}>Valores de ángulos notables</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200 text-center text-sm">
              <thead className="bg-slate-100 text-xs text-slate-700">
                <tr>{['Ángulo', 'sen', 'cos', 'tan'].map((c) => <th key={c} className="p-2">{c}</th>)}</tr>
              </thead>
              <tbody className="text-slate-800">
                {NOTABLES.map(([ang, ...vals]) => (
                  <tr key={ang} className="border-t">
                    <td className="p-2">{ang}</td>
                    {vals.map((v, i) => <td key={i}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={card}>
          <h3 className={`${h3} border-rose-600`}>Triángulos oblicuángulos</h3>
          <div className="space-y-2 rounded bg-slate-50 p-3 text-center text-sm text-indigo-800">
            <div><strong>Teorema del seno</strong><br />{tex`\(\dfrac{a}{\operatorname{sen}A} = \dfrac{b}{\operatorname{sen}B} = \dfrac{c}{\operatorname{sen}C}\)`}</div>
            <div><strong>Teorema del coseno</strong><br />{tex`\(a^2 = b^2 + c^2 - 2bc\cos A\)`}</div>
          </div>
          <ul className="list-disc space-y-1 pl-5 text-xs text-slate-700">
            <li><strong>Seno:</strong> se conoce un lado y su ángulo opuesto (casos LAA, ALA y LLA).</li>
            <li><strong>Coseno:</strong> se conocen dos lados y el ángulo comprendido (LAL) o los tres lados (LLL).</li>
            <li>En el caso LLA con ángulo agudo puede haber <strong>dos soluciones</strong>.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
