// components/HashScroll.jsx
'use client';

import { useEffect } from 'react';

/**
 * Lleva a la sección indicada en la URL (#material, #precios…) y la mantiene a la vista mientras la
 * página termina de acomodarse (hidratación, fuentes, imágenes). Se cancela apenas el usuario
 * interactúa o a los 2,5 s, así nunca "pelea" con el scroll manual.
 */
export default function HashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    if (!target) return;

    const go = () => target.scrollIntoView({ block: 'start', behavior: 'instant' });
    const events = ['wheel', 'touchstart', 'keydown', 'mousedown'];
    const observer = new ResizeObserver(go); // cada cambio de alto del documento → reubicar
    let timer;

    const stop = () => {
      observer.disconnect();
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, stop));
    };

    go();
    observer.observe(document.body);
    events.forEach((e) => window.addEventListener(e, stop, { passive: true }));
    timer = setTimeout(stop, 2500);

    return stop;
  }, []);

  return null;
}
