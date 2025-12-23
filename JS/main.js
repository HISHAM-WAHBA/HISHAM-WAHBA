// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});

// Scroll Animation using Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Select elements to animate
const animatedElements = document.querySelectorAll(
  ".hero-content, .hero-visual, .section-header, .about-content, .skill-card, .project-card, .contact-box"
);

animatedElements.forEach((el, index) => {
  el.classList.add("fade-in");
  // Add slight delay for grid items
  if (
    el.classList.contains("skill-card") ||
    el.classList.contains("project-card")
  ) {
    el.style.transitionDelay = `${(index % 3) * 100}ms`;
  }
  observer.observe(el);
});

// Floating Background Icons Animation
const bgContainer = document.querySelector(".bg-animation-container");
const icons = [
  "fa-html5",
  "fa-css3-alt",
  "fa-bootstrap",
  "fa-wind", // Tailwind
  "fa-js",
  "fa-react",
  "fa-layer-group", // Next.js
  "fa-wordpress",
  "fa-mobile-alt", // Responsive
  "fa-search", // Deep Searcher
  "fa-github",
  "fa-bug", // Debugging
  "fa-globe", // Cross-Browser
  "fa-pencil-ruler", // UI/UX
  "fa-moon", // Dark UI
];

function createFloatingIcon() {
  if (!bgContainer) return;

  const icon = document.createElement("i");
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];
  // Check if it should be 'fab' (brands) or 'fas' (solid)
  const prefix = [
    "fa-wind",
    "fa-layer-group",
    "fa-mobile-alt",
    "fa-search",
    "fa-bug",
    "fa-globe",
    "fa-pencil-ruler",
    "fa-moon",
  ].includes(randomIcon)
    ? "fas"
    : "fab";

  icon.classList.add(prefix, randomIcon, "floating-icon");

  // Randomize properties
  const size = Math.random() * 2 + 3; // 3rem to 5rem (more consistent size)
  const left = Math.random() * 100; // 0% to 100%
  const duration = Math.random() * 5 + 20; // 20s to 25s (slower, more consistent speed)
  const delay = Math.random() * 5; // 0s to 5s
  const opacity = Math.random() * 0.2 + 0.15; // 0.15 to 0.35

  icon.style.fontSize = `${size}rem`;
  icon.style.left = `${left}%`;
  icon.style.animationDuration = `${duration}s`;
  icon.style.animationDelay = `-${delay}s`; // Negative delay to start mid-animation for some
  icon.style.setProperty("--max-opacity", opacity);

  // Random brand colors with low opacity
  const colors = [
    "rgba(227, 79, 38, 0.4)", // HTML
    "rgba(21, 114, 182, 0.4)", // CSS
    "rgba(247, 223, 30, 0.4)", // JS
    "rgba(97, 218, 251, 0.4)", // React
    "rgba(121, 82, 179, 0.4)", // Bootstrap
    "rgba(56, 189, 248, 0.4)", // Tailwind
    "rgba(33, 117, 155, 0.4)", // WordPress
    "rgba(0, 255, 34, 0.4)", // Next.js
  ];
  // 30% chance to have a color, otherwise white-ish
  if (Math.random() < 0.3) {
    icon.style.color = colors[Math.floor(Math.random() * colors.length)];
  }

  bgContainer.appendChild(icon);

  // Remove after animation
  setTimeout(() => {
    icon.remove();
  }, duration * 1000);
}

// Initial set of icons
for (let i = 0; i < 6; i++) {
  createFloatingIcon();
}

// Spawn new icons periodically
setInterval(createFloatingIcon, 3500);
