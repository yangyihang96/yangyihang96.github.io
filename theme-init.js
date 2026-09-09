(() => {
  const darkThemeColor = "#0d1828";
  const lightThemeColor = "#f4f6f8";
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");

  const resolvedTheme = mediaQuery?.matches ? "dark" : "light";

  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;

  if (themeMeta) {
    themeMeta.setAttribute("content", resolvedTheme === "dark" ? darkThemeColor : lightThemeColor);
  }
})();
