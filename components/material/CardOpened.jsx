// components/material/CardOpened.jsx
'use client';

import { createContext, useContext, useState } from 'react';

// Los gráficos se construyen recién cuando el <details> se abre por primera vez.
// Fuera de un <details> el valor por defecto es `true` (se dibuja de inmediato).
export const OpenedContext = createContext(true);
export const useCardOpened = () => useContext(OpenedContext);

/**
 * <details> que avisa a sus descendientes (ExerciseChart) la primera vez que se abre.
 * Es el único trozo cliente: el contenido (`children`) y el `summary` los puede pasar un Server Component.
 */
export function LazyDetails({ summary, summaryClassName, children, ...props }) {
  const [opened, setOpened] = useState(false);

  return (
    <OpenedContext.Provider value={opened}>
      <details {...props} onToggle={(e) => e.currentTarget.open && setOpened(true)}>
        <summary className={summaryClassName}>{summary}</summary>
        {children}
      </details>
    </OpenedContext.Provider>
  );
}
