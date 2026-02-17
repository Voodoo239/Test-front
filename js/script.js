(function() {
  'use strict';

  function displayPageLoadTime() {
    window.addEventListener('load', function() {
      
      const loadTimeSeconds = (performance.now() / 1000);
      
      const footer = document.querySelector('.footer');
      if (footer) {
        const loadTimeElement = document.createElement('p');
        loadTimeElement.className = 'footer__load-time';
        loadTimeElement.textContent = `Время загрузки страницы: ${loadTimeSeconds} секунд`;
        footer.insertBefore(loadTimeElement, footer.firstChild);
      }
      
      console.log('Время загрузки страницы:', loadTimeSeconds, 'сек.');
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
