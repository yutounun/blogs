---
external: false
draft: false
title: 155. Min Stack
description: leetcode easy problem
date: 2023-09-28
categories:
  - leetcode
  - medium-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/contains-duplicate/description/)

## Problem Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

- MinStack() initializes the stack object.
  void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.
- You must implement a solution with O(1) time complexity for each function.

### Examples:

- **Example 1:**

```plaintext
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

### Constraints:

- 231 <= val <= 231 - 1
- Methods pop, top and getMin operations will always be called on non-empty stacks.
- At most 3 \* 104 calls will be made to push, pop, top, and getMin.

## Answer

### Intuition

While the straightforward approach is to implement the stack using a class with the required methods, a more efficient alternative exists. This approach involves maintaining two arrays: one for storing all pushed elements (array), and another (min_array) for storing the minimum value at each level of the stack.

### Approach

#### push

The push method appends the given element to array. It also appends a value to min_array — but only if min_array is empty or if the given value is smaller than the last element in min_array. In the latter case, the given value is appended to min_array.

#### pop

The pop method removes the last element from both array and min_array.

#### top

Either of the last element can be returned.

#### getMin

Returns the last element of min_array, which is the minimum value currently in the stack.

### Complexity

- Time complexity: O(n)

- Space complexity: O(n)

### Code

```python
class MinStack:
    array = []
    min_array = []
    def __init__(self):
        self.array = []
        self.min_array = []

    def push(self, val: int) -> None:
        self.array.append(val)
        self.min_array.append(val if not self.min_array else min(val, self.min_array[-1]))

    def pop(self) -> None:
        self.array.pop()
        self.min_array.pop()

    def top(self) -> int:
        return self.array[-1]

    def getMin(self) -> int:
        return self.min_array[-1]
```
