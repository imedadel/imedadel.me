---
slug: gatsby-staticquery-vs-code-snippet
title: Gatsby StaticQuery Snippet for VS Code
description: A snippet for VS Code to make writing Gatsby StaticQuery faster and easier.
tags:
  - Gatsby
  - React
  - JAMstack
  - VS Code
date: "2019-07-03"
---

Go to `File > Preferences > User Snippets` (Or `Code > Preferences > User Snippets` on MacOS), choose JavaScript, and paste the following snippet inside of the curly braces:

```json
"Gatsby Static Query": {
		"prefix": "gatstaq",
		"body": [
			"import React from 'react'",
			"import { StaticQuery, graphql } from 'gatsby'\n",
			"const ${1/(.*)/${1:/capitalize}/} = ({ data }) => (\n\t$0\n)\n",
			"const ${1:page}Query = graphql`\n\t\n`\n",
			"export default () => (\n\t<StaticQuery query={${1:page}Query} render={data => <${1/(.*)/${1:/capitalize}/} data={data} />} />\n)\n"
		]
	}
```

## More GatsbyJS Snippets?

Realizing how many times I have to re-write the exact same code in different GatsbyJS projects, I think that I'll start working on a VS Code extension for GatsbyJS. Hopefully I also find the time to make an extension that enhances the CLI 😩.
