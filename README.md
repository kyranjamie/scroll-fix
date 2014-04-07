scroll-fix
==========

Fixes browser scroll behaviour where, at the boundary of a box's scroll height, its parent continues to scroll.

## Usage

Apply the `scroll-fix` attribute to any element that may have overflowed content. 

**n.b.** If the element does not have overflowed content, the page body (or elem parent) will not be prevented from scrolling.

```html
<body>
  <textarea scroll-fix> ... </textarea>
</body>
```

## Demo

An animated gif speaks a thousand words.

![demo](/scrollfix.gif)
