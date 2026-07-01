import Image from "next/image";
import { INFOBOX, PROFILE, InfoboxGroup, InfoboxValue } from "@/content/profile";
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

// All groups collapse (native <details>). Personal defaults open (it's the
// hook); Cultural and Legal default collapsed.
const DEFAULT_OPEN = new Set(["Personal"]);

/**
 * The infobox — the profile across three lenses (Personal / Cultural / Legal)
 * as an encyclopedia data panel. Rows are a semantic description list; Cultural
 * and Legal are native <details> collapsibles (zero-JS, keyboard/AT friendly,
 * no CLS). Rendered twice (desktop rail + inline mobile copy); only the rail
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

        {INFOBOX.map((group) => (
          <Group
            key={group.heading}
            group={group}
            defaultOpen={DEFAULT_OPEN.has(group.heading)}
          />
        ))}
      </div>
    </Frame>
  );
}

function Group({ group, defaultOpen }: { group: InfoboxGroup; defaultOpen: boolean }) {
  // Omit any row whose values are all empty — no placeholder.
  const visible = group.rows.filter((r) => r.values.some((v) => v.text.trim() !== ""));
  if (visible.length === 0) return null;

  return (
    <details className="infobox-details" open={defaultOpen}>
      <summary className="infobox-heading">
        {group.heading}
        <span className="chevron" aria-hidden="true">
          ▾
        </span>
      </summary>
      <dl className="infobox-dl">
        {visible.map((row) => (
          <div className="infobox-row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>
              {row.values.map((v, i) => (
                <span key={i} className="block">
                  <ValueCell value={v} />
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </details>
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
