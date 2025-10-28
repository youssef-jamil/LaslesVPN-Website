// script.js - JavaScript for LaslesVPN animations

// Sticky header with animations
let lastScrollTop = 0;
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > headerHeight) {
    header.classList.add("sticky");
    if (scrollTop > lastScrollTop && scrollTop > headerHeight * 2) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  } else {
    header.classList.remove("sticky", "shrink");
  }

  lastScrollTop = scrollTop;
});

// Intersection Observer for animating sections on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe all sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, footer");
  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Mobile menu toggle (existing functionality)
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobile-menu-toggle").checked = false;
  });
});

// Close menu when clicking on overlay
document.querySelector(".mobile-menu-overlay").addEventListener("click", () => {
  document.getElementById("mobile-menu-toggle").checked = false;
});
