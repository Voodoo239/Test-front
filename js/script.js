(function () {
  'use strict';

  function onPageLoaded() {
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
  }

  function highlightActiveMenuItem() {
    let currentPath = window.location.pathname.replace(/\/+$/, '');
    if (currentPath === '' || currentPath === '/') {
      currentPath = '/index.html';
    }
    const links = document.querySelectorAll('nav a');

    links.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href && href.includes('#')) {
        link.classList.remove('active');
        return;
      }

      let linkPath = link.pathname.replace(/\/+$/, '');

      if (linkPath === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

})();
