document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile navigation
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Highlight current page in nav
  const currentPath = window.location.pathname.split("/").pop();
  const navItems = document.querySelectorAll("nav a");

  navItems.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
      link.classList.add("active");
    }
  });

  // Optional: Smooth scroll for internal links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
