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

import SvgImg from '../SvgImg';
import hothBanner from '../../images/web-banner.svg';
import { getTimeZoneWithFormat } from '../../utils/timezone_names.js';

import {
	hothStart,
	hothEnd,
	applyDeadline
} from '../constants.js';

// These dates are displayed in the user's timezone
const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });

const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: theme.palette.primary.dark,
		height: 'auto',
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
		width: 'auto',
		color: '#C960FF',
		textAlign: 'left',
		justifyItems: 'left',
		fontWeight: 400,
		margin: '10px 0px',
		padding: '4px 1.5em',
		maxWidth: 'fit-content',
		border: '2px solid #C960FF',
		'&:hover': {
			color: '#FFFFFF',
			background: '#DB99FD'
		},
		[theme.breakpoints.down('sm')]: {
			maxWidth: '100%'
		}
	},
	eight: {
		background: 'linear-gradient(199.69deg, #FF5F96 21.64%, #BD01FF 72.25%)',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	},
	timer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'baseline',
		alignSelf: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			alignSelf: 'flex-start'
		},

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
	const month = monthFormatter.format(hothStart);
	const startDay = hothStart.getDate();
	const endDay = hothEnd.getDate();
	const eventCrossesDate = startDay !== endDay;
	const endDayString = eventCrossesDate ? `–${endDay}` : '';
	return (
		<>
			<Typography component='h1' variant='h1' className={classes.text} style={{
				fontWeight: 'bold'
			}}>
				HOTH <span className={classes.eight}>8</span>
			</Typography>

			<Typography variant='h5' className={classes.text} component='h3'
				style={{ fontWeight: 500 }}>Explore. Build. Empower.
			</Typography>

			<Box display='flex' alignItems='left' color='white'>
				<Tooltip
					title={`This date range is displayed in your timezone! (${tz})`}
					placement='top'
					arrow={true}
				>
					<Typography
						variant='h5'
						className={classes.text}
						style={{ marginTop: 40 }}
						component='h3'
					>
						<time dateTime={hothStart.toISOString()}>
							{month} {startDay}{endDayString}, 2021
						</time> | Virtual
					</Typography>
				</Tooltip>
			</Box>
			{Date.now() < applyDeadline.getTime() &&
				<Button className={classes.apply} href={'https://forms.gle/7uokDycPQfU9B5oj8'} target='_blank'>
					Apply Now
				</Button>
			}
		</>
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
			<Container maxWidth='md'>
				<Grid
					container
					direction={smallScreen ? 'column' : 'row' }
					alignItems='center'
				>
					<Grid item sm={12} md={6}>
						<Grid
							container
							direction='column'
							justify='left'
							alignItems='left'
						>
							{renderInfo(classes)}
							{smallScreen ?
								<NoSsr>
									<Countdown
										date={hothStart}
										renderer={countdownRenderer}
									/>
								</NoSsr> :
								null}
						</Grid>
					</Grid>
					{smallScreen ?
						null :
						<Grid item sm={12} md={6}>
							<Box display='flex' flexDirection='column'>
								<SvgImg src={hothBanner} className={classes.logo} width={936} height={581} />
								<NoSsr>
									<Countdown
										date={hothStart}
										renderer={countdownRenderer}
									/>
								</NoSsr>
							</Box>
						</Grid>
					}
				</Grid>
			</Container>
		</div>
	);
}

export default Banner;
