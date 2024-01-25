---
external: false
draft: false
title: 228. Summary Ranges
description: leetcode easy problem
date: 2024-01-24
categories:
  - leetcode
  - easy-problem
  -
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/summary-ranges/description/?envType=study-plan-v2&envId=top-interview-150)

## Problem Description

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

- "a->b" if a != b
- "a" if a == b

### Examples:

- **Example 1:**

  ```plaintext
  Input: nums = [0,1,2,4,5,7]
  Output: ["0->2","4->5","7"]
  Explanation: The ranges are:
  [0,2] --> "0->2"
  [4,5] --> "4->5"
  [7,7] --> "7"

  ```

### Constraints:

- 0 <= nums.length <= 20
- -231 <= nums[i] <= 231 - 1
- All the values of nums are unique.

## Python3 Solution

Runtime 34ms → Beats 76.59% of users with Python3
Space 16.54MB → Beats 60.18% of users with Python3
Time Complexity : - O(n)

```python
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0: return []
        if len(nums) == 1: return [str(nums[0])]

        rtn = []
        p1 = 0
        p2 = 1

        while p2 <= len(nums):
            # Check if non-consecutive or last element
            if p2 == len(nums) or nums[p2] - nums[p2 - 1] > 1:
                if p1 == p2 - 1:
                    rtn.append(str(nums[p1]))
                else:
                    rtn.append(f"{nums[p1]}->{nums[p2 - 1]}")
                p1 = p2
            p2 += 1
        return rtn

```
