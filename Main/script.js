// script.js - Strong JavaScript animations for LaslesVPN sections

// Enhanced Intersection Observer for powerful section animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation class with delay based on section order
      setTimeout(() => {
        entry.target.classList.add("animate");
      }, 100);
    }
  });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Observe all sections and footer for animations
  const sections = document.querySelectorAll("section, footer");
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Add loading animation to body
  document.body.classList.add("loaded");
});

// Smooth scrolling for navigation links with enhanced behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Close mobile menu first
      document.getElementById("mobile-menu-toggle").checked = false;

      // Smooth scroll to target
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  });
});

// Mobile menu toggle with smooth animations
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    // Add slight delay for better UX
    setTimeout(() => {
      document.getElementById("mobile-menu-toggle").checked = false;
    }, 300);
  });
});

// Enhanced mobile menu overlay close
document.querySelector(".mobile-menu-overlay").addEventListener("click", () => {
  document.getElementById("mobile-menu-toggle").checked = false;
});

// Add scroll-based enhancements
let scrollTimeout;
window.addEventListener("scroll", () => {
  // Clear previous timeout
  clearTimeout(scrollTimeout);

  // Add scrolling class to body for potential CSS enhancements
  document.body.classList.add("scrolling");

  // Remove scrolling class after scroll stops
  scrollTimeout = setTimeout(() => {
    document.body.classList.remove("scrolling");
  }, 100);
});

// Performance optimization: Disconnect observer when not needed
let observerDisconnected = false;
window.addEventListener("beforeunload", () => {
  if (!observerDisconnected) {
    observer.disconnect();
    observerDisconnected = true;
  }
});
