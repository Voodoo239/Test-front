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
    document.addEventListener("DOMContentLoaded", function () {
      const currentURL = document.location.pathname;
      const currentPage = currentURL.substring(currentURL.lastIndexOf("/") + 1) || "index.html";

      const links = document.querySelectorAll(".nav__link");

      links.forEach(link => {
          const linkURL = new URL(link.href);
          const linkPage =
              linkURL.pathname.substring(linkURL.pathname.lastIndexOf("/") + 1);

          if (linkPage === currentPage) {
              link.classList.add("nav__link--active");
          }
      });
    });
  }
  
})();
