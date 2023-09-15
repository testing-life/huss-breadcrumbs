---
layout: example.11ty.cjs
title: <huss-breadcrumbs> ⌲ Examples ⌲ Collapsing list
tags: example
name: Collapsing List
description: Collapsing List
---

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
    <a slot="breadcrumbs" title="this page5"  href=""
      >5This is child content last</a
    >
    <a slot="breadcrumbs" title="this page3"  href=""
      >6This is child content</a
    >
    <a slot="breadcrumbs" title="this page4"  href=""
      >7This is child content</a
    >
    <a slot="breadcrumbs" title="this page5"  href=""
      >8This is child content last</a
    >
    <a slot="breadcrumbs" title="this page3"  href=""
      >9This is child content</a
    >
    <a slot="breadcrumbs" title="this page4"  href=""
      >10This is child content</a
    >
    <a slot="breadcrumbs" title="this page5"  href=""
      >11This is child content last</a
    >
  </huss-breadcrumbs>

<h3>HTML</h3>

```html
<huss-breadcrumbs collapseAfter="3">
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
