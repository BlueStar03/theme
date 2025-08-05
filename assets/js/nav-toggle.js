document.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.pathname;

  document.querySelectorAll(".collapsible-toggle").forEach(button => {
    const key = button.dataset.key;
    const content = button.nextElementSibling;
    const indexURL = button.dataset.indexUrl;

    const isExpanded = localStorage.getItem(`nav-expanded-${key}`) === "true";

    // Initial state
    if (isExpanded) {
      button.setAttribute("aria-expanded", "true");
      content.classList.add("open");
    }

    button.addEventListener("click", (e) => {
      const currentlyExpanded = button.getAttribute("aria-expanded") === "true";
      const isOnIndex = currentURL === indexURL;

      if (!currentlyExpanded) {
        // Expand and navigate to index
        button.setAttribute("aria-expanded", "true");
        content.classList.add("open");
        localStorage.setItem(`nav-expanded-${key}`, "true");
        window.location.href = indexURL;
      } else {
        if (!isOnIndex) {
          // Stay expanded and go to index
          window.location.href = indexURL;
        } else {
          // Collapse
          button.setAttribute("aria-expanded", "false");
          content.classList.remove("open");
          localStorage.setItem(`nav-expanded-${key}`, "false");
        }
      }
    });
  });
});
