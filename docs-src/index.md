---
layout: page.11ty.cjs
title: <huss-breadcrumbs> ⌲ Home
---

# &lt;huss-breadcrumbs>

`<huss-breadcrumbs>` is an collapsible breadcrumbs list, where you can specify how many links in the middle get collapsed.

## As easy as HTML

<section class="columns">
  <div>

`<huss-breadcrumbs>` is just an HTML element. You can it anywhere you can use HTML!

```html
<huss-breadcrumbs>
  <a slot="breadcrumbs" title="this page" href="">This is child content</a>
  <a slot="breadcrumbs" title="this page" href="">This is child content</a>
</huss-breadcrumbs>
```

  </div>
  <div>

<huss-breadcrumbs>
  <a slot="breadcrumbs" title="this page" href="">This is child content</a> 
  <a slot="breadcrumbs" title="this page" href="">This is child content</a>
</huss-breadcrumbs>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<huss-breadcrumbs>` can be configured with attributed in plain HTML.

```html
<huss-breadcrumbs collapseAfter="3"></huss-breadcrumbs>
```

  </div>
  <div>

<huss-breadcrumbs collapseAfter='3'>
    <a slot="breadcrumbs" title="this page"  href="">1This is child content</a>
    <a slot="breadcrumbs" title="this page2"  href=""
      >2This is child content</a
    >
    <a slot="breadcrumbs" title="this page3"  href=""
      >3This is child content</a
    >
    <a slot="breadcrumbs" title="this page4"  href=""
      >4This is child content</a
    >
    <a slot="breadcrumbs" title="this page3"  href=""
      >5This is child content</a
    >
    <a slot="breadcrumbs" title="this page4"  href=""
      >6This is child content</a
    >
</huss-breadcrumbs>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<huss-breadcrumbs>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;huss-breadcrumbs&gt;</h2>
    <huss-breadcrumbs collapseAfter="3">
      <a slot="breadcrumbs" title="this page2" href=""
        >2This is child content</a
      >
      <a slot="breadcrumbs" title="this page3" href=""
        >3This is child content</a
      >
      <a slot="breadcrumbs" title="this page4" href=""
        >4This is child content</a
      ></huss-breadcrumbs
    >
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;huss-breadcrumbs&gt;</h2>
<huss-breadcrumbs>
<a slot="breadcrumbs" title="this page"  href="">1This is child content</a>
    <a slot="breadcrumbs" title="this page2"  href=""
      >2This is child content</a
    >
    <a slot="breadcrumbs" title="this page3"  href=""
      >3This is child content</a
    >
    <a slot="breadcrumbs" title="this page4"  href=""
      >4This is child content</a
    >
    </huss-breadcrumbs>

  </div>
</section>
