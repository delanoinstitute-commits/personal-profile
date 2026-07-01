"use client";

import { ReactNode, useEffect, useId, useRef, useState } from "react";

/**
 * Accessible hover/focus tooltip (WCAG 1.4.13): opens on hover and focus,
 * dismissable with Esc without moving the pointer, and persistent via a hover
 * bridge (the pointer can move onto the tooltip). On touch it is tap-to-toggle.
 *
 * - Plain-text glosses render a focusable <button> trigger (dotted underline).
 * - When `interactive`, the trigger wraps an already-focusable child (a link);
 *   focus/blur bubble from the child, so no extra tab stop is added.
 */
export default function Tooltip({
  children,
  content,
  interactive = false,
}: {
  children: ReactNode;
  content: ReactNode;
  interactive?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<"top" | "bottom">("bottom");
  const id = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLSpanElement>(null);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // Flip above the trigger when there isn't room below (e.g. a bottom row of
    // the infobox, where opening downward would be clipped by the scroll rail).
    const rect = wrapRef.current?.getBoundingClientRect();
    if (rect) {
      const spaceBelow = window.innerHeight - rect.bottom;
      setPlacement(spaceBelow < 150 && rect.top > 120 ? "top" : "bottom");
    }
    setOpen(true);
  };
  const scheduleHide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  // Esc to dismiss; outside tap (touch) to close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const bubble = (
    <span
      role="tooltip"
      id={id}
      onMouseEnter={show}
      onMouseLeave={scheduleHide}
      className={`absolute left-1/2 z-50 w-64 max-w-[80vw] -translate-x-1/2 rounded border border-border-strong bg-paper px-3 py-2 text-[0.82rem] font-normal leading-snug text-text shadow-overlay ${
        placement === "top" ? "bottom-full mb-1" : "top-full mt-1"
      }`}
    >
      {content}
    </span>
  );

  if (interactive) {
    // Child is already focusable (a link); rely on bubbling focus/blur.
    return (
      <span
        ref={wrapRef}
        className="relative inline-block"
        onMouseEnter={show}
        onMouseLeave={scheduleHide}
        onFocus={show}
        onBlur={scheduleHide}
      >
        <span aria-describedby={open ? id : undefined}>{children}</span>
        {open && bubble}
      </span>
    );
  }

  return (
    <span ref={wrapRef} className="relative inline-block">
      <button
        type="button"
        aria-describedby={open ? id : undefined}
        aria-expanded={open}
        onMouseEnter={show}
        onMouseLeave={scheduleHide}
        onFocus={show}
        onBlur={scheduleHide}
        onClick={() => (open ? setOpen(false) : show())}
        className="cursor-help border-b border-dotted border-muted-2 text-left"
      >
        {children}
      </button>
      {open && bubble}
    </span>
  );
}
