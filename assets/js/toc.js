// assets/js/toc.js

document.addEventListener("DOMContentLoaded", () => {
  const tocList    = document.getElementById("toc-list");
  const rightPanel = document.getElementById("rightPanel");
  const body       = document.body;
  if (!tocList) return;

  // Determine whether to include <h1> in the TOC based on a meta tag
  const includeH1Meta = document.querySelector('meta[name="toc-include-h1"]');
  const includeH1     = includeH1Meta && includeH1Meta.getAttribute("content") === "true";
  const selector      = includeH1 ? "h1, h2, h3" : "h2, h3";

  const mainContent = document.getElementById("mainContent");
  if (!mainContent) return;

  let currentSectionLi = null;

  // Build the TOC
  mainContent.querySelectorAll(selector).forEach(heading => {
    // Ensure each heading has an ID
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
      currentSectionLi = li;
    } else if (heading.tagName === "H3" && currentSectionLi) {
      let subList = currentSectionLi.querySelector("ul");
      if (!subList) {
        subList = document.createElement("ul");
        currentSectionLi.appendChild(subList);
      }
      subList.appendChild(li);
    } else {
      tocList.appendChild(li);
    }
  });

  // On mobile, close the right panel when a TOC link is clicked
  tocList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        rightPanel.classList.add("closed");
        body.classList.add("hide-right");
      }
    });
  });
});
