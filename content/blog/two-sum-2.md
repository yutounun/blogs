---
external: false
draft: false
title: 167. Two Sum II - Input Array Is Sorted
description: leetcode easy problem
date: 2023-09-26
categories:
  - leetcode
  - medium-problem
  - two-pointers
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

## Problem Description

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

### Examples:

- **Example 1:**

```plaintext
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
```

- **Example 2:**

```plaintext
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```

- **Example 3:**

```plaintext
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```

### Constraints:

- 2 <= numbers.length <= 3 \* 104
- -1000 <= numbers[i] <= 1000
- numbers is sorted in non-decreasing order.
- -1000 <= target <= 1000
- The tests are generated such that there is exactly one solution.

## Answer

### Intuition

To solve this problem, I employed the two-pointers technique. By adjusting the left and right pointers based on the sum of their corresponding values, I aimed to find the pair of numbers that match the target.

### Approach

1. Initialize two pointers at the beginning (left) and end (right) of the array. Given the array's increasing order, the left pointer starts at the smallest value, and the right pointer starts at the largest.

2. If the sum of the values at the left and right pointers equals the target, return their indices (adjusted for 1-based indexing).

3. If the sum is less than the target, move the left pointer one step to the right, increasing the sum.

4. If the sum is greater than the target, move the right pointer one step to the left, decreasing the sum.

### Complexity

- **Time complexity:** O(n) - The two-pointer approach ensures each element is considered at most once.
- **Space complexity:** O(1) - The two-pointer technique is space-efficient, using constant space regardless of the input size.

### Code

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Initialize two pointers
        l, r = 0, len(nums)-1

        while l < r:
            current_sum = nums[l] + nums[r]
            if current_sum == target:
                return [l+1, r+1]
            elif current_sum < target:
                l += 1
            else:
                r -= 1
```
