---
layout: default
title: Sitemap
permalink: /sitemap/
---

<nav class="sitemap">
  <ul>
    {% assign pages = site.pages | where_exp: "p", "p.title and p.url != '/sitemap/'" | sort: "url" %}
    {% assign collections = site.collections %}
    {% assign posts = site.posts %}

    <li><strong>Pages</strong>
      <ul>
        {% for page in pages %}
          <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
        {% endfor %}
      </ul>
    </li>

    {% for collection in collections %}
      {% assign items = collection.docs | sort: "order" %}
      {% if collection.label != "posts" and items.size > 0 %}
        <li><strong>{{ collection.label | capitalize }}</strong>
          <ul>
            {% for doc in items %}
              <li><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></li>
            {% endfor %}
          </ul>
        </li>
      {% endif %}
    {% endfor %}

    {% if posts.size > 0 %}
      <li><strong>Blog</strong>
        <ul>
          {% for post in posts %}
            <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <span class="post-date">({{ post.date | date: "%Y-%m-%d" }})</span></li>
          {% endfor %}
        </ul>
      </li>
    {% endif %}
  </ul>
</nav>
