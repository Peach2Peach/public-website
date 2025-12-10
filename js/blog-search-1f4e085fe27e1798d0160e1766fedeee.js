(function () {
  const input = document.getElementById('blog-search-input');
  const resultsList = document.getElementById('blog-search-results');
  const container = document.querySelector('.blog-search');

  if (!input || !resultsList || !container) return;

  const lang = container.getAttribute('data-lang') || 'en';
  const INDEX_URL = '/blog/search-index.json';

  let indexLoaded = false;
  let postsIndex = [];

  function getPostUrl(post) {
    const slug = post.slug || '';
    if (!slug) return '#';

    if (post.lang && post.lang !== 'en') {
      // e.g. /de/blog/peach-under-the-hood/
      return `/${post.lang}/blog/${slug}/`;
    }

    // default EN: /blog/peach-under-the-hood/
    return `/blog/${slug}/`;
  }

  function renderResults(results) {
    resultsList.innerHTML = '';

    if (!results.length) {
      const li = document.createElement('li');
      li.className = 'blog-search__no-results';
      li.textContent = 'No posts found.';
      resultsList.appendChild(li);
      return;
    }

    results.forEach(post => {
      const li = document.createElement('li');
      li.className = 'blog-search__result';

      const a = document.createElement('a');
      a.className = 'blog-search__result-link';
      a.href = getPostUrl(post);
      a.textContent = post.title || '(untitled post)';

      const meta = document.createElement('div');
      meta.className = 'blog-search__result-meta';

      if (post.date) {
        const dateSpan = document.createElement('span');
        dateSpan.className = 'blog-search__result-date';
        dateSpan.textContent = post.date;
        meta.appendChild(dateSpan);
      }

      if (post.tags && post.tags.length) {
        const tagsSpan = document.createElement('span');
        tagsSpan.className = 'blog-search__result-tags';
        tagsSpan.textContent = post.tags.join(', ');
        meta.appendChild(tagsSpan);
      }

      const excerpt = document.createElement('p');
      excerpt.className = 'blog-search__result-excerpt';
      excerpt.textContent = post.excerpt || '';

      li.appendChild(a);
      if (meta.childNodes.length) li.appendChild(meta);
      if (excerpt.textContent) li.appendChild(excerpt);

      resultsList.appendChild(li);
    });
  }

  function searchPosts(query) {
    const q = query.trim().toLowerCase();

    if (!q) {
      resultsList.innerHTML = '';
      return;
    }

    const filtered = postsIndex.filter(post => {
      if (post.lang && post.lang !== lang && !(lang === 'en' && !post.lang)) {
        return false;
      }

      const haystack = [
        post.title || '',
        post.excerpt || '',
        post.content || '',
        Array.isArray(post.tags) ? post.tags.join(' ') : ''
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });

    renderResults(filtered);
  }

  function loadIndex() {
    if (indexLoaded) return Promise.resolve(postsIndex);

    return fetch(INDEX_URL, { credentials: 'same-origin' })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to load blog search index: ' + res.status);
        }
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Blog search index is not an array');
        }
        postsIndex = data;
        indexLoaded = true;
        return postsIndex;
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
        return [];
      });
  }

  let debounceTimer = null;
  input.addEventListener('input', function (event) {
    const value = event.target.value || '';

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      loadIndex().then(() => {
        searchPosts(value);
      });
    }, 200);
  });
})();
