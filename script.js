// ===== Current year in footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Header shadow on scroll =====
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => nav.classList.toggle("is-open"));
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => nav.classList.remove("is-open"))
);

// ===== Toast helper =====
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

// ===== Form handling =====
// NOTE: This is a front-end demo handler. To receive real leads, point
// `LEAD_ENDPOINT` at your backend / form service (e.g. Formspree, Resend
// serverless function, etc.) or wire up email delivery.
const LEAD_ENDPOINT = "https://brc-lead-api.onrender.com/api/lead";

async function handleLead(form, e) {
  e.preventDefault();

  // Basic validation
  const required = form.querySelectorAll("[required]");
  for (const field of required) {
    if (!field.value.trim()) {
      field.focus();
      field.style.borderColor = "#e04f4f";
      showToast("Please fill in all required fields.");
      return;
    }
    field.style.borderColor = "";
  }

  const data = Object.fromEntries(new FormData(form).entries());
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  try {
    if (LEAD_ENDPOINT) {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
    } else {
      // Demo fallback: log the lead and simulate success
      console.log("Lead captured (no endpoint configured):", data);
      await new Promise((r) => setTimeout(r, 600));
    }
    form.reset();
    showToast("Thanks! We'll contact you within 24 hours. 🛁");
  } catch (err) {
    showToast("Sorry, something went wrong. Please call (312) 555-0199.");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

["heroForm", "contactForm"].forEach((id) => {
  const form = document.getElementById(id);
  if (form) form.addEventListener("submit", (e) => handleLead(form, e));
});
