// components/MaterialList.jsx
import Link from 'next/link';
import Section from './Section';
import { MATERIAL } from '@/lib/data';
import { asset } from '@/lib/site';

export default function MaterialList() {
  if (!MATERIAL.length) return null;

  return (
    <Section
      id="material"
      kicker="Recursos"
      title="Material didáctico propio"
      lead="Guías y ejercicios actualizados que uso en mis clases. Descargalos gratis."
    >
      <div className="grid-c3">
        {MATERIAL.map((m) => (
          <article key={m.url} className="card flex flex-col h-full">
            <span className="kicker">{m.nivel}</span>
            <h3>{m.titulo}</h3>
            <p>{m.descripcion}</p>
            {m.descargable ? (
              <a className="btn btn-wa mt-4" href={asset(m.url)} download>Descargar {m.tipo}</a>
            ) : (<Link className="btn btn-wa mt-auto self-center" href={m.url}>
  Ver {m.tipo}
</Link>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
