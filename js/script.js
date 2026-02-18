(function () {
  'use strict';

  function onPageLoaded() {
    console.log('Страница загружена, запускаем логику ЛР-4');
    
    updatePageLoadTime();
    
    highlightActiveMenuItem();
  }
  
  if (document.readyState === 'complete') {
    onPageLoaded();
  } else {
    window.addEventListener('load', onPageLoaded);
  }
  
  function updatePageLoadTime() {

    const loadTimeSeconds = performance.now() / 1000;
    
    const formatted = loadTimeSeconds.toFixed(3);
    
    const span = document.getElementById('page-load-time-value');
    if (span) {
      span.textContent = formatted;
    }
    
    console.log('Время загрузки страницы:', formatted, 'сек.');
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
