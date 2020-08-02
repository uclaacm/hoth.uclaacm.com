import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import StickyTimeSlot from '../SchedulePage/StickyTimeSlot';
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
		<List>
			{workshopSchedule.map(timeslot => {
				return (
					<React.Fragment key={timeslot.startTime}>
						<Divider component='li' />
						<li>
							<StickyTimeSlot events={timeslot.events} time={timeslot.startTime} />
						</li>
					</React.Fragment>);
			})}
		</List>
	</Container>;
};

export default SchedulePage;
