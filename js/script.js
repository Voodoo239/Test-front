(function() {
  'use strict';

  function displayPageLoadTime() {
    window.addEventListener('load', function() {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      const loadTimeSeconds = (loadTime / 1000).toFixed(3);
      const footer = document.querySelector('.footer');
      if (footer) {
        const loadTimeElement = document.createElement('p');
        loadTimeElement.className = 'footer__load-time';
        loadTimeElement.textContent = `Время загрузки страницы: ${loadTimeSeconds} секунд`;
        footer.insertBefore(loadTimeElement, footer.firstChild);
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
