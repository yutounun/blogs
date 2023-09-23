---
external: false
draft: false
title: 【LeetCode】 Number of 1 bits
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - leetcode
---

## Problem

Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

```
Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
```

Example 1:

```
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
```

## Solution

```
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // Initialize a count variable to store the number of 1 bits
    let count = 0;

    // Iterate through the given integer n, 32 times (for 32-bit representation)
    for (let i = 0; i < 32; i++) {
        // If the bitwise AND of n and 1 is 1, increment the count variable
        if (n & 1 === 1) {
            count++;
        }
        // Shift n to the right by 1 bit
        n >>= 1;
    }

    // Return the final count of 1 bits
    return count;
};

```

In this solution, we've defined a function hammingWeight that accepts a positive integer n. The function initializes a count variable to keep track of the number of '1' bits. It then iterates through the binary representation of n 32 times, checking each bit to see if it's a '1' by using the bitwise AND operator (&). If a '1' bit is found, the count variable is incremented. After the loop, the final count is returned as the result.
