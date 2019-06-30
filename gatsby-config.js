module.exports = {
	siteMetadata: {
		title: 'Imed Adel',
		author: 'Imed Adel',
		description: 'Personal website of Imed Adel.',
		siteUrl: 'https://imedadel.me',
		social: {
			twitter: '@Imed_Adel',
			github: 'ImedAdel',
			linkedin: 'imedadel',
		},
	},
	plugins: [
        `gatsby-plugin-sharp`,
		{
			resolve: `gatsby-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
                            maxWidth: 960,
                            quality: 80,
                            withWebp: true,
						},
                    },
                    {
                        resolve: "gatsby-remark-smartypants",
                        options: {
                          dashes: "oldschool",
                        },
                      },
                ],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `articles`,
				path: `${__dirname}/content/articles/`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Imed Adel',
				short_name: 'Imed Adel',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#000',
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: 'standalone',
				icon: 'src/assets/icon.png', // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify`,
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
}
