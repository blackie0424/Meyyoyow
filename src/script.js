
// Scroll Spy & Nav Highlighting
function handleScrollSpy() {
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Mobile menu highlighting
  const mobileLinks = document.querySelectorAll('#mobile-menu a');

  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    // Offset for fixed header (approx 100px)
    if (window.scrollY >= (sectionTop - 150)) {
      currentSectionId = section.getAttribute('id');
    }
  });

  // Default to home if at top
  if (window.scrollY < 100) {
    currentSectionId = 'home';
  }

  // Update Desktop Nav
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
  
  // Update Mobile Nav (Optional visual feedback)
  mobileLinks.forEach(link => {
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('text-teal-700', 'bg-gray-50');
      link.classList.remove('text-gray-700');
    } else {
      link.classList.remove('text-teal-700', 'bg-gray-50');
      link.classList.add('text-gray-700');
    }
  });
}

// Mobile Menu Logic
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = menu.querySelectorAll('a');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Close menu when a link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// Service Category Tabs Scroll
function setupServiceTabs() {
  const buttons = document.querySelectorAll('.service-tab-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = e.target.dataset.target;
      const targetEl = document.getElementById(targetId);
      
      if(targetEl) {
        // Adjust for sticky header height
        const headerOffset = 140; 
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

      // Update buttons visual state
      buttons.forEach(b => {
        if(b === e.target) {
          b.classList.add('bg-teal-600', 'text-white');
          b.classList.remove('bg-gray-100', 'text-gray-600');
        } else {
          b.classList.remove('bg-teal-600', 'text-white');
          b.classList.add('bg-gray-100', 'text-gray-600');
        }
      });
    });
  });
}

// Initialize
window.addEventListener('scroll', handleScrollSpy);
window.addEventListener('DOMContentLoaded', () => {
  handleScrollSpy();
  setupMobileMenu();
  setupServiceTabs();
});
