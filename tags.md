---
layout: default
title: Tags
permalink: /tags/
description: Browse every post by tag.
---
{%- assign sorted_tags = site.tags | sort -%}
<div class="wrap wrap--about">
  <header class="archive-header">
    <h1 class="page-title">Tags</h1>
    <p class="archive-desc">Tags connect posts across categories. Choose one to jump to its posts, or browse by <a href="{{ '/categories/' | relative_url }}">category</a>.</p>
  </header>

  {%- if sorted_tags.size > 0 -%}
  <ul class="pills pills--links tag-cloud">
    {%- for tag in sorted_tags -%}
    <li><a class="pill" href="#{{ tag[0] | slugify }}">{{ tag[0] | escape }} <span class="pill-count">{{ tag[1].size }}</span></a></li>
    {%- endfor -%}
  </ul>

  {%- for tag in sorted_tags -%}
  <section class="tag-section" id="{{ tag[0] | slugify }}">
    <h2>{{ tag[0] | escape }}</h2>
    <ul class="post-list">
      {%- for post in tag[1] -%}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
      </li>
      {%- endfor -%}
    </ul>
  </section>
  {%- endfor -%}
  {%- else -%}
  <p class="empty">No tags yet. Tags appear here once a post uses them.</p>
  {%- endif -%}
</div>
