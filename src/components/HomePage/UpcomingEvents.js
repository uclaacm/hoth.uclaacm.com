import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Link } from 'gatsby';
import eventSchedule from '../../data/eventSchedule';
import Event from './Event';
import NoSsr from '@material-ui/core/NoSsr';

// Schedule will be available on the homepage the day before HOTH
const scheduleAvailableTime = new Date('2022-02-25T00:00:00-08:00');
const scheduleAvailable = Date.now() > scheduleAvailableTime.getTime();

const timeFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'long', day: 'numeric',
	hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
});

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

	if (!scheduleAvailable) {
		return null;
	}

	const events = [];
	// Assumes eventSchedule is ordered by time
	for (let i = 0; i < eventSchedule.length && eventsDisplayed < numEventsToDisplay; i++) {
		const timeSlot = eventSchedule[i];
		if (currentTime < timeSlot.startTime) {
			for (const event of timeSlot.events) {
				events.push({
					startTime: timeFormatter.format(timeSlot.startTime),
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
			<React.Fragment key={index} >
				<Event
					name={event.name}
					subtitles={[event.startTime, event.duration, event.location]}
					description={event.description}
				/>
				{index === events.length - 1 ? null : <Divider className={classes.divider} />}
			</React.Fragment>
		);
	});

	return <NoSsr>
		<Box component="section" paddingY={{ xs: 8, md: 10 }} bgcolor='background.grey'>
			<Container maxWidth='md' className={classes.eventsContainer}>
				<Typography component='h2' variant='h4'
					className={classes.title}>Upcoming Events</Typography>
				{renderEvents}
				<Button component={Link} role='link' className={classes.moreWorkshopsButton}
					variant='contained' disableElevation color="secondary" to='/schedule'>See More</Button>
			</Container>
		</Box>
	</NoSsr>;
}

export default UpcomingEvents;
