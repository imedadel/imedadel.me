const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
	const {data} = await graphql(`
		 {
			allMdx {
				nodes {
					id
					code {
						body
					}
					timeToRead
					frontmatter {
						slug
					}
				}
			}
		}
	`)

	data.allMdx.nodes.forEach(node => {
		actions.createPage({
			path: `/${node.frontmatter.slug}`,
			component: path.resolve(`./src/components/DefaultPageLayout.js`),
			context: {
				node
			}
		})
	})
}
