---
external: false
draft: false
title: algorithm solving tips for python users
description: This post is a draft and won't be built.
date: 2023-09-27
categories:
  - leetcode
---

## Set

```
class Solution(object):
    def containsDuplicate(self, nums):
        hset = set()
        for idx in nums:
            if idx in hset:
                return True
            else:
                hset.add(idx)
```

### When to use

Basically set is utilized when...

1. you look for a value in array real quick
2. you remove duplicated value

### Methods

- add
  Add element to set.

## Convert upper-case to lower-case and vice versa

- string.lower()
- string.upper()

## Reverse

Let's say you'd like to replace "reverse" with "esrever"

```python
reverse == reverse[::-1]
```

## Check the type of given object

#### char.isalpha()

Return true if the target is alphabet

#### char.isdigit()

Return true if the target is num

#### isalnum()

Return true if the target is alphabet or num

## Vocabulary

- 1-indexed array
  An array starting from index 1, not 0

## Select the last index of an array

```python
stack = ["a", "b", "f"]
print(stack[-1]) # f
```

## Operator

### // 2

it divides the number by 2 and rounds down the result to the nearest integer.
