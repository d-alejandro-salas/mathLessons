// components/Contact.jsx
import Section from './Section';
import { EMAIL, PHONE_LABEL, WA_DEFAULT_TEXT, whatsappUrl } from '@/lib/site';

export default function Contact() {
  return (
    <Section id="contacto">
      <div className="rounded-[28px] bg-[linear-gradient(140deg,#312e81,#4f46e5)] px-[1.4rem] py-[2.4rem] text-center text-indigo-100 min-[700px]:p-14">
        <h2 className="text-white">Pedí tu primera clase</h2>
        <p className="lead mx-auto">
          Contame qué materia, nivel y fecha de examen tenés y te respondo con disponibilidad horaria.
        </p>
        <a className="btn btn-wa mt-[1.2rem]" href={whatsappUrl(WA_DEFAULT_TEXT)} target="_blank" rel="noopener">
          Escribime por WhatsApp · {PHONE_LABEL}
        </a>
        <p className="mt-6 text-base text-indigo-200">
          O contactame por mail:{' '}
          <a href={`mailto:${EMAIL}`} className="font-semibold text-white underline">{EMAIL}</a>
        </p>
      </div>
    </Section>
  );
}
