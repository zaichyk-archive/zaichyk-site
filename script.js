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

