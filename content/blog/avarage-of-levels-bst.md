---
external: false
draft: false
title: 674. Longest Continuous Increasing Subsequence
description: leetcode easy problem637. Average of Levels in Binary Tree
date: 2024-02-05
categories:
  - leetcode
  - easy-problem
  - binary-search
  - tree
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/average-of-levels-in-binary-tree/description/)

## Problem Description

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

### Examples:

- **Example 1:**
  ![tree](/images/avg-levels-bst.png)
  ```plaintext
  Input: root = [3,9,20,null,null,15,7]
  Output: [3.00000,14.50000,11.00000]
  Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
  Hence return [3, 14.5, 11].
  ```

### Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1

## Python3 Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        ans = []
        # nodes store
        q = deque()
        q.append(root)

        while q:
            # list of node values on same levels
            level = []
            for _ in range(len(q)):
                popping = q.popleft()
                if popping:
                    level.append(popping.val)
                    q.append(popping.left)
                    q.append(popping.right)
            if level:
                ans.append(level)
        return [sum(nums)/len(nums) for nums in ans]

```
