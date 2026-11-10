// lib/material/polinomicas-data.js
export const TOTAL_EXERCISES = 14;

export const LEVELS = [
  {
    id: "nivel1",
    tone: "blue",
    badge: "Sección I",
    title: "Análisis y Gráfico de Funciones",
    exercises: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: "nivel2",
    tone: "indigo",
    badge: "Sección II",
    title: "Análisis Completo (Forma Factorizada)",
    exercises: [12, 13]
  },
  {
    id: "nivel3",
    tone: "emerald",
    badge: "Sección III",
    title: "Teorema del Resto",
    exercises: [14]
  }
];

const tex = String.raw; 

const consignaBase = `
  <div class="space-y-2">
    <p>Defina Dominio e Imagen. Halle las intersecciones con los ejes y ubíquelas en el gráfico.</p>
    <p>Indique el índice de multiplicidad de las raíces. Realice un gráfico aproximado.</p>
    <p>Defina los conjuntos de positividad y negatividad.</p>
  </div>
`;

// Formato mejorado para las respuestas
const formatAns = (dom, im, raices, yint, cpos, cneg) => `
  <ul class="space-y-1.5 list-disc pl-4">
    <li><strong>Dominio:</strong> ${dom} <span class="text-emerald-300 mx-1">|</span> <strong>Imagen:</strong> ${im}</li>
    <li><strong>Raíces:</strong> ${raices}</li>
    <li><strong>Ordenada al origen:</strong> ${yint}</li>
    <li><strong>C<sup>+</sup>:</strong> ${cpos} <span class="text-emerald-300 mx-1">|</span> <strong>C<sup>-</sup>:</strong> ${cneg}</li>
  </ul>
`;

