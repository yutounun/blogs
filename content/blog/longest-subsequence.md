---
external: false
draft: false
title: 674. Longest Continuous Increasing Subsequence
description: leetcode easy problem
date: 2024-02-02
categories:
  - leetcode
  - easy-problem
  - sliding-window
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/happy-number/)

## Problem Description

Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

### Examples:

- **Example 1:**

  ```plaintext
  Input: nums = [1,3,5,4,7]
  Output: 3
  Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
  Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element 4
  ```

### Constraints:

- 1 <= nums.length <= 104
- -109 <= nums[i] <= 109

## Python3 Solution

Apply the two pointers method and if slow and fast meet, it means the number is not happy.

```python
from typing import List

class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        # Edge case: If the list is empty or has one element, return its length.
        if not nums:
            return 0
        if len(nums) == 1:
            return 1

        # Initialize count variables.
        max_count = 1
        cur_count = 1

        # Iterate through nums starting from the second element.
        for i in range(1, len(nums)):
            # If the current number is greater than the previous, increment cur_count.
            if nums[i] > nums[i-1]:
                cur_count += 1
            else:
                # Reset cur_count to 1 if the sequence ends.
                cur_count = 1
            max_count = max(max_count, cur_count)

        # Return the maximum count found during the iteration.
        return max_count

```
