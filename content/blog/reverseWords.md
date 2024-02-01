---
external: false
draft: false
title: 557. Reverse Words in a String III
description: leetcode easy problem
date: 2024-02-01
categories:
  - leetcode
  - easy-problem
  - string
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/reverse-words-in-a-string-iii)

## Problem Description

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

### Examples:

- **Example 1:**

  ```plaintext
  Input: s = "Let's take LeetCode contest"
  Output: "s'teL ekat edoCteeL tsetnoc"
  ```

### Constraints:

- 1 <= s.length <= 5 \* 104
- s contains printable ASCII characters.
- s does not contain any leading or trailing spaces.
- There is at least one word in s.
- All the words in s are separated by a single space.

## Python3 Solution

Apply the two pointers method and if slow and fast meet, it means the number is not happy.

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        arr = s.split(' ') # [Let's, take, LeetCode, contest]
        rtn = []
        for el in arr:
            rtn.append(''.join(reversed(list(el))))
        return ' '.join(rtn)
```
