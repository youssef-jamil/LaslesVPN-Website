// Mobile Navigation Menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");
  const nav = document.querySelector(".nav");

  // Function to close mobile menu
  function closeMobileMenu() {
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Function to open mobile menu
  function openMobileMenu() {
    mobileMenuToggle.setAttribute("aria-expanded", "true");
    nav.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close button functionality
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", closeMobileMenu);
    }

    // Close menu when clicking on nav links
    const navLinks = nav.querySelectorAll(".nav-item a");
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    });
  }
});

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});

// Add scroll effect to header
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        header.style.backdropFilter = "blur(10px)";
        header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
      } else {
        header.style.backgroundColor = "";
        header.style.backdropFilter = "";
        header.style.boxShadow = "";
      }
    });
  }
});

// Form validation and interaction
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(
    ".btn-select, .btn-get-started, .btn-subscribe-now"
  );

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Add ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add ripple effect styles
const style = document.createElement("style");
style.textContent = `
    .btn-select, .btn-get-started, .btn-subscribe-now {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
