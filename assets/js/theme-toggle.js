// assets/js/theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const root   = document.documentElement;
  const stored = localStorage.getItem("theme");

  // apply stored theme
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
    toggle.textContent = stored === "light" ? "🌙" : "☀️";
  }

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next    = current === "light" ? "dark" : "light";

    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    // swap icon
    toggle.textContent = next === "light" ? "🌙" : "☀️";
  });
});
