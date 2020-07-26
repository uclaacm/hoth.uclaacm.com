import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TimeSlot from '../SchedulePage/TimeSlot';
import Divider from '@material-ui/core/Divider';
import workshopSchedule from '../../data/WorkshopSchedule';

const useStyles = makeStyles({
	title: {
		fontWeight: 'bold',
		paddingTop: 24,
		paddingBottom: 16
	}
});

const SchedulePage = () => {
	const classes = useStyles();
	return <Container maxWidth='md'>
		<Typography align='center' component='h1' variant='h4' className={classes.title}>Schedule</Typography>
		{workshopSchedule.map(timeslot => {
			return <>
				<Divider />
				<TimeSlot events={timeslot.events}
					time={timeslot.startTime} key={timeslot.startTime} />
			</>;
		})}
	</Container>;
};

export default SchedulePage;
