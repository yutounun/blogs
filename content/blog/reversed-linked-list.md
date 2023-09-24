---
external: false
draft: false
title: 【LeetCode】 206.Reverse Linked List
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - leetcode
  - easy-problem
---

In this article, we will explore how to reverse a singly-linked list using JavaScript. A singly-linked list is a data structure in which each node points to the next node, creating a linear sequence of nodes.

## Singly-Linked List Node Definition

In order to work with singly-linked lists, we first need to define a structure for the nodes. In JavaScript, we can use a function constructor to define a `ListNode` like this:

```javascript
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
```

Here, the `ListNode` function constructor takes two parameters:

1. `val`: The value of the node, which defaults to 0 if not provided.
2. `next`: A reference to the next node in the list, which defaults to `null` if not provided.

## Reversing a Singly-Linked List

Now that we have the `ListNode` definition, let's take a look at the `reverseList` function, which takes a `head` node as input and returns the head of the reversed linked list.

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prevNode = null;
  let currentNode = head;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
};
```

Here's a step-by-step explanation of the algorithm:

1. Initialize three pointers: `prevNode`, `currentNode`, and `nextNode`. Set `prevNode` and `nextNode` to `null`, and `currentNode` to `head`.
2. Iterate through the linked list until `currentNode` is `null`.
3. During each iteration, store the next node in the `nextNode` variable.
4. Update the `next` pointer of `currentNode` to point to `prevNode`, effectively reversing the link.
5. Move the `prevNode` pointer forward by setting it to `currentNode`.
6. Move the `currentNode` pointer forward by setting it to `nextNode`.
7. Once the loop finishes, `prevNode` will be pointing to the new head of the reversed linked list (previously the last node). Return `prevNode`.

By using this `reverseList` function, we can easily reverse any given singly-linked list in JavaScript.
