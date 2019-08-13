module.exports = {
	plugins: [
		`gatsby-theme-blog`,
		`gatsby-theme-homepage`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-133819882-3',
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
	],
}
