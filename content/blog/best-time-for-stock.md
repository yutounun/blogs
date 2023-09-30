---
external: false
draft: false
title: 121. Best Time to Buy and Sell Stock
description: leetcode easy problem
date: 2023-09-24
categories:
  - leetcode
  - easy-problem
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Problem Description

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Examples:

- **Example 1:**

```plaintext
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

- **Example 2:**

```plaintext
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

### Constraints:

- 1 <= prices.length <= 105
- 0 <= prices[i] <= 104

## Answer

### Intuition

To maximize profit, identify the minimum price value and calculate the profit possible from selling at prices higher than this minimum.

### Approach

1. Iterate through the prices list.
2. Update min_val by comparing the current price with the existing min_val.
3. Update max_profit by comparing the current max_profit with the profit gained by subtracting min_val from the current price.

### Complexity

- Time complexity: O(n)

  - Time depends on the size of prices length.

- Space complexity: O(1)
  - Use constant space(min_val, max_profit)

### Code

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Infinity
        min_val = float('inf')
        max_profit = 0

        for price in prices:
            min_val = min(min_val, price)
            max_profit = max(price - min_val, max_profit)

        return max_profit
```
