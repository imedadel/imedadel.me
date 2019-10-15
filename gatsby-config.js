module.exports = {
	siteMetadata: {
		siteUrl: `https://imedadel.me`,
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `articles`,
				path: `${__dirname}/content/articles`,
			},
		},
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-133819882-3',
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "Imed Adel's Blog",
				short_name: 'Imed Adel',
				start_url: '/',
				background_color: '#fff0f5',
				theme_color: '#000',
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: 'standalone',
				icon: 'src/assets/icon.png', // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-netlify`,
		`gatsby-plugin-netlify-cache`,
	],
}
