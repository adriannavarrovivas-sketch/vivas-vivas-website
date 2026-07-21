// ===== Mobile nav toggle =====
(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // close menu after clicking a link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();

// ===== Footer year =====
(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// ===== Scroll reveal =====
(function () {
  if (!document.documentElement.classList.contains("js-anim")) return;
  const targets = document.querySelectorAll(
    ".section-head, .grid-2 > div, .card, .attorney, .stat, .attorney-featured, .profile, .contact-wrap"
  );
  if (!("IntersectionObserver" in window) || !targets.length) {
    targets.forEach(function (el) { el.classList.add("in-view"); });
    return;
  }
  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach(function (el) { io.observe(el); });
})();
