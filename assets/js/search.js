/* Client-side search. Reads /search.json, which Jekyll rebuilds with every publish. */
(function () {
  var app = document.getElementById('search-app');
  if (!app) return;

  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  var posts = [];

  function haystack(p) {
    return [p.title, p.category, (p.tags || []).join(' '), p.excerpt, p.content].join(' ').toLowerCase();
  }

  function run(query) {
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    list.textContent = '';

    if (!terms.length) {
      status.textContent = posts.length ? 'Type a word or phrase to search ' + posts.length + ' posts.' : '';
      return;
    }

    var hits = posts.filter(function (p) {
      var h = p._h;
      return terms.every(function (t) { return h.indexOf(t) !== -1; });
    }).map(function (p) {
      var title = p.title.toLowerCase();
      var score = terms.reduce(function (s, t) { return s + (title.indexOf(t) !== -1 ? 3 : 0); }, 0);
      return { post: p, score: score };
    }).sort(function (a, b) { return b.score - a.score; });

    status.textContent = hits.length
      ? hits.length + (hits.length === 1 ? ' post found' : ' posts found')
      : 'No posts match "' + query + '". Try a shorter or different word.';

    hits.forEach(function (h) {
      var p = h.post;
      var li = document.createElement('li');

      var meta = document.createElement('p');
      meta.className = 'search-meta';
      meta.textContent = [p.category, p.date, p.type === 'video' ? 'Video' : ''].filter(Boolean).join('  |  ');

      var h2 = document.createElement('h2');
      var a = document.createElement('a');
      a.href = p.url;
      a.textContent = p.title;
      h2.appendChild(a);

      var ex = document.createElement('p');
      ex.textContent = p.excerpt;

      li.appendChild(meta);
      li.appendChild(h2);
      li.appendChild(ex);
      list.appendChild(li);
    });
  }

  function onInput() {
    run(input.value.trim());
    if (window.history && history.replaceState) {
      var q = input.value.trim();
      history.replaceState(null, '', q ? '?q=' + encodeURIComponent(q) : location.pathname);
    }
  }

  status.textContent = 'Loading...';
  fetch(app.getAttribute('data-index'))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      posts = data.map(function (p) { p._h = haystack(p); return p; });
      var m = location.search.match(/[?&]q=([^&]*)/);
      if (m) input.value = decodeURIComponent(m[1].replace(/\+/g, ' '));
      run(input.value.trim());
    })
    .catch(function () {
      status.textContent = 'Search is unavailable right now. You can still browse by category or tag.';
    });

  input.addEventListener('input', onInput);
})();
