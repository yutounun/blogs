---
external: false
draft: false
title: jump game
description: leetcode easy problem
date: 2024-03-02
categories:
  - leetcode
  - medium-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/jump-game/description/)

## Problem Description

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

### Examples:

- **Example 1:**

```plaintext
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

- **Example 2:**

```plaintext
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

### Constraints:

- 1 <= nums.length <= 104
- 0 <= nums[i] <= 105

## Answer

### Approach

Consider this problem as car driving in desserts.

1. Treat the gas variable as the current potential to move forward.
2. Iterate through the nums array. For each index, check if the gas has run out (i.e., gas is less than 0). If so, return False.
3. If the current station (nums[i]) offers more 'gas' than the current gas amount, update gas to nums[i].
4. After updating, decrease the gas by 1 to account for moving to the next index.
5. If you complete the loop without gas running out, return True.

### Complexity

- **Time complexity:** O(n)
- **Space complexity:** O(1) - This approach utilizes space only for the gas variable.

### Code

```python
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        gas = 0

        for num in nums:
            if gas < 0:
                return False

            if gas < num:
                gas = num

            gas -= 1
        return True

```
