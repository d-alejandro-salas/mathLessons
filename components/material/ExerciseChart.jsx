'use client';

import { CHARTS } from '@/lib/material/charts';
import MathChart from './MathChart';
import SymmetryChart from './SymmetryChart';
import { useCardOpened } from './ExerciseCard';

/** Puente servidor → cliente: recibe solo un `id` serializable y busca la función en el registro. */
export default function ExerciseChart({ id }) {
  const enabled = useCardOpened();
  const cfg = CHARTS[id];
  if (!cfg) return null;
  return cfg.kind === 'symmetry'
    ? <SymmetryChart {...cfg} enabled={enabled} />
    : <MathChart {...cfg} enabled={enabled} />;
}
