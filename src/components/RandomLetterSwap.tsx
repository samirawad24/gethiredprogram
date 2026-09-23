"use client";

import { useCallback, useRef, type CSSProperties } from "react";

type Props = {
  label: string;
  className?: string;
  /** Seconds between each letter starting its swap. */
  staggerDuration?: number;
  /** Seconds for one letter to travel. */
  duration?: number;
  /** Letters roll downward when true, upward when false. */
  reverse?: boolean;
};

// Each letter sits above a duplicate of itself. On hover the pair rolls by one
// line, in a random order, so the word appears to glitch and resettle.
//
// The original 21st.dev component drives this with motion/react. This repo has
// no animation library on purpose (see MotionProvider), so the movement is a
// CSS transition and the only JS is the random order and the reset.
//
// The order is picked in the hover handler rather than during render: a random
// value in render would differ between the server and the client and break
// hydration.
export default function RandomLetterSwap({
  label,
  className = "",
  staggerDuration = 0.025,
  duration = 0.6,
  reverse = true,
}: Props) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const running = useRef(false);

  const start = useCallback(() => {
    const root = rootRef.current;
    if (!root || running.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    running.current = true;

    const cells = Array.from(
      root.querySelectorAll<HTMLElement>("[data-cell]"),
    );

    // Reshuffled every hover, which is what makes it read as a glitch rather
    // than a wave.
    const order = cells.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }

    order.forEach((cellIndex, position) => {
      cells[cellIndex].style.setProperty(
        "--letter-delay",
        `${position * staggerDuration}s`,
      );
    });

    root.setAttribute("data-swapping", "");

    window.setTimeout(
      () => {
        // Snap back with transitions off, so it does not play in reverse.
        root.setAttribute("data-resetting", "");
        root.removeAttribute("data-swapping");
        void root.offsetWidth;
        root.removeAttribute("data-resetting");
        running.current = false;
      },
      (duration + cells.length * staggerDuration) * 1000,
    );
  }, [duration, staggerDuration]);

  return (
    <span
      ref={rootRef}
      className={`letter-swap ${className}`}
      data-reverse={reverse ? "" : undefined}
      onPointerEnter={start}
      onFocus={start}
      style={{ "--letter-duration": `${duration}s` } as CSSProperties}
    >
      {/* The visible letters are hidden from assistive tech, so the word is
          announced once, normally. */}
      <span className="sr-only">{label}</span>
      {label.split("").map((character, i) => (
        <span
          aria-hidden="true"
          className="letter-swap__cell"
          data-cell
          key={`${character}-${i}`}
        >
          <span className="letter-swap__face">
            {character === " " ? " " : character}
          </span>
          <span className="letter-swap__face letter-swap__face--next">
            {character === " " ? " " : character}
          </span>
        </span>
      ))}
    </span>
  );
}
