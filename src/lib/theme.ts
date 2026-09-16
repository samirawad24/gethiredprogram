// Three design directions from the approved boards, living side by side so
// they can be compared on the real site. Pick one, then delete the other two
// (see "Choosing a theme" in README.md).

export const themes = ["classic", "bold", "minimal"] as const;
export type Theme = (typeof themes)[number];
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
  } catch (e) {
    document.documentElement.setAttribute("data-theme", ${JSON.stringify(defaultTheme)});
  }
})();
`.trim();
