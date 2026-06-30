import { ReactNode } from "react";
import Tooltip from "./Tooltip";

export type Citation = {
  id: string;
  text: ReactNode; // shown in tooltip + reference list
  href?: string; // optional source URL
};

/**
 * Build a per-page citation system. Pass an ordered list of references and get
 * back a <Ref> component (renders the superscript [n] mark with a hover
 * preview) and a <References> component (renders the numbered list at the
 * bottom of the article). Numbering is derived from list order, so it can
 * never drift out of sync.
 */
export function makeCitations(refs: Citation[]) {
  const indexById = new Map(refs.map((r, i) => [r.id, i + 1]));

  function Ref({ id }: { id: string }) {
    const n = indexById.get(id);
    if (!n) return null;
    const ref = refs.find((r) => r.id === id)!;
    return (
      <sup className="ref-mark" id={`cite-ref-${id}`}>
        <Tooltip
          interactive
          content={
            <span>
              {ref.text}
              {ref.href && (
                <>
                  {" "}
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wikilink external"
                  >
                    link
                  </a>
                </>
              )}
            </span>
          }
        >
          <a href={`#cite-note-${id}`} aria-label={`Reference ${n}`}>
            [{n}]
          </a>
        </Tooltip>
      </sup>
    );
  }

  function References() {
    if (refs.length === 0) return null;
    return (
      <section className="mt-8">
        <h2>References</h2>
        <ol className="references-list">
          {refs.map((r) => (
            <li key={r.id} id={`cite-note-${r.id}`}>
              <a href={`#cite-ref-${r.id}`} className="wikilink">
                ^
              </a>{" "}
              {r.text}
              {r.href && (
                <>
                  {" — "}
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wikilink external"
                  >
                    {hostOf(r.href)}
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return { Ref, References };
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "source";
  }
}
