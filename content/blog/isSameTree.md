---
external: false
draft: false
title: 100. Same Tree
description: leetcode easy problem
date: 2024-01-14
categories:
  - leetcode
  - easy-problem
  - binary-tree
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/same-tree/description/)

## Problem Description

### Examples:

- **Example 1:**

![tree](/images/isSameTree.png)

### Constraints:

- The number of nodes in both trees is in the range [0, 100].
- -104 <= Node.val <= 104

## Answer

### Code

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # End conditions
        if p is None and q is None:
            return True
        elif p is None or q is None:
            return False

        # Iterating condition
        if p.val == q.val:
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        else:
            return False
```
