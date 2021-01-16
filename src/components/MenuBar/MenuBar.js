import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import useTheme from '@material-ui/core/styles/useTheme';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { navigate } from 'gatsby';

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
			fontSize: '1.5em'
		},
		mobileMenuBar: {
			boxShadow: theme.shadows[4],
			position: 'fixed',
			zIndex: '10',
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

	const wordmark = useMediaQuery(theme.breakpoints.down('xs')) ? 'HOTH' : 'Hack off the Hill';

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
					<IconButton onClick={toggleMenu} className={classes.menubtn}
						aria-expanded={String(menuOpen)}
						aria-controls='menubar-collapse'
						aria-label='Show navigation bar'
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Collapse in={menuOpen} className={classes.mobileMenuBar} id='menubar-collapse'>
				<div className={classes.mobileBtnContainer}>
					<ButtonBar isMobile />
				</div>
			</Collapse>
		</>;

	return isMobile ? mobileMenuBar : desktopMenuBar;
}

export default MenuBar;
