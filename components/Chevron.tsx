// A stroke chevron (Feather/Lucide "chevron-down" geometry) used as the
// disclosure affordance on collapsibles — the infobox groups and the stat-table
// bands. Thin, rounded, and scalable, it reads far better than the filled ▾
// glyph. Color inherits via currentColor; size and rotation are set in CSS
// (.chevron / .stat-chevron). Presentational only — no hooks — so it renders in
// both server and client components.
export default function Chevron({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
