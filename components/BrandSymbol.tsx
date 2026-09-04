/**
 * The Ranked Table: the brand symbol (BRAND_SPEC.md §1.1). A square ruled
 * into nine cells with the three ranks in the header row, red → green →
 * violet — the matrix's own column bar. Rules take currentColor so the mark
 * inverts with its context; cells take the paper token.
 */
const RULE = 1; // side ÷ 30 on a 30-unit grid
const CELL = (30 - 4 * RULE) / 3;
const HEADER = ["#ba0000", "#2e7d32", "#5e35b1"];

export default function BrandSymbol({
  size = 26,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="30" height="30" fill="currentColor" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}${col}`}
            x={RULE + col * (CELL + RULE)}
            y={RULE + row * (CELL + RULE)}
            width={CELL}
            height={CELL}
            fill={row === 0 ? HEADER[col] : "var(--surface-paper)"}
          />
        )),
      )}
    </svg>
  );
}
