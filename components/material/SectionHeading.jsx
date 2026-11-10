// components/material/SectionHeading.jsx
const BADGE = {
  blue: 'bg-blue-600', indigo: 'bg-indigo-600', emerald: 'bg-emerald-600', amber: 'bg-amber-600', rose: 'bg-rose-600', slate: 'bg-slate-800',
};

export default function SectionHeading({ badge, tone = 'blue', children }) {
  return (
    <div className="border-b border-slate-300 pb-2">
      <h2 className="mb-0 flex items-center gap-3 font-serif text-2xl font-bold tracking-normal text-academic-900">
        <span className={`rounded px-2.5 py-1 font-sans text-xs text-white ${BADGE[tone]}`}>{badge}</span>
        {children}
      </h2>
    </div>
  );
}
