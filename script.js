const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const searchInput = document.querySelector('[data-region-search]');
const regionCards = document.querySelectorAll('[data-region-card]');

if (searchInput && regionCards.length) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    regionCards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

.document-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin: 1.5rem 0 2rem;
  max-width: 100%;
}

.document-figure {
  margin: 0;
  background: #f4f1ea;
  border: 1px solid rgba(60, 45, 25, 0.14);
  border-radius: 18px;
  padding: 0.6rem;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.document-figure img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: contain;
}

.document-figure figcaption {
  margin-top: 0.7rem;
  font-size: 0.9rem;
  line-height: 1.45;
  color: #6b6257;
}
