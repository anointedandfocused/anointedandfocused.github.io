---
layout: default
title: Categories
permalink: /categories/
description: Browse every post by category.
---
{%- assign topics = site.topics | sort: "order" -%}
<div class="wrap">
  <header class="archive-header">
    <h1 class="page-title">Categories</h1>
    <p class="archive-desc">Browse by topic. New posts appear here automatically. You can also explore by <a href="{{ '/tags/' | relative_url }}">tag</a>.</p>
  </header>

  <div class="category-index">
    {%- for t in topics -%}
    {%- assign n = site.categories[t.title].size | default: 0 -%}
    <a class="category-tile" href="{{ t.url | relative_url }}">
      <h2>{{ t.title | escape }}</h2>
      <p>{{ t.description }}</p>
      <span class="count">{{ n }} post{% if n != 1 %}s{% endif %}</span>
    </a>
    {%- endfor -%}
  </div>
</div>
