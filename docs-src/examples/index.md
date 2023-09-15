---
layout: example.11ty.cjs
title: <huss-breadcrumbs> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<h3>HTML</h3>

```html
<huss-breadcrumbs>
  <a slot="breadcrumbs" title="this page" href="">1This is child content</a>
  <a slot="breadcrumbs" title="this page2" href="">2This is child content</a>
  <a slot="breadcrumbs" title="this page3" href="">3This is child content</a>
  <a slot="breadcrumbs" title="this page4" href="">4This is child content</a>
  <a slot="breadcrumbs" title="this page5" href=""
    >5This is child content last</a
  >
  <a slot="breadcrumbs" title="this page3" href="">6This is child content</a>
  <a slot="breadcrumbs" title="this page4" href="">7This is child content</a>
  <a slot="breadcrumbs" title="this page5" href=""
    >8This is child content last</a
  >
  <a slot="breadcrumbs" title="this page3" href="">9This is child content</a>
  <a slot="breadcrumbs" title="this page4" href="">10This is child content</a>
  <a slot="breadcrumbs" title="this page5" href=""
    >11This is child content last</a
  >
</huss-breadcrumbs>
```

<br />

<style>
  .crumb {
    color: blue;
    font-family: Arial;
    font-size: 12px;
  }
</style>
  <huss-breadcrumbs>
    <a slot="breadcrumbs" title="this page" class='crumb' href="">1This is child content</a>
    <a slot="breadcrumbs" title="this page2" class='crumb' href=""
      >2This is child content</a
    >
    <a slot="breadcrumbs" title="this page3" class='crumb' href=""
      >3This is child content</a
    >
    <a slot="breadcrumbs" title="this page4" class='crumb' href=""
      >4This is child content</a
    >
    <a slot="breadcrumbs" title="this page5" class='crumb' href=""
      >5This is child content last</a
    >
    <a slot="breadcrumbs" title="this page3" class='crumb' href=""
      >6This is child content</a
    >
    <a slot="breadcrumbs" title="this page4" class='crumb' href=""
      >7This is child content</a
    >
    <a slot="breadcrumbs" title="this page5" class='crumb' href=""
      >8This is child content last</a
    >
    <a slot="breadcrumbs" title="this page3" class='crumb' href=""
      >9This is child content</a
    >
    <a slot="breadcrumbs" title="this page4" class='crumb' href=""
      >10This is child content</a
    >
    <a slot="breadcrumbs" title="this page5" class='crumb' href=""
      >11This is child content last</a
    >
  </huss-breadcrumbs>
