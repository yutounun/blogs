---
external: false
draft: false
title: Seamless Google Map Integration in Your Next.js 14 Project
description: Seamless Google Map Integration in Your Next.js 14 Project
date: 2024-08-02
categories:
  - web-development
---

## Overview

Hold on. You might think that integrating google map in your next14 project should be hustling.

Surprisingly, it’s not. In fact, I had been putting it off while when crafting my [coffices](https://coffices-co.vercel.app/). However I found the process to be quite straightforward. Let me quickly share how I made it happen.

## Set up GoogleMaps Platform account

### Make an account

[Google Cloud Console](https://console.cloud.google.com/welcome?hl=ja&project=coffices-431303)

## Payment Information

Follow the instructions to set up your billing information.

### Get API_KEY

Just follow the instructions on the page.

### Filter referer

Set your page’s hostname and [local](http://localhost/) hostname

example)

```jsx
https://coffices-co.vercel.app/
http://localhost:3000
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2a9ce751-46b4-4775-a513-a54e2509fe33/287f3b6c-f59a-4ccc-985b-295251a45089/Untitled.png)

## Install @next/third-parties

```jsx
npm install @next/third-parties@latest next@latest
```

## Set API_KEY on env file

Create a `.env.local` file in your project's root directory and add:

```jsx
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = "TYPE YOUR KEY HERE";
```

## Make a component file

It’s generally better to divide parts into neat components.

```jsx
import { GoogleMapsEmbed } from "@next/third-parties/google";

const GoogleMap = ({ locationName }: { locationName: string }) => {
  return (
    <GoogleMapsEmbed
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      height={200}
      width="100%"
      mode="place"
      q={locationName}
    />
  );
};

export default GoogleMap;
```

## Parent component

```jsx
<GoogleMap locationName={cafe.title} />
```

## How much does it cost per month?

If you use Google Maps API around 100 times per month, it will likely not cost you anything due to Google's $200 monthly credit for API usage. Here's the breakdown:

Dynamic Maps: $7 per 1,000 requests.
Static Maps: $2 per 1,000 requests.
With 100 requests per month, the cost would be minimal compared to the $200 monthly credit. Thus, you can effectively use the API for free unless you exceed this credit limit​.

## Conclusion

Integrating Google Maps into your Next.js 14 project is easier than you might think. By setting up your Google Maps Platform account, installing the necessary packages, and creating a simple component, you can quickly add map functionality to your site. I hope this guide helps you get started with your own integration. Happy coding!
