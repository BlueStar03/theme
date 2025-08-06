---
layout: default
title: Sitemap
permalink: /sitemap/
---

<h2>Sitemap</h2>

<!-- 1. Standalone Pages -->
<section>
  <h3>Pages</h3>
  <ul>
    {% assign standalone = site.pages 
        | where_exp: "p", "p.collection == nil" 
        | where_exp: "p", "p.url != '/sitemap/' and p.url != '/' and p.url contains '.' == false" %}
    {% for page in standalone %}
      <li><a href="{{ page.url | relative_url }}">{{ page.title | default: page.name }}</a></li>
    {% endfor %}
  </ul>
</section>

<!-- 2. Collections -->
{% for coll in site.collections %}
  {% assign cname = coll.first %}
  {% if cname != "posts" and coll[1].docs.size > 0 %}
    <section>
      <h3>{{ cname | capitalize }}</h3>
      <ul>
        {% assign docs = site[cname] | sort: "order" %}
        {% assign grouped = docs | group_by: "dir" %}
        {% for group in grouped %}
          {% assign folder = group.name | remove: "_" | remove_first: cname %}
          {% if folder != "" %}
            <li>
              <strong>{{ folder | split: "/" | last | replace: "-", " " | capitalize }}</strong>
              <ul>
                {% for doc in group.items %}
                  {% if doc.basename != "index" %}
                    <li><a href="{{ doc.url | relative_url }}">{{ doc.title | default: doc.basename }}</a></li>
                  {% endif %}
                {% endfor %}
              </ul>
            </li>
          {% else %}
            {% for doc in group.items %}
              <li>
                <a href="{{ doc.url | relative_url }}">{{ doc.title | default: doc.basename }}</a>
              </li>
            {% endfor %}
          {% endif %}
        {% endfor %}
      </ul>
    </section>
  {% endif %}
{% endfor %}

<!-- 3. Blog Posts -->
<section>
  <h3>Blog</h3>
  <ul>
    {% for post in site.posts %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <small>({{ post.date | date: "%Y-%m-%d" }})</small></li>
    {% endfor %}
  </ul>
</section>
