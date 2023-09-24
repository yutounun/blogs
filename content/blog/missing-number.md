---
external: false
draft: false
title: 【LeetCode】 Missing Number
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - leetcode
  - easy-problem
---

## Introduction

In this article, we will discuss a simple and efficient algorithm to find the missing number in an array of consecutive integers using JavaScript. The problem statement is as follows: Given an array containing n distinct numbers taken from the range 0 to n, find the missing number from the range.

## Algorithm

The solution provided below uses the mathematical property of the sum of consecutive integers. The sum of all integers from 0 to n can be calculated using the formula sum = n \* (n + 1) / 2. By calculating the sum of all integers in the given range and then subtracting the sum of the integers present in the array, we can find the missing number.

Here's the JavaScript code to implement the algorithm:

```
var missingNumber = function (nums) {
  const n = nums.length;
  let sum = 0;
  for (num of nums) {
    sum += num;
  }
  return (n * (n + 1)) / 2 - sum;
};

```

Calculate the length of the input array nums, and store it in the variable n.
Initialize a variable sum to store the sum of all the elements in the array.
Iterate through the elements of the array nums, and add each element to the sum.
Calculate the sum of all integers from 0 to n using the formula n \* (n + 1) / 2, and subtract the sum from it to get the missing number.
The time complexity of this algorithm is O(n), as it iterates through the input array once.

## Conclusion

In this article, we discussed an efficient algorithm to find the missing number in an array of consecutive integers using JavaScript. By leveraging the mathematical property of the sum of consecutive integers, we can solve this problem with a time complexity of O(n).
