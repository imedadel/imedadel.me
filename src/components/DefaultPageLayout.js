import React from 'react'
import { MDXRenderer } from "gatsby-mdx"

export default ({ pageContext: {node} }) => {
	// comment
	return (
	<main>
		<MDXRenderer>{node.code.body}</MDXRenderer>
	</main>
	)
}
