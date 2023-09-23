---
external: false
draft: false
title: Adding Tailwind on Astro project will conflict
description: This post is a draft and won't be built.
date: 2023-09-22
categories:
  - web development
---

# The Goal

**To add [markdoc](https://markdoc.dev/) to astro project.**

## The problem

```
$ npm run dev

> blogster-bubblegum@0.0.1 dev
> astro dev

 error   Cannot read properties of undefined (reading 'postcss')
  File:
    /Users/ichiharayuto/Documents/programs/blogs/node_modules/@astrojs/tailwind/dist/index.js:78:22
  Code:
    77 |         const tailwindConfig = (userConfig == null ? void 0 : userConfig.value) ?? getDefaultTailwindConfig(config.srcDir);
    > 78 |         config.style.postcss.plugins.push(tailwindPlugin(tailwindConfig));
         |                      ^
      79 |         config.style.postcss.plugins.push(autoprefixerPlugin);
      80 |         if (applyBaseStyles) {
      81 |           injectScript("page-ssr", `import '@astrojs/tailwind/base.css';`);
  Stacktrace:
TypeError: Cannot read properties of undefined (reading 'postcss')
    at astro:config:setup (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/@astrojs/tailwind/dist/index.js:78:22)
    at async withTakingALongTimeMsg (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/integrations/index.js:18:18)
    at async runHookConfigSetup (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/integrations/index.js:110:7)
    at async createContainer (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/core/dev/container.js:20:14)
    at async createContainerWithAutomaticRestart (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/core/dev/restart.js:74:28)
    at async dev (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/core/dev/dev.js:11:19)
    at async dev (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/cli/dev/index.js:26:10)
    at async runCommand (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/cli/index.js:107:22)
    at async cli (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/cli/index.js:144:5)
```

## Tries

- Looked for a solution on Github issues

## Solution

Install @astrojs/tailwind@^3.0.0-beta.1 will solve this problem according to [an issue on Github](https://github.com/withastro/astro/issues/5850).

```
npm install @astrojs/tailwind@^3.0.0-beta.1 --save-dev
```
