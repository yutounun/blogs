---
external: false
draft: false
title: 226. Invert Binary Tree
description: leetcode easy problem
date: 2023-10-02
categories:
  - leetcode
  - easy-problem
  - tree
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/invert-binary-tree/submissions/)

## Problem Description

Given the root of a binary tree, invert the tree, and return its root.

### Examples:

- **Example 1:**
  ![tree](/images/invert-tree.png)

```plaintext
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

### Constraints:

- The number of nodes in the tree is in the range [0, 100].
- 100 <= Node.val <= 100

## Answer

### Intuition

To invert a binary tree, you should replace left child node and right child node recursively.

### Complexity

- Time complexity: O(n)

- Space complexity: O(1)

### Code

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# Replace left child node and right child node recursively
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:

        if not root: return

        tmp = root.left
        root.left, root.right = root.right, root.left

        self.invertTree(root.left)
        self.invertTree(root.right)

        return root
```
