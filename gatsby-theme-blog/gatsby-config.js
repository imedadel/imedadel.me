const path = require('path')

module.exports = {
	siteMetadata: {
		title: "Imed Adel's Blog",
		description: 'The personal blog of Imed Adel',
		author: 'Imed Adel',
		siteUrl: 'http:s://imedadel.me',
	},
	plugins: [
		'gatsby-theme-interface',
		'gatsby-theme-seo',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				defaultLayouts: {
					default: require.resolve('./src/templates/post.js'),
				},
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							inlineCodeMarker: '÷',
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: path.resolve('content/blog'),
			},
		},
	],
}

console.log(path.resolve('content/blog'))
