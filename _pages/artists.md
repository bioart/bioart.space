---
permalink: /artists/
title: Artists
---
<ul>
    {% for artist in site.artists %}
        <li>
            <a href="{{ artist.url }}">{{ artist.title }}</a>
        </li>
    {% endfor %}
</ul>
