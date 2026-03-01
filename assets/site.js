// Mobile-friendly dropdown toggle (tap to open/close)
(function () {
  const dd = document.getElementById("winDropdown");
  const btn = document.getElementById("winBtn");
  if (!dd || !btn) return;

  function setOpen(open) {
    dd.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-expanded", String(open));
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = dd.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  document.addEventListener("click", () => setOpen(false));

  dd.querySelectorAll(".menu a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();
