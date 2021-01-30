import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NoSsr from '@material-ui/core/NoSsr';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Countdown from 'react-countdown';
import Button from '@material-ui/core/Button';

import hothBanner from '../../images/web-banner.svg';
import hothTitle from '../../images/hoth8-title.svg';
import { getTimeZoneWithFormat } from '../../utils/timezone_names.js';

// These dates are represented in the user's timezone
const hothStart = new Date('2021-02-05T08:00:00-08:00');
const hothEnd = new Date('2021-02-07T21:00:00-08:00');
const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });

const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: theme.palette.primary.dark,
		height: 'auto',
		[theme.breakpoints.up('md')]: {
			backgroundImage: `url(${hothBanner})`,
			backgroundSize: '1200px 500px',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '20% top'
		},
		padding: 25,
		[theme.breakpoints.down('sm')]: {
			padding: '12px 2px'
		}
	},
	text: {
		color: 'white',
		fontWeight: 400,
		textAlign: 'left',
		justifyItems: 'left'
	},
	apply: {
		width: '30%',
		color: '#C960FF',
		textAlign: 'left',
		justifyItems: 'left',
		fontWeight: 400,
		margin: 10,
		border: '2px solid #C960FF',
		'&:hover': {
			color: '#FFFFFF',
			background: '#DB99FD'
		}
	},
	timer: {
		paddingTop: 350,
		paddingLeft: 430,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'baseline',

		color: 'white',
		fontWeight: 400,
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
	const tz = getTimeZoneWithFormat(hothStart, 'short');
	//const month = monthFormatter.format(hothStart);
	const startDay = hothStart.getDate();
	const endDay = hothEnd.getDate();
	const eventCrossesDate = startDay !== endDay;
	//const endDayString = eventCrossesDate ? `–${endDay}` : '';
	return (
		<Grid
			container
			direction='column'
			justify='left'
			alignItems='left'
		>
			<img src = {hothTitle}
			style={{ paddingLeft: 50, paddingBottom: 20, width: '80%' }}
			/>

			<Typography variant='h5' className={classes.text} component='h3'
			style={{ paddingLeft: 57, fontWeight: 500 }}>Explore. Build. Empower.
			</Typography>

			<Box display='flex' alignItems='left' color='white'>
				<Tooltip title={eventCrossesDate ?
					`It looks like HOTH crosses between dates in your timezone! (${tz})` :
					''}
				placement='top'
				arrow={true}>
					<Typography variant='h5' className={classes.text} style={{ paddingLeft: 57, paddingTop: 40 }} component='h3'>
							February 5 - 7, 2021 | Virtual
					</Typography>
				</Tooltip>
			</Box>
			<Box style={{ paddingLeft: 48, paddingTop: 5 }}>
				<Button className={classes.apply} href={'https://forms.gle/7uokDycPQfU9B5oj8'} target='_blank'>
					Apply Now
				</Button>
			</Box>
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
						<NoSsr>
							<Countdown
								date={hothStart}
								renderer={countdownRenderer}
							/>
						</NoSsr>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Banner;
