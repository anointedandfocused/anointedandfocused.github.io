/* YouTube refuses to play embedded videos on pages opened straight from disk (file://),
   which causes "Error 153". On a real web address the embed works normally.
   This swaps the player for a thumbnail that opens the video on YouTube instead. */
(function () {
  if (location.protocol !== 'file:') return;
  var boxes = document.querySelectorAll('.video-embed[data-video-id]');
  Array.prototype.forEach.call(boxes, function (box) {
    var id = box.getAttribute('data-video-id');
    var link = document.createElement('a');
    link.className = 'video-local';
    link.href = 'https://www.youtube.com/watch?v=' + encodeURIComponent(id);
    link.target = '_blank';
    link.rel = 'noopener';
    link.innerHTML =
      '<img src="https://i.ytimg.com/vi/' + encodeURIComponent(id) + '/hqdefault.jpg" alt="">' +
      '<span class="play-badge"><svg class="icon icon-solid" aria-hidden="true"><use href="#icon-play"></use></svg></span>' +
      '<span class="video-local-note">Local preview: click to watch on YouTube. The video plays in the page once the site is online.</span>';
    box.textContent = '';
    box.appendChild(link);
  });
})();
