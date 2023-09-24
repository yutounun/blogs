---
external: false
draft: false
title: 217. Contains Duplicate
description: leetcode easy problem
date: 2023-09-24
categories:
  - leetcode
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/contains-duplicate/description/)

## Problem Description

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### Examples:

- **Example 1:**

  ```plaintext
  Input: nums = [1,2,3,1]
  Output: true
  ```

- **Example 2:**

  ```plaintext
  Input: nums = [1,2,3,4]
  Output: false
  ```

- **Example 3:**
  ```plaintext
  Input: nums = [1,1,1,3,3,4,3,2,4,2]
  Output: true
  ```

### Constraints:

- `1 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`

## Python3 Solution

```python
from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for num in nums:
            if map.get(num, 0) == 1:
                return True
            else:
                map[num] = 1
        return False
```

### Explanation:

1. Create an empty hashmap. Hashmaps can solve problems in O(1) time complexity.
2. Iterate through the given array.
3. If a number hasn't been set in the map yet, set the number in the map with a value of 1.
4. If the number is already in the map, return `True` since it means the number has already appeared once.
5. If all numbers are distinct, return `False`.

**Memory**: O(1)  
**Time Complexity**: O(1)
