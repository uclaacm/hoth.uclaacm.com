import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import Tooltip from '@material-ui/core/Tooltip';
import { currentTimeZoneShort } from '../SchedulePage/timezone_names.js';

import SvgImg from '../SvgImg';
import hothLogo from '../../images/hoth7-logo.svg';
import hothBanner from '../../images/hoth-banner.svg';

// These dates are represented in the user's timezone
const hothStart = new Date('2021-02-23T09:00:00-07:00');
const hothEnd = new Date('2021-02-23T21:00:00-07:00');
const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });

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
		padding: 25,
		[theme.breakpoints.down('sm')]: {
			padding: '12px 2px'
		}
	},
	text: {
		color: 'white',
		fontWeight: 600,
		textAlign: 'center'
	},
	timer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'baseline',

		color: 'white',
		fontWeight: 600,
		fontSize: '3em',
		[theme.breakpoints.down('xs')]: {
			fontSize: '2.3rem'
		},

		// Numbers
		'&>:nth-child(odd)': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			textAlign: 'center',

			'&::after': {
				content: 'attr(data-field)',
				fontWeight: 400,
				fontSize: '0.9rem',
				// The browser generally leaves space for any descenders in the text.
				// Numbers in Poppins don't have descenders though, so we recover some
				// extraneous spacing.
				marginTop: '-0.5em'
			}
		},

		// Colons
		'&>:nth-child(even)': {
			padding: '0 6px'
		}
	}
}));

function renderInfo(classes) {
	const tz = currentTimeZoneShort;
	const month = monthFormatter.format(hothStart);
	const startDay = hothStart.getDate();
	const endDay = hothEnd.getDate();
	const eventCrossesDate = startDay !== endDay;
	const endDayString = eventCrossesDate ? `–${endDay}` : '';
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
			<SvgImg src={hothLogo} className={classes.logo} width={258} height={250}
				style={{
					width: 150,
					margin: 20
				}} />
			<Box display='flex' alignItems='center' color='white'>
				<Tooltip title={eventCrossesDate ?
					`It looks like HOTH crosses between dates in your timezone! (${tz})` :
					''}
				placement='top'
				arrow={true}>
					<Typography variant='h5' className={classes.text} component='h3'>
						<time dateTime={hothStart.toISOString()}>
							{month} {startDay}{endDayString}, 2021
						</time>
					</Typography>
				</Tooltip>
			</Box>
			<Typography variant='h5' className={classes.text} component='h3'>De Neve Plaza Room</Typography>
		</Grid>
	);
}

function Banner() {
	const classes = useStyles();
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			return null;
		}

		return (
			<Box className={classes.timer} role='timer'>
				<Box data-field={days === 1 ? 'day' : 'days'}>
					{days.toString().padStart(2, '0')}
				</Box>
				<Box>:</Box>
				<Box data-field={hours === 1 ? 'hour' : 'hours'}>
					{hours.toString().padStart(2, '0')}
				</Box>
				<Box>:</Box>
				<Box data-field={minutes === 1 ? 'minute' : 'minutes'}>
					{minutes.toString().padStart(2, '0')}
				</Box>
				<Box>:</Box>
				<Box data-field={seconds === 1 ? 'second' : 'seconds'}>
					{seconds.toString().padStart(2, '0')}
				</Box>
			</Box>
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
