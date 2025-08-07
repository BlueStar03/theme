// assets/js/scroll-top.js
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("header h1");
  const main  = document.getElementById("mainContent");
  if (!title || !main) return;

  // show pointer cursor
  title.style.cursor = "pointer";

  title.addEventListener("click", () => {
    main.scrollTo({ top: 0, behavior: "smooth" });
  });
});
