"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import type { Dictionary } from "@/dictionaries";
import { defaultTheme, themeQueryKey, themeStorageKey, themes, type Theme } from "@/lib/theme";

function getTheme(): Theme {
  const current = document.documentElement.getAttribute("data-theme");
  return themes.includes(current as Theme) ? (current as Theme) : defaultTheme;
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

// PREVIEW TOOL: floating picker so the three design directions can be compared
// on the live site. Delete this component and its <ThemeSwitcher /> in
// [lang]/page.tsx once a direction is chosen.
export default function ThemeSwitcher({ dict }: { dict: Dictionary }) {
  // Collapsed by default: expanded, it covers real content on a phone.
  const [open, setOpen] = useState(false);

  // data-theme on <html> is the source of truth: the inline script sets it
  // before paint, so read it back rather than keeping a second copy in state.
  const active = useSyncExternalStore(subscribe, getTheme, () => defaultTheme);

  const choose = useCallback((theme: Theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // Private browsing; the choice just will not stick between visits.
    }
    // Keep the URL shareable: /en/?theme=bold shows that design to anyone.
    const url = new URL(window.location.href);
    url.searchParams.set(themeQueryKey, theme);
    window.history.replaceState(null, "", url);
  }, []);

  const labels: Record<Theme, string> = {
    classic: dict.themePicker.classic,
    bold: dict.themePicker.bold,
    minimal: dict.themePicker.minimal,
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
      >
        {dict.themePicker.label}
      </button>
    );
  }

  return (
    <aside
      aria-label={dict.themePicker.label}
      className="fixed bottom-4 right-4 z-40 w-[15.5rem] rounded-xl bg-navy-deep/95 p-4 text-white shadow-2xl backdrop-blur"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {dict.themePicker.label}
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={dict.themePicker.hide}
          className="-mt-1 shrink-0 rounded px-1.5 text-lg leading-none text-white/60 hover:text-white"
        >
          &times;
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        {themes.map((theme) => (
          <button
            key={theme}
            type="button"
            onClick={() => choose(theme)}
            aria-pressed={active === theme}
            className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
              active === theme
                ? "bg-gold text-navy-deep"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {labels[theme]}
          </button>
        ))}
      </div>

      <p className="mt-3 text-xs leading-snug text-white/60">{dict.themePicker.note}</p>
    </aside>
  );
}
