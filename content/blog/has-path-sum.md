---
external: false
draft: false
title: 112. Path Sum
description: leetcode easy problem
date: 2024-01-24
categories:
  - leetcode
  - easy-problem
  - tree
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/path-sum/description/?envType=study-plan-v2&envId=top-interview-150)

## Problem Description

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

### Examples:

- **Example 1:**
  ![tree](/images/has-path-sum.png)

### Constraints:

- The number of nodes in the tree is in the range [0, 5000].
- -1000 <= Node.val <= 1000
- -1000 <= targetSum <= 1000

## Python3 Solution

Runtime 42ms → Beats 71.76% of users with Python3
Space 17.54MB → Beats 90.18% of users with Python3
Time Complexity : - O(N)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root: return False

        # if current node is a leaf
        if not root.left and not root.right:
            # Return True if substracted targetSum equals root.val
            return root.val == targetSum

        left = self.hasPathSum(root.left, targetSum - root.val)
        right = self.hasPathSum(root.right, targetSum - root.val)

        # return true if either left or right is true
        return left or right
```
