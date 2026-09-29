window.PORTFOLIO_LINKS = {
  github: "https://github.com/addn2030-svg",
  linkedin: "https://www.linkedin.com/in/abdulrahman-howsawy-89757825",
  x: "https://x.com/aimn10",
  instagram: "https://www.instagram.com/ABDUL4000",
  tiktok: "https://www.tiktok.com/@add30nkt",
  facebook: "https://www.facebook.com/ABDUL4000",
  youtube: "",
  // Direct professional contact. Leave empty to hide the email option.
  // When empty, the primary "Get in touch" button falls back to LinkedIn.
  email: ""
};

(function () {
  const links = window.PORTFOLIO_LINKS || {};

  // --- Social links -------------------------------------------------------
  document.querySelectorAll("[data-social]").forEach((el) => {
    const key = el.getAttribute("data-social");
    const url = (links[key] || "").trim();
    if (!url) {
      el.hidden = true;
      return;
    }
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  // --- Primary contact CTA ------------------------------------------------
  const email = (links.email || "").trim();
  const linkedin = (links.linkedin || "").trim();
  document.querySelectorAll("[data-contact='primary']").forEach((el) => {
    if (email) {
      const subject = encodeURIComponent("Professional inquiry — Abdulrahman Bakor Howsawy");
      el.href = "mailto:" + email + "?subject=" + subject;
      el.textContent = "Email me";
    } else if (linkedin) {
      el.href = linkedin;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.textContent = "Connect on LinkedIn";
    } else {
      el.hidden = true;
    }
  });

  // Dedicated email link (row stays hidden when no email configured).
  document.querySelectorAll("[data-contact='email']").forEach((el) => {
    const row = el.closest(".contact-email");
    if (!email) {
      if (row) row.hidden = true;
      return;
    }
    el.href = "mailto:" + email;
    el.textContent = email;
    if (row) row.hidden = false;
  });

  // --- Mobile navigation toggle ------------------------------------------
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("primary-nav");
  if (toggle && navLinks) {
    const setOpen = (open) => {
      navLinks.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle.addEventListener("click", () => {
      setOpen(!navLinks.classList.contains("open"));
    });
    // Close after choosing a destination.
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });
    // Close on Escape for keyboard users.
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }
})();
