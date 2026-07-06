import type { ReactNode } from "react";
import WikiLink from "@/components/WikiLink";

/**
 * A Wikipedia-style References section: a numbered list of sources, each an
 * optionally-linked citation with a small tag noting which reading it backs.
 * Reusable across pages — pass the page's own reference list.
 *
 * Compose each `cite` with <em> for journal or book titles. Provide `url` for
 * web-based tools (rendered via WikiLink, so external links get a new tab and
 * the ↗ glyph); peer-reviewed papers and books can stand on the citation alone.
 */
export type Reference = {
  id: string;
  cite: ReactNode;
  url?: string;
  urlLabel?: string;
  tag?: string;
};

export function References({
  items,
  intro,
}: {
  items: Reference[];
  intro?: ReactNode;
}) {
  return (
    <>
      <h2 id="references">References</h2>
      {intro ? <p>{intro}</p> : null}
      <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-snug text-muted marker:text-muted-2">
        {items.map((r) => (
          <li key={r.id} id={`ref-${r.id}`} className="pl-1">
            {r.cite}
            {r.url ? (
              <>
                {" "}
                <WikiLink href={r.url}>{r.urlLabel ?? r.url}</WikiLink>
              </>
            ) : null}
            {r.tag ? <span className="text-muted-2"> · {r.tag}</span> : null}
          </li>
        ))}
      </ol>
    </>
  );
}
