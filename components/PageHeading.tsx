import { ReactNode } from "react";
import SectionNav from "./SectionNav";
import MobileInfobox from "./MobileInfobox";

/**
 * The article title block: the big serif H1 with a rule under it and an
 * italic hatnote ("From the personal wiki…"), echoing a Wikipedia article head.
 * The horizontal in-page section navigation is rendered directly beneath it.
 */
export default function PageHeading({
  title,
  hatnote,
}: {
  title: string;
  hatnote?: ReactNode;
}) {
  // The title block and SectionNav are returned as siblings (not nested) so
  // that the sticky SectionNav's containing block is the tall <article>, letting
  // it stay pinned while the whole page scrolls.
  return (
    <>
      <div className="mb-3">
        <h1 className="border-b border-rule pb-1">{title}</h1>
        <div className="hatnote">
          {hatnote ?? <>From the personal wiki of Lorenzo Delano</>}
        </div>
      </div>
      <MobileInfobox />
      <SectionNav />
    </>
  );
}
