/** @jsx jsx */
import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import { Layout, Main, Header, Container, jsx } from 'theme-ui'
import Seo from 'gatsby-theme-seo/src/components/Seo'

const Post = ({ pageContext: { node } }) => {
	return (
		<Layout>
			<Header>
				<Seo
					title={node.headings[0].value}
					description={node.frontmatter.desc}
					slug={node.fields.slug}
				/>
				<Link
					to={`/`}
					sx={{
						textDecoration: `none`,
						marginBottom: 1,
						color: 'primary',
					}}
					title={`Go to homepage`}
					role={`navigation`}
				>
					<h2>Imed Adel</h2>
				</Link>
				<Link
					to={`/blog`}
					sx={{
						textDecoration: `none`,
						marginBottom: 1,
						color: 'primary',
					}}
					title={`Go to blog page`}
					role={`navigation`}
				>
					<h2>Blog</h2>
				</Link>
			</Header>
			<Main>
				<Container>
					<MDXRenderer>{node.body}</MDXRenderer>
				</Container>
			</Main>
		</Layout>
	)
}

export default Post
