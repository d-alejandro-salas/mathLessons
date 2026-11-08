import Link from 'next/link';
import { CANONICAL } from '@/lib/site';

export const metadata = {
  title: 'Página no encontrada | Matemática en Palermo',
  robots: { index: false, follow: true },
};

// Con `output: 'export'` Next genera out/404.html a partir de este archivo.
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-page p-4 text-center text-[1.1rem] leading-relaxed text-txt">
      <div>
        <h1 className="mb-3 text-ink">Esta página no existe</h1>
        <p>
          Quizás te interese{' '}
          <Link href="/" className="font-bold text-brand underline">volver al inicio</Link> o ver el{' '}
          <Link href={CANONICAL.funciones.replace('.html', '')} className="font-bold text-brand underline">
            material de funciones exponenciales y logarítmicas
          </Link>.
        </p>
      </div>
    </main>
  );
}
