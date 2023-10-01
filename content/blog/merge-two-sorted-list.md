---
external: false
draft: false
title: 21. Merge Two Sorted Lists
description: leetcode easy problem
date: 2023-09-30
categories:
  - leetcode
  - easy-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/contains-duplicate/description/)

## Problem Description

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

### Examples:

- **Example 1:**
  ![Blogster](/images/merge-two-sorted-list.png)

```plaintext
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

### Constraints:

- The number of nodes in both lists is in the range [0, 50].
- 100 <= Node.val <= 100
- Both list1 and list2 are sorted in non-decreasing order.

## Answer

### Intuition

To achieve merging two sorted lists, fundamental understanding of linked list manipulation.

### Approach

1. Initialize a current(`cur`) and a `head` that will be eventually returned.
2. Iterate through `line1` and `line2`.
3. Compare values of `line1` and `line2` to identify the one with lower value.
4. Set `cur`'s node to be the next node with smaller value.
5. Advance `cur` and the pointer in the list from which a node was taken by `cur`.
6. If either `list1` or `list2` reaches a last value, append remaining list to `cur`.

### Complexity

- Time complexity: O(n)

- Space complexity: O(n)

### Code

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        cur = head = ListNode()

        while list1 and list2:
            if list1.val > list2.val:
                cur.next = list2
                cur = cur.next
                list2 = list2.next
            else:
                cur.next = list1
                cur = cur.next
                list1 = list1.next

        if list1 or list2:
            cur.next = list1 if list1 else list2

        return head.next
```
