// Scroll-reveal for content blocks, and a "scrolled" flag for the header.
// Content stays visible if this script never runs: hiding only applies under html.motion.
(function () {
  var root = document.documentElement;

  function onScroll() {
    root.classList.toggle("scrolled", window.scrollY > 80);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Visitors who ask for reduced motion still get a plain fade; the CSS drops the movement.
  if (!("IntersectionObserver" in window)) return;

  var selectors = [
    ".article-content > *",
    "article.isolate section.prose > *",
    ".grid-balance > *",
    "ol.border-s-2 > li",
    ".publication",
    ".gallery figure",
  ];
  var targets = [];
  document.querySelectorAll(selectors.join(",")).forEach(function (el) {
    if (el.closest(".grid-balance") && !el.parentElement.classList.contains("grid-balance")) return;
    if (targets.indexOf(el) === -1) targets.push(el);
  });

  // Stagger siblings in grids so cards arrive one after another.
  targets.forEach(function (el) {
    var parent = el.parentElement;
    if (parent && (parent.classList.contains("grid-balance") || parent.classList.contains("gallery"))) {
      var i = Array.prototype.indexOf.call(parent.children, el);
      el.style.setProperty("--reveal-delay", Math.min(i, 6) * 90 + "ms");
    }
    el.classList.add("reveal");
  });
  root.classList.add("motion");

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  targets.forEach(function (el) {
    io.observe(el);
  });
})();
