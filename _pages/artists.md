---
permalink: /artists/
title: Artists
---
<ul>
    {% for artist in site.artists %}
        <li>
            <a href="{{ artist.url }}">{{ artist.name }}</a>
        </li>
    {% endfor %}
</ul>
