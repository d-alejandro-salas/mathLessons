// components/JsonLd.jsx
// Inyecta datos estructurados. Reutilizable en la landing y en /material.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // `<` escapado para que ningún texto pueda cerrar el <script>.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
