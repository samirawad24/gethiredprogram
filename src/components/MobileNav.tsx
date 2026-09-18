"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type NavLink = { href: string; label: string; current: boolean };

type Props = {
  links: NavLink[];
  bookHref: string;
  bookLabel: string;
  openLabel: string;
  closeLabel: string;
};

// Lock the page behind the menu. Setting overflow:hidden on <body> is not
// enough on iOS Safari, which happily scrolls it anyway, so pin the body and
// put the scroll position back on close.
function lockScroll(y: number) {
  const { body } = document;
  body.style.position = "fixed";
  body.style.top = `-${y}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";

  return () => {
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    window.scrollTo({ top: y, behavior: "instant" });
  };
}

// Four pages cannot hide behind a hamburger that does not exist, so phones get
// a real menu. Desktop uses the inline nav in Header and never renders this.
export default function MobileNav({ links, bookHref, bookLabel, openLabel, closeLabel }: Props) {
  const [open, setOpen] = useState(false);
  const scrollY = useRef(0);

  const openMenu = useCallback(() => {
    scrollY.current = window.scrollY;
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const unlock = lockScroll(scrollY.current);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      unlock();
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // The header sets backdrop-blur, and backdrop-filter makes an element the
  // containing block for its fixed descendants. Rendered in place, this panel
  // would be pinned to the 64px header instead of the viewport, so it goes
  // through a portal to <body> where nothing can trap it.
  const panel = (
    <div className="fixed inset-0 z-[70] flex flex-col bg-navy-deep text-white">
      <div className="flex h-16 items-center justify-end px-5 sm:h-[4.5rem]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={closeLabel}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/25"
        >
          <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <nav aria-label={openLabel} className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 pb-10 pt-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            aria-current={link.current ? "page" : undefined}
            className={`border-b border-white/10 py-4 font-serif text-2xl ${
              link.current ? "text-gold" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href={bookHref}
          onClick={() => setOpen(false)}
          className="btn btn--primary mt-8 self-start"
        >
          {bookLabel}
        </Link>
      </nav>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={openMenu}
        aria-label={openLabel}
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy"
      >
        <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open && createPortal(panel, document.body)}
    </div>
  );
}
