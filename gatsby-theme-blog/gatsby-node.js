const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
	if (node.internal.type !== 'Mdx') return

	const value = path.join('/', createFilePath({ node, getNode }))
	actions.createNodeField({
		name: 'slug',
		node,
		value: value
			.replace(/\\+/g, ``)
			.replace(/\/+/g, `/`)
			.replace(/\/$/, ``),
	})
}

exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
		{
			allMdx(sort: { fields: frontmatter___date, order: DESC }) {
				nodes {
					id
					timeToRead
					frontmatter {
						desc
					}
					fields {
						slug
					}
					headings {
						value
					}
					body
				}
			}
		}
	`)

	actions.createPage({
		path: `/blog`,
		component: require.resolve(`./src/templates/blog.js`),
		context: {
			nodes: data.allMdx.nodes,
		},
	})

	data.allMdx.nodes.forEach(node => {
		actions.createPage({
			path: node.fields.slug,
			component: require.resolve(`./src/templates/post.js`),
			context: {
				node,
			},
		})
	})
}
