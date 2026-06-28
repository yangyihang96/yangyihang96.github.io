(() => {
  const storageKey = "siteTheme";
  const darkThemeColor = "#0d1716";
  const lightThemeColor = "#f4f7f4";
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");

  const getPreference = () => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      return stored === "dark" || stored === "light" ? stored : null;
    } catch {
      return null;
    }
  };

  const resolvedTheme = getPreference() || (mediaQuery?.matches ? "dark" : "light");

  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;

  if (themeMeta) {
    themeMeta.setAttribute("content", resolvedTheme === "dark" ? darkThemeColor : lightThemeColor);
  }
})();
