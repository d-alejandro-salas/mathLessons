// components/Services.jsx
import Section from './Section';
import { SERVICES } from '@/lib/data';

export default function Services() {
  return (
    <Section
      id="clases"
      kicker="Niveles y Materias"
      title="Matemática, Lógica y Pensamiento Científico"
      lead="Adaptamos el ritmo y los ejemplos a tu nivel y a tus objetivos: aprobar, ponerte al día o llegar con confianza a un examen."
    >
      <div className="grid-c3">
        {SERVICES.map(({ icon, title, text }) => (
          <article key={title} className="card">
            <div className="mb-[0.8rem] grid size-[46px] place-items-center rounded-[14px] bg-linear-to-br from-brand to-brand2 font-serif text-[1.3rem] font-bold text-white">
              {icon}
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
