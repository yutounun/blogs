---
external: false
draft: false
title: 【Leetcode】Easy problem - Majority Element
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - leetcode
  - easy-problem
---

Javascript fast and easy-understanding solution using a hashmap.
Level: 4
1st time

## Problem

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

```
Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

Constraints:

```
n == nums.length
1 <= n <= 5 \* 104
-109 <= nums[i] <= 109
```

## Intuition

Use a hashmap solution

## Approach

1. init map
2. iterate nums array
3. if num is set in map already, add 1 to the val
4. if not add the key and value 1
5. if the length of the object's value is more than length of array/2, return the current num

### Complexity

- Time complexity:
  O(N)
- Space complexity:
  O(N)

## Code

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // init map
    // iterate nums array
    // if num is set in map already, add 1 to the val
    // if not add the key and value 1
    // if the length of the object's value is more than length of array/2, return the current num
    const ans = {}
    for (const num of nums) {
        if(ans[num] > 0) {
            ans[num]++
        } else {
            ans[num] = 1
        }
        if (ans[num] > nums.length/2) return num
    }
};
```
