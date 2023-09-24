---
external: false
draft: false
title:
description: leetcode easy problem
date: 2023-09-24
categories:
  - leetcode
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/contains-duplicate/description/)

## Problem Description

### Examples:

- **Example 1:**

  ```plaintext

  ```

- **Example 2:**

  ```plaintext

  ```

- **Example 3:**

  ```plaintext

  ```

### Constraints:

## Answer

### Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

### Approach

<!-- Describe your approach to solving the problem. -->

## Complexity

- Time complexity:

- Space complexity:

### Code

```
class Solution:
    # ssee, edsd: false
    # feef, efef: true
    # hashmap
    # O(len(s) + len(t))→O(n)
    def isAnagram(self, ss: str, tt: str) -> bool:
        # create hashmap
        smap = {}
        tmap = {}
        # iterate ss and tt
        for s in ss:
            if s in smap:
                smap[s] += 1
            else:
                smap[s] = 1
        for t in tt:
            if t in tmap:
                tmap[t] += 1
            else:
                tmap[t] = 1
        return smap == tmap


```
