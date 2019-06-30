import React from 'react'
import { MDXRenderer } from "gatsby-mdx"
import {Link} from 'gatsby'

export default ({ pageContext: {node} }) => {
	// comment
	return (
	<main>
		<Link to={`/`} title={`Go to homepage`} role={`navigation`}><h2>{`<`}</h2></Link>
		<MDXRenderer>{node.code.body}</MDXRenderer>
	</main>
	)
}
