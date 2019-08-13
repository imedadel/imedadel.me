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
	],
}
