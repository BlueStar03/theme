---
layout: default
title: Sitemap
permalink: /sitemap/
---

<ul class="sitemap">

  <!-- Home / Root -->
  <li><a href="{{ '/' | relative_url }}">Home</a></li>

  <!-- Stand-alone Pages -->
  <li><strong>Pages</strong>
    <ul>
      {% for page in site.pages %}
        {% if page.title
              and page.nav_exclude != true
              and page.url != "/"
              and page.url != "/sitemap/"
              and page.url != "/404.html" %}
          <li>
            <a href="{{ page.url | relative_url }}">{{ page.title }}</a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>

  <!-- Collections (except posts) -->
  {% for collection in site.collections %}
    {% unless collection.label == "posts" %}
      <li><strong>{{ collection.label | capitalize }}</strong>
        <ul>
          {% for doc in collection.docs | sort: "order" %}
            <li>
              <a href="{{ doc.url | relative_url }}">{{ doc.title }}</a>
            </li>
          {% endfor %}
        </ul>
      </li>
    {% endunless %}
  {% endfor %}

  <!-- Blog Posts -->
  <li><strong>Blog</strong>
    <ul>
      {% for post in site.posts | sort: "date" %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </li>

</ul>
