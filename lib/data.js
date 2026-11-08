// Contenido editable de la landing (equivale a los objetos del <script> original).

export const PRECIOS = {
  moneda: 'ARS',
  duraciones: [60, 90, 120],
  destacada: 90,
  filas: [
    { etiqueta: '1ra clase', precios: [25000, 35000, 46000] },
    { etiqueta: '2da clase', precios: [25000, 32000, 42000] },
    { etiqueta: '3ra clase', precios: [25000, 28000, 36000] },
    { etiqueta: '4ta clase', precios: [18000, 23000, 29000] },
    { etiqueta: '5ta clase', precios: [14000, 17000, 21000] },
  ],
};

export const PROMO_FINDE = { activa: true, descuento: 0.15 };

export const MATERIAL = [
  {
    titulo: 'Funciones exponenciales y logarítmicas: 26 ejercicios resueltos',
    nivel: 'CBC y universidad',
    tipo: 'material online',
    url: '/material/funciones-exponenciales-logaritmicas',
    descripcion: 'Dominio, imagen, asíntotas, signos, monotonía, gráficos e inversas, paso a paso.',
  },
  {
    titulo: 'Trigonometría: 38 ejercicios con respuestas para autocorregirte',
    nivel: 'Secundaria y CBC',
    tipo: 'material online',
    url: '/material/trigonometria',
    descripcion:
      'Razones trigonométricas, triángulos rectángulos, problemas de aplicación y teoremas del seno y del coseno, con respuestas ocultas para chequear.',
  },
];

export const SERVICES = [
  { icon: 'x', title: 'Secundaria', text: 'Álgebra, funciones, geometría, trigonometría y estadística.' },
  { icon: '∑', title: 'Ingreso y CBC', text: 'Preparación para ingresos y para Análisis Matemático, Álgebra y Matemática del CBC.' },
  { icon: '∫', title: 'Universidad', text: 'Análisis, Álgebra Lineal, Probabilidad y Estadística, cálculo en varias variables.' },
  { icon: '∧', title: 'Lógica e IPC', text: 'Introducción al Pensamiento Científico (CBC), Lógica Simbólica, tablas de verdad, deducción natural y falacias.' },
  { icon: '✓', title: 'Previas y exámenes', text: 'Plan de estudio, práctica guiada y simulacros para rendir con seguridad.' },
  { icon: 'π', title: 'Reforzamiento y tareas', text: 'Seguimiento semanal y ayuda con trabajos prácticos y consignas.' },
];

export const STEPS = [
  { title: 'Diagnóstico', text: 'Vemos qué sabés, dónde te trabás y qué necesitás lograr.' },
  { title: 'Explicación y práctica', text: 'Teoría en palabras simples y ejercicios resueltos paso a paso.' },
  { title: 'Seguimiento', text: 'Ajustamos el plan según tu avance y las fechas de tus exámenes.' },
];

export const ZONES = [
  'Palermo Soho', 'Palermo Hollywood', 'Palermo Chico', 'Palermo Viejo', 'Botánico', 'Las Cañitas',
  'Recoleta', 'Belgrano', 'Villa Crespo', 'Colegiales', 'A Domicilio', 'Online',
];

export const FAQ = [
  { q: '¿Dónde se dan las clases?', a: 'Suelo ir a domicilio en el radio de Palermo (y barrios aledaños a consultar), lo que brinda total comodidad y tranquilidad a los padres. También puedo recibir al alumno en mi domicilio en Palermo o dictar la clase online por videollamada.' },
  { q: '¿Cuánto dura cada clase?', a: 'Podés elegir 60, 90 o 120 minutos. Para temas largos o exámenes cercanos suelen rendir más las de 90.' },
  { q: '¿Cómo se paga y cómo se reserva?', a: 'Coordinamos día y horario por WhatsApp. Los valores están en la tabla de precios y se pueden actualizar sin aviso previo.' },
  { q: '¿Necesito tener material para la clase?', a: 'Sí, fundamental. Como docente trabajo con total seriedad y necesito que el alumno cuente con su carpeta, guías de ejercicios, programas o exámenes anteriores. ¡Cuantos más ejercicios tengamos para practicar, mucho mejor!' },
  { q: '¿Puedo tomar clases solo antes de un examen?', a: 'Sí. Armamos un plan intensivo con los temas del examen y práctica de ejercicios similares.' },
];

// Formato determinista ($25.000): igual en servidor y cliente (evita errores de hidratación).
export const fmt = (n) => `$${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
