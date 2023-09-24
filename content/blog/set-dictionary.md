---
external: false
draft: false
title: 【LeetCode】 Differences between set and dictionary in Python3
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - leetcode
---

## Why

When I was solving [a leetcode problem](https://leetcode.com/problems/contains-duplicate/solutions/2459020/very-easy-100-fully-explained-c-java-python-javascript-python3-creating-set/), I was wondering which is better the solution with dictionary or with set.

```
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

↑ Solution with dictionary

↓ Solution with set

```
class Solution(object):
    def containsDuplicate(self, nums):
        hset = set()
        for idx in nums:
            if idx in hset:
                return True
            else:
                hset.add(idx)
```

## Answer

1. First Solution (Using a Dictionary):
   Data Structure: Dictionary (map)
   Logic:
   For each number in nums, it checks if the number is already in the dictionary.
   If the number is in the dictionary, it returns True (indicating a duplicate).
   If not, it adds the number to the dictionary with a value of 1.
   Time Complexity: O(n) where n is the number of elements in nums.
   Space Complexity: O(n) for storing unique elements in the dictionary.
2. Second Solution (Using a Set):
   Data Structure: Set (hset)
   Logic:
   For each number in nums, it checks if the number is already in the set.
   If the number is in the set, it returns True (indicating a duplicate).
   If not, it adds the number to the set.
   Time Complexity: O(n) where n is the number of elements in nums.
   Space Complexity: O(n) for storing unique elements in the set.
   Which is better?
   Efficiency: Both solutions have the same time and space complexity. However, sets are generally faster for membership tests (in operation) compared to dictionaries. This is because sets are optimized for membership tests, while dictionaries are optimized for key-value pair storage and retrieval.

Simplicity: The second solution using a set is more concise and easier to understand. It directly leverages the property of sets where all elements are unique, making the logic straightforward.

Memory Overhead: While both have O(n) space complexity, sets might have a slightly lower memory overhead than dictionaries since they only store keys and not key-value pairs.

Conclusion: The second solution using a set is preferable due to its simplicity and potentially faster membership tests. However, the difference in performance between the two solutions would likely be negligible for most practical purposes.
