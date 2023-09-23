---
external: false
draft: false
title: Remove "Gatsby Starter Contentful" title on your contentful blog
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - web-development
---

## Introduction

Have you ever wondered, "How can I remove the annoying title 'Gatsby Starter Contentful' and the Contentful logo right next to the title?" If so, you're not alone. In this article, we'll show you how to make your blog your own by removing these elements.

## Remove Unwanted Elements

The original code of navigation.js may look like the following if you haven't made any changes:

```
import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}></span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
```

However, if you're looking to publish your own blog and don't want the default Gatsby Starter Contentful title and logo, you can remove the following four lines of code:

```
<Link to="/" className={styles.logoLink}>
  <span className={styles.logo} />
  <span className={styles.navigationItem}></span>
</Link>
```

After removing those lines, your updated navigation.js file should look like this:

```
import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
```

And that's it! By removing these lines, you'll no longer see the "Gatsby Starter Contentful" title and Contentful logo on your blog. Instead, you'll have a clean and professional-looking blog that's ready for your unique content.
