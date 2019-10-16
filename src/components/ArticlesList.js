/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
import { StaticQuery, graphql, Link } from 'gatsby'

function ArticlesList({ data }) {
	return (
		<Fragment>
			{data.articles.nodes.map(article => (
				<article key={article.id}>
					<h3>
						<Link to={article.frontmatter.slug}>
							{article.frontmatter.title}
						</Link>
					</h3>
					<p
						css={css`
							font-weight: 400;
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
