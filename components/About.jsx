import Section from './Section';
import { GITHUB, LINKEDIN, asset } from '@/lib/site';

const photo = 'mx-auto block w-full max-w-[320px] rounded-card shadow-soft';
const social = 'btn min-h-0 px-[1.2rem] py-[0.6rem] text-[0.9rem] text-white';

export default function About() {
  return (
    <Section id="sobre-mi" alt kicker="Docente" title="Sobre mí: Daniel Alejandro Salas">
      <div className="grid-c2 items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          {/* <img> a propósito: con export estático no hay optimizador de next/image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset('/assets/1.jpg')} alt="Profesor Daniel Alejandro Salas" className={photo} loading="lazy" decoding="async" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset('/assets/2.jpg')} alt="Daniel Alejandro Salas en clase docente" className={photo} loading="lazy" decoding="async" />
        </div>
        <div>
          <p className="lead mb-4">
            <b>Licenciado en Lingüística Computacional (UBA)</b>, docente recibido con más de 10 años de trayectoria y profesor en la <b>ET N° 30 Norberto Piñero</b>.
          </p>
          <p className="mb-4">
            Desde hace 15 años me dedico a dar clases particulares de Matemática, Lógica e Introducción al Pensamiento Científico (IPC). Mi objetivo principal es <b>desmitificar la dificultad de la matemática</b> y lograr que mis alumnos aprendan a pensar con autonomía.
          </p>
          <p className="mb-[1.4rem]">
            Además del contenido específico, transmito métodos de estudio integrales. Entiendo que la semana escolar suele ser caótica, por eso <b>mi disponibilidad está enfocada en fines de semana y feriados</b>: el momento ideal para que los estudiantes repasen sin prisas y las familias tengan la tranquilidad de una preparación intensiva antes de los exámenes.
          </p>
          <div className="flex flex-wrap gap-[0.8rem]">
            <a className={`${social} bg-[#0a66c2]`} href={LINKEDIN} target="_blank" rel="noopener">Perfil de LinkedIn</a>
            <a className={`${social} bg-[#24292e]`} href={GITHUB} target="_blank" rel="noopener">Perfil de GitHub</a>
          </div>
        </div>
      </div>
    </Section>
  );
}
