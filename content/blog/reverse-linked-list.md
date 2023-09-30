---
external: false
draft: false
title: 206. Reverse Linked List with Python
date: 2023-09-30
categories:
  - leetcode
  - easy-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/contains-duplicate/description/)

## Problem Description

Given the head of a singly linked list, reverse the list, and return the reversed list.

### Examples:

- **Example 1:**
  ![Blogster](/images/reverse-linked-list.png)

```plaintext
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

### Constraints:

- The number of nodes in the list is the range [0, 5000].
- 5000 <= Node.val <= 5000

## Answer

### Complexity

- Time complexity: O(n)

- Space complexity: O(1)

### Code

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None

        while head:
            next_node = head.next
            head.next = prev
            prev = head
            head = next_node

        return prev
```
