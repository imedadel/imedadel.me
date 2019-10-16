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
							font-weight: 700;
							letter-spacing: -0.02em;
							margin-bottom: 0.125em;
						`}
					>
						{node.frontmatter.title}
					</h1>
					<p
						css={css`
							font-size: 1.618rem;
							letter-spacing: -0.01em;
							font-weight: 300;
							color: dimgrey;
						`}
					>
						{node.frontmatter.description}
					</p>
					<div
						dangerouslySetInnerHTML={{ __html: node.html }}
						css={css`
							font-weight: 400;
							letter-spacing: -0.01em;

							> :not(img),
							> :not(picture),
							> :not(figure),
							> :not(pre),
							> :not(code) {
								padding-left: 5rem;
							}

							pre,
							:not(pre) code {
								background-color: pink;
								color: black;
								padding: 0.125em;
								border-radius: 4px;
								letter-spacing: 0;
								font-family: 'Fira Code', monospace;
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
