// assets/js/panel-toggle.js

document.addEventListener("DOMContentLoaded", () => {
  const body        = document.body;
  const leftPanel   = document.getElementById("leftPanel");
  const rightPanel  = document.getElementById("rightPanel");
  const toggleLeft  = document.getElementById("toggle-left");
  const toggleRight = document.getElementById("toggle-right");
  const MOBILE_MAX  = 768;
  const isMobile    = window.innerWidth <= MOBILE_MAX;

  function applyState(panelEl, toggleBtn, storageKey, defaultOpen) {
    const stored = localStorage.getItem(storageKey);
    let open = defaultOpen;

    if (!isMobile && stored !== null) {
      open = stored === "true";
    } else if (isMobile) {
      open = false;
    }

    // Snap into place without animation
    panelEl.classList.toggle("closed", !open);
    body.classList.toggle(
      storageKey === "leftPanelOpen" ? "hide-left" : "hide-right",
      !open
    );
    toggleBtn.setAttribute("aria-expanded", String(open));
  }

  // 1) Snap panels into their saved state (no .transitions class yet)
  applyState(leftPanel,  toggleLeft,  "leftPanelOpen",  true);
  applyState(rightPanel, toggleRight, "rightPanelOpen", true);

  // 2) After a brief pause, enable transitions
  setTimeout(() => {
    body.classList.add("transitions");
  }, 100);

  // 3) Wire up toggles for interactive animations
  toggleLeft.addEventListener("click", () => {
    const isClosed = leftPanel.classList.toggle("closed");
    body.classList.toggle("hide-left", isClosed);
    const open = !isClosed;
    toggleLeft.setAttribute("aria-expanded", String(open));
    localStorage.setItem("leftPanelOpen", String(open));
  });

  toggleRight.addEventListener("click", () => {
    const isClosed = rightPanel.classList.toggle("closed");
    body.classList.toggle("hide-right", isClosed);
    const open = !isClosed;
    toggleRight.setAttribute("aria-expanded", String(open));
    localStorage.setItem("rightPanelOpen", String(open));
  });
});
