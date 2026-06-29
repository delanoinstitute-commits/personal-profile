import { INFOBOX, PROFILE } from "@/content/profile";
import Tooltip from "./Tooltip";
import WikiLink from "./WikiLink";

/**
 * The right-rail infobox — the visual heart of the "Wikipedia about me" idea.
 * Renders the inherited profile (Legal / Cultural / Biological) as a summary
 * card, just like the biography box on a real Wikipedia article.
 */
export default function Infobox() {
  const monogram = PROFILE.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <aside className="w-full text-[0.84rem] leading-snug" aria-label="Profile summary">
      <div className="border border-infoboxborder bg-infobox">
        <div className="border-b border-infoboxborder bg-[#eaecf0] px-2 py-2 text-center font-serif text-[1.05rem] font-bold">
          {PROFILE.name}
        </div>

        {/* Portrait — falls back to a monogram tile if no image present. */}
        <div className="flex flex-col items-center border-b border-infoboxborder px-2 py-3">
          <PortraitOrMonogram monogram={monogram} />
          <div className="mt-1 text-center text-[0.78rem] text-[#54595d]">
            {PROFILE.imageCaption}
          </div>
        </div>

        <table className="w-full border-collapse">
          <tbody>
            {/* Quick header rows */}
            <Row label="Born">
              {PROFILE.born}
              <br />
              <span className="text-[#54595d]">{PROFILE.bornPlace}</span>
            </Row>
            <Row label="Occupations">
              {PROFILE.occupations.join(" · ")}
            </Row>

            {INFOBOX.map((group) => (
              <GroupBlock key={group.heading} heading={group.heading} rows={group.rows} />
            ))}
          </tbody>
        </table>

        <div className="border-t border-infoboxborder px-2 py-2 text-center text-[0.76rem] text-[#54595d]">
          <WikiLink href="/inherited-profile">Full inherited profile →</WikiLink>
        </div>
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

function PortraitOrMonogram({ monogram }: { monogram: string }) {
  // Pure-CSS monogram tile. Drop a real photo at public/portrait.jpg and swap
  // this for an <Image>; kept dependency-free for the initial structure.
  return (
    <div className="flex h-40 w-32 items-center justify-center border border-infoboxborder bg-gradient-to-b from-[#e7efed] to-[#d4e3e0]">
      <span className="font-serif text-4xl text-accent">{monogram}</span>
    </div>
  );
}
