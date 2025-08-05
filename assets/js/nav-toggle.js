// assets/js/nav-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".collapsible-toggle").forEach(button => {
    const key = button.dataset.key;
    const content = button.nextElementSibling;
    const stored = localStorage.getItem(`nav-expanded-${key}`);

    // Restore saved state
    if (stored === "true") {
      button.setAttribute("aria-expanded", "true");
      content.classList.add("open");
    }

    // Toggle on click and save
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const newState = !isExpanded;

      button.setAttribute("aria-expanded", String(newState));
      content.classList.toggle("open", newState);
      localStorage.setItem(`nav-expanded-${key}`, String(newState));
    });
  });
});
