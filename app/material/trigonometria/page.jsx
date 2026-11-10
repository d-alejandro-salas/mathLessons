// app/material/trigonometria/page.jsx
import { buildMetadata } from '@/lib/seo';
import { CANONICAL, abs, whatsappUrl } from '@/lib/site';
import { EXTRA_INTRO, EXTRA_LEVELS, LEVELS, TOTAL_EXERCISES } from '@/lib/material/trigonometria-data';
import JsonLd from '@/components/JsonLd';
import { ProgressProvider } from '@/components/material/ProgressProvider';
import MathJaxTypeset from '@/components/material/MathJaxTypeset';
import MaterialHeader from '@/components/material/MaterialHeader';
import MaterialFooter from '@/components/material/MaterialFooter';
import TrigAside from '@/components/material/TrigAside';
import TrigTheory from '@/components/material/TrigTheory';
import LevelGroup from '@/components/material/LevelGroup';
import LevelTitle from '@/components/material/LevelTitle';
import TrigExerciseCard from '@/components/material/TrigExerciseCard';

const TITLE = 'Trigonometría: ejercicios con respuestas para autocorregirte';
const DESCRIPTION =
  '38 ejercicios de trigonometría con respuestas ocultas: razones trigonométricas, triángulos rectángulos, problemas de aplicación, teorema del seno y del coseno.';
const PATH = CANONICAL.trigonometria;

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, type: 'article' });

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Clases de Matemática en Palermo', item: abs('/') },
    { '@type': 'ListItem', position: 2, name: 'Material: trigonometría', item: abs(PATH) },
  ],
};

const learningResource = {
  '@context': 'https://schema.org',
  '@type': 'LearningResource',
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: 'es-AR',
  educationalLevel: 'Secundaria y CBC',
  teaches: 'Trigonometría: razones trigonométricas, resolución de triángulos, teorema del seno y del coseno',
  isAccessibleForFree: true,
  url: abs(PATH),
};

const NAV = [
  { href: '#teoria', label: 'Teoría' },
  ...LEVELS.map((l, i) => ({ href: `#${l.id}`, label: `Nivel ${i + 1}` })),
  { href: '#extra', label: 'Extra' },
];

const Cards = ({ list }) => list.map((n) => <TrigExerciseCard key={n} n={n} />);

export default function TrigonometriaPage() {
  return (
    // Mismo prefijo de localStorage que la versión original: el progreso guardado se conserva.
    <ProgressProvider total={TOTAL_EXERCISES} prefix="math_trig_exercise_">
      <JsonLd data={breadcrumb} />
      <JsonLd data={learningResource} />
      <MathJaxTypeset />

      <div className="relative min-h-screen bg-academic-50 leading-relaxed text-slate-800">
        <MaterialHeader
          sticky={false}
          eyebrow="Trigonometría • Unidad 9"
          eyebrowClass=""
          title="Trigonometría: ejercicios para resolver y autocorregir"
          nav={NAV}
        />

        <main className="mx-auto max-w-7xl px-6 py-10">
          <p className="mb-10 max-w-3xl text-sm text-slate-600">
            Resolvé cada ejercicio en tu carpeta. Las respuestas están ocultas: cuando termines, abrí <strong>«Ver respuesta y resolución»</strong> para comprobar tu resultado y revisar el procedimiento. Marcá como <em>Resuelto</em> los que ya te salieron; el progreso queda guardado en tu navegador.
          </p>

          <div className="flex flex-col items-start gap-2 lg:flex-row">
            <TrigAside />

            <div className="min-w-0 flex-1 space-y-16 lg:order-1">
              <TrigTheory />

              {LEVELS.map((l) => (
                <LevelGroup
                  key={l.id}
                  id={l.id}
                  exercises={l.exercises}
                  heading={<LevelTitle badge={l.badge} tone={l.tone}>{l.title}</LevelTitle>}
                >
                  <Cards list={l.exercises} />
                </LevelGroup>
              ))}

              <section id="extra" className="scroll-mt-8 space-y-8">
                <div className="border-b border-slate-300 pb-2">
                  <h2 className="mb-0 flex flex-wrap items-center gap-3 font-serif text-2xl font-bold tracking-normal text-academic-900">
                    <span className="rounded bg-slate-800 px-2.5 py-1 font-sans text-xs text-white">Sección VI</span>
                    Ejercicios extra para seguir practicando
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">{EXTRA_INTRO}</p>
                </div>

                {EXTRA_LEVELS.map((l) => (
                  <LevelGroup
                    key={l.id}
                    as="div"
                    variant="sub"
                    id={l.id}
                    exercises={l.exercises}
                    heading={<LevelTitle tone={l.tone}>{l.title}</LevelTitle>}
                  >
                    <Cards list={l.exercises} />
                  </LevelGroup>
                ))}
              </section>
            </div>
          </div>
        </main>

        <MaterialFooter
          whatsappHref={whatsappUrl('Hola! Vi el material de trigonometría y quisiera consultar por clases.')}
          label="Consultar por clases en WhatsApp"
          buttonClass="rounded-lg bg-emerald-600 px-4 py-2 font-bold hover:bg-emerald-500"
        />
      </div>
    </ProgressProvider>
  );
}
