import Section from './Section';
import { FAQ as ITEMS } from '@/lib/data';

export default function FAQ() {
  return (
    <Section id="faq" kicker="Preguntas frecuentes" title="Todo lo que querés saber">
      {ITEMS.map(({ q, a }) => (
        <details key={q} className="mt-[0.8rem] rounded-[14px] border border-line bg-white px-[1.2rem] py-4">
          <summary className="cursor-pointer font-bold text-ink">{q}</summary>
          <p className="mt-[0.6rem]">{a}</p>
        </details>
      ))}
    </Section>
  );
}
