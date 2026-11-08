import { buildMetadata } from '@/lib/seo';
import { CANONICAL, abs, whatsappUrl } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import { ProgressProvider } from '@/components/material/ProgressProvider';
import MathJaxTypeset from '@/components/material/MathJaxTypeset';
import ConsignaAside from '@/components/material/ConsignaAside';
import MaterialHeader from '@/components/material/MaterialHeader';
import MaterialFooter from '@/components/material/MaterialFooter';
import SectionHeading from '@/components/material/SectionHeading';
import TheorySection from '@/components/material/TheorySection';
import ExerciseCard from '@/components/material/ExerciseCard';
import ExerciseChart from '@/components/material/ExerciseChart';
import { Row, SignSets, InverseAnalysis } from '@/components/material/Analysis';

const tex = String.raw;

const TITLE = 'Funciones exponenciales y logarítmicas: ejercicios resueltos';
const DESCRIPTION =
  '26 ejercicios resueltos paso a paso de funciones exponenciales, logarítmicas e inversas: dominio, imagen, asíntotas, signos y gráficos.';
const PATH = CANONICAL.funciones; // canonical actual (.html): no se pierde lo ya indexado

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, type: 'article' });

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Clases de Matemática en Palermo', item: abs('/') },
    { '@type': 'ListItem', position: 2, name: 'Material: funciones exponenciales y logarítmicas', item: abs(PATH) },
  ],
};

const learningResource = {
  '@context': 'https://schema.org',
  '@type': 'LearningResource',
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: 'es-AR',
  educationalLevel: 'CBC y universidad',
  teaches: 'Funciones exponenciales, logarítmicas e inversas',
  isAccessibleForFree: true,
  url: abs(PATH),
};

const NAV = [
  { href: '#teoria', label: 'Teoría' },
  { href: '#exponenciales', label: 'Exponenciales' },
  { href: '#logaritmicas', label: 'Logarítmicas' },
  { href: '#inversas', label: 'Inversas' },
  { href: '#propuestos', label: 'Extra' },
];

const TOTAL_EXERCISES = 26;
const CONSIGNA_EXP = tex`Hallar: \(\text{Dom}, \text{Im}, \text{AH}, f(0), C^0, C^+, C^-, C\uparrow, C\downarrow\) y gráfica.`;
const CONSIGNA_LOG = tex`Hallar: \(\text{Dom}, \text{Im}, \text{AV}, f(0), C^0, C^+, C^-, C\uparrow, C\downarrow\) y gráfica.`;
const GRID = 'm-0 grid list-none gap-6 p-0 md:grid-cols-2 lg:grid-cols-3';