export const EXERCISES = {
  "1": { 
    tone: "blue", tag: "Práctica 1", title: tex`\( f(x) = -x^4 + 9x^2 - 4x - 12 \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\((-\infty, y_{max}]\)`, tex`\(x=-1\) (m=1), \(x=2\) (m=2), \(x=-3\) (m=1)`, tex`\((0, -12)\)`, tex`\((-3, -1)\)`, tex`\((-\infty, -3) \cup (-1, 2) \cup (2, \infty)\)`),
    steps: tex`<li>Aplicar el Teorema de Gauss para hallar las posibles raíces racionales (divisores de -12).</li><li>Evaluar \(f(2) = 0\) y \(f(-1) = 0\).</li><li>Utilizar la regla de Ruffini para dividir sucesivamente y obtener el polinomio cociente: \( -x^2 - 4x - 3 \).</li><li>Factorizar la cuadrática resultante para obtener su forma factorizada: \( f(x) = -(x-2)^2(x+1)(x+3) \).</li><li>Identificar intersección con el eje Y evaluando \(f(0) = -12\).</li><li>Evaluar los intervalos entre raíces utilizando puntos de prueba para determinar C+ y C-.</li>` 
  },
  "2": { 
    tone: "blue", tag: "Práctica 2", title: tex`\( g(x) = x^5 - 2x^4 - 6x^3 + 4x^2 + 13x + 6 \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\(\mathbb{R}\)`, tex`\(x=-1\) (m=3), \(x=2\) (m=1), \(x=3\) (m=1)`, tex`\((0, 6)\)`, tex`\((-1, 2) \cup (3, \infty)\)`, tex`\((-\infty, -1) \cup (2, 3)\)`),
    steps: tex`<li>Aplicar el Teorema de Gauss (divisores de 6).</li><li>Observar que \(g(-1) = 0\) y aplicar Ruffini sucesivamente tres veces con \(x = -1\), revelando una raíz de multiplicidad 3.</li><li>Obtener la cuadrática restante \( x^2 - 5x + 6 \).</li><li>Aplicar la fórmula resolvente para hallar las raíces \(x = 2\) y \(x = 3\).</li><li>Escribir la forma factorizada: \( g(x) = (x+1)^3(x-2)(x-3) \).</li><li>Establecer los intervalos de signo evaluando en puntos intermedios.</li>` 
  },
  "3": { 
    tone: "blue", tag: "Práctica 3", title: tex`\( h(x) = x^5 + 7x^4 + 9x^3 - 27x^2 - 54x \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\(\mathbb{R}\)`, tex`\(x=0\) (m=1), \(x=-3\) (m=3), \(x=2\) (m=1)`, tex`\((0, 0)\)`, tex`\((-3, 0) \cup (2, \infty)\)`, tex`\((-\infty, -3) \cup (0, 2)\)`),
    steps: tex`<li>Extraer factor común \(x\): \( h(x) = x(x^4 + 7x^3 + 9x^2 - 27x - 54) \). Por ende, \(x=0\) es raíz.</li><li>Buscar raíces racionales del factor de grado 4 usando divisores de -54.</li><li>Encontrar \(x=2\) y \(x=-3\) aplicando Ruffini.</li><li>Factorizar el polinomio cociente resultante hasta obtener \( h(x) = x(x-2)(x+3)^3 \).</li><li>Evaluar el signo en cada subintervalo del dominio generado por los ceros.</li>` 
  },
  "4": { 
    tone: "blue", tag: "Práctica 4", title: tex`\( i(x) = x^5 + x^4 - 6x^3 \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\(\mathbb{R}\)`, tex`\(x=0\) (m=3), \(x=-3\) (m=1), \(x=2\) (m=1)`, tex`\((0, 0)\)`, tex`\((-3, 0) \cup (2, \infty)\)`, tex`\((-\infty, -3) \cup (0, 2)\)`),
    steps: tex`<li>Extraer factor común \( x^3 \): \( i(x) = x^3(x^2 + x - 6) \).</li><li>La raíz \(x=0\) tiene multiplicidad 3, por el exponente.</li><li>Aplicar fórmula resolvente en la cuadrática \( x^2 + x - 6 = 0 \) para hallar las raíces \(x=-3\) y \(x=2\).</li><li>Evaluar los conjuntos de positividad y negatividad utilizando Bolzano.</li>` 
  },
  "5": { 
    tone: "blue", tag: "Práctica 5", title: tex`\( j(x) = 2x^3 - x^2 - 13x - 6 \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\(\mathbb{R}\)`, tex`\(x=-2\) (m=1), \(x=-1/2\) (m=1), \(x=3\) (m=1)`, tex`\((0, -6)\)`, tex`\((-2, -1/2) \cup (3, \infty)\)`, tex`\((-\infty, -2) \cup (-1/2, 3)\)`),
    steps: tex`<li>Encontrar la primera raíz con el Teorema de Gauss: \(j(-2) = 0\).</li><li>Dividir por \((x+2)\) usando Ruffini para obtener el cociente \( 2x^2 - 5x - 3 \).</li><li>Hallar las raíces de la cuadrática: \(x=3\) y \(x=-1/2\).</li><li>Forma factorizada final: \( j(x) = 2(x+2)(x-3)(x+1/2) \).</li><li>Analizar signos en los intervalos generados.</li>` 
  },
  "6": { 
    tone: "blue", tag: "Práctica 6", title: tex`\( k(x) = x^6 + 7x^5 - 5x^4 - 75x^3 \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\(\mathbb{R}\)`, tex`\(x=0\) (m=3), \(x=3\) (m=1), \(x=-5\) (m=2)`, tex`\((0, 0)\)`, tex`\((3, \infty)\)`, tex`\((-\infty, -5) \cup (-5, 0) \cup (0, 3)\)`),
    steps: tex`<li>Extraer factor común \( x^3 \), dejando el polinomio \( x^3(x^3 + 7x^2 - 5x - 75) \).</li><li>Probar divisores de -75. Observar que \(x=3\) es raíz.</li><li>Aplicar Ruffini; el cociente es un trinomio cuadrado perfecto: \( x^2 + 10x + 25 = (x+5)^2 \).</li><li>Determinar multiplicidades: \(x=0\) (impar, atraviesa), \(x=3\) (impar, atraviesa), \(x=-5\) (par, rebota).</li><li>Aplicar Bolzano para definir C+ y C-.</li>` 
  },
  "7": { 
    tone: "blue", tag: "Práctica 7", title: tex`\( m(x) = 5x^3 - 5x^2 \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\(\mathbb{R}\)`, tex`\(x=0\) (m=2), \(x=1\) (m=1)`, tex`\((0, 0)\)`, tex`\((1, \infty)\)`, tex`\((-\infty, 0) \cup (0, 1)\)`),
    steps: tex`<li>Extraer el máximo factor común: \( m(x) = 5x^2(x - 1) \).</li><li>Identificar la raíz \(x=0\) con índice de multiplicidad par (2), por lo que rebota en el eje.</li><li>Identificar la raíz \(x=1\) con índice de multiplicidad impar (1).</li><li>Analizar el signo del polinomio en cada subintervalo.</li>` 
  },
  "8": { 
    tone: "blue", tag: "Práctica 8", title: tex`\( n(x) = x^3 - 3x^2 + 4 \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\(\mathbb{R}\)`, tex`\(x=-1\) (m=1), \(x=2\) (m=2)`, tex`\((0, 4)\)`, tex`\((-1, 2) \cup (2, \infty)\)`, tex`\((-\infty, -1)\)`),
    steps: tex`<li>Buscar raíces entre los divisores de 4; \(n(-1) = 0\).</li><li>Dividir por \((x+1)\) mediante Ruffini; el polinomio resultante es \( x^2 - 4x + 4 \).</li><li>Notar que es un trinomio cuadrado perfecto: \( (x-2)^2 \).</li><li>Identificar multiplicidades y aplicar el Corolario de Bolzano.</li>` 
  },
  "9": { 
    tone: "blue", tag: "Práctica 9", title: tex`\( o(x) = x^4 + 4x^3 - 4x^2 - 16x \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\([-y_{min}, \infty)\)`, tex`\(x \in \{0, 2, -2, -4\}\) (todas m=1)`, tex`\((0, 0)\)`, tex`\((-\infty, -4) \cup (-2, 0) \cup (2, \infty)\)`, tex`\((-4, -2) \cup (0, 2)\)`),
    steps: tex`<li>Sacar factor común \(x\): \( o(x) = x(x^3 + 4x^2 - 4x - 16) \).</li><li>Agrupar términos en el paréntesis: \( x[x^2(x+4) - 4(x+4)] \).</li><li>Factor común por grupos: \( x(x^2 - 4)(x+4) \).</li><li>Aplicar diferencia de cuadrados: \( o(x) = x(x-2)(x+2)(x+4) \).</li><li>Todas las raíces tienen multiplicidad impar. Construir la tabla de signos.</li>` 
  },
  "10": { 
    tone: "blue", tag: "Práctica 10", title: tex`\( p(x) = 2x^3 + 4x^2 - 6x \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\(\mathbb{R}\)`, tex`\(x=-3, x=0, x=1\)` + " (todas m=1)", tex`\((0, 0)\)`, tex`\((-3, 0) \cup (1, \infty)\)`, tex`\((-\infty, -3) \cup (0, 1)\)`),
    steps: tex`<li>Factor común \(2x\): \( p(x) = 2x(x^2 + 2x - 3) \).</li><li>Factorizar la cuadrática hallando sus raíces \(x=1\) y \(x=-3\).</li><li>Forma factorizada: \( p(x) = 2x(x-1)(x+3) \).</li><li>Analizar el cambio de signo de la función en cada tramo determinado por los ceros.</li>` 
  },
  "11": { 
    tone: "blue", tag: "Práctica 11", title: tex`\( q(x) = x^4 - 4x^2 \)`, body: consignaBase, 
    answer: formatAns(tex`\(\mathbb{R}\)`, tex`\([-4, \infty)\)`, tex`\(x=0\)` + " (m=2), " + tex`\(x=-2, x=2\)` + " (m=1)", tex`\((0, 0)\)`, tex`\((-\infty, -2) \cup (2, \infty)\)`, tex`\((-2, 0) \cup (0, 2)\)`),
    steps: tex`<li>Extraer factor común \( x^2 \): \( q(x) = x^2(x^2 - 4) \).</li><li>Desarrollar la diferencia de cuadrados: \( q(x) = x^2(x-2)(x+2) \).</li><li>\(x=0\) rebota por ser de multiplicidad 2; las otras raíces atraviesan el eje de las abscisas.</li><li>Establecer los conjuntos de positividad y negatividad con puntos de evaluación.</li>` 
  },
  
  "12": { 
    tone: "indigo", tag: "Problema 1a", title: tex`\( f(x) = -x^4 - x^3 + 57x^2 + 5x - 700 \)`, 
    body: "<p>Realice el análisis completo: Dominio, Imagen, Intersecciones, Conjunto de ceros, positividad, negatividad, forma factorizada, multiplicidad y gráfico.</p>", 
    answer: tex`
      <ul class="space-y-1.5 list-disc pl-4">
        <li><strong>Ceros:</strong> \( C^0 = \{-7, -4, 5\} \)</li>
        <li><strong>Ordenada al origen:</strong> \( (0, -700) \)</li>
        <li><strong>Forma factorizada:</strong> \( f(x) = -(x-5)^2(x+4)(x+7) \)</li>
        <li><strong>Multiplicidad:</strong> \(x=5\) (par), \(x=-4\) (impar), \(x=-7\) (impar)</li>
        <li><strong>C<sup>+</sup>:</strong> \((-7, -4)\) <span class="text-emerald-300 mx-1">|</span> <strong>C<sup>-</sup>:</strong> \((-\infty, -7) \cup (-4, 5) \cup (5, \infty)\)</li>
      </ul>
    `, 
    steps: tex`<li>Probar raíces racionales (divisores de 700); verificar que \(f(-4)=0\) y \(f(5)=0\).</li><li>Usar regla de Ruffini dos veces para reducir el polinomio a grado 2.</li><li>El polinomio cociente es \( -(x^2 + 2x - 35) \).</li><li>Aplicar fórmula de Bhaskara para hallar las raíces restantes: \(x=-7\) y \(x=5\).</li><li>\(x=5\) es raíz doble. Agrupar factores para armar la forma factorizada exacta: \( -(x-5)^2(x+4)(x+7) \).</li><li>Definir la variación de signo mediante el teorema de Bolzano.</li>` 
  },
  "13": { 
    tone: "indigo", tag: "Problema 1b", title: tex`\( g(x) = 3x^2(x + 5)^4(x - 3) \)`, 
    body: "<p>Realice el análisis completo: Dominio, Imagen, Intersecciones, Conjunto de ceros, positividad, negatividad, forma factorizada, multiplicidad y gráfico.</p>", 
    answer: tex`
      <ul class="space-y-1.5 list-disc pl-4">
        <li><strong>Dom:</strong> \( \mathbb{R} \) <span class="text-emerald-300 mx-1">|</span> <strong>Ordenada al origen:</strong> \( (0, 0) \)</li>
        <li><strong>Ceros:</strong> \( C^0 = \{-5, 0, 3\} \)</li>
        <li><strong>Multiplicidad:</strong> \(x=-5\) (par, 4), \(x=0\) (par, 2), \(x=3\) (impar, 1)</li>
        <li><strong>C<sup>+</sup>:</strong> \( (3, \infty) \) <span class="text-emerald-300 mx-1">|</span> <strong>C<sup>-</sup>:</strong> \( (-\infty, -5) \cup (-5, 0) \cup (0, 3) \)</li>
      </ul>
    `, 
    steps: tex`<li>La función ya se encuentra expresada en forma factorizada.</li><li>Las raíces son los valores que anulan cada factor: \(x=0\), \(x=-5\), y \(x=3\).</li><li>Observar los exponentes: 2 y 4 son pares (las gráficas rebotan en \(x=0\) y \(x=-5\)), 1 es impar (la gráfica atraviesa en \(x=3\)).</li><li>Intersección con el eje Y se calcula con \(g(0) = 0\).</li><li>Construir la tabla de signos utilizando puntos intermedios en los intervalos formados por las raíces.</li>` 
  },
  
  "14": { 
    tone: "emerald", tag: "Problema 2", title: "Teorema del Resto", 
    body: tex`<p>Calcule el valor de \(a\) para que el polinomio \(P(x) = a(x + 4)(x - 2)^2(x - 1)^3\) al ser dividido por \(x - 3\) dé \(64\) como resto.</p>`, 
    answer: tex`<p><strong>Valor de la constante:</strong> \( a = \frac{8}{7} \)</p>`, 
    steps: tex`<li>Comprender por el Teorema del Resto que el resto de dividir \(P(x)\) por \((x - c)\) es \(P(c)\). Aquí \(c = 3\).</li><li>Establecer la ecuación fundamental: \( P(3) = 64 \).</li><li>Sustituir \(x\) por 3 en el polinomio original: \( P(3) = a(3 + 4)(3 - 2)^2(3 - 1)^3 \).</li><li>Resolver aritméticamente cada paréntesis: \( P(3) = a(7)(1)^2(2)^3 \).</li><li>Multiplicar los valores: \( P(3) = a \cdot 7 \cdot 1 \cdot 8 = 56a \).</li><li>Igualar al resto proporcionado: \( 56a = 64 \).</li><li>Despejar la variable requerida: \( a = \frac{64}{56} = \frac{8}{7} \).</li>` 
  }
};