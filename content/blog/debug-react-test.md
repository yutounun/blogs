---
external: false
draft: false
title: How to Debug React Testing Library Code Without Limitations
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - web-development
---

If you've encountered the problem of limited lines of DOM being rendered when trying to debug your code using the React Testing Library, don't worry - there is a solution. In this article, we'll go over how to remove the limit on the number of lines rendered by the `screen.debug()` function and output all the elements you want to see.

## The Problem

When using the `screen.debug()` function in React Testing Library to debug your code, you may notice that only a limited number of lines of rendered DOM are shown.

## The Solution

To remove the limit on the number of lines rendered by `screen.debug()`, update your code to include the following line:

```
// when needed
// eslint-disable-next-line testing-library/no-debugging-utils
screen.debug(undefined, Infinity);
```

The second argument in the `debug()` function sets the maximum number of lines to render to Infinity, allowing you to see all the elements you want to debug.
In conclusion, if you're facing limitations when debugging your code with React Testing Library, use the updated `debug()` function with the Infinity argument to remove the limit on the number of lines rendered. This will allow you to view all the elements you need to debug and improve your testing workflow.
