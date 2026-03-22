const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  document.body.setAttribute("data-theme", savedTheme);
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
    if (nextTheme === "dark") {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
    localStorage.setItem("portfolio-theme", nextTheme);
  });
}

const revealElements = document.querySelectorAll(".reveal");
if (revealElements.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];
const navLinks = document.querySelectorAll(".menu a");
const usesHashNav = Array.from(navLinks).some((link) =>
  (link.getAttribute("href") || "").startsWith("#")
);

if (usesHashNav) {
  const updateActiveLink = () => {
    const scrollPosition = window.scrollY + 120;
    let currentSection = "home";

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section && scrollPosition >= section.offsetTop) {
        currentSection = id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentSection}`;
      link.classList.toggle("active", isActive);
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink);
}

const typedRole = document.getElementById("typed-role");
if (typedRole) {
  const roles = [
    "modern software solutions",
    "clean web interfaces",
    "real-world engineering projects",
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const type = () => {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typedRole.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        return setTimeout(type, 1100);
      }
    } else {
      charIndex--;
      typedRole.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 40 : 70);
  };
  type();
}

const counters = document.querySelectorAll(".counter");
if (counters.length && "IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target || 0);
      let value = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        value += step;
        if (value >= target) {
          value = target;
          clearInterval(timer);
        }
        el.textContent = value + (target < 2000 ? "+" : "");
      }, 20);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => counterObserver.observe(c));
}

const projectSearch = document.getElementById("project-search");
const chips = document.querySelectorAll(".chip");
const projectItems = document.querySelectorAll(".project-item");
let activeFilter = "all";

const filterProjects = () => {
  const q = (projectSearch?.value || "").toLowerCase().trim();
  let visibleCount = 0;
  projectItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const tags = item.dataset.tags || "";
    const matchFilter = activeFilter === "all" || tags.includes(activeFilter);
    const matchQuery = !q || text.includes(q) || tags.includes(q);
    const show = matchFilter && matchQuery;
    item.classList.toggle("is-hidden", !show);
    if (show) visibleCount += 1;
  });
  const resultEl = document.getElementById("project-result");
  if (resultEl) {
    resultEl.textContent = `Showing ${visibleCount} project(s)`;
  }
};

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeFilter = chip.dataset.filter || "all";
    filterProjects();
  });
});
projectSearch?.addEventListener("input", filterProjects);
if (projectItems.length) {
  filterProjects();
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:priyanshu9989488@gmail.com?subject=${subject}&body=${body}`;
  });
}

const backToTop = document.getElementById("back-to-top");
const handleBackToTop = () => {
  if (!backToTop) return;
  backToTop.classList.toggle("show", window.scrollY > 280);
};
window.addEventListener("scroll", handleBackToTop);
handleBackToTop();
backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const certificateUpload = document.getElementById("certificate-upload");
const certificatePreview = document.getElementById("certificate-preview");
if (certificateUpload && certificatePreview) {
  certificateUpload.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    certificatePreview.src = url;
    certificatePreview.alt = "Uploaded certificate photo";
  });
}

const trainingCertUpload = document.getElementById("training-certificate-upload");
const trainingCertPreview = document.getElementById("training-certificate-preview");
if (trainingCertUpload && trainingCertPreview) {
  trainingCertUpload.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    trainingCertPreview.src = url;
    trainingCertPreview.alt = "W3 Grads MERN + Generative AI training certificate";
    trainingCertPreview.removeAttribute("onerror");
  });
}
