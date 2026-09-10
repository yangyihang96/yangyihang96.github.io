(() => {
  // Reserve the enhanced header layout before the deferred script arrives.
  const pageRoot = document.documentElement;
  pageRoot.classList.add("js-pending");
  document.addEventListener("DOMContentLoaded", () => {
    // A missing or failed main script must fall back to readable native navigation.
    if (pageRoot.classList.contains("js-pending")) {
      pageRoot.classList.remove("js-pending", "js-ready");
    }
  }, { once: true });
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
