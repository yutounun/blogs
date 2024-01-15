---
external: false
draft: false
title: 1. Two Sum
description: leetcode easy problem
date: 2024-01-16
categories:
  - leetcode
  - easy-problem
  - hashmap
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

## Problem Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Examples:

- **Example 1:**

```plaintext
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

- **Example 2:**

```plaintext
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

- **Example 3:**

```plaintext
Input: nums = [3,3], target = 6
Output: [0,1]

```

### Constraints:

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.

## Answer

### Intuition

To solve this problem, I employed the hashmap technique rather than brute force technique.

### Approach

1. Iterate nums array and check if target num subtracted from the current num is in the hashmap
2. If yes, return the indices and value from the hashmap
3. Else, add the current num to the hashmap

### Complexity

- **Time complexity:** O(n) - The hashmap approach ensures each element is considered at most once.
- **Space complexity:** O(n) - The size of hashmap is equal to the length of the array.

### Code

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        # { val: index }

        for i, num in enumerate(nums):
            if target-num in map:
                return [i, map[target-num]]
            else:
                map[num] = i

```
