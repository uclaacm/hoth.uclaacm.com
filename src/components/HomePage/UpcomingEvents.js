import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
		justifyContent: 'center',
		minHeight: '100vh'
	},
	moreWorkshopsButton: {
		alignSelf: 'center',
		marginTop: '3.5em'
	},
	divider: {
		margin: '3.5em 0 3.5em 3em',
		height: '2px'
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
			timeSlot.events.forEach(event => {
				const eventFormat = {
					startTime: `${timeFormatter.format(timeSlot.startTime)} ${currentTimeZoneShort}`,
					...event
				};
				events.push(eventFormat);
			});
			eventsDisplayed += timeSlot.events.length;
		}
	}
	if (eventsDisplayed === 0) {
		return null; // Abort entirely
	}
	const renderEvents = eventsDisplayed === 0 ?
		null :
		events.map((event, index) => {
			return (
				<>
					<Event key={index} {...event} />
					{index === events.length - 1 ? null : <Divider variant='inset' className={classes.divider} />}
				</>
			);
		});

	return <Container maxWidth='md' className={classes.eventsContainer}>
		<Typography align='left' component='h1' variant='h4'
			className={classes.title}>Upcoming Workshops</Typography>
		{renderEvents}
		<Button component={Link} role='link' className={classes.moreWorkshopsButton}
			variant='outlined' to='/schedule'>More Workshops</Button>
	</Container>;
}

export default UpcomingEvents;
