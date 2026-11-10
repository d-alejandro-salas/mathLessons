// components/Section.jsx
// Sección estándar: padding, fondo alterno, contenedor y cabecera (kicker + h2 + lead).
export default function Section({ id, alt = false, kicker, title, lead, children }) {
  return (
    <section id={id} className={`py-14 min-[1000px]:py-20 ${alt ? 'bg-indigo-50' : ''}`}>
      <div className="wrap">
        {kicker && <span className="kicker">{kicker}</span>}
        {title && <h2>{title}</h2>}
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
