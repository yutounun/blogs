---
external: false
draft: false
title: 【LeetCode】 1047. Remove All Adjacent Duplicates In String
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - leetcode
---

https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

```
var removeDuplicates = function(s) {
    const stack = []; // Create an empty stack to store unique characters

    // Iterate through the input string 's'
    for (const c of s) {
        // If the stack is empty or the last character in the stack is different from 'c'
        if (stack.length === 0 || stack[stack.length - 1] !== c) {
            // Push the character 'c' onto the stack
            stack.push(c);
        } else {
            // If the last character in the stack is the same as 'c', pop the last character from the stack
            stack.pop();
        }
    }

    // Join the stack and return the result
    return stack.join('');
};

```
