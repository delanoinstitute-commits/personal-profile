"use client";

import { ReactNode, useId, useState } from "react";

/**
 * A lightweight hover/focus tooltip used for reference previews and infobox
 * glosses — mimics Wikipedia's "Reference Tooltips" gadget.
 */
export default function Tooltip({
  children,
  content,
}: {
  children: ReactNode;
  content: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span aria-describedby={open ? id : undefined}>{children}</span>
      {open && (
        <span
          role="tooltip"
          id={id}
          className="absolute left-1/2 top-full z-30 mt-1 w-64 -translate-x-1/2 rounded border border-infoboxborder bg-white px-3 py-2 text-[0.82rem] font-normal leading-snug text-[#202122] shadow-lg"
        >
          {content}
        </span>
      )}
    </span>
  );
}
