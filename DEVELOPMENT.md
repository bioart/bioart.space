# bioart.space development

This website is built automatically and deployed to s3 by [static-publisher](https://github.com/amonks/static-publisher) using the edge version of [Jekyll](http://jekyllrb.com/).

## CSS

The CSS for this website is compiled by Jekyll from scss files. We use Bootstrap as a starting point for the CSS.

Custom CSS is located in [css/style.scss](https://github.com/bioart/bioart.space/blob/gh-pages/css/style.scss) The $VARIABLES in that file are defined in [_sass/bootstrap/variables.scss](https://github.com/bioart/bioart.space/blob/gh-pages/_sass/bootstrap/_variables.scss).

Prefixing of links with file-type icons is handled by [code](https://github.com/bioart/bioart.space/blob/gh-pages/_sass/_filetype.scss) from [Greg Schoppe](http://gschoppe.com).

## HTML

I'm tryna use `_includes` for as much as possible. Otherwise the HTML is pretty straightforward.

Remember that the following folders are user-editable in prose.io:

*   `_artists` is for pages about bio artists.
*   `_posts` is for bloggy content that shows up on the front page in reverse-chronological order.
*   `_protocols` is for lab protocols.
*   `_pages` is for anything else

## Firebase

We're using Firebase as a store for data entered as protocol results.

The location is https://bioart.firebaseio.com/

## Building locally

run `bundle exec jekyll serve` and then visit http://localhost:4000

You can use `bundle exec guard` for automatic reloading when you change stuff (no more refresh button!) if you have [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) installed
