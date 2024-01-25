---
external: false
draft: false
title: 704. Binary Search
description: leetcode easy problem
date: 2023-09-28
categories:
  - leetcode
  - easy-problem
  - binary-search
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/binary-search/)

## Problem Description

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

### Examples:

- **Example 1:**

```plaintext
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

- **Example 2:**

```plaintext
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

### Constraints:

- 1 <= nums.length <= 104
- 104 < nums[i], target < 104
- All the integers in nums are unique.
- nums is sorted in ascending order.

## Answer

### Intuition

Given that this problem must be solved with O(logN) time complexity and the given array is sorted in ascending order, you can use `Binary Search`.

### Approach

1. Initialize lowerIdx to the first index and higherIdx to the last index of the array.
2. Set midIdx to the middle index between lowerIdx and higherIdx.
3. If the number at midIdx is equal to the target, return midIdx.
4. If the number at midIdx is greater than the target, update higherIdx to midIdx - 1 to search in the lower half.
5. If the number at midIdx is less than the target, update lowerIdx to midIdx + 1 to search in the upper half.
6. Repeat steps 2-5 until you find the target or search all elements.

### Complexity

- **Time Complexity: `O(logN)`**

  - The algorithm takes logarithmic time to execute because in each iteration of the while loop, the search space is halved. This process continues until the target is found or the search space is reduced to zero, taking log base 2 of N steps in the worst case.

- **Space Complexity: `O(1)`**
  - The space complexity is constant because the algorithm only uses a fixed amount of extra space to store the indices `lowerIdx`, `higherIdx`, and `midIdx`. The space used by the input array is not counted towards the space complexity as it is considered input space.

### Code

```python
import math

class Solution:
    # binary tree which takes O(logN)
    def search(self, nums: List[int], target: int) -> int:
        if not nums: return False

        l, r = 0, len(nums)-1

        while l <= r:
            mid =(r-l) // 2 + l
            if nums[mid] == target:
                return mid
            if nums[mid] < target:
                l = mid + 1
            else:
                r = mid - 1
        return -1
```

Recursive solution

```python
import math

class Solution:
    # binary tree which takes O(logN)
    def search(self, nums: List[int], target: int) -> int:
        def __search(l, r):
            if l > r: return -1

            mid = l+(r-l) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] > target:
                return __search(l, mid-1)
            else:
                return __search(mid+1, r)

        return __search(0, len(nums)-1)
```
