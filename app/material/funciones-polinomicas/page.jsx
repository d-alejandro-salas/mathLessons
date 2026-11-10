// app/material/funciones-polinomicas/page.jsx
import { buildMetadata } from '@/lib/seo';
import { CANONICAL, abs, whatsappUrl } from '@/lib/site';
import { LEVELS, TOTAL_EXERCISES } from '@/lib/material/polinomicas-data';
import JsonLd from '@/components/JsonLd';
import { ProgressProvider } from '@/components/material/ProgressProvider';
import MathJaxTypeset from '@/components/material/MathJaxTypeset';
import MaterialHeader from '@/components/material/MaterialHeader';
import MaterialFooter from '@/components/material/MaterialFooter';
import LevelGroup from '@/components/material/LevelGroup';
import LevelTitle from '@/components/material/LevelTitle';
import PolyExerciseCard from '@/components/material/PolyExerciseCard';

const TITLE = 'Funciones Polinómicas: Ejercicios Resueltos';
const DESCRIPTION = 'Ejercicios de funciones polinómicas: Gauss, Ruffini, Teorema del Resto, raíces, multiplicidad y gráficos aproximados.';
const PATH = CANONICAL.polinomicas;

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, type: 'article' });

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Clases de Matemática en Palermo', item: abs('/') },
    { '@type': 'ListItem', position: 2, name: 'Material: Funciones Polinómicas', item: abs(PATH) },
  ],
};

const NAV = LEVELS.map((l, i) => ({ href: `#${l.id}`, label: `Sección ${i + 1}` }));

export default function PolinomicasPage() {
  return (
    <ProgressProvider total={TOTAL_EXERCISES} prefix="math_poly_exercise_">
      <JsonLd data={breadcrumb} />
      <MathJaxTypeset />

      <div className="relative min-h-screen bg-academic-50 leading-relaxed text-slate-800">
        <MaterialHeader
          sticky={true}
          eyebrow="Álgebra y Análisis Matemático"
          title="Funciones Polinómicas: Ejercicios para resolver"
          nav={NAV}
        />

        <main className="mx-auto max-w-7xl px-6 py-10 space-y-16">
          <p className="max-w-3xl text-sm text-slate-600">
            Resolvé cada ejercicio en tu carpeta factorizando con el Teorema de Gauss o Ruffini. Las respuestas están ocultas para que te autocorrijas. ¡El progreso se guarda automáticamente en tu navegador!
          </p>

          {LEVELS.map((l) => (
            <LevelGroup
              key={l.id}
              id={l.id}
              exercises={l.exercises}
              heading={<LevelTitle badge={l.badge} tone={l.tone}>{l.title}</LevelTitle>}
            >
              {l.exercises.map(n => <PolyExerciseCard key={n} n={n} />)}
            </LevelGroup>
          ))}
        </main>

        <MaterialFooter whatsappHref={whatsappUrl('Hola! Vi el material de Funciones Polinómicas y quisiera consultar por clases.')} />
      </div>
    </ProgressProvider>
  );
}