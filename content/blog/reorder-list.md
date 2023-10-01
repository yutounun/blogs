---
external: false
draft: false
title: 143. Reorder List
description: leetcode easy problem
date: 2023-10-01
categories:
  - leetcode
  - medium-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/reorder-list/description/)

## Problem Description

You are given the head of a singly linked-list. The list can be represented as:

```
L0 → L1 → … → Ln - 1 → Ln
```

Reorder the list to be on the following form:

```
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
```

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

### Examples:

- **Example 1:**

```plaintext
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```

### Constraints:

- The number of nodes in the list is in the range [1, 5 * 104].
- 1 <= Node.val <= 1000

## Answer

### Complexity

- Time complexity: O(n)

- Space complexity: O(1)

### Code

```python
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        if not head:
            return

        # Step 1: Find the middle of the linked list
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # Step 2: Reverse the second half
        prev = None
        while slow:
            tmp = slow.next
            slow.next = prev
            prev = slow
            slow = tmp

        # Step 3: Merge two halves
        # [2,3,4,1] [1,5,3,5]
        first = head
        second = prev
        while second.next:
            tmp1 = first.next
            tmp2 = second.next

            # firstのnextはsecondにする(2のnextは1)
            first.next = second
            # 次のループのためにfirstポインタを進める(2→3みたいに)
            first = tmp1

            second.next = first
            second = tmp2
            # 実際にポインタを動かすのは first = first.nextのように
            # first.next で実際のノードを変更する
```
