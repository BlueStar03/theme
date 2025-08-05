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

  headings.forEach(heading => {
    const id = heading.id || heading.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    heading.id = id;

    const li = document.createElement("li");
    li.className = heading.tagName.toLowerCase();
    
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = heading.textContent;

    li.appendChild(a);
    tocList.appendChild(li);
  });
});
