// assets/js/panel-toggle.js

document.addEventListener("DOMContentLoaded", () => {
  const body        = document.body;
  const leftPanel   = document.getElementById("leftPanel");
  const rightPanel  = document.getElementById("rightPanel");
  const toggleLeft  = document.getElementById("toggle-left");
  const toggleRight = document.getElementById("toggle-right");

  // Toggle Left Panel
  toggleLeft.addEventListener("click", () => {
    // Toggle the 'closed' class on the panel
    const isClosed = leftPanel.classList.toggle("closed");
    // If closed, add 'hide-left' to body (so main content stays put), else remove it
    body.classList.toggle("hide-left", isClosed);
  });

  // Toggle Right Panel
  toggleRight.addEventListener("click", () => {
    const isClosed = rightPanel.classList.toggle("closed");
    body.classList.toggle("hide-right", isClosed);
  });
});
