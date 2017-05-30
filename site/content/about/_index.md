+++
date = "2017-05-27T10:15:23-04:00"
draft = false
title = "About The Site"

+++

Unless explicitly defined, all content will only contain the Header and Footer Section, with the rest only being injected in upon an express request by the developer.

Hugo is able to use something called [Headless CMS](https://headlesscms.org/about/)

## Headless CMS?

To put it simply, a headless CMS, has no overhead caused by Databases.

All content is only added by either an API, or through using Git to edit files.

Another commonality between headless CMS, is they tend to (in most, but not all cases) not be able to affect structure, only content.

In many cases they are able to access the navigation menu html however and auto-populate the menu based upon which pages exist.

```html
<html>
<header>
  <!--Some HTML which simply is ignored-->
</header>
  <Content>
    The only part the CMS can edit. Only able to place Text and Images.
    Can format this text to use any standard heading levels, bold, strikethrough, code blocks, quotes, italics etc.
  </Content>
  <footer>
    <!--some more untouchable html-->
  </html>
```

The drawback of course here, is that whilst one has far more control than a standard CMS, one has to be more tech-savvy to actually create a working site.

But after the initial setup, the site can be left alone completly, with no management overhead, and one can publish pages using a Headless CMS or through manually uploading [Markdown](https://en.wikipedia.org/wiki/Markdown) Files.

And that whilst a static site has a lot of use for pages that don't require much dynamic content, any complex websites which require a lot of access to Data and do require Dynamic content are poorly suited.

**But there is no such thing as a perfect system, only a system which is right  for the job.**