export default function FuncionesExpLogPage() {
  return (
    <ProgressProvider total={TOTAL_EXERCISES}>
      <JsonLd data={breadcrumb} />
      <JsonLd data={learningResource} />
      <MathJaxTypeset />

      <div className="relative min-h-screen bg-academic-50 leading-relaxed text-slate-800">
        <ConsignaAside />
        <MaterialHeader eyebrow="Análisis Matemático • Unidad III" title="Funciones exponenciales, logarítmicas e inversas: ejercicios resueltos" nav={NAV} />

        <main className="mx-auto max-w-7xl space-y-16 px-6 py-10">
          <TheorySection />

          {/* ───────── SECCIÓN I · EXPONENCIALES (#1 a #14) ───────── */}
          <section id="exponenciales" className="space-y-6">
            <SectionHeading badge="Sección I" tone="blue">Funciones Exponenciales (Páginas 1 a 8)</SectionHeading>
            <ol className={GRID}>
              <ExerciseCard
                id="ex1" n={1} tone="blue" tag="Pág. 1"
                title={tex`\( f(x) = 2^x \)`}
                consigna={CONSIGNA_EXP}
                description="Función exponencial elemental con asíntota en el eje de abscisas."
              >
                <Row label="Dominio">{tex`\(\mathbb{R}\)`}</Row>
                <Row label="Imagen">{tex`\((0, +\infty)\)`}</Row>
                <Row label="Asíntota Horizontal">{tex`\(y = 0\)`}</Row>
                <Row label="Ordenada al origen">{tex`\(f(0) = 2^0 = 1\)`}</Row>
                <Row label="Intersección con X">{tex`\(2^x = 0 \implies\) No tiene solución (\(\emptyset\))`}</Row>
                <SignSets items={[tex`\(C^0 = \emptyset\)`, tex`\(C^+ = \mathbb{R}\)`, tex`\(C^- = \emptyset\)`, tex`\(C\uparrow = \mathbb{R}\)`]} />
                <ExerciseChart id="exp1" />
              </ExerciseCard>

              {/* ▸ Ejercicios #2 a #14: copiar el bloque anterior cambiando id, n, tag, textos y chartId (ver lib/material/charts.js) */}
            </ol>
          </section>

          {/* ───────── SECCIÓN II · LOGARÍTMICAS (#15 a #22) ───────── */}
          <section id="logaritmicas" className="space-y-6">
            <SectionHeading badge="Sección II" tone="indigo">Funciones Logarítmicas (Páginas 9 a 13)</SectionHeading>
            <ol start={15} className={GRID}>
              <ExerciseCard
                id="ex15" n={15} tone="indigo" tag="Pág. 9/10"
                title={tex`\( f(x) = \log_2(x) \)`}
                consigna={CONSIGNA_LOG}
                description="Función logarítmica canónica con asíntota vertical en el eje Y."
              >
                <Row label="Dominio">{tex`\(x > 0 \implies (0, +\infty)\)`}</Row>
                <Row label="Imagen">{tex`\(\mathbb{R}\)`}</Row>
                <Row label="Asíntota Vertical">{tex`\(x = 0\)`}</Row>
                <Row label="Ordenada al origen">{tex`No existe (\(0 \notin \text{Dom}\))`}</Row>
                <Row label="Cero">{tex`\(\log_2 x = 0 \implies x = 2^0 = 1\)`}</Row>
                <SignSets items={[tex`\(C^0 = \{1\}\)`, tex`\(C^+ = (1, +\infty)\)`, tex`\(C^- = (0, 1)\)`, tex`\(C\uparrow = (0, +\infty)\)`]} />
                <ExerciseChart id="log1" />
              </ExerciseCard>

              {/* ▸ Ejercicios #16 a #22 */}
            </ol>
          </section>

          {/* ───────── SECCIÓN III · INVERSAS (#23 y #24) ───────── */}
          <section id="inversas" className="space-y-6">
            <SectionHeading badge="Sección III" tone="emerald">
              {tex`Inversión Analítica y Simetría (\(f \leftrightarrow f^{-1}\)) (Páginas 14 a 16)`}
            </SectionHeading>
            <ol start={23} className="m-0 list-none space-y-8 p-0">
              <ExerciseCard
                id="ex23" n={23} tone="emerald" variant="wide"
                tag="Caso de Estudio 1 (Páginas 14 y 15)"
                title={tex`\( f(x) = 2^{x-3} - 5 \iff f^{-1}(x) = \log_2(x+5) + 3 \)`}
              >
                <InverseAnalysis
                  direct={{
                    title: tex`Función Directa: \(f(x) = 2^{x-3} - 5\)`,
                    rows: [
                      ['Dominio', tex`\(\mathbb{R}\)`],
                      ['Imagen', tex`\((-5, +\infty)\)`],
                      ['Asíntota Horizontal', tex`\(y = -5\)`],
                      ['Intersección con Eje Y', tex`\((0; \, -4{,}875)\)`],
                      ['Intersección con Eje X (Cero)', tex`\((5{,}32; \, 0)\)`],
                    ],
                  }}
                  inverse={{
                    title: tex`Función Inversa: \(f^{-1}(x) = \log_2(x+5) + 3\)`,
                    rows: [
                      ['Dominio', tex`\((-5, +\infty)\)`, '= Imagen de f'],
                      ['Imagen', tex`\(\mathbb{R}\)`, '= Dominio de f'],
                      ['Asíntota Vertical', tex`\(x = -5\)`, '= AH reflejada'],
                      ['Intersección con Eje Y', tex`\((0; \, 5{,}32)\)`, '= Cero reflejado'],
                      ['Intersección con Eje X (Cero)', tex`\((-4{,}875; \, 0)\)`, '= Ord. origen reflejada'],
                    ],
                  }}
                  steps={[
                    tex`Escribir con variables intercambiadas: \( x = 2^{y-3} - 5 \)`,
                    tex`Aislar término exponencial: \( x + 5 = 2^{y-3} \)`,
                    tex`Aplicar logaritmo en base 2: \( \log_2(x+5) = y - 3 \)`,
                    tex`Despeje de y: \( y = \log_2(x+5) + 3 \implies f^{-1}(x) = \log_2(x+5) + 3 \)`,
                  ]}
                  chartId="inv1"
                  chartCaption={tex`Gráfica Dual y Simetría axial respecto a la recta identidad \(y = x\):`}
                />
              </ExerciseCard>

              {/* ▸ Ejercicio #24 (chartId="inv2") */}
            </ol>
          </section>

          {/* ───────── SECCIÓN IV · EXTRA (#25 y #26) ───────── */}
          <section id="propuestos" className="space-y-6">
            <SectionHeading badge="Sección IV" tone="slate">Consolidación Práctica y Ecuaciones</SectionHeading>
            <ol start={25} className="m-0 grid list-none gap-6 p-0 md:grid-cols-2">
              {/* ▸ Ejercicios #25 y #26 (tone="slate"; no tienen gráfico) */}
            </ol>
          </section>
        </main>

        <MaterialFooter
          whatsappHref={whatsappUrl('Hola! Vi el material de funciones exponenciales y logarítmicas y quisiera consultar por clases.')}
        />
      </div>
    </ProgressProvider>
  );
}
