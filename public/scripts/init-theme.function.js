/**
 * A function to initialize the theme before the page is loaded.
 * This prevents the flashing effect of the dark theme being applied when 
 * the page is loaded.
 */
(function initTheme() {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
})();
