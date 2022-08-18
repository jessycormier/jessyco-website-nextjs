/**
 * A function to initialize the theme before the page is loaded.
 */
(function initTheme() {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
})();
