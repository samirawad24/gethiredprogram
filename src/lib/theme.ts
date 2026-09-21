// Six design directions living side by side so they can be compared on the
// real site: the three from the original boards, then three premium ones.
// Pick one, then delete the rest (see "Choosing a theme" in README.md).

export const themes = [
  "classic",
  "bold",
  "minimal",
  "editorial",
  "product",
  "statement",
] as const;

export type Theme = (typeof themes)[number];
// The picker shows them in two groups: the first round of boards, and the
// premium directions that came after.
export const themeGroups = {
  original: ["classic", "bold", "minimal"],
  premium: ["editorial", "product", "statement"],
} as const satisfies Record<string, readonly Theme[]>;

export const defaultTheme: Theme = "classic";

// Read by the inline script in [lang]/layout.tsx and by ThemeSwitcher.
export const themeStorageKey = "ghp-theme";
export const themeQueryKey = "theme";

// Runs before the page paints, so there is no flash of the wrong design.
// Kept as a string because it is inlined into the HTML.
export const themeInitScript = `
(function(){
  try {
    var allowed = ${JSON.stringify(themes)};
    var fromUrl = new URLSearchParams(window.location.search).get(${JSON.stringify(themeQueryKey)});
    var theme = allowed.indexOf(fromUrl) > -1 ? fromUrl : window.localStorage.getItem(${JSON.stringify(themeStorageKey)});
    if (allowed.indexOf(theme) < 0) theme = ${JSON.stringify(defaultTheme)};
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(${JSON.stringify(themeStorageKey)}, theme);
    // Scroll reveals hide their elements only once this class is present, so
    // adding it here keeps them from flashing in before the observer runs.
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("js-motion");
    }
  } catch (e) {
    document.documentElement.setAttribute("data-theme", ${JSON.stringify(defaultTheme)});
  }
})();
`.trim();
