window.PORTFOLIO_LINKS = {
  github: "https://github.com/addn2030-svg",
  linkedin: "https://www.linkedin.com/in/abdulrahman-howsawy-89757825",
  x: "https://x.com/aimn10",
  instagram: "https://www.instagram.com/ABDUL4000",
  tiktok: "https://www.tiktok.com/@add30nkt",
  facebook: "https://www.facebook.com/ABDUL4000",
  youtube: ""
};

(function () {
  const links = window.PORTFOLIO_LINKS || {};

  document.querySelectorAll("[data-social]").forEach((element) => {
    const key = element.getAttribute("data-social");
    const url = (links[key] || "").trim();
    if (!url) {
      element.hidden = true;
      return;
    }
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("nav-links");
  if (toggle && navigation) {
    toggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
    });
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
    revealItems.forEach((item) => observer.observe(item));
  }
})();
