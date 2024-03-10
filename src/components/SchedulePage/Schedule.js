import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import StickyTimeSlot from '../SchedulePage/StickyTimeSlot';
import eventSchedule from '../../data/eventSchedule';
import ComingSoon from '../ComingSoon/ComingSoon';
import { scheduleAvailableTime, hothEnd } from '../constants';

// When changing this, make sure to update src/components/HomePage/UpcomingEvents.js as well.
const scheduleAvailable = Date.now() > scheduleAvailableTime.getTime() && Date.now() < hothEnd.getTime();

const useStyles = makeStyles(theme => ({
	title: {
		fontWeight: theme.typography.fontWeightBold,
		paddingTop: theme.spacing(11),
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(4)
		},
		paddingBottom: theme.spacing(4)
	},
	note: {
		color: '#858585',
		marginBottom: theme.spacing(scheduleAvailable ? 4 : 11)
	},
	divider: {
		height: '2px',
		marginLeft: theme.spacing(4),
		marginRight: theme.spacing(4),
		marginBottom: theme.spacing(4)
	}
}));

const SchedulePage = () => {
	const classes = useStyles();
	return <Container maxWidth='md'>
		<Typography align='left' variant='h4' component='h1' className={classes.title}>
			Schedule
		</Typography>
		{!scheduleAvailable ?
			<ComingSoon alignment='left' /> :
			<List>
				{eventSchedule.map((timeslot, index) => {
					return (
						<React.Fragment key={timeslot.startTime}>
							<li>
								<StickyTimeSlot events={timeslot.events} time={timeslot.startTime} />
							</li>
							{index === eventSchedule.length - 1 ?
								null :
								<Divider component='li' className={classes.divider} />}
						</React.Fragment>);
				})}
			</List>}
	</Container>;
};

export default SchedulePage;
