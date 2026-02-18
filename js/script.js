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
