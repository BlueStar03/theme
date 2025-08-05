document.addEventListener("DOMContentLoaded", function () {
  const tocList = document.getElementById("toc-list");
  if (!tocList) return;

  const includeH1 = document
    .querySelector('meta[name="toc-include-h1"]')
    ?.getAttribute("content") === "true";

  const mainContent = document.getElementById("mainContent");
  if (!mainContent) return;

  const selector = includeH1 ? "h1, h2, h3" : "h2, h3";
  const headings = mainContent.querySelectorAll(selector);

  let currentH2Li = null;

  headings.forEach(heading => {
    const id = heading.id || heading.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    heading.id = id;

    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = heading.textContent;

    const li = document.createElement("li");
    li.className = heading.tagName.toLowerCase();
    li.appendChild(a);

    if (heading.tagName.toLowerCase() === "h2" || heading.tagName.toLowerCase() === "h1") {
      tocList.appendChild(li);
      currentH2Li = li;
    } else if (heading.tagName.toLowerCase() === "h3" && currentH2Li) {
      let subList = currentH2Li.querySelector("ul");
      if (!subList) {
        subList = document.createElement("ul");
        currentH2Li.appendChild(subList);
      }
      subList.appendChild(li);
    } else {
      tocList.appendChild(li); // fallback
    }
  });
});
