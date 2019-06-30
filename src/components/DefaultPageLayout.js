import React from 'react'
import { MDXRenderer } from "gatsby-mdx"
import {Link} from 'gatsby'

import SEO from '../components/SEO'

export default ({ pageContext: {node} }) => {
	// comment
	return (
	<main>
		<SEO title={node.headings[0].value} description={node.frontmatter.desc} slug={node.frontmatter.slug} />
		<Link to={`/`} style={{textDecoration: `none`}} title={`Go to homepage`} role={`navigation`}><h2><span role="img" aria-label="Four-Leaf Clover">🍀</span></h2></Link>
		<MDXRenderer>{node.code.body}</MDXRenderer>
	</main>
	)
}
