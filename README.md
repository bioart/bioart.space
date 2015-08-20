
## Contents

- [Editing](#editing)
    - [github](#github)
    - [prose.io](#proseio)
    - [Website Structure](#website-structure)
    - [Working With External Files](#working-with-external-files)

<!-- end toc 3 -->

# bioart.space

This is the SAIC BioArt website.

<!-- toc -->

## Editing

### GitHub

This website is hosted in a [repository on GitHub](https://github.com/bioart/bioart.space).

To edit it or add new content, you *do not* need to use Git or GitHub directly, but you *do* need a GitHub account. You also need to be a member of the [bioart](http://github.com/bioart) GitHub organization. You can [create an account here](https://github.com/join). (To add new data to a protocol, you do not need a GitHub account).

### prose.io

Once you have a github account, you should edit the website using [prose.io](http://prose.io/). Obama uses it too so you know it's legit.

### Website Structure

You'll be primarily working in these folders:

*   `_artists` is for pages about bio artists.
*   `_posts` is for bloggy content that shows up on the front page in reverse-chronological order.
*   `_protocols` is for lab protocols.
*   `_pages` is for anything else.

Create a new file in any of these folders to get started.

#### Example: Classses

One thing you might want to do is create pages for various classes taught in the BioArt lab. I've started it off by creating a page with a list of classes in `/_posts/classes.md`, and a class page in `/_posts/classes/intro.md`.

You can imagine how this page-creation model can be adapted to other situations as well.

### Adding To The Navigation Bar

The links in the navigation bar are generated from data within [_config.yml](https://github.com/bioart/bioart.space/blob/master/_config.yml#L34). You can edit it from prose.io.

### Working With Images

Drag-and-drop an image right onto the editing window to insert it.

### Working With Other Files

Any content (a post, protocol, page, or artist) can have a list of external files associated with it.

Add something like the following to the content's `raw metadata` (click the horizontal bars icon in the right-menu on prose.io).

```yml
files:
    - title: important image
      url: media/some.jpg
    - title: important document
      url: https://www.ieee.org/documents/ieeecopyrightform.doc
```
