// lib/material/progress-code.js
// "Código de partida": exporta/importa el progreso de /material como un texto copiable.
// Todo el acceso a localStorage / window ocurre dentro de las funciones (seguro para static export).

/** Evento que ProgressProvider escucha para refrescar su estado tras importar. */
export const PROGRESS_EVENT = 'math-progress-imported';

const VERSION = 1;
const CODE_PREFIX = 'MP1-';
const MAX_EXERCISES = 200; // tope por guía (hoy: 26, 14 y 38)

// Letra corta en el código → prefijo real de localStorage
const GUIDES = {
  e: 'math_exercise_',
  p: 'math_poly_exercise_',
  t: 'math_trig_exercise_',
};
const SHORT_BY_PREFIX = Object.fromEntries(Object.entries(GUIDES).map(([short, prefix]) => [prefix, short]));
const KEY_RE = /^(math_exercise_|math_poly_exercise_|math_trig_exercise_)ex(\d+)$/;

/* ---------- Base64 URL-safe, seguro para UTF-8 ---------- */
function encode(text) {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decode(b64url) {
  const b64 = b64url.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4));
  return new TextDecoder('utf-8', { fatal: true }).decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}

/** Código con todo lo marcado como resuelto en este dispositivo. */
export function getProgressCode() {
  const lists = { e: [], p: [], t: [] };
  let count = 0;

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const match = key && KEY_RE.exec(key);
      if (!match || localStorage.getItem(key) !== 'true') continue;
      const n = Number(match[2]);
      if (n < 1 || n > MAX_EXERCISES) continue;
      lists[SHORT_BY_PREFIX[match[1]]].push(n);
      count++;
    }
  } catch {
    return { code: '', count: 0 }; // localStorage bloqueado (modo privado, etc.)
  }

  Object.values(lists).forEach((list) => list.sort((a, b) => a - b));
  return { code: CODE_PREFIX + encode(JSON.stringify({ v: VERSION, ...lists })), count };
}

/**
 * Valida un código y lo FUSIONA con el progreso local (solo agrega, nunca borra ni pisa).
 * @returns {{ok: true, added: number, total: number} | {ok: false, error: string}}
 */
export function importProgress(raw) {
  const text = String(raw ?? '').replace(/\s+/g, '');
  if (!text) return { ok: false, error: 'Pegá primero un código.' };

  let keys;
  try {
    const body = text.startsWith(CODE_PREFIX) ? text.slice(CODE_PREFIX.length) : text;
    const data = JSON.parse(decode(body));
    if (!data || typeof data !== 'object' || Array.isArray(data) || data.v !== VERSION) throw new Error('formato');

    keys = new Set();
    for (const [short, prefix] of Object.entries(GUIDES)) {
      const list = data[short] ?? [];
      if (!Array.isArray(list) || list.length > MAX_EXERCISES) throw new Error('lista');
      for (const n of list) {
        if (!Number.isInteger(n) || n < 1 || n > MAX_EXERCISES) throw new Error('número');
        const key = `${prefix}ex${n}`;
        if (!KEY_RE.test(key)) throw new Error('clave'); // defensa extra: solo claves propias
        keys.add(key);
      }
    }
  } catch {
    return { ok: false, error: 'El código no es válido. Copialo de nuevo completo, sin recortarlo.' };
  }

  let added = 0;
  try {
    for (const key of keys) {
      if (localStorage.getItem(key) !== 'true') {
        localStorage.setItem(key, 'true');
        added++;
      }
    }
  } catch {
    return { ok: false, error: 'No se pudo guardar en este navegador (¿almacenamiento bloqueado?).' };
  }

  if (added) window.dispatchEvent(new CustomEvent(PROGRESS_EVENT)); // ProgressProvider se actualiza al instante
  return { ok: true, added, total: keys.size };
}
