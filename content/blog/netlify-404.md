---
external: false
draft: false
title: How to Fix the 404 Error on Netlify's Dev Environment
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - web development
---

If you've encountered a 404 error on Netlify's dev environment, but not on your local machine, don't worry - there's an easy solution. In this article, we'll go over how to quickly fix this issue and get your application up and running.

# The Problem

After deploying your code to Netlify, you've noticed that all pages except the first one return a 404 error. This can be frustrating, especially if you've tested your application thoroughly on your local machine and everything was working perfectly.

# The Solution

Fortunately, the solution is straightforward. You just need to create a file named "\_redirects" and add the following code:

```
/*    /index.html   200
```

This code tells Netlify to serve the "index.html" file for any page that can't be found. With this in place, all of your pages should load correctly on Netlify's dev environment.
In conclusion, if you're encountering a 404 error on Netlify's dev environment, make sure to add the "\_redirects" file with the above code. This should solve the issue and get your application working as expected.
