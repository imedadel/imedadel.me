const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
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
					html
				}
			}
		}
	`)

	data.articles.nodes.forEach(node => {
		actions.createPage({
			path: node.frontmatter.slug,
			component: path.resolve(`./src/templates/Article.js`),
			context: {
				node,
			},
		})
	})
}
