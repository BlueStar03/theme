// assets/js/panel-toggle.js
const body = document.body;
const leftPanel  = document.getElementById('leftPanel');
const rightPanel = document.getElementById('rightPanel');

// Toggle left panel
document.getElementById('toggle-left')?.addEventListener('click', () => {
  const closed = leftPanel.classList.toggle('closed');
  body.classList.toggle('hide-left', closed);
});

// Toggle right panel
document.getElementById('toggle-right')?.addEventListener('click', () => {
  const closed = rightPanel.classList.toggle('closed');
  body.classList.toggle('hide-right', closed);
});

// Auto-collapse on small screens
function handleResponsivePanels() {
  if (window.innerWidth <= 768) {
    leftPanel.classList.add('closed');
    rightPanel.classList.add('closed');
    body.classList.add('hide-left');
    body.classList.add('hide-right');
  } else {
    leftPanel.classList.remove('closed');
    rightPanel.classList.remove('closed');
    body.classList.remove('hide-left');
    body.classList.remove('hide-right');
  }
}

window.addEventListener('load', handleResponsivePanels);
window.addEventListener('resize', handleResponsivePanels);
