import { ReactNode } from "react";

/**
 * The article title block: the big serif H1 with a rule under it and an
 * italic hatnote ("From the personal wiki…"), echoing a Wikipedia article head.
 */
export default function PageHeading({
  title,
  hatnote,
}: {
  title: string;
  hatnote?: ReactNode;
}) {
  return (
    <div className="mb-3">
      <h1 className="border-b border-rule pb-1">{title}</h1>
      <div className="hatnote">
        {hatnote ?? <>From the personal wiki of Lorenzo Delano</>}
      </div>
    </div>
  );
}
