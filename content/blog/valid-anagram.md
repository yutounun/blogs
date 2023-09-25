---
external: false
draft: false
title: 242. Valid Anagram
description: leetcode easy problem
date: 2023-09-24
categories:
  - leetcode
  - easy-problem
  - hashmap
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/valid-anagram/description/)

## Problem Description

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Examples:

- **Example 1:**

  ```plaintext
  Input: s = "anagram", t = "nagaram"
  Output: true
  ```

- **Example 2:**

  ```plaintext
  Input: s = "rat", t = "car"
  Output: false
  ```

- **Example 3:**
  ```plaintext
  1 <= s.length, t.length <= 5 * 104
  s and t consist of lowercase English letters.
  ```

### Constraints:

- `1 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`

## Python3 Solution1

```python
class Solution:
    # ssee, edsd: false
    # feef, efef: true
    # hashmap
    # O(len(s) + len(t))→O(n)
    def isAnagram(self, ss: str, tt: str) -> bool:
        # create hashmap
        smap = {}
        tmap = {}
        # iterate ss and tt
        for s in ss:
            if s in smap:
                smap[s] += 1
            else:
                smap[s] = 1
        for t in tt:
            if t in tmap:
                tmap[t] += 1
            else:
                tmap[t] = 1
        return smap == tmap


```

### Explanation1:

1. Create an empty hashmap for both ss and tt. Hashmap can solve problems in O(1) time complexity.
2. Set each element in ss to smap(hashmap for s). Smap will have key of english letter and value of the times of the letter in ss.
3. Iterate t in the same way.
4. Return true if smap equals tmap as it means two of give arrays are anagram.

**Memory**: O(n)
**Time Complexity**: O(1)
→ Because the length of input doesn't effect on the size of each hashmap. The max length of hashmap is 26(length of all english letters)
