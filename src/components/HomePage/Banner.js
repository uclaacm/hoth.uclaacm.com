import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';

import SvgImg from '../SvgImg';
import hothLogo from '../../images/hoth7-logo.svg';
import hothBanner from '../../images/hoth-banner.svg';

const hothStart = new Date('2021-02-23T09:00:00-07:00');

const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: theme.palette.primary.dark,
		height: 'auto',
		[theme.breakpoints.up('md')]: {
			backgroundImage: `url(${hothBanner})`,
			backgroundSize: '545px 329px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'right bottom'
		},
		padding: 25
	},
	text: {
		color: 'white',
		fontWeight: 600,
		fontFamily: theme.typography.fontFamily,
		textAlign: 'center'
	},
	logo: {
		width: 150,
		margin: 20,
		[theme.breakpoints.down('sm')]: {
			width: 150
		}
	},
	timer: {
		color: 'white',
		fontWeight: 600,
		fontSize: '4em',
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			fontSize: '2em'
		}
	},
	timeDesc: {
		'&::after': {
			content: 'attr(data-field)',
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
			<Typography variant='h3' className={classes.text} component='h2' style={{ fontSize: '3em' }}>
				Hack on the Hill 7
			</Typography>
			<Typography variant='h5' className={classes.text} component='h3'>Explore. Build. Empower.</Typography>
			<SvgImg src={hothLogo} className={classes.logo} width={258} height={250} />
			<Typography variant='h5' className={classes.text} component='h3'>Feb 23<sup>rd</sup>, 2021</Typography>
			<Typography variant='h5' className={classes.text} component='h3'>De Neve Plaza Room</Typography>
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
			<>
				<Box
					display='flex'
					flexDirection='row'
					justifyContent='center'
					className={classes.timer}
				>
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						data-field={days === 1 ? 'day' : 'days'}
						className={classes.timeDesc}
					>
						{days.toString().padStart(2, '0')}
					</Box>
					:
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						data-field={hours === 1 ? 'hour' : 'hours'}
						className={classes.timeDesc}
					>
						{hours.toString().padStart(2, '0')}
					</Box>
					:
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						data-field={minutes === 1 ? 'minute' : 'minutes'}
						className={classes.timeDesc}
					>
						{minutes.toString().padStart(2, '0')}
					</Box>
					:
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						data-field={seconds === 1 ? 'second' : 'seconds'}
						className={classes.timeDesc}
					>
						{seconds.toString().padStart(2, '0')}
					</Box>
				</Box>
			</>
		);
	};

	countdownRenderer.propTypes = {
		days: PropTypes.number.isRequired,
		hours: PropTypes.number.isRequired,
		minutes: PropTypes.number.isRequired,
		seconds: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired
	};

	const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<div className={classes.container}>
			<Container maxWidth='lg'>
				<Grid
					container
					direction={smallScreen ? 'column' : 'row' }
					alignItems={smallScreen ? 'center' : 'flex-start'}
				>
					<Grid item sm={12} md={6}>
						{renderInfo(classes)}
					</Grid>
					<Grid item sm={12} md={6}>
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
