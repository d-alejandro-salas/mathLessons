// components/material/ExpandableCard.jsx
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const CARD = 'space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm';

function ZoomOverlay({ onClose, children }) {
  const cardRef = useRef(null);
  const closeRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    // Escala la tarjeta para ocupar ~90% de la pantalla (máx. x3), igual que el original.
    const fit = () => {
      el.style.zoom = 1;
      el.style.zoom = Math.min((innerWidth * 0.9) / el.offsetWidth, (innerHeight * 0.9) / el.offsetHeight, 3);
    };
    // La copia se renderiza con LaTeX crudo: hay que tipografiarla antes de medir.
    const mj = window.MathJax;
    const typeset = mj?.startup?.promise ? mj.startup.promise.then(() => mj.typesetPromise([el])) : Promise.resolve();
    typeset.then(fit, fit);
    fit();

    const raf = requestAnimationFrame(() => setShow(true));
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className={`fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center overflow-hidden bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300 print:hidden ${show ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        className={`${CARD} w-[28rem] max-w-none flex-none cursor-default shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 ${show ? 'scale-100' : 'scale-[0.94]'}`}
      >
        {children}
      </div>
      <button
        ref={closeRef}
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute top-4 right-4 size-10 cursor-pointer rounded-full bg-white text-[1.1rem] font-bold text-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:bg-slate-200"
      >
        ✕
      </button>
    </div>,
    document.body,
  );
}

/** Bloque del aside que se amplía en un overlay al hacer clic o con Enter/Espacio. */
export default function ExpandableCard({ label, children }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <div
        ref={triggerRef}
        role="button"
        tabIndex={0}
        title="Click para ampliar"
        aria-label={`Ampliar: ${label}`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={`${CARD} cursor-zoom-in transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.18)] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
      >
        {children}
      </div>
      {open && <ZoomOverlay onClose={close}>{children}</ZoomOverlay>}
    </>
  );
}
