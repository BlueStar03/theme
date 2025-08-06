document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname;

  document.querySelectorAll(".collapsible-toggle").forEach(el => {
    const key      = el.dataset.key;
    const content  = el.nextElementSibling;
    const indexURL = el.dataset.indexUrl;
    const open     = localStorage.getItem(`nav-expanded-${key}`) === "true";

    // restore
    if (open) {
      el.setAttribute("aria-expanded", "true");
      content.classList.add("open");
    }

    el.addEventListener("click", e => {
      e.preventDefault();
      const isOpen   = el.getAttribute("aria-expanded") === "true";
      const onIndex  = (current === indexURL);

      if (!isOpen) {
        // expand + go to index
        el.setAttribute("aria-expanded", "true");
        content.classList.add("open");
        localStorage.setItem(`nav-expanded-${key}`, "true");
        location.href = indexURL;
      } else if (!onIndex) {
        // already open, just navigate
        location.href = indexURL;
      } else {
        // collapse
        el.setAttribute("aria-expanded", "false");
        content.classList.remove("open");
        localStorage.setItem(`nav-expanded-${key}`, "false");
      }
    });
  });
});
