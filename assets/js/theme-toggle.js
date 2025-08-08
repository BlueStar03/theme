// assets/js/theme-toggle.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const root   = document.documentElement;
  const stored = localStorage.getItem("theme");

  // Apply stored theme (if any)
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
    // Swap icon: moon for light (meaning you can switch to dark), sun for dark
    toggle.textContent = stored === "light" ? "🌙" : "☀️";
  }

  // On click, toggle between light and dark
  toggle.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    const next    = isLight ? "dark" : "light";

    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    // Update toggle icon
    toggle.textContent = next === "light" ? "🌙" : "☀️";
  });
});
