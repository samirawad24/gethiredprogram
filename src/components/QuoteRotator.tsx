"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/dictionaries";

type Props = { testimonials: Dictionary["testimonials"] };

// The home page's testimonials, one at a time, right under the hero. Changes
// only when the visitor asks: the arrows, or the marks beside them. Every quote
// sits in the same grid cell; the stack eases to the height of the one showing,
// so a short quote leaves no hole and a long one never gets cut off.
export default function QuoteRotator({ testimonials }: Props) {
  const quotes = [testimonials.featured, ...testimonials.items];
  const [active, setActive] = useState(0);
  const go = (index: number) => setActive((index + quotes.length) % quotes.length);
  const stack = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  // Track the showing quote's height, including when the window resizes and
  // its lines rewrap. Before this runs (no JS) the stack is as tall as the
  // longest quote, which is still correct, just roomier.
  useEffect(() => {
    const slide = stack.current?.children[active] as HTMLElement | undefined;
    if (!slide) return;
    const measure = () => setHeight(slide.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(slide);
    return () => observer.disconnect();
  }, [active]);

  return (
    <section aria-labelledby="quotes-heading" aria-roledescription="carousel" className="shell">
      <hr className="hairline" />
      <div className="quote-band" data-reveal>
        <div>
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 id="quotes-heading" className="serif h-band" style={{ marginTop: "calc(12 * var(--u))" }}>
            {testimonials.heading}
          </h2>
          {testimonials.translatedNote && (
            <p className="text-caption" style={{ marginTop: "calc(12 * var(--u))" }}>
              {testimonials.translatedNote}
            </p>
          )}
        </div>

        <div>
          <div ref={stack} className="quote-band__stack" aria-live="polite" style={{ height }}>
            {quotes.map((item, index) => (
              <figure
                key={item.name}
                className="quote-band__slide"
                data-active={index === active || undefined}
                aria-hidden={index !== active}
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${quotes.length}`}
              >
                <blockquote className="quote quote--band">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="text-small" style={{ marginTop: "calc(16 * var(--u))" }}>
                  <span className="font-medium text-navy">{item.name}</span>
                  <span aria-hidden="true"> · </span>
                  {item.role}
                </figcaption>
              </figure>
            ))}
          </div>

        </div>

        <div className="quote-band__controls">
          <button type="button" className="quote-band__arrow" onClick={() => go(active - 1)} aria-label={testimonials.prev}>
            <svg viewBox="0 0 24 24" aria-hidden className="h-[1.1em] w-[1.1em]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button type="button" className="quote-band__arrow" onClick={() => go(active + 1)} aria-label={testimonials.next}>
            <svg viewBox="0 0 24 24" aria-hidden className="h-[1.1em] w-[1.1em]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <ul className="quote-band__marks">
            {quotes.map((item, index) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => go(index)}
                  aria-label={`${testimonials.goTo} ${item.name}`}
                  aria-current={index === active || undefined}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
