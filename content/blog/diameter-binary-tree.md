---
external: false
draft: false
title: 543.Diameter of Binary Tree
description: leetcode easy problem
date: 2023-10-03
categories:
  - leetcode
  - easy-problem
  - tree
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/diameter-of-binary-tree/)

## Problem Description

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

### Examples:

- **Example 1:**
  ![tree](/images/diameter-binary-tree.png)

```plaintext
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
```

### Constraints:

- The number of nodes in the tree is in the range [1, 104].
- 100 <= Node.val <= 100

## Answer

### Intuition

### Approach

### Complexity

- Time complexity:

- Space complexity:

### Code

```python
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.diameter = 0

        def recursion(node):
            if not node: return 0

            left = recursion(node.left)
            right = recursion(node.right)
            self.diameter = max(right+left, self.diameter)
            return max(right, left) + 1

        ans = recursion(root)
        return self.diameter
```
