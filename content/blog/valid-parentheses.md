---
external: false
draft: false
title: 20. Valid Parentheses
description: leetcode easy problem
date: 2023-09-26
categories:
  - leetcode
  - easy-problem
  - stack
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/contains-duplicate/description/)

## Problem Description

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

### Examples:

- **Example 1:**

```plaintext
Input: s = "()"
Output: true

```

- **Example 2:**

```plaintext
Input: s = "()[]{}"
Output: true

```

- **Example 3:**

```plaintext
Input: s = "(]"
Output: false
```

### Constraints:

- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.

## Answer

### Intuition

### Approach

### Complexity

- Time complexity: O(n)

- Space complexity: O(n)

### Code

```python
class Solution:
    # Stack
    # O(n) time
    # O(n) space
    def isValid(self, str: str) -> bool:
        dict = {
        ')': '(',
        '}': '{',
        ']': '['
        }
        stack = []
        for s in str:
            if len(stack) > 0 and dict[s] == stack[-1]:
                stack.pop()
            else:
                stack.append(s)
            print(stack)
        if len(stack) == 0:
            return True
        else:
            return False
```
