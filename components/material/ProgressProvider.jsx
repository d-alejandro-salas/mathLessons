// components/material/ProgressProvider.jsx
'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const ProgressContext = createContext(null);

/**
 * Progreso de ejercicios resueltos, persistido en localStorage.
 * Mismas claves que la versión original (`math_exercise_ex1`…), así nadie pierde su avance.
 */
export function ProgressProvider({ total, prefix = 'math_exercise_', children }) {
  const [done, setDone] = useState({}); // { ex1: true, ... }

  // Lectura al montar: localStorage no existe en el servidor, por eso va en useEffect
  // (el primer render coincide con el HTML estático y no hay error de hidratación).
  useEffect(() => {
    const saved = {};
    try {
      for (let i = 1; i <= total; i++) {
        if (localStorage.getItem(`${prefix}ex${i}`) === 'true') saved[`ex${i}`] = true;
      }
    } catch {}
    setDone(saved);
  }, [total, prefix]);

  const toggle = useCallback((id) => {
    const next = !done[id];
    setDone((prev) => ({ ...prev, [id]: next }));
    try { localStorage.setItem(`${prefix}${id}`, String(next)); } catch {}
  }, [done, prefix]);

  const reset = useCallback(() => {
    if (!window.confirm('¿Deseas reiniciar todas las marcas de ejercicios resueltos?')) return;
    try {
      for (let i = 1; i <= total; i++) localStorage.removeItem(`${prefix}ex${i}`);
    } catch {}
    setDone({});
  }, [total, prefix]);

  const value = useMemo(() => ({
    total,
    count: Object.values(done).filter(Boolean).length,
    isDone: (id) => !!done[id],
    toggle,
    reset,
  }), [total, done, toggle, reset]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress debe usarse dentro de <ProgressProvider>');
  return ctx;
}

/** Contador "0 / 26 hechos" del header. */
export function HeaderProgress() {
  const { count, total } = useProgress();
  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1">
      <span className="text-xs text-slate-300">Progreso:</span>
      <span className="font-mono text-xs font-bold text-emerald-400">{count} / {total} hechos</span>
    </div>
  );
}
