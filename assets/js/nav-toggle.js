document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".collapsible-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !expanded);
      button.nextElementSibling.classList.toggle("open");
    });
  });
});
