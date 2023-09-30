---
external: false
draft: false
title: 3. Longest Substring Without Repeating Characters
description: leetcode easy problem
date: 2023-09-30
categories:
  - leetcode
  - medium-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

## Problem Description

Given a string s, find the length of the longest
substring
without repeating characters.

### Examples:

- **Example 1:**

```plaintext
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

- **Example 2:**

```plaintext
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

- **Example 3:**

```plaintext
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Constraints:

- 0 <= s.length <= 5 \* 104
- s consists of English letters, digits, symbols and spaces.

## Answer

### Intuition

To identify a longest consecutive substring without duplicating character, apply the sliding-window technique. This approach helps efficiently track and update the current sequence of unique characters as you iterate through the string.

### Approach

1. **Initialize a Window:** Create a window to hold consecutive characters without repetitions.
2. **Iterate Through the String:** Traverse the given string character by character.
3. **Expand Right Pointer:** Progressively move the right pointer, continuously comparing the current window's size with the maximum window size obtained so far. The right pointer advances until it encounters a character already present in the window.
4. **Adjust Left Pointer:** Whenever a character repetition is detected (when the right pointer encounters a duplicate character), incrementally move the left pointer until no duplicated characters remain within the window.

### Complexity

- Time complexity: 0(n) - The algorithm traverses through the string, taking linear time in the length of the input.

- Space complexity: O(n) - Space is required to store the window, which, in the worst case, can be as large as the input string.

### Code

```python
class Solution:
    # "edfedss" → 5
    # "eeee" → 1
    # "3ewe;:@" → 1
    # ""
    def lengthOfLongestSubstring(self, str: str) -> int:
        if not str:
            return 0

        window = []
        longest = 0
        r, l = 0, 0

        while r < len(str):
            if str[r] in window:
                window.remove(str[l])
                l += 1
            else:
                window.append(str[r])
                longest = max(longest, len(window))
                r += 1

        return longest
```
