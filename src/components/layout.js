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
import grey from '@material-ui/core/colors/grey';

import Footer from './Footer/Footer';
import MenuBar from './MenuBar/MenuBar';

const overwrittenTheme = responsiveFontSizes(createMuiTheme({
	palette: {
		primary: {
			main: '#C960FF',
			light: '#9C28C5',
			dark: '#31213E',
			contrastText: '#fff'
		},
		secondary: {
			main: '#FF477E',
			light: '#f05b84',
			dark: '#a52347',
			contrastText: '#fff'
		},
		background: {
			grey: grey[200]
		}
	},
	typography: {
		fontSize: 16,
		fontFamily: '"Poppins", sans-serif',
		body1: { fontFamily: '"Open Sans", sans-serif' },
		button: { fontFamily: '"Open Sans", sans-serif' }
	}
}));

const Layout = ({ children }) => {
	return (
		<MuiThemeProvider theme={overwrittenTheme}>
			<CssBaseline />
			<Helmet>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,700&display=swap" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"/>
			</Helmet>
			<MenuBar />
			<main>{children}</main>
			<Footer />
		</MuiThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
