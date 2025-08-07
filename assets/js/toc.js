document.addEventListener("DOMContentLoaded", () => {
  const tocList = document.getElementById("toc-list");
  const rightPanel = document.getElementById("rightPanel");
  const body = document.body;

  if (!tocList) return;

  // Your existing TOC generation logic...
  const includeH1 = document
    .querySelector('meta[name="toc-include-h1"]')
    ?.getAttribute("content") === "true";

  const mainContent = document.getElementById("mainContent");
  if (!mainContent) return;

  const selector = includeH1 ? "h1, h2, h3" : "h2, h3";
  const headings = mainContent.querySelectorAll(selector);

  let currentH2Li = null;
  headings.forEach(heading => {
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .trim()
        .replace(/[^\w]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }

    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;

    const li = document.createElement("li");
    li.className = heading.tagName.toLowerCase();
    li.appendChild(link);

    if (heading.tagName === "H2" || heading.tagName === "H1") {
      tocList.appendChild(li);
      currentH2Li = li;
    } else if (heading.tagName === "H3" && currentH2Li) {
      let subList = currentH2Li.querySelector("ul");
      if (!subList) {
        subList = document.createElement("ul");
        currentH2Li.appendChild(subList);
      }
      subList.appendChild(li);
    } else {
      tocList.appendChild(li);
    }
  });

  // **NEW**: Close right panel on mobile when any TOC link is clicked
  tocList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        rightPanel.classList.add("closed");
        body.classList.add("hide-right");
      }
    });
  });
});
