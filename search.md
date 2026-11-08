---
layout: default
title: Search
permalink: /search/
description: Search every post on the site.
---
<div class="wrap wrap--read" id="search-app" data-index="{{ '/search.json' | relative_url }}">
  <header class="archive-header">
    <h1 class="page-title">Search</h1>
  </header>

  <div class="search-box">
    <label for="search-input">Search posts by title, topic, Scripture, or keyword</label>
    <input id="search-input" type="search" autocomplete="off" placeholder="For example: stewardship, Proverbs, discipline">
  </div>
  <p id="search-status" role="status" aria-live="polite"></p>
  <ul id="search-results" class="search-results"></ul>
  <noscript><p class="empty">Search needs JavaScript. You can still browse by <a href="{{ '/categories/' | relative_url }}">category</a> or <a href="{{ '/tags/' | relative_url }}">tag</a>.</p></noscript>
</div>
<script src="{{ '/assets/js/search.js' | relative_url }}" defer></script>
