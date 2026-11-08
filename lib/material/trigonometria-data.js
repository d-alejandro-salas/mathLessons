// GENERADO a partir de material/trigonometria.html (38 ejercicios).
// Editá este archivo para cambiar enunciados y resoluciones.
// `body`, `answer` y `steps` son HTML propio (texto con <b>, <strong>, <sub> y los esquemas <svg>);
// se renderizan con dangerouslySetInnerHTML porque el contenido es estático y de tu autoría.

export const TOTAL_EXERCISES = 38;

/** Niveles de la parte principal (Secciones I a V). */
export const LEVELS = [
 {
  "id": "nivel1",
  "tone": "blue",
  "badge": "Sección I",
  "title": "Nivel 1: Razones trigonométricas y cálculo de ángulos",
  "exercises": [
   1,
   2,
   3,
   4,
   5,
   6,
   7
  ]
 },
 {
  "id": "nivel2",
  "tone": "indigo",
  "badge": "Sección II",
  "title": "Nivel 2: Resolución de triángulos rectángulos",
  "exercises": [
   8,
   9,
   10
  ]
 },
 {
  "id": "nivel3",
  "tone": "emerald",
  "badge": "Sección III",
  "title": "Nivel 3: Problemas de aplicación",
  "exercises": [
   11,
   12,
   13,
   14,
   15
  ]
 },
 {
  "id": "nivel4",
  "tone": "amber",
  "badge": "Sección IV",
  "title": "Nivel 4: Triángulos oblicuángulos: teorema del seno",
  "exercises": [
   16,
   17
  ]
 },
 {
  "id": "nivel5",
  "tone": "rose",
  "badge": "Sección V",
  "title": "Nivel 5: Triángulos oblicuángulos: teorema del coseno",
  "exercises": [
   18
  ]
 }
];

/** Sección VI: mismos 5 niveles con ejercicios extra. */
export const EXTRA_INTRO = "Mismo nivel que los del PDF, con algunos un poco más difíciles (casos con ángulo obtuso, caso ambiguo, tres lados conocidos y problemas con dos observaciones).";
export const EXTRA_LEVELS = [
 {
  "id": "extra-nivel1",
  "tone": "blue",
  "badge": null,
  "title": "Nivel 1: Razones trigonométricas y cálculo de ángulos",
  "exercises": [
   19,
   20,
   21,
   22,
   23
  ]
 },
 {
  "id": "extra-nivel2",
  "tone": "indigo",
  "badge": null,
  "title": "Nivel 2: Resolución de triángulos rectángulos",
  "exercises": [
   24,
   25,
   26,
   27
  ]
 },
 {
  "id": "extra-nivel3",
  "tone": "emerald",
  "badge": null,
  "title": "Nivel 3: Problemas de aplicación",
  "exercises": [
   28,
   29,
   30,
   31,
   32
  ]
 },
 {
  "id": "extra-nivel4",
  "tone": "amber",
  "badge": null,
  "title": "Nivel 4: Triángulos oblicuángulos: teorema del seno",
  "exercises": [
   33,
   34,
   35
  ]
 },
 {
  "id": "extra-nivel5",
  "tone": "rose",
  "badge": null,
  "title": "Nivel 5: Triángulos oblicuángulos: teorema del coseno",
  "exercises": [
   36,
   37,
   38
  ]
 }
];

