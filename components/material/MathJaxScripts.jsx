'use client';

import Script from 'next/script';

// startup.typeset:false → MathJax NO renderiza solo al cargar (chocaría con la hidratación);
// <MathJaxTypeset /> lo dispara desde un useEffect cuando React ya montó.
const CONFIG = String.raw`window.MathJax = {
  tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] },
  startup: { typeset: false }
};`;

export default function MathJaxScripts() {
  return (
    <>
      <Script id="mathjax-config" strategy="afterInteractive">{CONFIG}</Script>
      <Script
        id="mathjax-script"
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
        strategy="afterInteractive"
        // onReady corre al cargar Y en cada nuevo montaje (navegación SPA de vuelta a /material).
        onReady={() => window.dispatchEvent(new Event('mathjax-ready'))}
      />
    </>
  );
}
