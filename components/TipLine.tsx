import { ReactNode } from "react";

// One labelled line inside a tooltip card: a bold lead label, then detail text.
// A component (not stored host markup) so the <strong> is created at render
// time and doesn't trip React's key validation across the RSC boundary.
export default function TipLine({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <span className="tip-line">
      {label ? <strong>{label} </strong> : null}
      {children}
    </span>
  );
}
