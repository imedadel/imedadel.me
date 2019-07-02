import React from 'react'
import { MDXRenderer } from "gatsby-mdx"
import {Link} from 'gatsby'

import SEO from '../components/SEO'
import { rhythm } from '../utils/typography'

export default ({ pageContext: {node} }) => {
	// comment
	return (
	<main>
		<SEO title={node.headings[0].value} description={node.frontmatter.desc} slug={node.frontmatter.slug} />
		<Link to={`/`} style={{textDecoration: `none`, marginBottom: rhythm(1.5),}} title={`Go to homepage`} role={`navigation`}><h2 style={{ textTransform: 'lowercase' }}>Imed Adel.</h2></Link>
		<MDXRenderer>{node.code.body}</MDXRenderer>
	</main>
	)
}
