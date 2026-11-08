/* Mobile menu: shows or hides the navigation on small screens. */
(function () {
  var button = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!button || !nav) return;

  function setOpen(open) {
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { nav.classList.add('is-open'); } else { nav.classList.remove('is-open'); }
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });

  if (window.matchMedia) {
    var wide = window.matchMedia('(min-width: 721px)');
    var reset = function (e) { if (e.matches) setOpen(false); };
    if (wide.addEventListener) { wide.addEventListener('change', reset); }
    else if (wide.addListener) { wide.addListener(reset); }
  }
})();
