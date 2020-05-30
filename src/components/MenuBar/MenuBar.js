import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Collapse } from '@material-ui/core';
import { navigate } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';

import ButtonBar from './ButtonBar';

const useStyles = makeStyles(theme => {
	/**
	 * This is the limit of the screensize where the MenuBar
	 * should switch between desktop and mobile.
	 */
	const menuBarAdaptiveThreshold = theme.breakpoints.values.sm * 1.3;
	return {
		logohome: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer'
		},
		toolbar: {
			backgroundColor: 'white',
			justifyContent: 'space-between',
			padding: '0% 6%'
		},
		logo: {
			height: '1.8rem',
			marginRight: theme.spacing(1)
		},
		wordmark: {
			height: '1.2rem'
		},
		menubtn: {
			// desktop
			display: 'none',
			[theme.breakpoints.down(menuBarAdaptiveThreshold)]: {
				// mobile
				display: 'inline'
			}
		},
		desktopMenuBar: {
			// desktop
			display: 'inline',
			[theme.breakpoints.down(menuBarAdaptiveThreshold)]: {
				// mobile
				display: 'none'
			}
		},
		mobileMenuBar: {
			// desktop
			display: 'none',
			[theme.breakpoints.down(menuBarAdaptiveThreshold)]: {
				// mobile
				display: 'inline'
			},
			// default styling
			boxShadow: theme.shadows[4],
			position: 'fixed',
			zIndex: '1',
			overflow: 'hidden',
			backgroundColor: theme.palette.grey[100],
			width: '100%'
		},
		mobileBtnContainer: {
			display: 'flex',
			flexDirection: 'column',
			padding: '3%'
		}
	};
});

function MenuBar() {
	const classes = useStyles();
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(open => !open);

	return (
		<>
			<AppBar position="sticky">
				<Toolbar className={classes.toolbar}>
					<div
						className={classes.logohome}
						onClick={() => navigate('/')}
					>
						ACM Hack
						{/* TODO: Replace with Logo and Wordmark */}
					</div>
					{/* Desktop menu Bar */}
					<div className={classes.desktopMenuBar}>
						<ButtonBar />
					</div>
					{/* This button only shows on mobile */}
					<IconButton onClick={toggleMenu} className={classes.menubtn}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			{/* Mobile menu Bar */}
			<div className={classes.mobileMenuBar}>
				<Collapse in={menuOpen}>
					<div className={classes.mobileBtnContainer}>
						<ButtonBar isMobile />
					</div>
				</Collapse>
			</div>

		</>
	);
}

MenuBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default MenuBar;
