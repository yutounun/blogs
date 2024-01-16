---
external: false
draft: false
title: 125. Valid Palindrome
description: leetcode easy problem
date: 2024-01-17
categories:
  - leetcode
  - easy-problem
  - two-pointer
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/valid-palindrome/description/)

## Problem Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

### Examples:

- **Example 1:**
  Input: s = "A man, a plan, a canal: Panama"
  Output: true
  Explanation: "amanaplanacanalpanama" is a palindrome.

- **Example 2:**
  Input: s = "race a car"
  Output: false
  Explanation: "raceacar" is not a palindrome.

- **Example 3:**
  Input: s = " "
  Output: true
  Explanation: s is an empty string "" after removing non-alphanumeric characters.
  Since an empty string reads the same forward and backward, it is a palindrome.

### Constraints:

1 <= s.length <= 2 \* 105
s consists only of printable ASCII characters.

## Answer

### Code

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        left_idx, right_idx = 0, len(s)-1

        while right_idx > left_idx:
            left_val, right_val = s[left_idx].lower(), s[right_idx].lower()

            if left_val.isalnum() and right_val.isalnum():
                if left_val != right_val:
                    return False
                else:
                    left_idx += 1
                    right_idx -= 1
            else:
            # if either value is not alnum.
                if not left_val.isalnum():
                    left_idx += 1
                if not right_val.isalnum():
                    right_idx -= 1

        return True
```
