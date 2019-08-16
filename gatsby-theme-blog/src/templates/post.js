/** @jsx jsx */
import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
	Layout,
	Main,
	Container,
	jsx,
	Styled
} from 'theme-ui'
import Seo from 'gatsby-theme-seo/src/components/Seo'
import TakeMeBack from 'gatsby-theme-interface/src/components/TakeMeBack'

const Post = ({ pageContext: { node } }) => {
	return (
		<Styled.root>
			<Layout>
					<Seo
						title={node.headings[0].value}
						description={node.frontmatter.desc}
						slug={node.fields.slug}
					/>
					<TakeMeBack path={`/blog`} />
				<Main>
					<Container>
						<MDXRenderer>{node.body}</MDXRenderer>
					</Container>
				</Main>
			</Layout>
		</Styled.root>
	)
}

export default Post
