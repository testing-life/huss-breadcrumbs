---
layout: page.11ty.cjs
title: <huss-breadcrumbs> ⌲ Home
---

# &lt;huss-breadcrumbs>

`<huss-breadcrumbs>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<huss-breadcrumbs>` is just an HTML element. You can it anywhere you can use HTML!

```html
<huss-breadcrumbs></huss-breadcrumbs>
```

  </div>
  <div>

<huss-breadcrumbs></huss-breadcrumbs>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<huss-breadcrumbs>` can be configured with attributed in plain HTML.

```html
<huss-breadcrumbs name="HTML"></huss-breadcrumbs>
```

  </div>
  <div>

<huss-breadcrumbs name="HTML"></huss-breadcrumbs>

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
    <huss-breadcrumbs .name=${name}></huss-breadcrumbs>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;huss-breadcrumbs&gt;</h2>
<huss-breadcrumbs name="lit-html"></huss-breadcrumbs>

  </div>
</section>
