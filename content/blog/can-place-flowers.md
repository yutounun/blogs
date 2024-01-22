---
external: false
draft: false
title: 605. Can Place Flowers
description: leetcode easy problem
date: 2024-01-21
categories:
  - leetcode
  - easy-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/can-place-flowers/description/)

## Problem Description

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

### Examples:

- **Example 1:**

  ```plaintext
  Input: flowerbed = [1,0,0,0,1], n = 1
  Output: true
  ```

### Constraints:

1 <= flowerbed.length <= 2 \* 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length

## Python3 Solution

```python
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True

        for i in range(len(flowerbed)):
            if flowerbed[i] == 0 and (i==len(flowerbed)-1 or flowerbed[i+1] == 0) and (i == 0 or flowerbed[i-1] == 0):
                flowerbed[i] = 1
                n -= 1
                if n == 0:
                    return True
        return False
```
