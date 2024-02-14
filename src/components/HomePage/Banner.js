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

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { getTimeZoneWithFormat } from '../../utils/timezone_names.js';

import {
	hothStart,
	hothEnd,
	applyDeadline,
	applicationOpen
} from '../constants.js';

// These dates are displayed in the user's timezone
const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });

const useStyles = makeStyles(theme => ({
	background: {
		backgroundColor: '#010101',
		height: 'auto',
		[theme.breakpoints.down('sm')]: {
			padding: '12px 2px'
		}
	},
	container: {
		position: 'relative',
		padding: '0px'
	},
	info: {
		position: 'absolute',
		right: '0px',
		zIndex: 1,
		maxWidth: '50%',
		[theme.breakpoints.down('sm')]: {
			position: 'relative',
			maxWidth: '100%'
		}
	},
	text: {
		color: 'white',
		fontWeight: 400,
		textAlign: 'right',
		justifyItems: 'left',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		}
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
	hothNumber: {
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
		paddingBottom: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			alignSelf: 'center'
		},

		color: 'white',
		fontWeight: 400,
		fontSize: '2.5em',
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
	},
	img: {
		position: 'relative',
		width: '110%',
		left: '-10%'
	},
	grid: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			alignItems: 'center'
		}
	}
}));

function Banner() {
	const classes = useStyles();
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hothXI-banner.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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

	function renderInfo() {
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
					HOTH <span className={classes.hothNumber}>XI</span>
				</Typography>

				<NoSsr>
					<Countdown
						date={hothStart}
						renderer={countdownRenderer}
					/>
				</NoSsr>

				<Typography variant='h5' className={classes.text} component='h3'
					style={{ fontWeight: 500, marginTop: 10 }}><b>Location:</b> Carnesale Commons, Palisades
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
							style={{ marginBottom: 10, fontWeight: 500 }}
							component='h3'
						>
							<time dateTime={hothStart.toISOString()} hidden>
								{month} {startDay}{endDayString}, 2024
							</time>
							<b>Date:</b> Sunday, March 3, 2024
						</Typography>
					</Tooltip>
				</Box>

				{Date.now() > applicationOpen.getTime() && Date.now() < applyDeadline.getTime() &&
					<Button className={classes.apply} href={'https://forms.gle/N7VHpwUMSkGLhBdd6'} target='_blank'>
						Apply Now
					</Button>
				}
			</>
		);
	}

	return (
		<div className={classes.background}>
			<Container maxWidth='md' className={classes.container}>
				<Box item sm={12} md={6} className={classes.info}>
					<Grid
						container
						direction='column'
						className={classes.grid}
					>
						{renderInfo()}
					</Grid>
				</Box>
				{smallScreen ?
					null :
					<Box display='flex' flexDirection='column' className={classes.img}>
						<Img fluid={data.placeholderImage.childImageSharp.fluid} />
					</Box>
				}
			</Container>
		</div>
	);
}

export default Banner;
