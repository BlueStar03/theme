// assets/js/toc.js

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const tocList = document.getElementById('toc-list');

  if (!main || !tocList) return;

  const headings = main.querySelectorAll('h2, h3');

  headings.forEach(heading => {
    // Ensure the heading has an ID
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .trim()
        .replace(/[^\w]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;

    const li = document.createElement('li');
    li.appendChild(link);

    // Add a class based on heading level
    if (heading.tagName === 'H3') {
      li.classList.add('sub');
    }

    tocList.appendChild(li);
  });
});
