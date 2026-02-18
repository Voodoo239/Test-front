(function() {
  
  function displayPageLoadTime() {
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
  }


  function highlightActiveNavItem() {
    document.addEventListener('DOMContentLoaded', function() {

      const currentPath = window.location.pathname;
      const currentPage = currentPath.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('.nav__link');
      
      navLinks.forEach(function(link) {
        const linkHref = link.getAttribute('href');

        let isActive = false;

        if (linkHref) {
          if (linkHref.startsWith('#')) {
            if (currentPage === 'index.html' || currentPage === '') {
              isActive = true;
            }
          }
          else if (linkHref.includes(currentPage)) {
            isActive = true;
          }
          else if ((currentPage === 'index.html' || currentPage === '') && 
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

  displayPageLoadTime();
  highlightActiveNavItem();

})();
