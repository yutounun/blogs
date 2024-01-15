---
external: false
draft: false
title: 217. Contains Duplicate
description: leetcode easy problem
date: 2023-09-24
categories:
  - leetcode
  - easy-problem
  - hashmap
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
class Solution(object):
    def containsDuplicate(self, nums):
        set_nums = set(nums)
        return len(set_nums) != len(nums)
```

### Explanation1:

1. Compare the length of original given nums and the shorten length of the nums using set.

**Memory**: O(n)  
**Time Complexity**: O(n)
