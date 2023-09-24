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

## Python3 Solution1

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

### Explanation1:

1. Create an empty hashmap. Hashmaps can solve problems in O(1) time complexity.
2. Iterate through the given array.
3. If a number hasn't been set in the map yet, set the number in the map with a value of 1.
4. If the number is already in the map, return `True` since it means the number has already appeared once.
5. If all numbers are distinct, return `False`.

**Memory**: O(n)  
**Time Complexity**: O(n)

### Python3 Solution2

```python
class Solution(object):
    def containsDuplicate(self, nums):
        return len(set(nums)) != len(nums)
```

### Explanation2:

"Sets are data structures that inherently do not allow duplicate values. Therefore, if we convert the nums list into a set, any duplicate values from the list will be removed in the set. Consequently, if the length of the set is different from the length of the original nums list, it indicates that nums contained duplicate values."
