---
external: false
draft: false
title: How to display only the numeric keyboard when a user inputs a number
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - web-development
---

If you're having trouble displaying the numeric keyboard when a user inputs a number on the MUI TextField component, don't worry - there's a solution. In this article, we'll show you how to quickly enable this feature.

## The Problem

By default, the input tag allows users to be shown the numeric keyboard when inputting a number using the following code:

```
<input
  pattern: '\\d*',
  inputMode: 'numeric',
>
```

However, adding the same properties to the TextField component on MUI will result in an error that says "Property 'pattern' does not exist on type 'IntrinsicAttributes & TextFieldProps'."

## The Solution

To enable the numeric keyboard on the MUI TextField component, use the following code:

```
import TextField from '@mui/material/TextField';

function MyComponent() {
  return (
    <TextField
      type="text"
      inputProps={{
        pattern: '\\d*',
        inputMode: 'numeric',
      }}
    />
  );
}
```

This code sets the inputProps property of the TextField component to an object that includes the `pattern` and `inputMode` properties, enabling the numeric keyboard for numbers.

In conclusion, if you need to display the numeric keyboard when a user inputs a number on the MUI TextField component, use the above code to set the inputProps property.
