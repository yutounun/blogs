---
external: false
draft: false
title: Resolving Conflicts When Adding Tailwind to an Astro Project
description: This post is a draft and won't be built.
date: 2023-09-22
categories:
  - web development
---

## Objective:

Integrate `markdoc` into an Astro project.

## Issue Encountered:

While running the development server with `$ npm run dev`, the following error was encountered:

```
error   Cannot read properties of undefined (reading 'postcss')
...
TypeError: Cannot read properties of undefined (reading 'postcss')
...
```

This error originates from the `@astrojs/tailwind` module, indicating a potential conflict or misconfiguration.

## Attempted Solutions:

A search was conducted on GitHub issues to find potential solutions or similar problems faced by other developers.

## Resolution:

Based on a relevant GitHub issue, the problem can be resolved by updating version of `@astrojs/tailwind`.

```
"dependencies": {
   ...
    "@astrojs/tailwind": "^3.1.3",
    ...
    "tailwindcss": "^3.3.3",
    ...
  },

```

By following the above step, the conflict between Tailwind and the Astro project should be resolved.
