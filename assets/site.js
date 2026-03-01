// Mobile-friendly dropdown toggle (tap to open/close) for ALL dropdowns
(function () {
  function setOpen(dd, open) {
    dd.setAttribute("aria-expanded", String(open));
    const btn = dd.querySelector(".dropbtn");
    if (btn) btn.setAttribute("aria-expanded", String(open));
  }

  // Close all dropdowns
  function closeAll() {
    document.querySelectorAll(".dropdown").forEach((dd) => setOpen(dd, false));
  }

  // Initialize each dropdown
  document.querySelectorAll(".dropdown").forEach((dd) => {
    const btn = dd.querySelector(".dropbtn");
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dd.getAttribute("aria-expanded") === "true";
      closeAll();
      setOpen(dd, !isOpen);
    });

    dd.querySelectorAll(".menu a").forEach((a) => {
      a.addEventListener("click", () => setOpen(dd, false));
    });
  });

  // Click outside closes
  document.addEventListener("click", closeAll);

  // Escape closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
})();
