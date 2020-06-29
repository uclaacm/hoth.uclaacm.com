import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TimeSlot from '../SchedulePage/TimeSlot';
import Grid from '@material-ui/core/Grid';
const workshopSchedule = require('../../data/WorkshopSchedule');

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
	}
}));

const UpcomingEvents = () => {
	const classes = useStyles();
	const currentTime = new Date();
	const nextTimeSlot = workshopSchedule.reduce((closestTimeSlot, timeSlot) => {
		if (closestTimeSlot.startTime > currentTime && closestTimeSlot.startTime < timeSlot.startTime) {
			return timeSlot;
		}
		return closestTimeSlot;
	}, workshopSchedule[0]);
	return <Container maxWidth='md' className={classes.eventsContainer}>
		<Grid container justify='center' spacing={1}>
			<Grid item md={11}>
				<Typography align='center' component='h1' variant='h4'
					className={classes.title}>Upcoming Workshops</Typography>
				<TimeSlot events={nextTimeSlot.events}
					time={nextTimeSlot.startTime} key={nextTimeSlot.startTime} />
			</Grid>
		</Grid>
	</Container>;
};

export default UpcomingEvents;
