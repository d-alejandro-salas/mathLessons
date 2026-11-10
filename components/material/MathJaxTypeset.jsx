// components/material/MathJaxTypeset.jsx
'use client';

import { useEffect } from 'react';

/** Renderiza las fórmulas de la página al montar (y tras navegar con el router, que no recarga scripts). */
export default function MathJaxTypeset() {
  useEffect(() => {
    const typeset = () => {
      const mj = window.MathJax;
      if (!mj?.startup?.promise) return false; // el CDN aún no terminó de cargar
      mj.startup.promise
        .then(() => {
          mj.typesetClear?.();          // olvida nodos de páginas anteriores
          return mj.typesetPromise();
        })
        .then(() => window.dispatchEvent(new Event('mathjax-typeset'))) // el aside de trigonometría reajusta su escala
        .catch((err) => console.error('MathJax:', err));
      return true;
    };

    if (!typeset()) window.addEventListener('mathjax-ready', typeset, { once: true });
    return () => window.removeEventListener('mathjax-ready', typeset);
  }, []);

  return null;
}
