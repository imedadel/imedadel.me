/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { Layout, Main, Header, Container, Styled, jsx } from 'theme-ui'
import Seo from 'gatsby-theme-seo/src/components/Seo'
import TakeMeBack from 'gatsby-theme-interface/src/components/TakeMeBack'

const Page = ({ pageContext: { nodes } }) => (
	<Styled.root>
		<Layout>
			<Seo title='Blog' slug='blog' />
			<TakeMeBack path={`/`} />
			<Header>
				<h1
					sx={{
						fontWeight: 200,
						marginBottom: 0,
					}}
				>
					Imed's Blog
				</h1>
			</Header>
			<Main>
				<Container>
					{nodes.map(node => (
						<article key={node.fields.slug}>
							<h2 className='title'>
								<Link sx={{ color: 'primary' }} to={`${node.fields.slug}`}>
									{node.headings[0].value}
								</Link>
							</h2>
							{/* <p className='description'>{node.frontmatter.desc}</p> */}
						</article>
					))}
				</Container>
			</Main>
		</Layout>
	</Styled.root>
)

export default Page
