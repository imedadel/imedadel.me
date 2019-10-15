---
slug: redirect-pages-gatsby
title: How to Redirect Pages in Gatsby
description: Two methods to redirect pages in Gatsby
tags:
  - Gatsby
  - React
  - JAMstack
date: '2019-07-06'
---

## Use Redirect From Reach Router

You can redirect a page by importing `Redirect` from `@reach/router` to your page. Note that you do not have to install anything, as it comes shipped with Gatsby.

```js
import React from 'react'
import { Redirect } from '@reach/router' // highlight-line

const IndexPage = () => <Redirect to={`/en`} /> // highlight-line

export default IndexPage
```

## Use Window Location

First, check if `window` is defined and then use `window.location.replace()` to do the redirection.

```js
import React from 'react'

if (typeof window !== `undefined`) window.location.replace(`/en`) // highlight-line

const IndexPage = () => {
	return <></>
}

export default IndexPage
```

## Use createRedirect from Gatsby Actions

I kept this to the end because it didn’t work for me when I tried it. But Gatsby offers an action named `createRedirect`, which you can use in `gatsby-node.js`.

```js
exports.createPages = ({ actions }) => {
	actions.createRedirect({
		fromPath: `/`,
		toPath: `/en`,
		isPermanent: `true`,
	})
}
```

## Further Reading

- [Creating and Modifying Pages, Gatsbyjs.org](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/)
- [Node APIs, Gatsbyjs.org](https://www.gatsbyjs.org/docs/node-apis/)
- [`createRedirect`, Actions, Gatsbyjs.org](https://www.gatsbyjs.org/docs/actions/#createRedirect)
- [`Window.location`, MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
