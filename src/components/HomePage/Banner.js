import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import Countdown from 'react-countdown';

import SvgImg from '../SvgImg';
import hothLogo from './hoth7-logo.svg';
import hothBanner from './hoth-banner.png';

const hothStart = new Date('2021-01-23T09:00:00-07:00');

const useStyles = makeStyles(theme => ({
	colon: {
		fontFamily: 'open-sans',
		color: 'white',
		fontWeight: 600,
		fontSize: theme.typography.fontSize * 3
	},
	container: {
		backgroundColor: theme.palette.primary.dark,
		height: 'auto',
		[theme.breakpoints.up('md')]: {
			backgroundImage: `url(${hothBanner})`,
			backgroundSize: '960px 327px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'right bottom'
		},
		padding: 25
	},
	countdown: {
		padding: 20
	},
	text: {
		color: 'white',
		fontWeight: 500
	},
	logo: {
		width: 150,
		margin: 20,
		[theme.breakpoints.down('sm')]: {
			width: 150
		}
	},
	time: {
		color: 'white',
		fontWeight: 600,
		fontSize: theme.typography.fontSize * 3
	},
	timeDesc: {
		color: 'white',
		fontWeight: 'semibold',
		fontSize: theme.typography.fontSize * 0.6
	}
}));

function renderInfo(classes) {
	return (
		<Grid
			container
			direction='column'
			justify='center'
			alignItems='center'
		>
			<Typography variant='h3' className={classes.text}>Hack on the Hill 7</Typography>
			<Typography variant='h5' className={classes.text}>Explore. Build. Empower.</Typography>
			<SvgImg src={hothLogo} className={classes.logo} width={258} height={250} />
			<Typography variant='h5' className={classes.text}>Feb 23rd, 2020</Typography>
			<Typography variant='h5' className={classes.text}>De Neve Plaza Room</Typography>
		</Grid>
	);
}

function Banner() {
	const classes = useStyles();
	const theme = useTheme();

	const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			return null;
		}

		return (
			<Box
				display='flex'
				flexDirection='row'
				justifyContent='center'
				className={classes.countdown}
			>
				<Box
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
				>
					<Box className={classes.time}>{days.toString().padStart(2, '0')}</Box>
					<Box className={classes.timeDesc}>days</Box>
				</Box>
				<Box className={classes.colon}>:</Box>
				<Box
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
				>
					<Box className={classes.time}>{hours.toString().padStart(2, '0')}</Box>
					<Box className={classes.timeDesc}>hours</Box>
				</Box>
				<Box className={classes.colon}>:</Box>
				<Box
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
				>
					<Box className={classes.time}>{minutes.toString().padStart(2, '0')}</Box>
					<Box className={classes.timeDesc}>minutes</Box>
				</Box>
				<Box className={classes.colon}>:</Box>
				<Box
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
				>
					<Box className={classes.time}>{seconds.toString().padStart(2, '0')}</Box>
					<Box className={classes.timeDesc}>seconds</Box>
				</Box>
			</Box>
		);
	};

	countdownRenderer.propTypes = {
		days: PropTypes.object.isRequired,
		hours: PropTypes.object.isRequired,
		minutes: PropTypes.object.isRequired,
		seconds: PropTypes.object.isRequired,
		completed: PropTypes.object.isRequired
	};

	return (
		<div className={classes.container}>
			<Container maxWidth='lg'>
				<Grid
					container
					direction='row'
					alignItems={theme.breakpoints.up('sm') ? 'flex-start' : 'center'}
				>
					<Grid
						item
						xs={12}
						md={6}
					>
						{renderInfo(classes)}
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Countdown
							date={hothStart}
							renderer={countdownRenderer}
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Banner;
