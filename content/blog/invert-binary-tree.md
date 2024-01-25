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
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def recursive(node):
            if not node: return

            left = recursive(node.left)
            right = recursive(node.right)

            node.left, node.right = right, left
            return node

        recursive(root)
        return root
```
