---
external: false
draft: false
title: 141. Linked List Cycle
description: leetcode easy problem
date: 2023-09-30
categories:
  - leetcode
  - easy-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/linked-list-cycle/)

## Problem Description

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

### Examples:

- **Example 1:**
  ![linked](/images/linked-list-cycle.png)

```plaintext
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

### Constraints:

- The number of the nodes in the list is in the range [0, 104].
- 105 <= Node.val <= 105
- pos is -1 or a valid index in the linked-list.

## Answer

### Complexity

- Time complexity: O(n)

- Space complexity: O(n)

### Code

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # Init two pointers: one is slow advancing 1 step in a loop, another is fast advancing 2 step in a loop
    # Given one reaches another pointer, meaning there is a cycle in a list
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head: # Ensure there are at least two nodes
            return False

        slow = head
        fast = head.next

        # When a slower pointer reaches a fast pointer or when a fast pointer reaches the
        while slow is not fast:
            if fast is None or fast.next is None:
                return False
            slow = slow.next
            fast = fast.next.next
        return True
```
