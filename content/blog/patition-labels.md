---
external: false
draft: false
title: 763. Partition Labels
description: leetcode easy problem
date: 2024-02-07
categories:
  - leetcode
  - easy-problem
  - binary-search
  - sliding-window
---

**URL**: [LeetCode Problem](https://leetcode.com/problems/partition-labels/description/)

## Problem Description

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

### Examples:

- **Example 1:**
  ```plaintext
  Input: s = "ababcbacadefegdehijhklij"
  Output: [9,7,8]
  Explanation:
  The partition is "ababcbaca", "defegde", "hijhklij".
  This is a partition so that each letter appears in at most one part.
  A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
  ```

### Constraints:

- 1 <= s.length <= 500
- s consists of lowercase English letters.

## Python3 Solution

```python
class Solution:
    def partitionLabels(self, s: str) -> [int]:
        # Step 1: Find the last index of each character in the string.
        # {a: 8, b: 5...}
        last_index = {char: idx for idx, char in enumerate(s)}

        # Step 2: Initialize variables for tracking the start and end of the current partition,
        # and a list to hold the sizes of all partitions.
        start = 0
        end = 0
        partition_sizes = []

        # Step 3: Iterate through the string to determine partitions.
        for idx, char in enumerate(s):
            # パーティション内の各文字のlast_indexを見て一番後ろのものを探す
            end = max(end, last_index[char])  # Update the end of the current partition

            # If the current index matches the end of the partition,
            # it's time to create a new partition.
            # 一番後ろのindexがcurrentと一致したら、そこでpartition終わり
            if idx == end:
                partition_sizes.append(end - start + 1)  # Append the size of the current partition
                start = idx + 1  # Move the start to the next character

        # Return the list of partition sizes.
        return partition_sizes


```
