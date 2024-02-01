---
external: false
draft: false
title: 202. Happy Number
description: leetcode easy problem
date: 2024-01-21
categories:
  - leetcode
  - easy-problem
  - two-pointers
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/happy-number/)

## Problem Description

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

### Examples:

- **Example 1:**

  ```plaintext
  Input: n = 19
  Output: true
  Explanation:
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1
  ```

### Constraints:

- 1 <= n <= 231 - 1

## Python3 Solution

Apply the two pointers method and if slow and fast meet, it means the number is not happy.

```python
class Solution:
    def numSquareSum(self, n):
        rtn = 0
        while n > 0:
            rtn += (n%10)*(n%10)
            n = n//10
        return rtn

    def isHappy(self, n):
        fast = slow = n
        while n > 0:
            slow = self.numSquareSum(slow)
            fast = self.numSquareSum(self.numSquareSum(fast))

            if slow is fast:
                return slow == 1
```
