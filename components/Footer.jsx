// components/Footer.jsx
import Link from 'next/link';
import { FaChevronUp, FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import { EMAIL, GITHUB, LINKEDIN, MATERIAL_LINKS, PHONE_LABEL, WA_DEFAULT_TEXT, whatsappUrl } from '@/lib/site';

const SOCIALS = [
  { label: 'WhatsApp', href: whatsappUrl(WA_DEFAULT_TEXT), Icon: FaWhatsapp, hover: 'hover:bg-wa' },
  { label: 'Email', href: `mailto:${EMAIL}`, Icon: FaEnvelope, hover: 'hover:bg-brand' },
  { label: 'LinkedIn', href: LINKEDIN, Icon: FaLinkedinIn, hover: 'hover:bg-[#0a66c2]' },
  { label: 'GitHub', href: GITHUB, Icon: FaGithub, hover: 'hover:bg-[#24292e]' },
];

const STACK = [
  { name: 'Next.js', href: 'https://nextjs.org', Icon: SiNextdotjs },
  { name: 'React', href: 'https://react.dev', Icon: SiReact },
  { name: 'Tailwind', href: 'https://tailwindcss.com', Icon: SiTailwindcss },
];

const ZONAS = ['Palermo', 'Recoleta', 'Belgrano', 'Villa Crespo', 'Colegiales', 'Online'];

const title = 'mb-4 text-[0.95rem] font-semibold tracking-[0.14em] text-white uppercase';

export default function Footer() {
  const year = new Date().getFullYear(); // se calcula en el build

  return (
    <footer className="bg-linear-to-br from-ink via-indigo-950 to-indigo-900 pt-14 pb-[5.5rem] text-indigo-100">
      <div className="wrap">
        <div className="grid gap-10 min-[700px]:grid-cols-[1.3fr_1fr_1fr]">
          {/* Contacto */}
          <div>
            <h3 className={title}>Contacto</h3>
            <div className="mb-5 flex gap-3">
              {SOCIALS.map(({ label, href, Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener' })}
                  className={`grid size-11 place-items-center rounded-full bg-white/10 text-white transition duration-150 hover:-translate-y-0.5 ${hover}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-[0.95rem] leading-relaxed">
              Escribime por <a href={whatsappUrl(WA_DEFAULT_TEXT)} target="_blank" rel="noopener" className="font-semibold text-acc">WhatsApp ({PHONE_LABEL})</a>{' '}
              o por <a href={`mailto:${EMAIL}`} className="font-semibold text-acc">correo electrónico</a>.
            </p>
          </div>
          <div>
            <h3 className={title}>Material gratuito</h3>
            <ul className="m-0 grid list-none gap-3 p-0">
              {MATERIAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="group flex items-start gap-2 text-[0.95rem] text-indigo-100 no-underline transition hover:text-white">
                    <span className="text-acc transition-transform group-hover:translate-x-1">→</span>
                    <span className="first-letter:uppercase">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={title}>Zona y modalidad</h3>
            <p className="mb-4 text-[0.95rem] leading-relaxed">
              <strong className="text-acc">Palermo, CABA.</strong> A domicilio, en mi domicilio u online por videollamada.
            </p>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {ZONAS.map((z) => (
                <li key={z} className="rounded-full bg-white/10 px-3 py-1 text-[0.8rem] font-semibold">{z}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-[0.85rem] text-indigo-200 min-[700px]:flex-row">
          <p>© {year} Clases particulares de Matemática en Palermo, Ciudad Autónoma de Buenos Aires.</p>

          <div className="flex items-center gap-3">
            <span className="text-indigo-300">Hecho con</span>
            {STACK.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={name}
                title={name}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-semibold text-white transition hover:bg-white/20"
              >
                <Icon size={15} />
                <span className="hidden min-[500px]:inline">{name}</span>
              </a>
            ))}
            <a
              href="#inicio"
              aria-label="Volver arriba"
              className="ml-1 grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-brand"
            >
              <FaChevronUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}