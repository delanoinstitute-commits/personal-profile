import Link from "next/link";
import { ReactNode } from "react";

/**
 * A Wikipedia-style hyperlink. Internal links ("/" or "#") use the Next router;
 * mailto: is chrome (no new tab, no glyph); everything else is external — new
 * tab, rel="noopener", a decorative ↗, and an sr-only "opens in a new tab" hint.
 */
export default function WikiLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const isMailto = href.startsWith("mailto:");

  if (isInternal) {
    return (
      <Link href={href} className={`wikilink ${className}`.trim()}>
        {children}
      </Link>
    );
  }

  if (isMailto) {
    return (
      <a href={href} className={`wikilink ${className}`.trim()}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`wikilink external ${className}`.trim()}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
