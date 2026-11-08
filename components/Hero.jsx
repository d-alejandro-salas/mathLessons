import { WA_DEFAULT_TEXT, whatsappUrl } from '@/lib/site';

const symbol = 'pointer-events-none absolute font-serif leading-none font-bold text-white/[0.07] select-none';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(140deg,#312e81,#4f46e5_55%,#7c3aed)] pt-14 pb-16 text-indigo-100 min-[1000px]:py-24">
      <span className={`${symbol} top-4 right-[-0.5rem] text-[6rem]`} aria-hidden="true">∑</span>
      <span className={`${symbol} right-[30%] bottom-[-1rem] text-[8rem]`} aria-hidden="true">∫</span>
      <span className={`${symbol} top-[35%] left-[60%] text-[4rem]`} aria-hidden="true">π</span>

      <div className="ml-[max(1.2rem,calc((100%_-_1100px)/2))] w-[min(1100px,100%_-_2.4rem)] min-[1000px]:max-w-[900px]">
        <h1 className="text-white">
          Clases de <em className="text-acc not-italic">Matemática</em> en Palermo
        </h1>
        <p className="lead mt-4 mb-[1.6rem] text-indigo-100">
          Profesor particular para que entiendas, no que memorices. Secundaria, CBC y universidad. A domicilio en Palermo, en mi estudio u online.
        </p>
        <div className="flex flex-col gap-[0.8rem] min-[700px]:flex-row">
          <a className="btn btn-wa" href={whatsappUrl(WA_DEFAULT_TEXT)} target="_blank" rel="noopener">
            Escribime por WhatsApp
          </a>
          <a className="btn btn-ghost" href="#precios">Ver precios</a>
        </div>
        <ul className="mt-[1.6rem] flex list-none flex-wrap gap-2 p-0">
          {['📍 A domicilio u online', '🏡 Palermo y alrededores', '🎯 Todos los niveles'].map((c) => (
            <li key={c} className="rounded-full bg-white/[0.14] px-[0.9rem] py-[0.35rem] text-[0.88rem] font-semibold">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
