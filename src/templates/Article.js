/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
import Reset from '../components/Reset'
import Opentype from '../components/Opentype'
import Container from '../components/Container'
import Header from '../components/Header'
import Seo from '../components/Seo'

function ArticleTemplate({ pageContext: { node } }) {
	return (
		<Fragment>
			<Reset />
			<Opentype />
			<Seo
				title={node.frontmatter.seo_title || node.frontmatter.title}
				description={
					node.frontmatter.seo_description || node.frontmatter.description
				}
				slug={node.frontmatter.slug}
			/>
			<Container>
				<Header />
				<main>
					<h1
						css={css`
							font-size: 3.5rem;
							font-weight: 700;
							letter-spacing: -0.02em;
							line-height: 1.1;
							margin-bottom: 0.125em;
						`}
					>
						{node.frontmatter.title}
					</h1>
					<p
						css={css`
							font-size: 2rem;
							letter-spacing: -0.02em;
							font-weight: 300;
							line-height: 1.4;
							margin-bottom: 0.75em;
							color: dimgrey;
						`}
					>
						{node.frontmatter.description}
					</p>
					<div
						dangerouslySetInnerHTML={{ __html: node.html }}
						css={css`
							font-size: 1rem;
							font-weight: 400;
							letter-spacing: -0.01em;
							line-height: 1.5;

							> :not(img),
							> :not(picture),
							> :not(figure),
							> :not(pre),
							> :not(code) {
								padding-left: 5rem;
							}

							p,
							pre {
								margin-top: 0.25em;
								margin-bottom: 1.75em;
							}
							p + p {
								margin-bottom: 1.25em;
							}

							h2 {
								font-size: 2.25rem;
							}
							h3 {
								font-size: 1.75rem;
							}
							h4 {
								font-size: 1.25rem;
							}
							h5 {
								font-size: 1.125rem;
							}
							h6 {
								font-weight: 600;
							}

							h2,
							h3,
							h4,
							h5,
							h6 {
								margin-bottom: 0.125em;
								margin-top: 1em;
							}

							pre,
							:not(pre) code {
								background-color: pink;
								color: black;
								padding: 0.125em;
								border-radius: 4px;
								letter-spacing: 0;
							}
							pre {
								padding: 0.75em;
								overflow-x: auto;
							}
						`}
					/>
				</main>
			</Container>
		</Fragment>
	)
}

export default ArticleTemplate
