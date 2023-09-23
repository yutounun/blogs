---
external: false
draft: false
title: Automatically deploy a portfolio website to Netlify using GitHub Actions
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - web-development
---

## Overview

I was a bit struggling how to automatically deploy a portfolio website to Netlify using GitHub Actions.
So I'll write code as following.

## Code

```
name: Deploy to Netlify

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npx gatsby build

      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod --dir=public

```
