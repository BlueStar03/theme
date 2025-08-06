// assets/js/nav-toggle.js

document.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.pathname;

  document.querySelectorAll(".collapsible-toggle").forEach(el => {
    const key      = el.dataset.key;
    const content  = el.nextElementSibling;
    const indexURL = el.dataset.indexUrl;
    const saved    = localStorage.getItem(`nav-expanded-${key}`) === "true";

    // Restore saved open/closed state without animation
    if (saved) {
      el.setAttribute("aria-expanded", "true");
      content.classList.add("open");
    }

    // Handle clicks on the link or toggle
    el.addEventListener("click", e => {
      e.preventDefault();
      const isOpen  = el.getAttribute("aria-expanded") === "true";
      const onIndex = (currentURL === indexURL);

      if (!isOpen) {
        // Was collapsed → expand + navigate to the index page
        el.setAttribute("aria-expanded", "true");
        content.classList.add("open");
        localStorage.setItem(`nav-expanded-${key}`, "true");
        window.location.href = indexURL;

      } else if (!onIndex) {
        // Already expanded but on a deeper page → navigate to index
        window.location.href = indexURL;

      } else {
        // Expanded and already on index → collapse
        el.setAttribute("aria-expanded", "false");
        content.classList.remove("open");
        localStorage.setItem(`nav-expanded-${key}`, "false");
      }
    });
  });

  // Re-enable transitions after initial state restore
  document.body.classList.remove("no-transitions");
});
