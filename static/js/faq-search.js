document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('faq-search-input');
  const resultsEl = document.querySelector('.faq-search-results');

  if (!input || !resultsEl) {
    console.warn('FAQ search: input or results container not found.');
    return;
  }

  let index = [];

  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // remove accents
  }

  function renderResults(matches) {
    const query = input.value.trim();
    resultsEl.innerHTML = '';

    if (!query) {
      resultsEl.classList.add('is-hidden');
      return;
    }

    if (!matches.length) {
      resultsEl.classList.remove('is-hidden');
      resultsEl.innerHTML =
        '<p class="faq-search__no-results">No results found.</p>';
      return;
    }

    const ul = document.createElement('ul');
    ul.className = 'faq-search-results-list';

    matches.slice(0, 25).forEach((item) => {
      const li = document.createElement('li');
      li.className = 'faq-search-result';
      li.innerHTML = `
        <a href="${item.url}">
          <span class="faq-search-result__question">${item.question}</span>
          <span class="faq-search-result__meta">${item.section}</span>
          <span class="faq-search-result__snippet">${item.snippet}</span>
        </a>
      `;
      ul.appendChild(li);
    });

    resultsEl.classList.remove('is-hidden');
    resultsEl.appendChild(ul);
  }

  function onSearch() {
    const q = input.value.trim();
    if (!q || !index.length) {
      renderResults([]);
      return;
    }

    const lang = window.FAQ_LANG || 'en';
    const queryNorm = normalize(q);

    const matches = index.filter((item) => {
      if (item.lang !== lang) return false;
      const inQuestion = normalize(item.question).includes(queryNorm);
      const inAnswer = normalize(item.answer).includes(queryNorm);
      return inQuestion || inAnswer;
    });

    renderResults(matches);
  }

  // Load the index
  fetch('/faq-index.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error('HTTP ' + res.status);
      }
      return res.json();
    })
    .then((data) => {
      index = data || [];
      console.log('FAQ index loaded, entries:', index.length);
      // expose for quick debugging
      window.__faqIndex = index;
    })
    .catch((err) => {
      console.error('Failed to load FAQ index', err);
    });

  // Search on typing
  input.addEventListener('input', onSearch);

  // Also search on Enter key
  input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch();
    }
  });
});
