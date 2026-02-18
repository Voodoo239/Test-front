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
