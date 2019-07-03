module.exports = {
	siteMetadata: {
		title: "Imed Adel",
		author: "Imed Adel",
		description: "Personal website of Imed Adel.",
		siteUrl: "https://imedadel.me",
		social: {
			twitter: "@Imed_Adel",
			github: "ImedAdel",
			linkedin: "imedadel",
		},
	},
	plugins: [
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
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
					{
						resolve: "gatsby-remark-prismjs",
						options: {
							inlineCodeMarker: "÷",
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
				name: "Imed Adel",
				short_name: "Imed Adel",
				start_url: "/",
				background_color: "#fff",
				theme_color: "#000",
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: "standalone",
				icon: "src/assets/icon.png", // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-133819882-3",
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				// head: false,
				// Setting this parameter is optional
				// anonymize: true,
				// Setting this parameter is also optional
				// respectDNT: true,
				// Avoids sending pageview hits from custom paths
				// exclude: ["/preview/**", "/do-not-track/me/too/"],
				// Enables Google Optimize using your container Id
				// optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
				// Enables Google Optimize Experiment ID
				// experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
				// Set Variation ID. 0 for original 1,2,3....
				// variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
				// Any additional create only fields (optional)
				// sampleRate: 5,
				// siteSpeedSampleRate: 10,
				// cookieDomain: "example.com",
			},
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify`,
		`gatsby-plugin-netlify-cache`,
		"gatsby-plugin-offline",
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
}
