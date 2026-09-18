"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = { href: string; label: string; current: boolean };

type Props = {
  links: NavLink[];
  bookHref: string;
  bookLabel: string;
  openLabel: string;
  closeLabel: string;
};

// Four pages cannot hide behind a hamburger that does not exist, so phones get
// a real menu. Desktop uses the inline nav in Header and never renders this.
export default function MobileNav({ links, bookHref, bookLabel, openLabel, closeLabel }: Props) {
  const [open, setOpen] = useState(false);

  // Escape closes it, and the page behind must not scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy"
      >
        <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-navy-deep text-white">
          <div className="flex h-16 items-center justify-end px-5">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={closeLabel}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/25"
            >
              <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-5 pt-4">
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
      )}
    </div>
  );
}
