import Section from './Section';
import { ZONES } from '@/lib/data';

export default function Zones() {
  return (
    <Section
      id="zonas"
      alt
      kicker="Zona y Modalidad"
      title="Clases a domicilio en Palermo y alrededores"
      lead="Voy a domicilio en todo el radio de Palermo (barrios aledaños a consultar) para brindarle comodidad y tranquilidad a las familias. También podés tomar la clase en mi domicilio en Palermo o por videollamada."
    >
      <ul className="mt-[1.4rem] flex list-none flex-wrap gap-2 p-0">
        {ZONES.map((z) => (
          <li key={z} className="rounded-full border border-line bg-white px-[0.95rem] py-[0.4rem] text-[0.92rem] font-semibold">
            {z}
          </li>
        ))}
      </ul>
    </Section>
  );
}
