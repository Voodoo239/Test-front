(function () {
      const startTime = performance.now();

    window.addEventListener("load", function () {
        const endTime = performance.now();
        const loadTime = (endTime - startTime).toFixed(2);

        const footer = document.querySelector("footer");
        if (footer) {
            const p = document.createElement("p");
            p.textContent = `Page load in ${loadTime} ms`;
            footer.appendChild(p);
        }
    });
  
  function highlightActiveMenuItem() {
    const currentPath = window.location.pathname.replace(/\/+$/, '');
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
      let linkPath = link.pathname.replace(/\/+$/, '');
      
      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    });
  }
  
})();
  
 function highlightActiveNavItem() {
    document.addEventListener('DOMContentLoaded', function () {
      const currentPath = window.location.pathname;
      const currentPage = currentPath.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('.nav__link');

      navLinks.forEach(function (link) {
        const linkHref = link.getAttribute('href');
        let isActive = false;

        if (linkHref && !linkHref.startsWith('#')) {
          if (linkHref.includes(currentPage)) {
            isActive = true;
          } else if ((currentPage === 'index.html' || currentPage === '') &&
            (linkHref === '/' || linkHref === 'index.html' || linkHref === './index.html')) {
            isActive = true;
          }
        }

        if (isActive) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  }
  
})();
