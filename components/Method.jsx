// components/Method.jsx
import Section from './Section';
import { STEPS } from '@/lib/data';

export default function Method() {
  return (
    <Section id="metodo" kicker="Cómo trabajamos" title="Un método simple y claro">
      <ol className="grid-c3 list-none p-0">
        {STEPS.map(({ title, text }, i) => (
          <li key={title} className="relative pl-[3.2rem]">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 grid size-[2.3rem] place-items-center rounded-full bg-acc font-extrabold text-ink"
            >
              {i + 1}
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
