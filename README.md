# Jekyll boilerplate and gulp configuration (WIP)

Some boilerplate code for my own use I'm uploading for backup an availability.
And if it should be of any use for someone else, even better <3

Contains minimal but bloglike Jekyll boilerplate and added

1. [Hugo Giraudel's][1] [Sass Boilerplate][2] with his 7-1 architecture pattern
2. Gulpfile with:
    * BrowserSync
    * Sass compilation + SourceMaps + Autoprefixer
3. Google Fonts Fira Sans, cause I like it (:
4. Already loaded mathjax

## Structure
```
.
├── _app
│   └── sass
│       ├── abstracts
│       ├── base
│       ├── components
│       ├── layout
│       ├── pages
│       ├── themes
│       └── vendor
├── _gulp
├── _includes
├── _layouts
├── _posts
```

## TODO

* improving html markup for better a11y
* adding [ARIA][3] roles and landmarks to also improve a11y
* adding asset pipeline for compiling images
* maybe some tasks for automatic builds with Travis_CI













[1]:[http://hugogiraudel.com/]
[2]:[https://github.com/HugoGiraudel/sass-boilerplate]
[3]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA]
