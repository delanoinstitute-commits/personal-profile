import { ReactNode } from "react";
import MobileInfobox from "./MobileInfobox";

/**
 * The article title block: the big serif H1 over a single hairline rule —
 * the same rule that nests each zone below. The horizontal SectionNav is
 * retired: with every band collapsed the pages are short enough to scan,
 * so the title and one line carry the head.
 */
export default function PageHeading({
  title,
  hatnote,
}: {
  title: string;
  hatnote?: ReactNode;
}) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        {hatnote && <div className="hatnote">{hatnote}</div>}
      </div>
      <hr className="title-rule" />
      <MobileInfobox />
    </>
  );
}
