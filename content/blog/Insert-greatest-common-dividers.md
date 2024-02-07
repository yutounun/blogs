---
external: false
draft: false
title: 2807. Insert Greatest Common Divisors in Linked List
description: leetcode easy problem
date: 2024-02-08
categories:
  - leetcode
  - easy-problem
  - linked-list
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/)

## Problem Description

Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

### Examples:

- **Example 1:**
  ![Blogster](/images/greatest-divider.png)

### Constraints:

- The number of nodes in the list is in the range [1, 5000].
- 1 <= Node.val <= 1000

## Python3 Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        while cur and cur.next:
            next_val = self.gcd(cur.val, cur.next.val)
            next_node = ListNode(next_val)
            next_node.next = cur.next
            cur.next = next_node
            cur = next_node.next
        return head

    def gcd(self, a, b):
        while b:
            a, b = b, a % b
        return a

```
