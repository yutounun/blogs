---
external: false
draft: false
title: 2181. Merge Nodes in Between Zeros
description: leetcode easy problem
date: 2024-02-12
categories:
  - leetcode
  - easy-problem
  - linked-list
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/merge-nodes-in-between-zeros/description/)

## Problem Description

You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.

### Examples:

- **Example 1:**
  ![Blogster](/images/merge-nodes-between-0.png)

### Constraints:

- The number of nodes in the list is in the range [3, 2 * 105].
- 0 <= Node.val <= 1000
- There are no two consecutive nodes with Node.val == 0.
- The beginning and end of the linked list have Node.val == 0.

## Python3 Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # prev of last 0
        prev, cur = head, head.next
        # sum of nums between 0's
        sum = 0
        while cur:
            if cur.val == 0:
                last.val = sum
                prev.next = last
                sum = 0
                prev = last
            else:
                sum += cur.val
            # last num, that is 0
            if not cur.next:
                last.next = None
                return head.next
            last = cur
            cur = cur.next


```
