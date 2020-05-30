/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './Footer/Footer';

const overwrittenTheme = responsiveFontSizes(createMuiTheme({
	palette: {
		primary: {
			main: '#C960FF',
			light: '#d37fff',
			dark: '#352A3A',
			contrastText: '#fff'
		},
		secondary: {
			main: '#ED3266',
			light: '#f05b84',
			dark: '#a52347',
			contrastText: '#fff'
		}
	},
	typography: {
		useNextVariants: true,
		fontSize: 16,
		fontFamily: '"Poppins", sans-serif',
		h1: { fontFamily: '"Palanquin Dark", sans-serif' },
		h2: { fontFamily: '"Palanquin Dark", sans-serif' },
		h3: { fontFamily: '"Palanquin Dark", sans-serif' },
		h4: { fontFamily: '"Palanquin Dark", sans-serif' },
		h5: { fontFamily: '"Palanquin Dark", sans-serif' },
		h6: { fontFamily: '"Palanquin Dark", sans-serif' },
		subtitle1: { fontFamily: '"Palanquin Dark", sans-serif' },
		body1: { fontFamily: '"Chivo", sans-serif' },
		button: { fontFamily: '"Chivo", sans-serif' }
	}
}));

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

	return (
		<MuiThemeProvider theme={overwrittenTheme}>
			<CssBaseline />
			<Helmet>
				<link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css?family=Chivo:300,400|Palanquin+Dark|Palanquin" rel="stylesheet"/>
			</Helmet>
			<Header siteTitle={data.site.siteMetadata.title} />
			<main>{children}</main>
			<Footer/>
		</MuiThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
