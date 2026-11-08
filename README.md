# Matemática Palermo · Next.js

Migración del sitio (HTML/CSS/JS) a Next.js App Router + Tailwind CSS v4. Sitio estático (`output: 'export'`).

## Puesta en marcha

```bash
npx create-next-app@latest mathlessons-next --js --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm
cd mathlessons-next
npm install chart.js
```

1. Copiá el contenido de este ZIP **encima** del proyecto (acepta sobrescribir `app/layout.js`, `app/globals.css` y `next.config.mjs`).
2. Borrá `app/page.js` (lo reemplaza `app/(site)/page.js`) y `app/favicon.ico` si querés usar tus íconos.
3. Copiá a `public/` tus archivos estáticos: `favicon.svg`, `favicon.png`, `og-image.jpg` y `assets/1.jpg`, `assets/2.jpg`.
   **No** copies `robots.txt` ni `sitemap.xml`: ahora los generan `app/robots.js` y `app/sitemap.js` (si existen ambos, el build falla).
4. `npm run dev` para probar · `npm run build` genera el sitio estático en `out/`.

## Dónde editar

| Qué | Dónde |
|---|---|
| Datos de contacto, URLs, WhatsApp | `lib/site.js` |
| Precios, FAQ, zonas, servicios, material | `lib/data.js` |
| Ejercicios de trigonometría (38) | `lib/material/trigonometria-data.js` |
| Gráficos de funciones exp/log | `lib/material/charts.js` |
| Colores y botones globales | `app/globals.css` (`@theme`) |
| SEO por página | `buildMetadata()` en `lib/seo.js` |

## Pendiente de completar

- `app/material/funciones-exponenciales-logaritmicas/page.jsx`: ejercicios #2 a #14, #16 a #22, #24, #25 y #26 (hay un comentario `▸` en cada hueco; los gráficos ya están en `lib/material/charts.js`).
