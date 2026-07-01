import Image from "next/image";
import { INFOBOX, PROFILE, InfoboxRow, InfoboxValue } from "@/content/profile";
import Tooltip from "./Tooltip";
import WikiLink from "./WikiLink";

type InfoboxProps = {
  /** Eager-load the portrait (use for the visible desktop rail instance only). */
  priority?: boolean;
  /** Cap the portrait width — used for the inline mobile copy. */
  compact?: boolean;
  /** Inside the mobile <details> wrapper: drop the outer frame + landmark. */
  embedded?: boolean;
};

/**
 * The infobox — the profile across four lenses (Personal / Cultural /
 * Biological / Legal) as an encyclopedia data panel. Rendered twice (desktop
 * rail + inline mobile copy), each shown at a single breakpoint; only the rail
 * copy is priority-loaded. See DESIGN_SPEC.md §4.3.
 */
export default function Infobox({
  priority = false,
  compact = false,
  embedded = false,
}: InfoboxProps) {
  const Frame = embedded ? "div" : "aside";

  return (
    <Frame
      {...(embedded ? {} : { "aria-label": "Profile summary" })}
      className="w-full text-sm leading-snug"
    >
      <div className={embedded ? "" : "border border-border-strong bg-surface-subtle"}>
        {/* Title bar */}
        <div className="border-b border-border-strong bg-surface-band px-2 py-2 text-center font-serif text-[1.1875rem] font-semibold text-text">
          {PROFILE.name}
        </div>

        {/* Portrait */}
        <div className="border-b border-border-strong p-2">
          <div className={compact ? "mx-auto max-w-[12rem]" : ""}>
            <Image
              src={PROFILE.image}
              alt={`Portrait of ${PROFILE.name}, ${PROFILE.imageCaption}`}
              width={700}
              height={933}
              priority={priority}
              sizes="(min-width: 1024px) 336px, 192px"
              className="h-auto w-full"
            />
          </div>
          <div className="mt-1 text-center text-xs text-muted">
            {PROFILE.imageCaption}
          </div>
        </div>

        <table className="w-full border-collapse">
          <caption className="sr-only">Profile summary of {PROFILE.name}</caption>
          <tbody>
            {INFOBOX.map((group) => (
              <GroupBlock key={group.heading} heading={group.heading} rows={group.rows} />
            ))}
          </tbody>
        </table>
      </div>
    </Frame>
  );
}

function GroupBlock({ heading, rows }: { heading: string; rows: InfoboxRow[] }) {
  // Omit any row whose values are all empty — no placeholder.
  const visible = rows.filter((r) => r.values.some((v) => v.text.trim() !== ""));
  if (visible.length === 0) return null;

  return (
    <>
      <tr>
        <th
          colSpan={2}
          scope="colgroup"
          className="border-y border-border-strong bg-surface-band px-2 py-1 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.04em] text-text"
        >
          {heading}
        </th>
      </tr>
      {visible.map((row) => (
        <Row key={row.label} label={row.label}>
          {row.values.map((v, i) => (
            <span key={i} className="block">
              <ValueCell value={v} />
            </span>
          ))}
        </Row>
      ))}
    </>
  );
}

function ValueCell({ value }: { value: InfoboxValue }) {
  if (value.href && value.note) {
    return (
      <Tooltip content={value.note} interactive>
        <WikiLink href={value.href}>{value.text}</WikiLink>
      </Tooltip>
    );
  }
  if (value.href) {
    return <WikiLink href={value.href}>{value.text}</WikiLink>;
  }
  if (value.note) {
    return <Tooltip content={value.note}>{value.text}</Tooltip>;
  }
  if (value.italic) {
    return <em className="font-serif text-text">{value.text}</em>;
  }
  return <>{value.text}</>;
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <tr className="border-b border-rule-soft align-top">
      <th
        scope="row"
        className="w-[34%] px-2 py-1.5 text-left font-semibold text-text"
      >
        {label}
      </th>
      <td className="px-2 py-1.5 tabular-nums [overflow-wrap:anywhere]">
        {children}
      </td>
    </tr>
  );
}
