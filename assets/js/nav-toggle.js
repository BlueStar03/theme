document.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.pathname;

  document.querySelectorAll(".collapsible-toggle").forEach(link => {
    const key       = link.dataset.key;
    const content   = link.nextElementSibling;
    const indexURL  = link.dataset.indexUrl;
    const savedOpen = localStorage.getItem(`nav-expanded-${key}`) === "true";

    // Restore state
    if (savedOpen) {
      link.setAttribute("aria-expanded", "true");
      content.classList.add("open");
    }

    link.addEventListener("click", (e) => {
      e.preventDefault();

      const isExpanded = link.getAttribute("aria-expanded") === "true";
      const onIndexPage = (currentURL === indexURL);

      if (!isExpanded) {
        // Expand + navigate
        link.setAttribute("aria-expanded", "true");
        content.classList.add("open");
        localStorage.setItem(`nav-expanded-${key}`, "true");
        window.location.href = indexURL;

      } else {
        if (!onIndexPage) {
          // Stay expanded, go to index
          window.location.href = indexURL;
        } else {
          // Collapse only
          link.setAttribute("aria-expanded", "false");
          content.classList.remove("open");
          localStorage.setItem(`nav-expanded-${key}`, "false");
        }
      }
    });
  });
});
