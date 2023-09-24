---
external: false
draft: false
title: 【LeetCode】 Shift 2D Grid
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - leetcode
  - easy-problem
---

## Intuition

The function shifts the grid 'k' times.
In each shift, the last element of the current row is removed
and added at the beginning of the next row.
If it is the last row, the popped element is added at the beginning of the first row.
This process is repeated 'k' times.
After all the shifts are done, the updated grid is returned.

## Approach

The function shifts the grid 'k' times.
In each shift, the last element of the current row is removed
and added at the beginning of the next row.
If it is the last row, the popped element is added at the beginning of the first row.
This process is repeated 'k' times.
After all the shifts are done, the updated grid is returned.

## Complexity

Time complexity:
O(N^2)
Beats 53.21%

## Space complexity:

O(N)
beats: 94.50%

## Solution

```
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    // O(n^2)
    for (let i = 0; i < k; i++){
        for (let j = 0; j < grid.length; j++){
            const row = grid[j]
            const splicedVal = row.pop()
            // last row
            if (j === grid.length - 1) {
                grid[0].unshift(splicedVal)
            } else {
                grid[j+1].unshift(splicedVal)
            }
        }
    }
    return grid
};
```
