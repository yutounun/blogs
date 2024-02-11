---
external: false
draft: false
title: 2396. Strictly Palindromic Number
description: leetcode easy problem
date: 2024-02-10
categories:
  - leetcode
  - easy-problem
  - string
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/strictly-palindromic-number/description/)

## Problem Description

An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

Given an integer n, return true if n is strictly palindromic and false otherwise.

A string is palindromic if it reads the same forward and backward.

### Examples:

- **Example 1:**
  Input: n = 9
  Output: false
  Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
  In base 3: 9 = 100 (base 3), which is not palindromic.
  Therefore, 9 is not strictly palindromic so we return false.
  Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

### Constraints:

- 4 <= n <= 105

## Python3 Solution

```python
class Solution:
    def isStrictlyPalindromic(self, n: int) -> bool:
        if n == 4: return False
        for base in range(2, n - 2):
            if not self.isPalindromic(base, n):
                return False
        return True

    def isPalindromic(self, base, num):
        arr = []
        while num > 0:
            arr.append(num % base)
            num = num // base

        # Correct way to check if the list is palindromic
        return arr == arr[::-1]

```
