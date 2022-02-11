module.exports = {
	siteMetadata: {
		title: 'Hack on the Hill',
		description: `
			Hack on the Hill (HOTH) is a 12-hour, beginner-friendly hackathon
			designed to give beginners a glimpse into what a real hackathon would be
			and feel like.
		`,
		author: 'ACM Hack at UCLA'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-sharp',
			options: {
				defaultQuality: 96
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			/* eslint-disable camelcase */
			options: {
				name: 'Hack on the Hill',
				short_name: 'HOTH',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#c960ff',
				display: 'minimal-ui',
				icon: 'src/images/hoth9-logo.svg' // This path is relative to the root of the site.
			}
			/* eslint-enable camelcase */
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
		'gatsby-plugin-material-ui',
		'gatsby-plugin-acmhack-svgr'
	]
};
