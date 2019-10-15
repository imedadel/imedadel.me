/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
import { StaticQuery, graphql, Link } from 'gatsby'

function ArticlesList({ data }) {
	return (
		<Fragment>
			{data.articles.nodes.map(article => (
				<article
					key={article.id}
					css={css`
						margin-bottom: 1.5em;
					`}
				>
					<h3
						css={css`
							font-size: 1.75rem;
							line-height: 1.2;
							margin-bottom: 0.25em;
						`}
					>
						<Link to={article.frontmatter.slug}>
							{article.frontmatter.title}
						</Link>
					</h3>
					<p
						css={css`
							line-height: 1.4;
							font-weight: 400;
							font-size: 1.125rem;
						`}
					>
						{article.frontmatter.description || ''}
					</p>
				</article>
			))}
		</Fragment>
	)
}

const articlesListQuery = graphql`
	query {
		articles: allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
		) {
			nodes {
				excerpt
				frontmatter {
					date
					description
					slug
					title
					seo_title
					seo_description
					tags
				}
				id
			}
		}
	}
`

function StaticArticlesList() {
	return (
		<StaticQuery
			query={articlesListQuery}
			render={data => <ArticlesList data={data} />}
		/>
	)
}

export default StaticArticlesList
