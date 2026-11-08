import { SITE_NAME, abs } from '@/lib/site';

/**
 * Metadata completa por página (title, canonical, OpenGraph, Twitter).
 * Next reemplaza `openGraph`/`twitter`/`alternates` de forma SUPERFICIAL entre layout y page,
 * así que cada page.js los define completos con este helper en vez de heredarlos a medias.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  ogTitle = title,
  ogDescription = description,
  twitterDescription = description,
  type = 'website',
  image = '/og-image.jpg',
}) {
  const url = abs(path);
  const imageUrl = abs(image);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: 'es_AR',
      url,
      siteName: SITE_NAME,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Clases particulares de Matemática en Palermo, Buenos Aires',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: twitterDescription,
      images: [imageUrl],
    },
  };
}
