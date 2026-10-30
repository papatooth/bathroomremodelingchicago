// Shared site script: nav, lightbox, lead-form handling. Used on all pages.
(function () {
  // --- Footer year ---
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Header shadow on scroll ---
  var header = document.getElementById("header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 10); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // --- Mobile nav toggle ---
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () { nav.classList.toggle("is-open"); });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { nav.classList.remove("is-open"); });
    });
  }

  // --- Toast ---
  function showToast(message) {
    var toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(function () { toast.classList.add("is-visible"); });
    setTimeout(function () { toast.classList.remove("is-visible"); }, 4200);
  }

  // --- Lead form handling (any form with [data-lead]) ---
  var LEAD_ENDPOINT = "https://brc-lead-api.onrender.com/api/lead";
  function handleLead(form, e) {
    e.preventDefault();
    var required = form.querySelectorAll("[required]");
    for (var i = 0; i < required.length; i++) {
      if (!required[i].value.trim()) {
        required[i].focus();
        required[i].style.borderColor = "#e04f4f";
        showToast("Please fill in all required fields.");
        return;
      }
      required[i].style.borderColor = "";
    }
    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = v; });
    var btn = form.querySelector('button[type="submit"]');
    var original = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.textContent = "Sending..."; }
    fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    })
      .then(function (res) { if (!res.ok) throw new Error("bad status"); return res.json(); })
      .then(function () { form.reset(); showToast("Thanks! We'll contact you within 24 hours."); })
      .catch(function () { showToast("Sorry, something went wrong. Please call (312) 555-0199."); })
      .finally(function () { if (btn) { btn.disabled = false; btn.textContent = original; } });
  }
  document.querySelectorAll("form[data-lead]").forEach(function (form) {
    form.addEventListener("submit", function (e) { handleLead(form, e); });
  });

  // --- Lightbox for any .masonry__item (and [data-lightbox]) ---
  var items = Array.prototype.slice.call(document.querySelectorAll(".masonry__item, [data-lightbox]"));
  if (!items.length) return;

  var sources = items.map(function (el) {
    var img = el.tagName === "IMG" ? el : el.querySelector("img");
    return { full: el.getAttribute("data-full") || (img ? img.src : ""), alt: img ? img.alt : "" };
  });

  var box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML =
    '<button class="lightbox__close" aria-label="Close">&times;</button>' +
    '<button class="lightbox__nav lightbox__nav--prev" aria-label="Previous">&#8249;</button>' +
    '<img alt="" />' +
    '<button class="lightbox__nav lightbox__nav--next" aria-label="Next">&#8250;</button>';
  document.body.appendChild(box);

  var boxImg = box.querySelector("img");
  var current = 0;
  function show(i) { current = (i + sources.length) % sources.length; boxImg.src = sources[current].full; boxImg.alt = sources[current].alt; }
  function open(i) { show(i); box.classList.add("is-open"); document.body.style.overflow = "hidden"; }
  function close() { box.classList.remove("is-open"); document.body.style.overflow = ""; }

  items.forEach(function (el, i) { el.addEventListener("click", function (e) { e.preventDefault(); open(i); }); });
  box.querySelector(".lightbox__close").addEventListener("click", close);
  box.querySelector(".lightbox__nav--prev").addEventListener("click", function () { show(current - 1); });
  box.querySelector(".lightbox__nav--next").addEventListener("click", function () { show(current + 1); });
  box.addEventListener("click", function (e) { if (e.target === box) close(); });
  document.addEventListener("keydown", function (e) {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
})();
