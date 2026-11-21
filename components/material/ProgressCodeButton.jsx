// components/material/ProgressCodeButton.jsx
'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaKey } from 'react-icons/fa';
import { getProgressCode, importProgress } from '@/lib/material/progress-code';

const TRIGGER = {
  header: 'flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300 transition hover:border-blue-500 hover:text-white print:hidden',
  footer: 'inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[0.85rem] font-semibold text-white transition hover:bg-white/20',
};

const field = 'w-full resize-none rounded-lg border border-slate-700 bg-slate-950/60 p-3 font-mono text-xs break-all text-slate-100 placeholder:text-slate-500';
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

/** Botón + diálogo para copiar el código de progreso y cargar el de otro dispositivo. */
export default function ProgressCodeButton({ variant = 'header' }) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState('');
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [msg, setMsg] = useState(null); // { type: 'ok' | 'error', text }
  const [copied, setCopied] = useState(false);

  const uid = useId();
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const codeRef = useRef(null);
  const copyTimer = useRef(null);

  const refreshCode = () => {
    const { code: c, count: n } = getProgressCode();
    setCode(c);
    setCount(n);
  };

  const openDialog = () => {
    refreshCode();
    setText('');
    setMsg(null);
    setCopied(false);
    setOpen(true);
  };

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Escape, bloqueo de scroll y foco inicial mientras el diálogo está abierto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    const prevOverflow = document.body.style.overflow;
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const copy = async () => {
    let ok = true;
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Fallback (http, navegadores viejos): seleccionar y copiar con execCommand.
      codeRef.current?.select();
      ok = document.execCommand('copy');
    }
    if (!ok) return setMsg({ type: 'error', text: 'No pude copiar solo: seleccioná el código y copialo con Ctrl+C.' });
    setMsg(null);
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  const load = () => {
    const result = importProgress(text);
    if (!result.ok) return setMsg({ type: 'error', text: result.error });

    refreshCode();
    setText('');
    setMsg({
      type: 'ok',
      text: result.added
        ? `¡Listo! Se agregaron ${plural(result.added, 'ejercicio nuevo', 'ejercicios nuevos')} (el código traía ${result.total}).`
        : `El código traía ${plural(result.total, 'ejercicio', 'ejercicios')} y ya los tenías marcados.`,
    });
  };

  return (
    <>
      <button ref={triggerRef} type="button" onClick={openDialog} aria-haspopup="dialog" className={TRIGGER[variant]}>
        <FaKey aria-hidden="true" size={12} />
        Código de progreso
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm print:hidden"
            onMouseDown={(e) => e.target === e.currentTarget && close()}
          >
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${uid}-title`}
              tabIndex={-1}
              className="max-h-full w-full max-w-lg space-y-5 overflow-y-auto rounded-xl border border-slate-700 bg-academic-900 p-6 text-sm text-slate-300 shadow-2xl outline-none"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id={`${uid}-title`} className="mb-1 font-serif text-lg font-bold tracking-normal text-white">
                    Código de progreso
                  </h2>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Para seguir en otro dispositivo: copiá tu código, abrí el sitio allá y pegalo en «Cargar progreso».
                    Se suma a lo que ya tengas marcado, sin borrar nada.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Cerrar"
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-slate-700 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <section className="space-y-2">
                <label htmlFor={`${uid}-code`} className="flex items-center justify-between text-xs font-bold text-slate-200">
                  Tu código actual
                  <span className="font-mono font-normal text-emerald-400">{plural(count, 'ejercicio marcado', 'ejercicios marcados')}</span>
                </label>
                <textarea
                  ref={codeRef}
                  id={`${uid}-code`}
                  readOnly
                  rows={3}
                  value={code}
                  placeholder="No se pudo leer el progreso de este navegador."
                  onFocus={(e) => e.target.select()}
                  className={field}
                />
                <button
                  type="button"
                  onClick={copy}
                  disabled={!code}
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {copied ? '¡Copiado!' : 'Copiar código'}
                </button>
              </section>

              <section className="space-y-2 border-t border-slate-800 pt-5">
                <label htmlFor={`${uid}-import`} className="block text-xs font-bold text-slate-200">
                  Cargar un código
                </label>
                <textarea
                  id={`${uid}-import`}
                  rows={3}
                  value={text}
                  onChange={(e) => { setText(e.target.value); setMsg(null); }}
                  placeholder="Pegá acá el código (empieza con MP1-)"
                  spellCheck={false}
                  autoComplete="off"
                  className={field}
                />
                <button
                  type="button"
                  onClick={load}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-500"
                >
                  Cargar progreso
                </button>
              </section>

              {msg && (
                <p
                  role={msg.type === 'error' ? 'alert' : 'status'}
                  className={`rounded-lg border px-3 py-2 text-xs ${
                    msg.type === 'error'
                      ? 'border-rose-800 bg-rose-950/60 text-rose-300'
                      : 'border-emerald-800 bg-emerald-950/60 text-emerald-300'
                  }`}
                >
                  {msg.text}
                </p>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
