// const navToggle = document.querySelector('.nav-toggle');
// const nav = document.querySelector('.main-nav');

// if (navToggle && nav) {
//   navToggle.addEventListener('click', () => {
//     nav.classList.toggle('open');
//   });
// }

// const searchInput = document.querySelector('[data-region-search]');
// const regionCards = document.querySelectorAll('[data-region-card]');

// if (searchInput && regionCards.length) {
//   searchInput.addEventListener('input', () => {
//     const query = searchInput.value.trim().toLowerCase();
//     regionCards.forEach((card) => {
//       const text = card.textContent.toLowerCase();
//       card.style.display = text.includes(query) ? '' : 'none';
//     });
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  const searchInput = document.querySelector("[data-region-search]");
  const regionCards = document.querySelectorAll("[data-region-card]");

  if (searchInput && regionCards.length) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();

      regionCards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? "" : "none";
      });
    });
  }

  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxCaption = document.querySelector("#lightbox-caption");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxLinks = document.querySelectorAll(".lightbox-link");

  if (lightbox && lightboxImage && lightboxCaption && lightboxClose && lightboxLinks.length) {
    lightboxLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const img = link.querySelector("img");
        const caption = link.dataset.caption || "";

        lightboxImage.src = link.href;
        lightboxImage.alt = img ? img.alt : "";
        lightboxCaption.textContent = caption;

        lightbox.classList.add("is-open");
        document.body.classList.add("lightbox-open");
        lightbox.setAttribute("aria-hidden", "false");
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      document.body.classList.remove("lightbox-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
      lightboxCaption.textContent = "";
    };

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }
});