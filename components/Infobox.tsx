import Image from "next/image";
import { INFOBOX, PROFILE } from "@/content/profile";
import Tooltip from "./Tooltip";
import WikiLink from "./WikiLink";

/**
 * The right-rail infobox — the visual heart of the "Wikipedia about me" idea.
 * Renders the profile across four lenses (Personal / Cultural / Biological /
 * Legal) as a summary card, like the biography box on a real Wikipedia article.
 */
export default function Infobox() {
  return (
    <aside className="w-full text-[0.84rem] leading-snug" aria-label="Profile summary">
      <div className="border border-infoboxborder bg-infobox">
        <div className="border-b border-infoboxborder bg-[#eaecf0] px-2 py-2 text-center font-serif text-[1.05rem] font-bold">
          {PROFILE.name}
        </div>

        {/* Portrait */}
        <div className="border-b border-infoboxborder p-2">
          <Image
            src={PROFILE.image}
            alt={`Portrait of ${PROFILE.name}`}
            width={700}
            height={933}
            priority
            className="h-auto w-full"
          />
          <div className="mt-1 text-center text-[0.78rem] text-[#54595d]">
            {PROFILE.imageCaption}
          </div>
        </div>

        <table className="w-full border-collapse">
          <tbody>
            {INFOBOX.map((group) => (
              <GroupBlock key={group.heading} heading={group.heading} rows={group.rows} />
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
}

function GroupBlock({
  heading,
  rows,
}: {
  heading: string;
  rows: { label: string; values: { text: string; href?: string; note?: string }[] }[];
}) {
  return (
    <>
      <tr>
        <th
          colSpan={2}
          className="border-y border-infoboxborder bg-[#eaecf0] px-2 py-1 text-center font-bold"
        >
          {heading}
        </th>
      </tr>
      {rows.map((row) => (
        <Row key={row.label} label={row.label}>
          {row.values.map((v, i) => (
            <span key={i} className="block">
              <ValueCell text={v.text} href={v.href} note={v.note} />
            </span>
          ))}
        </Row>
      ))}
    </>
  );
}

function ValueCell({ text, href, note }: { text: string; href?: string; note?: string }) {
  const body = href ? <WikiLink href={href}>{text}</WikiLink> : <>{text}</>;
  if (note) {
    return (
      <Tooltip content={note}>
        <span className="cursor-help border-b border-dotted border-[#72777d]">
          {body}
        </span>
      </Tooltip>
    );
  }
  return body;
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <tr className="border-b border-[#eaecf0] align-top">
      <th className="w-[34%] px-2 py-1.5 text-left font-bold text-[#202122]">{label}</th>
      <td className="px-2 py-1.5">{children}</td>
    </tr>
  );
}
