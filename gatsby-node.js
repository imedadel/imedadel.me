const kebabCase = require('lodash.kebabcase')
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
						title
					}
				}
			}
		}
	`)

  console.log("TCL: exports.createPages -> data", data)
	data.allMdx.nodes.forEach(node => {
		actions.createPage({
			path: `/${kebabCase(node.frontmatter.title||node.id)}`,
			component: path.resolve(`./src/components/DefaultPageLayout.js`),
			context: {
				node
			}
		})
	})
}
