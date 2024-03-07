---
external: false
draft: false
title: Coding Interview at company1
description: Coding Interview at company1
date: 2024-03-04
categories:
  - leetcode
---

## Problem Description

Given an unsorted integer array, return the smallest missing positive integer.

## Example 1:

```

Input: nums = [1,2,0]

Output: 3

```

## Example 2:

```

Input: nums = [3,4,-1,1]

Output: 2

```

## Example 3:

```

Input: nums = [7,8,9,11,12]

Output: 1

```

## Solution:

```python
# Optimize time complexity using Set without sorting: O(N)
def missing_number(nums):
    num_set = set(nums)
    min_num = min(num_set)
    while min_num in num_set:
        min_num += 1
    return min_num

print(missing_number([7,8,10,9,11]))

# Optimize space complexity by subtracting sum from expected sum: O(1)
def missing_number(nums):
    n = max(nums) - min(nums) + 1
    expected_sum = n * (min(nums) + max(nums)) // 2
    actual_sum = sum(nums)
    if expected_sum - actual_sum > 0:
        return expected_sum - actual_sum
    else:
        return max(nums)+1

print(missing_number([7,8,10,9,11]))

```
