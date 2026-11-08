// Única fuente de verdad (DRY) para datos del sitio usados en varios componentes.

export const SITE_URL = 'https://d-alejandro-salas.github.io/mathLessons';
export const SITE_NAME = 'Matemática Palermo';

export const PHONE = '5491166680697';
export const PHONE_LABEL = '+54 9 11 6668-0697';
export const EMAIL = 'daniel.salas@bue.edu.ar';
export const LINKEDIN = 'https://www.linkedin.com/in/danielalejandrosalas/';
export const GITHUB = 'https://github.com/d-alejandro-salas';

export const WA_DEFAULT_TEXT =
  'Hola! Vi tu página de clases de Matemática en Palermo y quisiera consultar.';

/** Ruta de un archivo de /public con basePath (para <img> y <a download>). */
export const asset = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

/** URL absoluta (canonical, OG, JSON-LD). Metadata no antepone basePath, por eso se arma a mano. */
export const abs = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

/** Enlace de WhatsApp. Sin texto => enlace simple (como el botón flotante). */
export const whatsappUrl = (text) => {
  const base = `https://api.whatsapp.com/send/?phone=${PHONE}`;
  return text ? `${base}&text=${encodeURIComponent(text).replace(/!/g, '%21')}` : base;
};

export const NAV_LINKS = [
  { href: '/#clases', label: 'Clases' },
  { href: '/#sobre-mi', label: 'Sobre mí' },
  { href: '/#metodo', label: 'Método' },
  { href: '/#precios', label: 'Precios' },
  { href: '/#zonas', label: 'Zonas' },
  { href: '/#faq', label: 'Preguntas' },
  { href: '/#material', label: 'Material' },
];

export const MATERIAL_LINKS = [
  { href: '/material/funciones-exponenciales-logaritmicas', label: 'funciones exponenciales y logarítmicas' },
  { href: '/material/trigonometria', label: 'trigonometría' },
];

/** URLs canónicas (se conserva el .html ya indexado). Las usan metadata, JSON-LD y sitemap. */
export const CANONICAL = {
  funciones: '/material/funciones-exponenciales-logaritmicas.html',
  trigonometria: '/material/trigonometria.html',
};
