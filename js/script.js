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
