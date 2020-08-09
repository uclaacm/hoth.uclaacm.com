import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import workshopSchedule from '../../data/WorkshopSchedule';
import TimeSlot from './TimeSlot';

const useStyles = makeStyles(theme => ({
	title: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		paddingTop: '24px',
		paddingBottom: '16px'
	},
	eventsContainer: {
		paddingTop: '16px',
		paddingBottom: '24px'
	},
	moreWorkshopsButton: {
		marginTop: '8px'
	}
}));

function UpcomingEvents() {
	const classes = useStyles();
	const currentTime = new Date();
	let eventsDisplayed = 0;
	const numEventsToDisplay = 2;
	const timeSlots = [];
	// Assumes workshopSchedule is ordered by time
	for (let i = 0; i < workshopSchedule.length && eventsDisplayed < numEventsToDisplay; i++) {
		const workshop = workshopSchedule[i];
		if (currentTime < workshop.startTime) {
			timeSlots.push(workshop);
			eventsDisplayed += workshop.events.length;
		}
	}
	if (eventsDisplayed === 0) {
		return null; // Abort entirely
	}
	return <Container maxWidth='md' className={classes.eventsContainer}>
		<Grid container justify='center' spacing={1}>
			<Typography align='center' component='h1' variant='h4'
				className={classes.title}>Upcoming Workshops</Typography>
			{timeSlots.map(timeslot => {
				return <TimeSlot key={timeslot.startTime} time={timeslot.startTime} events={timeslot.events} />;
			})}
			<Button component={Link} role='link' className={classes.moreWorkshopsButton}
				variant='outlined' to='/schedule'>More Workshops</Button>
		</Grid>
	</Container>;
}

export default UpcomingEvents;
