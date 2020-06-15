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
	colon: {
		color: 'white',
		fontWeight: 600,
		fontSize: '1.9em'
	},
	timeDesc: {
		color: 'white',
		fontWeight: 600,
		fontSize: '1.9em',
		'&::after': {
			color: 'white',
			content: 'attr(dataField)',
			fontWeight: 400,
			fontSize: '0.23em'
		}
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
			<Typography variant='h5' className={classes.text}>Feb 23<sup>rd</sup>, 2021</Typography>
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
			<Container>
				<Box
					display='flex'
					flexDirection='row'
					justifyContent='center'
					className={classes.colon}
				>
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						dataField={days === 1 ? 'day' : 'days'}
						className={classes.timeDesc}
					>
						{days.toString().padStart(2, '0')}
					</Box>
					<Box className={classes.colon}>:</Box>
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						dataField={hours === 1 ? 'hour' : 'hours'}
						className={classes.timeDesc}
					>
						{hours.toString().padStart(2, '0')}
					</Box>
					<Box className={classes.colon}>:</Box>
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						dataField={minutes === 1 ? 'minute' : 'minutes'}
						className={classes.timeDesc}
					>
						{minutes.toString().padStart(2, '0')}
					</Box>
					<Box className={classes.colon}>:</Box>
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						dataField={seconds === 1 ? 'second' : 'seconds'}
						className={classes.timeDesc}
					>
						{seconds.toString().padStart(2, '0')}
					</Box>
				</Box>
			</Container>
		);
	};

	countdownRenderer.propTypes = {
		days: PropTypes.number.isRequired,
		hours: PropTypes.number.isRequired,
		minutes: PropTypes.number.isRequired,
		seconds: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired
	};

	return (
		<div className={classes.container}>
			<Container maxWidth='lg'>
				<Grid
					container
					direction='row'
					alignItems={theme.breakpoints.up('sm') ? 'flex-start' : 'center'}
				>
					<Grid item xs={12} md={6}>
						{renderInfo(classes)}
					</Grid>
					<Grid item xs={12} md={6}>
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
