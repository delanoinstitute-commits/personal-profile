import Link from "next/link";
import { ReactNode } from "react";

/**
 * A Wikipedia-style hyperlink. Internal links (starting with "/" or "#") use
 * the Next router; everything else is treated as an external link and gets the
 * little ↗ affordance.
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
  const cls = `wikilink ${isInternal ? "" : "external"} ${className}`.trim();

  if (isInternal) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
}
