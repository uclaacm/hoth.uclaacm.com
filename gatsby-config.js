module.exports = {
	siteMetadata: {
		title: `Hoth Website`,
		description: `Hack on the Hill`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`, //eslint-disable-line
				start_url: `/`, //eslint-disable-line
				background_color: `#663399`, //eslint-disable-line
				theme_color: `#663399`, //eslint-disable-line
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		`gatsby-plugin-material-ui`
	]
};
