---
external: false
draft: false
title: 125. Valid Palindrome
description: leetcode easy problem
date: 2023-09-24
categories:
  - leetcode
  - easy-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/valid-palindrome/)

## Problem Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

### Examples:

- **Example 1:**

  ```plaintext
  Input: s = "A man, a plan, a canal: Panama"
  Output: true
  Explanation: "amanaplanacanalpanama" is a palindrome.
  ```

- **Example 2:**

  ```plaintext
  Input: s = "race a car"
  Output: false
  Explanation: "raceacar" is not a palindrome.
  ```

- **Example 3:**

  ```plaintext
  Input: s = " "
  Output: true
  Explanation: s is an empty string "" after removing non-alphanumeric characters.
  Since an empty string reads the same forward and backward, it is a palindrome.
  ```

### Constraints:

1 <= s.length <= 2 \* 105
s consists only of printable ASCII characters.

## Answer

### Intuition

First solution that comes up with me was to check all elements of a given string and reverse it to check if the reversed one and original one is same.

### Approach

1. Iterate a given string
2. Check each element if it's alphabet or digit or something else.
3. If it's alphabet or digit, merge it to a "clean_word"
4. At last, check if the reversed one and original one is same.

## Complexity

- Time complexity: O(n)

- Space complexity: O(n)

### Code

```
class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned_word = ''

        for char in s:
            if char.isalpha() or char.isdigit():
                cleaned_word += char.lower()

        return cleaned_word == cleaned_word[::-1]
```
