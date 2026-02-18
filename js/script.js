(function () {
  'use strict';

    function onPageLoaded() {
    console.log('Страница загружена, запускаем логику ЛР-4');

    updatePageLoadTime();
    highlightActiveMenuItem();
  }

  // Подписываемся на событие полной загрузки страницы
  if (document.readyState === 'complete') {
    onPageLoaded();
  } else {
    window.addEventListener('load', onPageLoaded);
  }

  // --- 1) логика подсчёта времени ---
  function updatePageLoadTime() {
    const ms = getPageLoadTimeMs();
    if (ms == null) {
      console.warn('Не удалось определить время загрузки через Performance API');
      return;
    }

    const seconds = (ms / 1000).toFixed(3);

    const span = document.getElementById('page-load-time-value');
    if (span) {
      span.textContent = seconds;
    }

    console.log('Время загрузки страницы:', seconds, 'сек.');
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
