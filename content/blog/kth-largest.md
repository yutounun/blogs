---
external: false
draft: false
title: 703. Kth Largest Element in a Stream
description: leetcode easy problem
date: 2024-01-23
categories:
  - leetcode
  - easy-problem
  - heap
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/kth-largest-element-in-a-stream/description/)

## Problem Description

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

### Examples:

- **Example 1:**

  ```plaintext
    Input
    ["KthLargest", "add", "add", "add", "add", "add"]
    [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
    Output
    [null, 4, 5, 5, 8, 8]

    Explanation
    KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    kthLargest.add(3);   // return 4
    kthLargest.add(5);   // return 5
    kthLargest.add(10);  // return 5
    kthLargest.add(9);   // return 8
    kthLargest.add(4);   // return 8

  ```

### Constraints:

- 1 <= k <= 104
- 0 <= nums.length <= 104
- -104 <= nums[i] <= 104
- -104 <= val <= 104
- At most 104 calls will be made to add.
- It is guaranteed that there will be at least k elements in the array - when you search for the kth element.

## Python3 Solution

```python
class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        nums = heapq.nlargest(k, nums)
        # sort in ascending order
        heapq.heapify(nums)
        self.heap = nums
        self.k = k

    def add(self, val: int) -> int:
        # heapのサイズが既にk個足りてて、heapの最小値よりも小さいなら上からk以下だから最初から追加不要
        if len(self.heap) < self.k:
            heapq.heappush(self.heap, val)
        elif val > self.heap[0]:
            heapq.heapreplace(self.heap, val)

        return self.heap[0]
```
