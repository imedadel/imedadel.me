import React from 'react'
import { MDXRenderer } from "gatsby-mdx"
import {Link} from 'gatsby'

export default ({ pageContext: {node} }) => {
	// comment
	return (
	<main>
		<Link to={`/`}><h2 style={{ textTransform: 'lowercase' }}>Imed Adel.</h2></Link>
		<MDXRenderer>{node.code.body}</MDXRenderer>
	</main>
	)
}
