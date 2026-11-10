// components/material/MaterialFooter.jsx
export default function MaterialFooter({
  whatsappHref,
  label = 'Escribime por WhatsApp',
  buttonClass = 'rounded-full bg-green-600 px-5 py-2.5 font-bold hover:bg-green-700',
}) {
  return (
    <footer className="border-t border-slate-800 bg-academic-900 py-8 text-center text-xs text-slate-400">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3">¿Te trabaste con algún ejercicio? Te ayudo en clases particulares en Palermo u online.</p>
        <a href={whatsappHref} target="_blank" rel="noopener" className={`inline-block text-white transition ${buttonClass}`}>
          {label}
        </a>
      </div>
    </footer>
  );
}
