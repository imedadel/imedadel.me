exports.createPages = ({ actions: { createPage } }) => {
	createPage({
		path: `/`,
		component: require.resolve(`./src/templates/index.js`),
		context: {},
	})
}