/** Ejercicios por número. h = nivel de encabezado (3 en secciones, 4 dentro de Extra). */
export const EXERCISES = {
 "1": {
  "tag": "PDF · Pág. 1",
  "tone": "blue",
  "title": "Seno de un ángulo notable",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Evaluar <b>sen 30°</b>.</p>",
  "answer": "<p><strong>sen 30° = 1/2 = 0,5</strong></p>",
  "steps": "<li>30° es un ángulo notable: en un triángulo equilátero de lado 2, la altura lo parte en dos triángulos rectángulos de 30°, 60° y 90°.</li><li>En ese triángulo, el cateto opuesto a 30° mide 1 y la hipotenusa mide 2: sen 30° = opuesto / hipotenusa = 1/2.</li><li>Control en la calculadora (modo DEG): sen(30) = 0,5.</li>"
 },
 "2": {
  "tag": "PDF · Pág. 1",
  "tone": "blue",
  "title": "Seno de 45°",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Evaluar <b>sen 45°</b>.</p>",
  "answer": "<p><strong>sen 45° = √2/2 ≈ 0,7071</strong></p>",
  "steps": "<li>Un triángulo rectángulo isósceles de catetos 1 tiene hipotenusa √(1² + 1²) = √2.</li><li>sen 45° = 1/√2 = √2/2 (racionalizando) ≈ 0,7071.</li>"
 },
 "3": {
  "tag": "PDF · Pág. 1",
  "tone": "blue",
  "title": "Cosecante de 30°",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Evaluar <b>cosec 30°</b>.</p>",
  "answer": "<p><strong>cosec 30° = 2</strong></p>",
  "steps": "<li>La cosecante es la razón inversa del seno: cosec α = 1 / sen α = (sen α)⁻¹.</li><li>cosec 30° = (sen 30°)⁻¹ = (0,5)⁻¹ = 2.</li>"
 },
 "4": {
  "tag": "PDF · Pág. 1",
  "tone": "blue",
  "title": "Cosecante de 60°",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Evaluar <b>cosec 60°</b>.</p>",
  "answer": "<p><strong>cosec 60° = 2√3/3 ≈ 1,1547</strong></p>",
  "steps": "<li>sen 60° = √3/2 ≈ 0,8660.</li><li>cosec 60° = (√3/2)⁻¹ = 2/√3 = 2√3/3 (racionalizando) ≈ 1,1547.</li>"
 },
 "5": {
  "tag": "PDF · Pág. 1",
  "tone": "blue",
  "title": "Ángulo a partir del coseno",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Hallar el ángulo agudo <b>γ</b> si <b>cos γ = 1/2</b>.</p>",
  "answer": "<p><strong>γ = 60°</strong></p>",
  "steps": "<li>Se usa la función inversa: γ = arccos(1/2) = cos⁻¹(0,5).</li><li>En la calculadora: SHIFT + cos, 0,5 → 60°.</li><li>Verificación: cos 60° = 1/2 ✓.</li>"
 },
 "6": {
  "tag": "PDF · Pág. 1",
  "tone": "blue",
  "title": "Ángulo a partir de la tangente",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Hallar el ángulo agudo <b>γ</b> si <b>tan γ = 1</b>.</p>",
  "answer": "<p><strong>γ = 45°</strong></p>",
  "steps": "<li>γ = arctan(1) = tan⁻¹(1).</li><li>tan γ = 1 significa cateto opuesto = cateto adyacente: es un triángulo rectángulo isósceles, así que γ = 45°.</li>"
 },
 "7": {
  "tag": "PDF · Pág. 1",
  "tone": "blue",
  "title": "Ángulo con resultado en sexagesimal",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Hallar el ángulo agudo <b>γ</b> si <b>cos γ = 0,2</b>. Dar el resultado en grados decimales y en grados, minutos y segundos.</p>",
  "answer": "<p><strong>γ ≈ 78,46304° = 78° 27′ 46,95″</strong></p>",
  "steps": "<li>γ = arccos(0,2) = 78,46304° (calculadora en modo DEG).</li><li>Parte decimal a minutos: 0,46304 × 60 = 27,7825′ → 27′ enteros.</li><li>Parte decimal de los minutos a segundos: 0,7825 × 60 ≈ 46,95″.</li><li>Resultado: 78° 27′ 46,95″. (La tecla ° ′ ″ de la calculadora hace esta conversión sola.)</li>"
 },
 "8": {
  "tag": "PDF · Pág. 2",
  "tone": "indigo",
  "title": "Triángulo con catetos de 7 m y 5 m",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>En un triángulo rectángulo, el cateto opuesto a α mide <b>7 m</b> y el adyacente <b>5 m</b>. Resolverlo: hallar la hipotenusa y los ángulos agudos α y β.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='90.0,100.0 150.0,100.0 150.0,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M140.0,100.0 L140.0,90.0 L150.0,90.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='116.6' y='116.2' text-anchor='middle' font-size='12' fill='#334155'>5 m</text><text x='114.2' y='51.4' text-anchor='end' font-size='12' fill='#334155'>H = ?</text><text x='158.2' y='54.5' text-anchor='start' font-size='12' fill='#334155'>7 m</text><path d='M105.0,100.0 A15.0,15.0 0 0,0 98.7,87.8' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='114.9' y='91.2' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α</text><path d='M141.3,28.2 A15.0,15.0 0 0,0 150.0,31.0' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='141.5' y='46.7' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>β</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>H = √74 ≈ 8,60 m</strong></p><p><strong>α ≈ 54° 27′ 44,36″</strong></p><p><strong>β ≈ 35° 32′ 15,64″</strong></p>",
  "steps": "<li>Hipotenusa (Pitágoras): H² = 7² + 5² = 49 + 25 = 74 → H = √74 ≈ 8,60 m.</li><li>tan α = opuesto / adyacente = 7/5 = 1,4 → α = arctan(1,4) = 54,4623° = 54° 27′ 44,36″.</li><li>β = 90° − α = 35° 32′ 15,64″ (también sale de tan β = 5/7).</li><li>Verificación: α + β = 90° ✓.</li>"
 },
 "9": {
  "tag": "PDF · Pág. 2",
  "tone": "indigo",
  "title": "Triángulo con catetos de 10 m y 12 m",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>En un triángulo rectángulo, el cateto opuesto a α mide <b>10 m</b> y el adyacente <b>12 m</b>. Hallar la hipotenusa y los ángulos agudos α y β.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='69.6,100.0 170.4,100.0 170.4,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M160.4,100.0 L160.4,90.0 L170.4,90.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='114.9' y='115.1' text-anchor='end' font-size='12' fill='#334155'>12 m</text><text x='112.3' y='53.7' text-anchor='end' font-size='12' fill='#334155'>H = ?</text><text x='179.6' y='57.0' text-anchor='start' font-size='12' fill='#334155'>10 m</text><path d='M84.6,100.0 A15.0,15.0 0 0,0 81.1,90.4' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='95.9' y='94.5' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α</text><path d='M158.9,25.6 A15.0,15.0 0 0,0 170.4,31.0' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='158.5' y='45.4' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>β</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>H = √244 ≈ 15,62 m</strong></p><p><strong>α ≈ 39° 48′ 20,06″</strong></p><p><strong>β ≈ 50° 11′ 39,94″</strong></p>",
  "steps": "<li>H² = 10² + 12² = 100 + 144 = 244 → H = √244 ≈ 15,62 m.</li><li>tan α = 10/12 → α = arctan(10/12) = 39,8056° = 39° 48′ 20,06″.</li><li>tan β = 12/10 = 1,2 → β = arctan(1,2) = 50,1944° = 50° 11′ 39,94″.</li><li>Verificación: α + β = 90° ✓. Además, el lado mayor (la hipotenusa) se opone al ángulo mayor (el recto).</li>"
 },
 "10": {
  "tag": "PDF · Pág. 2",
  "tone": "indigo",
  "title": "Triángulo con hipotenusa de 9 m y cateto de 4 m",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>En un triángulo rectángulo, la hipotenusa mide <b>9 m</b> y el cateto adyacente a γ mide <b>4 m</b>. Hallar el cateto faltante y los ángulos agudos (γ y el otro, δ).</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='99.2,100.0 140.8,100.0 140.8,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M130.8,100.0 L130.8,90.0 L140.8,90.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='117.6' y='116.6' text-anchor='middle' font-size='12' fill='#334155'>4 m</text><text x='115.6' y='50.4' text-anchor='end' font-size='12' fill='#334155'>9 m</text><text x='147.9' y='52.8' text-anchor='start' font-size='12' fill='#334155'>A = ?</text><path d='M114.2,100.0 A15.0,15.0 0 0,0 105.8,86.6' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='123.0' y='89.2' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>γ</text><path d='M134.2,29.4 A15.0,15.0 0 0,0 140.8,31.0' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='134.4' y='47.3' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>δ</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>A = √65 ≈ 8,06 m</strong></p><p><strong>γ ≈ 63° 36′ 43,92″</strong></p><p><strong>δ ≈ 26° 23′ 16,08″</strong></p>",
  "steps": "<li>Cateto faltante: 9² = 4² + A² → 81 = 16 + A² → A² = 65 → A = √65 ≈ 8,06 m.</li><li>cos γ = adyacente / hipotenusa = 4/9 → γ = arccos(4/9) = 63,6122° = 63° 36′ 43,92″.</li><li>δ = 90° − γ = 26° 23′ 16,08″.</li><li>Control: sen γ = A/H = 0,8958 y sen 63,61° ≈ 0,8958 ✓.</li>"
 },
 "11": {
  "tag": "PDF · Pág. 3",
  "tone": "emerald",
  "title": "Ángulo de depresión hacia un árbol",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>¿Cuál es el ángulo de depresión con el que se observa, desde la terraza de un edificio de <b>70 m</b> de altura, el pie de un árbol situado a <b>200 m</b> de la base del edificio?</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Ángulo de depresión' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='54,85.1 186,85.1 54,38.9' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><line x1='54' y1='85.1' x2='54' y2='38.9' stroke='#1e40af' stroke-width='4'/><line x1='54' y1='38.9' x2='202' y2='38.9' stroke='#64748b' stroke-width='1.3' stroke-dasharray='5 4'/><path d='M64,85.1 L64,75.1 L54,75.1' fill='none' stroke='#1e40af' stroke-width='1.5'/><path d='M69,38.9 A15,15 0 0,1 68.2,43.9' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='125.0' y='54.4' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α</text><path d='M171,85.1 A15,15 0 0,1 171.8,80.1' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='115.0' y='77.6' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α′</text><text x='45.0' y='66.0' text-anchor='end' font-size='12' fill='#334155'>70 m</text><text x='120.0' y='102.1' text-anchor='middle' font-size='12' fill='#334155'>200 m</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>α ≈ 19,29° = 19° 17′ 24,17″</strong></p>",
  "steps": "<li>El ángulo de depresión se mide desde la horizontal del observador hacia abajo. Por ser ángulos alternos internos entre paralelas (la horizontal de la terraza y el suelo), es igual al ángulo de elevación α′ visto desde el pie del árbol.</li><li>tan α′ = opuesto / adyacente = 70 / 200 = 0,35.</li><li>α = arctan(0,35) = 19,2900° = 19° 17′ 24,17″.</li>"
 },
 "12": {
  "tag": "PDF · Pág. 3",
  "tone": "emerald",
  "title": "Longitud de una escalera apoyada",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Calcular la longitud de una escalera apoyada contra una pared, sabiendo que su pie está a <b>1,5 m</b> de la pared y forma con el piso un ángulo de <b>80°</b>.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='112.6,100.0 127.4,100.0 127.4,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M120.7,100.0 L120.7,93.3 L127.4,93.3' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='119.1' y='116.9' text-anchor='middle' font-size='12' fill='#334155'>1,5 m</text><text x='118.3' y='49.2' text-anchor='middle' font-size='12' fill='#334155'>H = ?</text><text x='130.7' y='49.7' text-anchor='middle' font-size='12' fill='#334155'>pared</text><path d='M118.5,100.0 A5.9,5.9 0 0,0 113.6,94.2' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='101.9' y='113.0' text-anchor='end' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>80°</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>H ≈ 8,64 m</strong></p>",
  "steps": "<li>Se conocen el cateto adyacente (1,5 m) y el ángulo (80°); se busca la hipotenusa, así que corresponde el coseno.</li><li>cos 80° = 1,5 / H → H = 1,5 / cos 80°.</li><li>H = 1,5 / 0,173648 ≈ 8,64 m.</li><li>Control de sensatez: la hipotenusa siempre es mayor que cada cateto (8,64 &gt; 1,5). Error frecuente: tener la calculadora en radianes en lugar de grados.</li>"
 },
 "13": {
  "tag": "PDF · Pág. 3",
  "tone": "emerald",
  "title": "Altura de un avión",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Un avión despega con un ángulo de <b>53°</b> y recorre <b>3000 m</b> en línea recta. Hallar la altura h a la que se encuentra.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='88.4,100.0 151.6,100.0 151.6,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M141.6,100.0 L141.6,90.0 L151.6,90.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='114.0' y='51.6' text-anchor='end' font-size='12' fill='#334155'>3000 m</text><text x='160.0' y='54.8' text-anchor='start' font-size='12' fill='#334155'>h</text><path d='M103.4,100.0 A15.0,15.0 0 0,0 97.4,88.0' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='113.4' y='91.5' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>53°</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>h ≈ 2395,91 m</strong></p>",
  "steps": "<li>El recorrido (3000 m) es la hipotenusa y h es el cateto opuesto al ángulo de 53°: corresponde el seno.</li><li>sen 53° = h / 3000 → h = 3000 · sen 53°.</li><li>h = 3000 · 0,798636 ≈ 2395,91 m.</li>"
 },
 "14": {
  "tag": "PDF · Pág. 3",
  "tone": "emerald",
  "title": "Distancia a una torre",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Una torre de <b>180 m</b> de altura se observa con un ángulo de elevación de <b>60°</b>. Calcular la distancia B desde el observador hasta la base de la torre.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='95.8,100.0 144.2,100.0 144.2,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M134.2,100.0 L134.2,90.0 L144.2,90.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='117.2' y='116.5' text-anchor='middle' font-size='12' fill='#334155'>B = ?</text><text x='151.8' y='53.5' text-anchor='start' font-size='12' fill='#334155'>180 m</text><path d='M110.8,100.0 A15.0,15.0 0 0,0 103.3,87.0' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='120.0' y='90.0' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>60°</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>B = 180/√3 = 60√3 ≈ 103,92 m</strong></p>",
  "steps": "<li>La altura es el cateto opuesto y B el adyacente: corresponde la tangente.</li><li>tan 60° = 180 / B → B = 180 / tan 60° = 180 / √3.</li><li>Racionalizando: B = 60√3 ≈ 103,92 m.</li>"
 },
 "15": {
  "tag": "PDF · Pág. 3",
  "tone": "emerald",
  "title": "Ángulo de elevación a la copa de un árbol",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Una persona observa la copa de un árbol de <b>10 m</b> de altura desde un punto situado a <b>30 m</b> de su base. Calcular el ángulo de elevación (se desprecia la altura de los ojos del observador).</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='40.0,84.7 200.0,84.7 200.0,31.3' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M190.0,84.7 L190.0,74.7 L200.0,74.7' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='111.7' y='95.9' text-anchor='end' font-size='12' fill='#334155'>30 m</text><text x='209.9' y='59.9' text-anchor='start' font-size='12' fill='#334155'>10 m</text><path d='M55.0,84.7 A15.0,15.0 0 0,0 54.2,79.9' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='67.6' y='84.2' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>α ≈ 18,43° = 18° 26′ 5,82″</strong></p>",
  "steps": "<li>tan α = cateto opuesto / cateto adyacente = 10 / 30 = 1/3 ≈ 0,3333.</li><li>α = arctan(1/3) = 18,4349° = 18° 26′ 5,82″.</li>"
 },
 "16": {
  "tag": "PDF · Pág. 4",
  "tone": "amber",
  "title": "Caso LAA: lados y ángulo incógnita",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Un triángulo tiene ángulos de <b>100°</b> y <b>20°</b>. El lado de <b>35 m</b> es el opuesto al ángulo de 100°. Hallar el tercer ángulo X y los lados x (opuesto a X) e y (opuesto a 20°).</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo oblicuángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='50.3,91.1 200.0,91.1 40.0,32.9' fill='#eef2ff' stroke='#3730a3' stroke-width='2' stroke-linejoin='round'/><text x='133.4' y='102.5' text-anchor='start' font-size='12' fill='#334155'>x</text><text x='35.3' y='63.6' text-anchor='end' font-size='12' fill='#334155'>y</text><text x='129.2' y='61.0' text-anchor='start' font-size='12' fill='#334155'>35 m</text><text x='39.2' y='99.8' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>A</text><text x='211.8' y='97.4' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>B</text><text x='30.1' y='30.1' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>C</text><path d='M65.3,91.1 A15.0,15.0 0 0,0 47.7,76.4' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='68.3' y='73.7' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>100°</text><path d='M185.0,91.1 A15.0,15.0 0 0,1 185.9,86.0' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='172.4' y='90.3' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>20°</text><path d='M42.6,47.6 A15.0,15.0 0 0,0 54.1,38.0' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='58.0' y='58.3' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>X</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>X = 60°</strong></p><p><strong>y ≈ 12,16 m</strong></p><p><strong>x ≈ 30,78 m</strong></p>",
  "steps": "<li>Tercer ángulo: X = 180° − 100° − 20° = 60°.</li><li>Lado y (opuesto a 20°): sen 100° / 35 = sen 20° / y → y = 35 · sen 20° / sen 100° = 35 · 0,34202 / 0,98481 ≈ 12,16 m.</li><li>Lado x (opuesto a 60°): x = 35 · sen 60° / sen 100° = 35 · 0,86603 / 0,98481 ≈ 30,78 m.</li><li>Control: el lado mayor (35 m) se opone al ángulo mayor (100°) ✓.</li>"
 },
 "17": {
  "tag": "PDF · Pág. 4",
  "tone": "amber",
  "title": "Caso LLA: lados de 10 m y 8 m",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Un triángulo tiene lados de <b>10 m</b> y <b>8 m</b>. El ángulo opuesto al lado de 10 m mide <b>85°</b>. Hallar el ángulo A opuesto al lado de 8 m, el ángulo B restante y el lado b opuesto a B.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo oblicuángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='53.0,98.0 187.0,98.0 107.6,26.0' fill='#eef2ff' stroke='#3730a3' stroke-width='2' stroke-linejoin='round'/><text x='121.7' y='114.8' text-anchor='middle' font-size='12' fill='#334155'>10 m</text><text x='70.8' y='61.8' text-anchor='end' font-size='12' fill='#334155'>b = ?</text><text x='156.6' y='61.4' text-anchor='start' font-size='12' fill='#334155'>8 m</text><text x='41.8' y='106.3' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>A</text><text x='198.4' y='105.8' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>B</text><text x='105.5' y='18.2' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>C</text><path d='M68.0,98.0 A15.0,15.0 0 0,0 62.0,86.0' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='78.1' y='89.5' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text><path d='M172.0,98.0 A15.0,15.0 0 0,1 175.9,87.9' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='160.9' y='91.9' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text><path d='M98.5,38.0 A15.0,15.0 0 0,0 118.7,36.1' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='110.2' y='57.9' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>85°</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>A ≈ 52° 50′ 25,35″</strong></p><p><strong>B ≈ 42° 9′ 34,65″</strong></p><p><strong>b ≈ 6,74 m</strong></p>",
  "steps": "<li>Teorema del seno: sen 85° / 10 = sen A / 8 → sen A = 8 · sen 85° / 10 = 0,79696.</li><li>A = arcsen(0,79696) = 52,8404° = 52° 50′ 25,35″.</li><li>¿Hay una segunda solución obtusa? No: el ángulo dado (85°) se opone al lado mayor (10 &gt; 8), por lo que A tiene que ser agudo.</li><li>B = 180° − 85° − A = 42° 9′ 34,65″.</li><li>b = 10 · sen B / sen 85° = 10 · 0,67120 / 0,99619 ≈ 6,74 m.</li>"
 },
 "18": {
  "tag": "PDF · Pág. 4",
  "tone": "rose",
  "title": "Caso LAL: lados de 6 cm y 7 cm con ángulo de 51°",
  "h": 3,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Dos lados de un triángulo miden <b>6 cm</b> y <b>7 cm</b>, y el ángulo comprendido entre ellos es de <b>51°</b>. Hallar el tercer lado a y los ángulos B (opuesto al lado de 6 cm) y C (opuesto al de 7 cm).</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo oblicuángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='66.0,98.0 174.0,98.0 124.3,26.0' fill='#eef2ff' stroke='#3730a3' stroke-width='2' stroke-linejoin='round'/><text x='119.4' y='115.0' text-anchor='middle' font-size='12' fill='#334155'>7 cm</text><text x='86.0' y='60.6' text-anchor='end' font-size='12' fill='#334155'>6 cm</text><text x='158.3' y='60.8' text-anchor='start' font-size='12' fill='#334155'>a = ?</text><text x='54.9' y='106.8' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>A</text><text x='185.0' y='107.0' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>B</text><text x='125.0' y='18.0' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>C</text><path d='M81.0,98.0 A15.0,15.0 0 0,0 75.4,86.3' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='91.2' y='89.9' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>51°</text><path d='M159.0,98.0 A15.0,15.0 0 0,1 165.5,85.7' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='149.2' y='89.0' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text><path d='M114.8,37.7 A15.0,15.0 0 0,0 132.8,38.3' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='123.2' y='58.0' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>a ≈ 5,67 cm</strong></p><p><strong>B ≈ 55° 20′ 19,12″</strong></p><p><strong>C ≈ 73° 39′ 40,88″</strong></p>",
  "steps": "<li>Teorema del coseno: a² = 6² + 7² − 2 · 6 · 7 · cos 51° = 85 − 84 · 0,62932 = 32,1371.</li><li>a = √32,1371 ≈ 5,67 cm.</li><li>Teorema del seno: sen B / 6 = sen 51° / a → sen B = 6 · sen 51° / 5,6690 = 0,8225 → B = 55° 20′ 19,12″.</li><li>B es agudo: se calcula el ángulo opuesto al menor de los dos lados dados (6 &lt; 7), así que no hay ambigüedad.</li><li>C = 180° − 51° − B = 73° 39′ 40,88″. Si usás a ya redondeado (5,67), los segundos pueden diferir levemente.</li>"
 },
 "19": {
  "tag": "Extra",
  "tone": "blue",
  "title": "Tangente y cotangente de 60°",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Evaluar <b>tan 60°</b> y <b>cotan 60°</b>.</p>",
  "answer": "<p><strong>tan 60° = √3 ≈ 1,7321</strong></p><p><strong>cotan 60° = √3/3 ≈ 0,5774</strong></p>",
  "steps": "<li>tan 60° = sen 60° / cos 60° = (√3/2) / (1/2) = √3.</li><li>cotan 60° = (tan 60°)⁻¹ = 1/√3 = √3/3 (racionalizando).</li>"
 },
 "20": {
  "tag": "Extra",
  "tone": "blue",
  "title": "Ángulo a partir del seno",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Hallar el ángulo agudo <b>γ</b> si <b>sen γ = 0,75</b>, en grados decimales y en grados, minutos y segundos.</p>",
  "answer": "<p><strong>γ ≈ 48,5904° = 48° 35′ 25″</strong></p>",
  "steps": "<li>γ = arcsen(0,75) = 48,5904°.</li><li>0,5904 × 60 = 35,423′ → 35′; y el resto × 60 ≈ 25,4″.</li><li>γ ≈ 48° 35′ 25″.</li>"
 },
 "21": {
  "tag": "Extra · un poco más difícil",
  "tone": "blue",
  "title": "Razones sin calculadora",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Sin usar calculadora: si α es un ángulo agudo con <b>sen α = 3/5</b>, hallar cos α, tan α y sec α.</p>",
  "answer": "<p><strong>cos α = 4/5 · tan α = 3/4 · sec α = 5/4</strong></p>",
  "steps": "<li>Si sen α = opuesto / hipotenusa = 3/5, se toma un triángulo con cateto opuesto 3 e hipotenusa 5.</li><li>Cateto adyacente (Pitágoras): √(5² − 3²) = √16 = 4.</li><li>cos α = 4/5; tan α = 3/4; sec α = 1/cos α = 5/4.</li><li>Dato extra: α = arcsen(0,6) ≈ 36,87°.</li>"
 },
 "22": {
  "tag": "Extra",
  "tone": "blue",
  "title": "Ángulos y lados de un triángulo",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Un triángulo tiene ángulos A = <b>48°</b> y B = <b>75°</b> (a, b y c son los lados opuestos a A, B y C). Hallar el ángulo C y ordenar los lados de menor a mayor.</p>",
  "answer": "<p><strong>C = 57°</strong></p><p><strong>Orden de los lados: a &lt; c &lt; b</strong></p>",
  "steps": "<li>La suma de los ángulos interiores es 180°: C = 180° − 48° − 75° = 57°.</li><li>Al mayor ángulo se opone el mayor lado: 48° &lt; 57° &lt; 75°, entonces a &lt; c &lt; b.</li>"
 },
 "23": {
  "tag": "Extra",
  "tone": "blue",
  "title": "Conversión de unidades angulares",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>(a) Expresar <b>35,725°</b> en grados, minutos y segundos. (b) Expresar <b>27° 14′ 30″</b> en grados decimales.</p>",
  "answer": "<p><strong>(a) 35° 43′ 30″</strong></p><p><strong>(b) ≈ 27,24167°</strong></p>",
  "steps": "<li>(a) 0,725 × 60 = 43,5′ → 43′; luego 0,5′ × 60 = 30″. Resultado: 35° 43′ 30″.</li><li>(b) 27 + 14/60 + 30/3600 = 27 + 0,23333 + 0,00833 ≈ 27,24167°.</li>"
 },
 "24": {
  "tag": "Extra",
  "tone": "indigo",
  "title": "Triángulo con catetos de 9 m y 12 m",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>En un triángulo rectángulo, el cateto opuesto a α mide <b>9 m</b> y el adyacente <b>12 m</b>. Hallar la hipotenusa y los ángulos agudos.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='64.0,100.0 176.0,100.0 176.0,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M166.0,100.0 L166.0,90.0 L176.0,90.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='114.5' y='114.8' text-anchor='end' font-size='12' fill='#334155'>12 m</text><text x='112.0' y='54.2' text-anchor='end' font-size='12' fill='#334155'>H = ?</text><text x='185.4' y='57.4' text-anchor='start' font-size='12' fill='#334155'>9 m</text><path d='M79.0,100.0 A15.0,15.0 0 0,0 76.0,91.0' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='90.6' y='95.1' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α</text><path d='M164.0,25.0 A15.0,15.0 0 0,0 176.0,31.0' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='163.5' y='45.0' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>β</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>H = 15 m</strong></p><p><strong>α ≈ 36° 52′ 12″</strong></p><p><strong>β ≈ 53° 7′ 48″</strong></p>",
  "steps": "<li>H² = 9² + 12² = 81 + 144 = 225 → H = 15 m (es la terna pitagórica 3-4-5 multiplicada por 3).</li><li>tan α = 9/12 = 0,75 → α = 36,8699° = 36° 52′ 12″.</li><li>β = 90° − α = 53° 7′ 48″.</li>"
 },
 "25": {
  "tag": "Extra",
  "tone": "indigo",
  "title": "Hipotenusa de 13 m y cateto de 5 m",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>En un triángulo rectángulo, la hipotenusa mide <b>13 m</b> y el cateto opuesto a α mide <b>5 m</b>. Hallar el otro cateto y los ángulos agudos.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='40.0,91.3 200.0,91.3 200.0,24.7' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M190.0,91.3 L190.0,81.3 L200.0,81.3' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='112.3' y='103.7' text-anchor='end' font-size='12' fill='#334155'>c = ?</text><text x='110.8' y='57.0' text-anchor='end' font-size='12' fill='#334155'>13 m</text><text x='209.8' y='59.3' text-anchor='start' font-size='12' fill='#334155'>5 m</text><path d='M55.0,91.3 A15.0,15.0 0 0,0 53.8,85.6' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='67.5' y='89.8' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α</text><path d='M186.2,30.4 A15.0,15.0 0 0,0 200.0,39.7' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='184.5' y='52.0' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>β</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>otro cateto = 12 m</strong></p><p><strong>α ≈ 22° 37′ 12″</strong></p><p><strong>β ≈ 67° 22′ 48″</strong></p>",
  "steps": "<li>13² = 5² + c² → c² = 169 − 25 = 144 → c = 12 m.</li><li>sen α = 5/13 → α = arcsen(5/13) = 22,6199° = 22° 37′ 12″.</li><li>β = 90° − α = 67° 22′ 48″.</li>"
 },
 "26": {
  "tag": "Extra",
  "tone": "indigo",
  "title": "Catetos a partir de hipotenusa y ángulo",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>En un triángulo rectángulo, la hipotenusa mide <b>20 cm</b> y un ángulo agudo α mide <b>35°</b>. Hallar los dos catetos y el otro ángulo agudo.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='60.0,100.0 180.0,100.0 180.0,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M170.0,100.0 L170.0,90.0 L180.0,90.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='114.2' y='114.6' text-anchor='end' font-size='12' fill='#334155'>adyacente</text><text x='111.8' y='54.5' text-anchor='end' font-size='12' fill='#334155'>20 cm</text><text x='189.4' y='57.7' text-anchor='start' font-size='12' fill='#334155'>opuesto</text><path d='M75.0,100.0 A15.0,15.0 0 0,0 72.3,91.4' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='86.7' y='95.6' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>35°</text><path d='M167.7,24.6 A15.0,15.0 0 0,0 180.0,31.0' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='167.1' y='44.8' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>β</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>opuesto a α = 11,47 cm</strong></p><p><strong>adyacente a α = 16,38 cm</strong></p><p><strong>β = 55°</strong></p>",
  "steps": "<li>Cateto opuesto: sen 35° = opuesto / 20 → opuesto = 20 · sen 35° = 20 · 0,57358 ≈ 11,47 cm.</li><li>Cateto adyacente: cos 35° = adyacente / 20 → adyacente = 20 · 0,81915 ≈ 16,38 cm.</li><li>β = 90° − 35° = 55°.</li><li>Control: 11,47² + 16,38² ≈ 400,0 = 20² ✓.</li>"
 },
 "27": {
  "tag": "Extra",
  "tone": "indigo",
  "title": "Hipotenusa y catetos con una tangente",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>En un triángulo rectángulo, el cateto adyacente a α mide <b>8 m</b> y α = <b>62°</b>. Hallar el cateto opuesto, la hipotenusa y el ángulo β.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='97.7,100.0 142.3,100.0 142.3,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M132.3,100.0 L132.3,90.0 L142.3,90.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='117.4' y='116.6' text-anchor='middle' font-size='12' fill='#334155'>8 m</text><text x='115.3' y='50.5' text-anchor='end' font-size='12' fill='#334155'>H = ?</text><text x='149.6' y='53.1' text-anchor='start' font-size='12' fill='#334155'>opuesto</text><path d='M112.7,100.0 A15.0,15.0 0 0,0 104.7,86.8' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='121.7' y='89.6' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>62°</text><path d='M135.3,29.2 A15.0,15.0 0 0,0 142.3,31.0' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='135.6' y='47.2' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>β</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>opuesto = 15,05 m</strong></p><p><strong>H = 17,04 m</strong></p><p><strong>β = 28°</strong></p>",
  "steps": "<li>tan 62° = opuesto / 8 → opuesto = 8 · tan 62° = 8 · 1,88073 ≈ 15,05 m.</li><li>cos 62° = 8 / H → H = 8 / cos 62° = 8 / 0,46947 ≈ 17,04 m.</li><li>β = 90° − 62° = 28°.</li>"
 },
 "28": {
  "tag": "Extra",
  "tone": "emerald",
  "title": "Altura de una rampa",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Una rampa de <b>6 m</b> de longitud forma un ángulo de <b>12°</b> con el piso. ¿A qué altura llega y cuál es su proyección horizontal?</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='40.0,75.0 200.0,75.0 200.0,41.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M190.0,75.0 L190.0,65.0 L200.0,65.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='110.8' y='84.1' text-anchor='end' font-size='12' fill='#334155'>x</text><text x='110.2' y='59.3' text-anchor='end' font-size='12' fill='#334155'>6 m</text><text x='209.9' y='60.6' text-anchor='start' font-size='12' fill='#334155'>h</text><path d='M55.0,75.0 A15.0,15.0 0 0,0 54.7,71.9' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='67.8' y='76.1' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>12°</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>h ≈ 1,25 m</strong></p><p><strong>x ≈ 5,87 m</strong></p>",
  "steps": "<li>Altura (cateto opuesto): h = 6 · sen 12° = 6 · 0,20791 ≈ 1,25 m.</li><li>Proyección horizontal (cateto adyacente): x = 6 · cos 12° = 6 · 0,97815 ≈ 5,87 m.</li>"
 },
 "29": {
  "tag": "Extra",
  "tone": "emerald",
  "title": "Sombra de un poste",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Un poste vertical de <b>8 m</b> proyecta una sombra de <b>11 m</b> sobre el suelo horizontal. ¿Qué ángulo de elevación tiene el sol?</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='62.3,100.0 177.8,100.0 177.8,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M167.8,100.0 L167.8,90.0 L177.8,90.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='114.3' y='114.7' text-anchor='end' font-size='12' fill='#334155'>11 m</text><text x='187.1' y='57.6' text-anchor='start' font-size='12' fill='#334155'>8 m</text><path d='M77.2,100.0 A15.0,15.0 0 0,0 74.4,91.2' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='88.9' y='95.3' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>α ≈ 36,03° = 36° 1′ 39″</strong></p>",
  "steps": "<li>El poste es el cateto opuesto y la sombra el adyacente: tan α = 8/11 ≈ 0,7273.</li><li>α = arctan(8/11) = 36,0274° = 36° 1′ 39″.</li>"
 },
 "30": {
  "tag": "Extra",
  "tone": "emerald",
  "title": "Depresión desde un faro",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Desde lo alto de un faro de <b>45 m</b> se ve una lancha situada a <b>150 m</b> de la base del faro. Hallar el ángulo de depresión y la distancia en línea recta entre el observador y la lancha.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Ángulo de depresión' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='54,81.8 186,81.8 54,42.2' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><line x1='54' y1='81.8' x2='54' y2='42.2' stroke='#1e40af' stroke-width='4'/><line x1='54' y1='42.2' x2='202' y2='42.2' stroke='#64748b' stroke-width='1.3' stroke-dasharray='5 4'/><path d='M64,81.8 L64,71.8 L54,71.8' fill='none' stroke='#1e40af' stroke-width='1.5'/><path d='M69,42.2 A15,15 0 0,1 68.4,46.5' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='125.0' y='57.7' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α</text><path d='M171,81.8 A15,15 0 0,1 171.6,77.5' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='115.0' y='74.3' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α′</text><text x='45.0' y='66.0' text-anchor='end' font-size='12' fill='#334155'>45 m</text><text x='120.0' y='98.8' text-anchor='middle' font-size='12' fill='#334155'>150 m</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>α ≈ 16,70° = 16° 41′ 57″</strong></p><p><strong>distancia visual ≈ 156,60 m</strong></p>",
  "steps": "<li>tan α′ = 45/150 = 0,3 → α = arctan(0,3) = 16,6992° = 16° 41′ 57″ (el de depresión es igual al de elevación por alternos internos).</li><li>Distancia visual (hipotenusa): √(45² + 150²) = √24525 ≈ 156,60 m.</li>"
 },
 "31": {
  "tag": "Extra",
  "tone": "emerald",
  "title": "Escalera hasta una ventana",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Una escalera de <b>5 m</b> debe alcanzar una ventana situada a <b>4,5 m</b> de altura. ¿Qué ángulo forma con el piso y a qué distancia de la pared debe apoyarse su pie?</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo rectángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='99.7,100.0 140.3,100.0 140.3,16.0' fill='#eff6ff' stroke='#1e40af' stroke-width='2' stroke-linejoin='round'/><path d='M130.3,100.0 L130.3,90.0 L140.3,90.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><text x='117.6' y='116.6' text-anchor='middle' font-size='12' fill='#334155'>d = ?</text><text x='115.6' y='50.3' text-anchor='end' font-size='12' fill='#334155'>5 m</text><text x='147.3' y='52.7' text-anchor='start' font-size='12' fill='#334155'>4,5 m</text><path d='M114.7,100.0 A15.0,15.0 0 0,0 106.2,86.5' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='123.4' y='89.1' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>α</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>α ≈ 64° 9′ 29″</strong></p><p><strong>d ≈ 2,18 m</strong></p>",
  "steps": "<li>sen α = 4,5 / 5 = 0,9 → α = arcsen(0,9) = 64,1581° = 64° 9′ 29″.</li><li>d = √(5² − 4,5²) = √4,75 ≈ 2,18 m (también d = 5 · cos α).</li>"
 },
 "32": {
  "tag": "Extra · un poco más difícil",
  "tone": "emerald",
  "title": "Dos observaciones del mismo edificio",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Desde un punto del suelo se ve la cima de un edificio con un ángulo de elevación de <b>30°</b>. Al acercarse <b>40 m</b> hacia el edificio, el ángulo pasa a ser de <b>45°</b>. Hallar la altura h del edificio (se desprecia la altura de los ojos). <i>Pista: plantear dos ecuaciones con la misma h.</i></p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Dos observaciones de un edificio' class='w-full max-w-[260px] mx-auto h-auto'><line x1='14' y1='94.0' x2='226' y2='94.0' stroke='#64748b' stroke-width='1.5'/><line x1='169.6' y1='94.0' x2='169.6' y2='24.0' stroke='#1e40af' stroke-width='4'/><line x1='48.4' y1='94.0' x2='169.6' y2='24.0' stroke='#1e40af' stroke-width='1.4'/><line x1='99.6' y1='94.0' x2='169.6' y2='24.0' stroke='#1e40af' stroke-width='1.4'/><path d='M159.6,94.0 L159.6,84.0 L169.6,84.0' fill='none' stroke='#1e40af' stroke-width='1.5'/><path d='M63.4,94.0 A15.0,15.0 0 0,0 61.4,86.5' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='83.2' y='88.7' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>30°</text><path d='M114.6,94.0 A15.0,15.0 0 0,0 110.2,83.4' fill='none' stroke='#1e40af' stroke-width='1.3'/><text x='126.3' y='87.0' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>45°</text><line x1='48.4' y1='107.0' x2='99.6' y2='107.0' stroke='#334155' stroke-width='1'/><line x1='48.4' y1='104.0' x2='48.4' y2='110.0' stroke='#334155' stroke-width='1'/><line x1='99.6' y1='104.0' x2='99.6' y2='110.0' stroke='#334155' stroke-width='1'/><text x='74.0' y='122.0' text-anchor='middle' font-size='12' fill='#334155'>40 m</text><text x='134.6' y='111.0' text-anchor='middle' font-size='12' fill='#334155'>d</text><text x='178.6' y='63.0' text-anchor='start' font-size='12' fill='#334155'>h</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>h = 20(√3 + 1) ≈ 54,64 m</strong></p>",
  "steps": "<li>Sea d la distancia desde el segundo punto hasta el edificio. Con 45°: tan 45° = h/d → h = d.</li><li>Con 30°, desde 40 m más lejos: tan 30° = h/(d + 40) → h = (d + 40)/√3.</li><li>Como h = d: d√3 = d + 40 → d(√3 − 1) = 40 → d = 40/(√3 − 1) = 20(√3 + 1).</li><li>h = d = 20(√3 + 1) ≈ 54,64 m.</li>"
 },
 "33": {
  "tag": "Extra",
  "tone": "amber",
  "title": "Caso LAA con 45° y 65°",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>En un triángulo, A = <b>45°</b>, B = <b>65°</b> y el lado a (opuesto a A) mide <b>12 cm</b>. Hallar C y los lados b y c.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo oblicuángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='67.2,98.0 172.8,98.0 139.2,26.0' fill='#eef2ff' stroke='#3730a3' stroke-width='2' stroke-linejoin='round'/><text x='117.4' y='114.6' text-anchor='middle' font-size='12' fill='#334155'>c = ?</text><text x='94.3' y='60.0' text-anchor='end' font-size='12' fill='#334155'>b = ?</text><text x='165.3' y='61.1' text-anchor='start' font-size='12' fill='#334155'>12 cm</text><text x='56.1' y='106.5' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>A</text><text x='183.5' y='107.5' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>B</text><text x='142.3' y='18.4' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>C</text><path d='M82.2,98.0 A15.0,15.0 0 0,0 77.8,87.4' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='93.1' y='91.3' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>45°</text><path d='M157.8,98.0 A15.0,15.0 0 0,1 166.5,84.4' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='149.2' y='87.0' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>65°</text><path d='M128.6,36.6 A15.0,15.0 0 0,0 145.6,39.6' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='134.3' y='57.6' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>C = 70°</strong></p><p><strong>b ≈ 15,38 cm</strong></p><p><strong>c ≈ 15,95 cm</strong></p>",
  "steps": "<li>C = 180° − 45° − 65° = 70°.</li><li>b = a · sen B / sen A = 12 · sen 65° / sen 45° = 12 · 0,90631 / 0,70711 ≈ 15,38 cm.</li><li>c = a · sen C / sen A = 12 · sen 70° / sen 45° ≈ 15,95 cm.</li>"
 },
 "34": {
  "tag": "Extra · un poco más difícil",
  "tone": "amber",
  "title": "Caso ambiguo (LLA): ¿uno o dos triángulos?",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>En un triángulo se conocen a = <b>10 cm</b>, b = <b>14 cm</b> y A = <b>30°</b> (opuesto a a). Hallar <u>todos</u> los triángulos posibles: ¡puede haber más de uno!</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo oblicuángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='40.0,91.0 200.0,91.0 140.7,33.0' fill='#eef2ff' stroke='#3730a3' stroke-width='2' stroke-linejoin='round'/><text x='116.6' y='107.3' text-anchor='middle' font-size='12' fill='#334155'>c = ?</text><text x='80.7' y='62.7' text-anchor='end' font-size='12' fill='#334155'>14 cm</text><text x='180.1' y='63.2' text-anchor='start' font-size='12' fill='#334155'>10 cm</text><text x='28.3' y='97.7' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>A</text><text x='211.6' y='98.1' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>B</text><text x='144.7' y='25.6' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>C</text><path d='M55.0,91.0 A15.0,15.0 0 0,0 53.0,83.6' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='67.0' y='87.8' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>30°</text><path d='M185.0,91.0 A15.0,15.0 0 0,1 189.3,80.6' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='174.1' y='84.5' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text><path d='M127.7,40.4 A15.0,15.0 0 0,0 151.4,43.4' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='137.2' y='64.7' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>Solución 1: B ≈ 44,43°, C ≈ 105,57°, c ≈ 19,27 cm</strong></p><p><strong>Solución 2: B ≈ 135,57°, C ≈ 14,43°, c ≈ 4,98 cm</strong></p>",
  "steps": "<li>Teorema del seno: sen B = b · sen A / a = 14 · 0,5 / 10 = 0,7.</li><li>Hay dos ángulos entre 0° y 180° con ese seno: B₁ = arcsen(0,7) = 44,43° y B₂ = 180° − B₁ = 135,57°.</li><li>Se comprueba que ambos sirven: A + B₁ = 74,43° &lt; 180° y A + B₂ = 165,57° &lt; 180°.</li><li>Solución 1: C₁ = 180° − 30° − 44,43° = 105,57° → c₁ = 10 · sen C₁ / sen 30° ≈ 19,27 cm.</li><li>Solución 2: C₂ = 180° − 30° − 135,57° = 14,43° → c₂ = 10 · sen C₂ / sen 30° ≈ 4,98 cm.</li><li>Regla: con A agudo, hay dos soluciones cuando b · sen A &lt; a &lt; b. Acá: 7 &lt; 10 &lt; 14 ✓.</li>"
 },
 "35": {
  "tag": "Extra",
  "tone": "amber",
  "title": "Distancia a una boya",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Dos puntos A y B de una costa están a <b>500 m</b>. Desde A y desde B se observa una boya C con ángulos de <b>62°</b> (en A) y <b>48°</b> (en B), medidos respecto de la recta AB. ¿A qué distancia de A y de B está la boya?</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo oblicuángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='68.4,98.0 171.6,98.0 106.7,26.0' fill='#eef2ff' stroke='#3730a3' stroke-width='2' stroke-linejoin='round'/><text x='121.8' y='114.8' text-anchor='middle' font-size='12' fill='#334155'>500 m</text><text x='78.4' y='60.9' text-anchor='end' font-size='12' fill='#334155'>AC = ?</text><text x='148.1' y='60.1' text-anchor='start' font-size='12' fill='#334155'>BC = ?</text><text x='57.8' y='107.4' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>A</text><text x='182.6' y='106.7' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>B</text><text x='104.6' y='18.2' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>C</text><path d='M83.4,98.0 A15.0,15.0 0 0,0 75.5,84.8' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='92.4' y='87.6' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>62°</text><path d='M156.6,98.0 A15.0,15.0 0 0,1 161.5,86.9' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='146.0' y='90.6' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>48°</text><path d='M99.7,39.2 A15.0,15.0 0 0,0 116.8,37.1' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='110.1' y='57.8' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>AC ≈ 395,42 m</strong></p><p><strong>BC ≈ 469,81 m</strong></p>",
  "steps": "<li>Ángulo en la boya: C = 180° − 62° − 48° = 70°.</li><li>AC es opuesto a B: AC = 500 · sen 48° / sen 70° = 500 · 0,74314 / 0,93969 ≈ 395,42 m.</li><li>BC es opuesto a A: BC = 500 · sen 62° / sen 70° ≈ 469,81 m.</li>"
 },
 "36": {
  "tag": "Extra",
  "tone": "rose",
  "title": "Caso LAL con ángulo obtuso",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Dos lados de un triángulo miden <b>8 cm</b> y <b>11 cm</b>, y el ángulo comprendido entre ellos es de <b>120°</b>. Hallar el tercer lado y los otros dos ángulos.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo oblicuángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='83.6,98.0 197.9,98.0 42.1,26.0' fill='#eef2ff' stroke='#3730a3' stroke-width='2' stroke-linejoin='round'/><text x='148.8' y='109.7' text-anchor='start' font-size='12' fill='#334155'>11 cm</text><text x='53.2' y='62.7' text-anchor='end' font-size='12' fill='#334155'>8 cm</text><text x='127.1' y='56.9' text-anchor='start' font-size='12' fill='#334155'>a = ?</text><text x='75.1' y='110.4' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>A</text><text x='209.5' y='105.1' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>B</text><text x='32.4' y='22.9' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>C</text><path d='M98.6,98.0 A15.0,15.0 0 0,0 76.1,85.0' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='97.6' y='77.8' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>120°</text><path d='M182.9,98.0 A15.0,15.0 0 0,1 184.3,91.7' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='170.5' y='96.0' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text><path d='M49.6,39.0 A15.0,15.0 0 0,0 55.7,32.3' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='62.8' y='48.9' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>a = √273 ≈ 16,52 cm</strong></p><p><strong>B ≈ 24,79°</strong></p><p><strong>C ≈ 35,21°</strong></p>",
  "steps": "<li>a² = 8² + 11² − 2 · 8 · 11 · cos 120°. Atención: cos 120° = −1/2 (negativo), así que se suma: a² = 64 + 121 + 88 = 273.</li><li>a = √273 ≈ 16,52 cm.</li><li>sen B = 8 · sen 120° / a = 8 · 0,86603 / 16,5227 = 0,4193 → B = 24,79° (agudo: se opone al lado menor).</li><li>C = 180° − 120° − B = 35,21°.</li>"
 },
 "37": {
  "tag": "Extra · un poco más difícil",
  "tone": "rose",
  "title": "Caso LLL: tres lados conocidos",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Un triángulo tiene lados a = <b>7 m</b>, b = <b>9 m</b> y c = <b>12 m</b>. Hallar sus tres ángulos.</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo oblicuángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='40.0,96.8 200.0,96.8 137.8,27.2' fill='#eef2ff' stroke='#3730a3' stroke-width='2' stroke-linejoin='round'/><text x='117.5' y='113.4' text-anchor='middle' font-size='12' fill='#334155'>12 m</text><text x='79.3' y='62.1' text-anchor='end' font-size='12' fill='#334155'>9 m</text><text x='178.5' y='62.6' text-anchor='start' font-size='12' fill='#334155'>7 m</text><text x='28.4' y='103.9' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>A</text><text x='211.5' y='104.4' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>B</text><text x='140.7' y='19.6' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>C</text><path d='M55.0,96.8 A15.0,15.0 0 0,0 52.2,88.1' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='66.7' y='92.3' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text><path d='M185.0,96.8 A15.0,15.0 0 0,1 190.0,85.6' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='174.4' y='89.4' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text><path d='M125.6,35.9 A15.0,15.0 0 0,0 147.8,38.4' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='134.7' y='59.0' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>A ≈ 35,43°</strong></p><p><strong>B ≈ 48,19°</strong></p><p><strong>C ≈ 96,38°</strong></p>",
  "steps": "<li>Se empieza por el ángulo opuesto al lado mayor (c = 12 m), el único que podría ser obtuso: cos C = (a² + b² − c²) / (2ab) = (49 + 81 − 144) / 126 = -0,1111 → C = 96,38°.</li><li>cos A = (b² + c² − a²) / (2bc) = (81 + 144 − 49) / 216 = 0,8148 → A = 35,43°.</li><li>B = 180° − A − C = 48,19°.</li><li>Control: 12 m es el lado mayor y C es el ángulo mayor ✓.</li>"
 },
 "38": {
  "tag": "Extra",
  "tone": "rose",
  "title": "Dos ciclistas que se alejan",
  "h": 4,
  "body": "<p class='text-sm text-slate-700 mt-2 leading-relaxed'>Dos ciclistas parten del mismo punto en direcciones que forman un ángulo de <b>70°</b>. Uno va a <b>20 km/h</b> y el otro a <b>15 km/h</b>. ¿A qué distancia se encuentran después de 2 horas?</p>\n  <figure class='my-3'><svg viewBox='0 0 240 130' role='img' aria-label='Triángulo oblicuángulo' class='w-full max-w-[260px] mx-auto h-auto'><polygon points='68.9,98.0 171.1,98.0 95.1,26.0' fill='#eef2ff' stroke='#3730a3' stroke-width='2' stroke-linejoin='round'/><text x='123.3' y='114.3' text-anchor='middle' font-size='12' fill='#334155'>40 km</text><text x='72.7' y='61.1' text-anchor='end' font-size='12' fill='#334155'>30 km</text><text x='141.8' y='59.6' text-anchor='start' font-size='12' fill='#334155'>d = ?</text><text x='58.5' y='107.9' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>A</text><text x='182.2' y='106.5' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>B</text><text x='91.2' y='18.7' text-anchor='middle' font-size='12' fill='#334155' font-weight='700'>C</text><path d='M83.9,98.0 A15.0,15.0 0 0,0 74.1,83.9' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='91.9' y='85.9' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>70°</text><path d='M156.1,98.0 A15.0,15.0 0 0,1 160.2,87.7' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='145.1' y='91.6' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text><path d='M90.0,40.1 A15.0,15.0 0 0,0 106.0,36.3' fill='none' stroke='#3730a3' stroke-width='1.3'/><text x='101.5' y='57.3' text-anchor='middle' font-size='12' fill='#334155' stroke='#f8fafc' stroke-width='3.5' stroke-linejoin='round' paint-order='stroke'>?</text></svg><figcaption class='text-[10px] text-center text-slate-400'>Esquema a escala (aprox.)</figcaption></figure>",
  "answer": "<p><strong>d ≈ 40,98 km</strong></p>",
  "steps": "<li>Recorridos en 2 h: 20 · 2 = 40 km y 15 · 2 = 30 km. Forman un triángulo con ángulo comprendido de 70°.</li><li>d² = 40² + 30² − 2 · 40 · 30 · cos 70° = 2500 − 2400 · 0,34202 = 1679,15.</li><li>d = √1679,15 ≈ 40,98 km.</li>"
 }
};
