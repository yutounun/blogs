---
external: false
draft: false
title: algorithm solving tips
description: This post is a draft and won't be built.
date: 2023-09-24
categories:
  - leetcode
---

## Set

```
class Solution(object):
    def containsDuplicate(self, nums):
        hset = set()
        for idx in nums:
            if idx in hset:
                return True
            else:
                hset.add(idx)
```

### When to use

Basically set is utilized when...

1. you look for a value in array real quick
2. you remove duplicated value

### Methods

- add
  Add element to set.

## Convert upper-case to lower-case and vice versa

- string.lower()
- string.upper()

## Reverse

Let's say you'd like to replace "reverse" with "esrever"

```
reverse ==reverse[::-1]
```

## Check the type of given object

- char.isalpha()
- char.isdigit():
- isalnum()
  Return true if the target is al or num
