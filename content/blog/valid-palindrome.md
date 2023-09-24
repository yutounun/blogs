---
external: false
draft: false
title: 125. Valid Palindrome
description: leetcode easy problem
date: 2023-09-24
categories:
  - leetcode
  - easy-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/valid-palindrome/)

## Problem Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

### Examples:

- **Example 1:**

  ```plaintext
  Input: s = "A man, a plan, a canal: Panama"
  Output: true
  Explanation: "amanaplanacanalpanama" is a palindrome.
  ```

- **Example 2:**

  ```plaintext
  Input: s = "race a car"
  Output: false
  Explanation: "raceacar" is not a palindrome.
  ```

- **Example 3:**

  ```plaintext
  Input: s = " "
  Output: true
  Explanation: s is an empty string "" after removing non-alphanumeric characters.
  Since an empty string reads the same forward and backward, it is a palindrome.
  ```

### Constraints:

1 <= s.length <= 2 \* 105
s consists only of printable ASCII characters.

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
