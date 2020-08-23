import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Link } from 'gatsby';
import workshopSchedule from '../../data/WorkshopSchedule';
import Event from './Event';
import { currentTimeZoneShort } from '../../utils/timezone_names.js';

const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' });


const useStyles = makeStyles(theme => ({
	title: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		padding: '1.2em 0'
	},
	eventsContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	moreWorkshopsButton: {
		alignSelf: 'center',
		marginTop: '4em'
	},
	divider: {
		height: '2px',
		margin: theme.spacing(4),
		[theme.breakpoints.up('sm')]: {
			margin: theme.spacing(7)
		}
	}
}));

function UpcomingEvents() {
	const classes = useStyles();
	const currentTime = new Date();
	let eventsDisplayed = 0;
	const numEventsToDisplay = 2;

	const events = [];
	// Assumes workshopSchedule is ordered by time
	for (let i = 0; i < workshopSchedule.length && eventsDisplayed < numEventsToDisplay; i++) {
		const timeSlot = workshopSchedule[i];
		if (currentTime < timeSlot.startTime) {
			for (const event of timeSlot.events) {
				events.push({
					startTime: `${timeFormatter.format(timeSlot.startTime)} ${currentTimeZoneShort}`,
					...event
				});
				eventsDisplayed += timeSlot.events.length;
			}
		}
	}

	if (eventsDisplayed === 0) {
		return null; // Abort entirely
	}

	const renderEvents = events.map((event, index) => {
		return (
			<>
				<Event key={index} {...event} />
				{index === events.length - 1 ? null : <Divider className={classes.divider} />}
			</>
		);
	});

	return <Box component="section" paddingY={{ xs: 8, md: 10 }} bgcolor='background.grey'>
		<Container maxWidth='md' className={classes.eventsContainer}>
			<Typography component='h2' variant='h4'
				className={classes.title}>Upcoming Workshops</Typography>
			{renderEvents}
			<Button component={Link} role='link' className={classes.moreWorkshopsButton}
				variant='contained' disableElevation color="secondary" to='/schedule'>More Workshops</Button>
		</Container>
	</Box>;
}

export default UpcomingEvents;
