"use client";

import { usePathname } from "next/navigation";
import Infobox from "./Infobox";

/**
 * Inline infobox for phones (< lg): a native <details> so it needs zero JS to
 * collapse, costs no CLS, and gets keyboard/AT support for free. Open on the
 * Introduction page (where the profile is the point), collapsed on inner pages.
 */
export default function MobileInfobox() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <details
      open={isHome}
      className="group mb-5 border border-border-strong bg-surface-subtle lg:hidden"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between bg-surface-band px-3 py-2 text-sm font-semibold">
        <span>Quick facts</span>
        <span aria-hidden="true" className="text-muted transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <div className="p-2">
        <Infobox priority={false} compact embedded />
      </div>
    </details>
  );
}
