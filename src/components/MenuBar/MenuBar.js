import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import useTheme from '@material-ui/core/styles/useTheme';
import Collapse from '@material-ui/core/Collapse';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { navigate } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';

import ButtonBar from './ButtonBar';
import { ReactComponent as HackLogo } from '../../images/hack-logo.svg';

const useStyles = makeStyles(theme => {
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
			marginRight: theme.spacing(1.5)
		},
		wordmark: {
			color: 'black',
			fontWeight: 700,
			fontSize: '1.5em',
			fontFamily: theme.typography.fontFamily
		},
		mobileMenuBar: {
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
	const theme = useTheme();
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(open => !open);
	const isMobile = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.sm * 1.3));

	const wordmark = useMediaQuery(theme.breakpoints.down('xs')) ? 'HOTH' : 'Hack on the Hill';

	const desktopMenuBar =
		<AppBar position="sticky">
			<Toolbar className={classes.toolbar} component='nav'>
				<div
					className={classes.logohome}
					onClick={() => navigate('/')}
				>
					<HackLogo className={classes.logo} />
					<Typography variant='h6' className={classes.wordmark} component='h1'>
						{wordmark}
					</Typography>
				</div>
				<div className={classes.desktopMenuBar}>
					<ButtonBar />
				</div>
			</Toolbar>
		</AppBar>;

	const mobileMenuBar =
		<>
			<AppBar position="sticky">
				<Toolbar className={classes.toolbar}>
					<div
						className={classes.logohome}
						onClick={() => navigate('/')}
					>
						<HackLogo className={classes.logo} />
						<Typography variant='h6' className={classes.wordmark} component='h1'>
							{wordmark}
						</Typography>
					</div>
					<IconButton onClick={toggleMenu} className={classes.menubtn}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<div className={classes.mobileMenuBar}>
				<Collapse in={menuOpen}>
					<div className={classes.mobileBtnContainer}>
						<ButtonBar isMobile />
					</div>
				</Collapse>
			</div>
		</>;

	return isMobile ? mobileMenuBar : desktopMenuBar;
}

MenuBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default MenuBar;
