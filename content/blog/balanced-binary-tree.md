---
external: false
draft: false
title: 110. Balanced Binary Tree
description: leetcode easy problem
date: 2024-01-21
categories:
  - leetcode
  - easy-problem
  - tree
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/balanced-binary-tree/)

## Problem Description

Given a binary tree, determine if it is height-balanced.

### Examples:

- **Example 1:**
  ![linked](/images/balanced-binary-tree.png)

  ```plaintext
  Input: root = [3,9,20,null,null,15,7]
  Output: true
  ```

### Constraints:

- The number of nodes in the tree is in the range [0, 5000].
- -104 <= Node.val <= 104

## Python3 Solution

```python
class Solution(object):
    def isBalanced(self, root):
        # if any trees are unbalanced the returned value is -1
        # if not the value must be more than 0
        return (self.Height(root) >= 0)
    def Height(self, root):
        if root is None:  return 0
        leftheight, rightheight = self.Height(root.left), self.Height(root.right)
        # If current leftHeight and rightHeight differ by more than 1, it's not balanced.
        # Also if any subtrees is unbalanced, return -1
        if leftheight < 0 or rightheight < 0 or abs(leftheight - rightheight) > 1:  return -1
        return max(leftheight, rightheight) + 1
```
