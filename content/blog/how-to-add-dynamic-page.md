---
external: false
draft: false
title: How to create dynamic page on Astro
description: This post is a draft and won't be built.
date: 2023-09-23
categories:
  - web-development
---

If you've encountered the problem of limited lines of DOM being rendered when trying to debug your code using the React Testing Library, don't worry - there is a solution. In this article, we'll go over how to remove the limit on the number of lines rendered by the `screen.debug()` function and output all the elements you want to see.

## The Problem

When you just start using Astro or some templates such as [blog-ster](https://github.com/flexdinesh/blogster), you may feel like I'd like to add category pages as well.

So how do you add pages dynamically?

## The Solution

### Add category file

Although some may try to add category page file to under `content` directory, the right place you need to add is here `/src/pages/category/[category].astro`.

The files and directories under `pages` directory matches url.

### getStaticPaths()

The dynamic route page requires getStaticPaths function which returns params with some values.

```
export function getStaticPaths() {
  return [
    {params: {category: 'web-development'}},
    {params: {category: 'leetcode'}},
    {params: {category: 'life'}},
  ];
}

```

### Retrieve param from URL

You can get param that you defined in getStaticPaths from URL.

```
const { category } = Astro.params;
```

### code

The entire file will be as following.

{% githubgist id="241414715e06c6b11f6def2be8ebf236" /%}
